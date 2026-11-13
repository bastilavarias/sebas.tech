"use client";

import {useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent} from "react";
import {ArrowCounterClockwise, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Calculator, Trophy} from "@phosphor-icons/react/ssr";
import {Button} from "@/components/ui/button";
import {scenePosition} from "@/data/assets";
import {
  addRandomTile, createGameBoard, hasMoves, reachedGoal, slideBoard, validBoard,
  type Board, type Direction
} from "./logic";

const GAME_KEY = "baste-tile-2048-game-v1";
const BEST_KEY = "baste-tile-2048-best-v1";

type Snapshot = {board:Board;score:number;moves:number;continued:boolean};
type Phase = "playing" | "won" | "over";
type Game = Snapshot & {
  best:number;
  previous:Snapshot|null;
  phase:Phase;
  spawned:number|null;
  merged:number[];
  turn:number;
};

const placeholder = [0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0];
const validScore = (value:unknown):value is number => typeof value === "number" && Number.isSafeInteger(value) && value >= 0 && value <= 1000000000;
const nextPhase = (board:readonly number[], continued:boolean):Phase =>
  reachedGoal(board) && !continued ? "won" : hasMoves(board) ? "playing" : "over";

function newGame(best:number):Game {
  const board = createGameBoard();
  return {
    board,score:0,moves:0,best,
    continued:false,previous:null,phase:"playing",
    spawned:null,merged:[],turn:0
  };
}

