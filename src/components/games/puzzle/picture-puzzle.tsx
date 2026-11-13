"use client";

import {useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent} from "react";
import {ArrowCounterClockwise, Eye, EyeSlash, ImageSquare, Trophy} from "@phosphor-icons/react/ssr";
import {Button} from "@/components/ui/button";
import {photos, scenePosition} from "@/data/assets";
import {isSolved, neighbors, shuffleTiles, slideTile, solvedTiles, type PuzzleSize} from "./puzzle-logic";

type Score = {seconds: number; moves: number};
type Scores = Record<PuzzleSize, Score | null>;
type GameStatus = "ready" | "playing" | "won";
const STORAGE_PREFIX = "baste-picture-puzzle-best-v1-";
const PHOTO = photos[5]; // Reuse the owner's Polaroid of two dogs; no duplicate or generated artwork.
const PHOTO_ASPECT = 4 / 3; // The source AVIF is 240 x 320; cover-crop it without stretching.

function formatTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
function better(next: Score, current: Score | null) {
  return !current || next.seconds < current.seconds ||
    (next.seconds === current.seconds && next.moves < current.moves);
}

export function PicturePuzzle() {
  const [size, setSize] = useState<PuzzleSize>(3);
  const [tiles, setTiles] = useState<number[]>(solvedTiles(3));
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<GameStatus>("ready");
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [peeking, setPeeking] = useState(false);
  const [bests, setBests] = useState<Scores>({3: null, 4: null});
  const startedAt = useRef<number | null>(null);

  useEffect(() => {
    setTiles(shuffleTiles(3));
    setReady(true);
    const loaded: Scores = {3: null, 4: null};
    for (const mode of [3, 4] as const) {
      try {
        const raw = localStorage.getItem(STORAGE_PREFIX + mode);
        if (!raw) continue;
        const score: unknown = JSON.parse(raw);
        if (score && typeof score === "object" &&
          "seconds" in score && "moves" in score &&
          typeof score.seconds === "number" && Number.isInteger(score.seconds) && score.seconds >= 0 &&
          typeof score.moves === "number" && Number.isInteger(score.moves) && score.moves > 0) {
          loaded[mode] = {seconds: score.seconds, moves: score.moves};
        }
      } catch {
        // Private browsing or corrupted scores never block the game.
      }
    }
    setBests(loaded);
  }, []);

  useEffect(() => {
    if (status !== "playing") return;
    const tick = () => {
      if (startedAt.current !== null) setSeconds(Math.floor((Date.now() - startedAt.current) / 1000));
    };
    tick();
    const interval = window.setInterval(tick, 250);
    return () => window.clearInterval(interval);
  }, [status]);

  const newGame = useCallback((nextSize: PuzzleSize) => {
    setSize(nextSize);
    setTiles(shuffleTiles(nextSize));
    setMoves(0);
    setSeconds(0);
    setStatus("ready");
    setPeeking(false);
    startedAt.current = null;
    setReady(true);
  }, []);

  const move = useCallback((index: number) => {
    if (!ready || peeking || status === "won") return;
    const result = slideTile(tiles, index, size);
    if (!result) return;
    const now = Date.now();
    if (startedAt.current === null) startedAt.current = now;
    const nextMoves = moves + 1;
    setTiles(result);
    setMoves(nextMoves);
    if (isSolved(result)) {
      const score = {seconds: Math.floor((now - startedAt.current) / 1000), moves: nextMoves};
      setSeconds(score.seconds);
      setStatus("won");
      if (better(score, bests[size])) {
        setBests(previous => ({...previous, [size]: score}));
        try { localStorage.setItem(STORAGE_PREFIX + size, JSON.stringify(score)); } catch {}
      }
    } else {
      setStatus("playing");
    }
  }, [bests, moves, peeking, ready, size, status, tiles]);

  const keyboardMove = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    event.stopPropagation();
    const blank = tiles.indexOf(0);
    const row = Math.floor(blank / size);
    const col = blank % size;
    const next =
      event.key === "ArrowUp" && row > 0 ? blank - size :
      event.key === "ArrowDown" && row < size - 1 ? blank + size :
      event.key === "ArrowLeft" && col > 0 ? blank - 1 :
      event.key === "ArrowRight" && col < size - 1 ? blank + 1 : -1;
    if (next >= 0) move(next);
  };

  const blank = tiles.indexOf(0);
  const best = bests[size];
  const imageStyle = {"--puzzle-image": `url("${PHOTO.src}")`} as CSSProperties;

  return (
    <section
      id="picture-puzzle"
      data-drag-asset
      className="picture-puzzle"
      style={scenePosition([1860, -600, 354, 540], 354, 540)}
      aria-label="Draggable sliding picture puzzle"
    >
      <header className="puzzle-heading">
        <span className="puzzle-heading-title"><ImageSquare size={18} weight="regular"/> Picture puzzle</span>
        <span className="puzzle-heading-hint">Slide to solve</span>
      </header>

      <div className="puzzle-polaroid">
        <div
          className="puzzle-board"
          data-game-control
          role="group"
          tabIndex={0}
          aria-label={`${size} by ${size} sliding picture puzzle. Select a tile next to the empty space, or use arrow keys to move the empty space.`}
          aria-busy={!ready}
          onKeyDown={keyboardMove}
          onPointerDown={event => event.stopPropagation()}
          style={{...imageStyle, "--puzzle-size": size} as CSSProperties}
        >
          {tiles.map((value, index) => {
            const original = value === 0 ? size * size - 1 : value - 1;
            const sourceRow = Math.floor(original / size);
            const sourceCol = original % size;
            const sourcePositionX = sourceCol / (size - 1) * 100;
            // Center crop a portrait image to a square board, preserving aspect ratio.
            const sourcePositionY = ((size * (PHOTO_ASPECT - 1) / 2) + sourceRow) /
              (size * PHOTO_ASPECT - 1) * 100;
            const tileStyle = {
              backgroundPosition: `${sourcePositionX}% ${sourcePositionY}%`,
              backgroundSize: `${size * 100}% auto`,
            };
            if (value === 0 && status !== "won") return (
              <div key="blank" className="puzzle-blank" role="img" aria-label="Empty space"/>
            );
            if (value === 0) return <div key="completed" className="puzzle-tile puzzle-tile-complete" style={tileStyle}/>;
            return (
              <button
                key={value}
                type="button"
                className="puzzle-tile"
                style={tileStyle}
                onClick={() => move(index)}
                disabled={!ready || status === "won" || peeking || !neighbors(blank, size).includes(index)}
                aria-label={`Move tile ${value}`}
                title={`Tile ${value}`}
              >
                <span className="puzzle-tile-number">{value}</span>
              </button>
            );
          })}
          {peeking && status !== "won" && (
            <div className="puzzle-preview" aria-label="Complete original picture"/>
          )}
        </div>
        <div className="puzzle-photo-caption">
          <span>Two good dogs, one little puzzle</span>
          <span>{size} × {size}</span>
        </div>
      </div>

      <div className="puzzle-scoreboard" aria-label="Game statistics">
        <div><span>Time</span><strong>{formatTime(seconds)}</strong></div>
        <div><span>Moves</span><strong>{moves}</strong></div>
        <div><span><Trophy size={12} weight="regular"/> Best</span><strong>{best ? formatTime(best.seconds) : "—"}</strong></div>
      </div>

      <div className="puzzle-controls" data-game-control>
        <div className="puzzle-difficulty" role="group" aria-label="Puzzle difficulty">
          <Button variant="ghost" size="sm" aria-pressed={size === 3} onClick={() => newGame(3)}>3 × 3</Button>
          <Button variant="ghost" size="sm" aria-pressed={size === 4} onClick={() => newGame(4)}>4 × 4</Button>
        </div>
        <div className="puzzle-tools">
          <Button variant="ghost" size="icon-sm" aria-label={peeking ? "Hide original photo" : "Peek at original photo"} aria-pressed={peeking} title="Peek at picture" disabled={status === "won"} onClick={() => setPeeking(value => !value)}>
            {peeking ? <EyeSlash size={16}/> : <Eye size={16}/>}
          </Button>
          <Button variant="ghost" size="icon-sm" aria-label="Shuffle a new picture puzzle" title="Shuffle again" onClick={() => newGame(size)}><ArrowCounterClockwise size={16}/></Button>
        </div>
      </div>
      <p className="puzzle-status" role="status" aria-live="polite">
        {status === "won" ? `Solved in ${moves} moves! Nice work.` :
          peeking ? "Memorize the photo, then hide it to play." :
          status === "playing" ? "Keep going — almost there!" :
          "Tap an adjacent tile, or use the arrow keys."}
      </p>
    </section>
  );
}