export function Tile2048(){
  const [game,setGame] = useState<Game>({
    board:placeholder,score:0,moves:0,best:0,continued:false,
    previous:null,phase:"playing",spawned:null,merged:[],turn:0
  });
  const [ready,setReady] = useState(false);
  const pointerStart=useRef<{id:number;x:number;y:number}|null>(null);
  const boardRef=useRef<HTMLDivElement|null>(null);

  useEffect(()=>{
    let saved:Game|null=null;
    let best=0;
    try{
      const oldBest=Number(localStorage.getItem(BEST_KEY));
      if(validScore(oldBest))best=oldBest;
      const raw=localStorage.getItem(GAME_KEY);
      if(raw){
        const parsed:unknown=JSON.parse(raw);
        if(parsed && typeof parsed === "object" &&
          "board" in parsed && validBoard(parsed.board) && parsed.board.some(tile=>tile!==0) &&
          "score" in parsed && validScore(parsed.score) &&
          "moves" in parsed && validScore(parsed.moves)){
          const continued = "continued" in parsed && parsed.continued===true;
          saved={
            board:parsed.board,score:parsed.score,moves:parsed.moves,continued,
            best:Math.max(best,parsed.score),previous:null,
            phase:nextPhase(parsed.board,continued),
            spawned:null,merged:[],turn:0
          };
        }
      }
    }catch{/* Storage might be unavailable, or a session might be corrupted. */}
    setGame(saved ?? newGame(best));
    setReady(true);
  },[]);

  useEffect(()=>{
    if(!ready)return;
    try{
      localStorage.setItem(GAME_KEY,JSON.stringify({
        board:game.board,score:game.score,moves:game.moves,continued:game.continued
      }));
      localStorage.setItem(BEST_KEY,String(game.best));
    }catch{/* Private browsing must not break the game. */}
  },[game,ready]);

  const move=useCallback((direction:Direction)=>{
    if(!ready)return;
    setGame(old=>{
      if(old.phase!=="playing")return old;
      const shift=slideBoard(old.board,direction);
      if(!shift.changed)return old; // No-op moves must not spawn tiles or gain points.
      const {board,spawned}=addRandomTile(shift.board);
      const score=old.score+shift.gained;
      const previous:Snapshot={
        board:[...old.board],score:old.score,moves:old.moves,continued:old.continued
      };
      return {
        board,score,moves:old.moves+1,
        best:Math.max(old.best,score),
        continued:old.continued,
        previous,
        phase:nextPhase(board,old.continued),
        spawned,merged:shift.merged,turn:old.turn+1
      };
    });
  },[ready]);

  const undo=()=>{
    setGame(old=>{
      if(!old.previous)return old;
      const {board,score,moves,continued}=old.previous;
      return {
        ...old,board,score,moves,continued,
        phase:nextPhase(board,continued),
        previous:null,spawned:null,merged:[],turn:old.turn+1
      };
    });
    boardRef.current?.focus({preventScroll:true});
  };
  const reset=()=>{
    setGame(old=>newGame(old.best));
    boardRef.current?.focus({preventScroll:true});
  };
  const continueGame=()=>{
    setGame(old=>({...old,continued:true,phase:hasMoves(old.board)?"playing":"over"}));
    boardRef.current?.focus({preventScroll:true});
  };

  const keyboard=(event:KeyboardEvent<HTMLDivElement>)=>{
    const keys:Record<string,Direction>={
      ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",
      a:"left",d:"right",w:"up",s:"down"
    };
    const direction=keys[event.key]??keys[event.key.toLowerCase()];
    if(!direction)return;
    event.preventDefault();event.stopPropagation();
    move(direction);
  };

  const pointerDown=(event:PointerEvent<HTMLDivElement>)=>{
    if(event.button!==0 && event.pointerType==="mouse")return;
    event.stopPropagation();
    pointerStart.current={id:event.pointerId,x:event.clientX,y:event.clientY};
    boardRef.current?.focus({preventScroll:true});
    try{event.currentTarget.setPointerCapture(event.pointerId)}catch{}
  };
  const pointerUp=(event:PointerEvent<HTMLDivElement>)=>{
    event.stopPropagation();
    const start=pointerStart.current;
    if(!start||start.id!==event.pointerId)return;
    pointerStart.current=null;
    const x=event.clientX-start.x,y=event.clientY-start.y;
    if(Math.max(Math.abs(x),Math.abs(y))<22)return;
    move(Math.abs(x)>Math.abs(y) ? x>0?"right":"left" : y>0?"down":"up");
  };
  const directions:{id:Direction;label:string;icon:typeof ArrowUp}[]=[
    {id:"up",label:"Move up",icon:ArrowUp},
    {id:"left",label:"Move left",icon:ArrowLeft},
    {id:"down",label:"Move down",icon:ArrowDown},
    {id:"right",label:"Move right",icon:ArrowRight}
  ];
  return (
    <section id="tile-2048" data-drag-asset className="tile-2048-machine"
      style={scenePosition([170,-735,344,546],344,546)}
      aria-label="Draggable 2048 number game. Drag the outer casing to move it.">
      <div className="tile2048-topline">
        <span className="tile2048-logo"><Calculator size={18} weight="duotone"/> BASTE / <strong>2048</strong></span>
        <span className="tile2048-series">POCKET / 04</span>
      </div>
      <div className="tile2048-display">
        <div className="tile2048-head">
          <div className="tile2048-title"><strong>2048</strong><span>join the numbers.</span></div>
          <div className="tile2048-scores" aria-label="2048 statistics">
            <div><span>Score</span><strong>{game.score.toLocaleString("en-US")}</strong></div>
            <div><span><Trophy size={11} aria-hidden="true"/> Best</span><strong>{game.best.toLocaleString("en-US")}</strong></div>
          </div>
        </div>
        <div ref={boardRef} className="tile2048-board" data-game-control
          role="group" tabIndex={0}
          aria-label="2048 game board. Use arrow keys or WASD to slide all tiles, or swipe on touch screens."
          aria-busy={!ready}
          onKeyDown={keyboard}
          onPointerDown={pointerDown} onPointerUp={pointerUp}
          onPointerCancel={()=>{pointerStart.current=null}}
        >
          <div className="tile2048-grid" role="grid" aria-label="Four by four tile grid">
            {game.board.map((value,index)=>{
              const row=Math.floor(index/4)+1,col=index%4+1;
              const special=value>2048?"max":String(value);
              const animate=game.spawned===index?"tile2048-spawn":game.merged.includes(index)?"tile2048-merge":"";
              return <div key={index} role="gridcell" aria-label={`Row ${row}, column ${col}: ${value || "empty"}`}
                className={`tile2048-slot ${value?"tile2048-filled":""} ${animate}`}
                data-value={special}>
                {value>0&&<span key={game.turn+"-"+value} className="tile2048-number">{value}</span>}
              </div>;
            })}
          </div>
          {game.phase!=="playing" && <div className="tile2048-end" role="status">
            <strong>{game.phase==="won"?"2048! You did it.":"No more moves"}</strong>
            <span>{game.phase==="won"?"Keep going or start over.":"Nice run. One more?"}</span>
            <div>
              {game.phase==="won"&&<Button type="button" variant="ghost" size="sm" onClick={continueGame}>Keep playing</Button>}
              <Button type="button" variant="ghost" size="sm" onClick={reset}>New game</Button>
            </div>
          </div>}
        </div>
        <div className="tile2048-legend"><span>Merge equal tiles to reach 2048.</span><span>{game.moves} moves</span></div>
      </div>
      <div className="tile2048-controls" data-game-control>
        <div className="tile2048-pad" role="group" aria-label="2048 direction controls">
          {directions.map(({id,label,icon:Icon})=>
            <Button key={id} type="button" size="icon-sm" variant="ghost" className={"tile2048-arrow tile2048-arrow-"+id}
              aria-label={label} title={label} disabled={!ready||game.phase!=="playing"} onClick={()=>{move(id);boardRef.current?.focus({preventScroll:true})}}>
              <Icon size={17} weight="bold"/>
            </Button>
          )}
        </div>
        <div className="tile2048-tools">
          <span className="tile2048-instructions">Arrow keys / WASD<br/>or swipe the board</span>
          <div className="tile2048-actions">
            <Button type="button" size="sm" variant="ghost" onClick={undo} disabled={!ready||!game.previous}>Undo</Button>
            <Button type="button" size="sm" variant="ghost" onClick={reset} disabled={!ready}>
              <ArrowCounterClockwise size={14}/> New game
            </Button>
          </div>
        </div>
      </div>
      <p className="tile2048-status" role="status" aria-live="polite">
        {game.phase==="won"?"Tile 2048 achieved!":
          game.phase==="over"?"Game over. New game to play again.":
          ready?"A tiny puzzle for your big brain.":"Preparing your tiles…"}
      </p>
    </section>
  );
}
