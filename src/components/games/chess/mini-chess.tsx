"use client";

import {useCallback,useEffect,useMemo,useRef,useState} from "react";
import dynamic from "next/dynamic";
import {Chess,type Move,type Square} from "chess.js";
import type {ChessboardOptions} from "react-chessboard";
import {ArrowCounterClockwise,ArrowUUpLeft,Crown,Users,Brain} from "@phosphor-icons/react/ssr";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Card,CardContent} from "@/components/ui/card";
import {scenePosition} from "@/data/assets";

const Chessboard=dynamic(()=>import("react-chessboard").then(mod=>mod.Chessboard),{ssr:false});
type Mode="cpu"|"local";
const PIECE_VALUES:Record<string,number>={p:1,n:3,b:3.2,r:5,q:9,k:0};
function status(chess:Chess,mode:Mode){
 if(chess.isCheckmate())return (chess.turn()==="w"?"Black":"White")+" wins by checkmate!";
 if(chess.isStalemate())return "Draw by stalemate";
 if(chess.isThreefoldRepetition())return "Draw by repetition";
 if(chess.isInsufficientMaterial())return "Draw — insufficient material";
 if(chess.isDraw())return "Game drawn";
 if(chess.isCheck())return (chess.turn()==="w"?"White":"Black")+" is in check!";
 return (chess.turn()==="w"?"White":"Black")+(mode==="cpu"&&chess.turn()==="b"?" (CPU thinking…)":" to move");
}
function chooseCpuMove(chess:Chess){
 const possible=chess.moves({verbose:true});
 if(!possible.length)return null;
 const ranked=possible.map(move=>{
  let score=(move.captured?PIECE_VALUES[move.captured]||0:0)*4;
  if(move.promotion)score+=9;
  const file=move.to.charCodeAt(0)-97;
  const rank=Number(move.to[1])-1;
  score+=(3.5-Math.abs(file-3.5))*.14+(3.5-Math.abs(rank-3.5))*.14;
  const clone=new Chess(chess.fen());
  clone.move({from:move.from,to:move.to,promotion:move.promotion||"q"});
  if(clone.isCheckmate())score+=1000;
  else if(clone.isCheck())score+=1;
  // Slight variation makes the easy opponent feel less mechanical.
  score+=Math.random()*.45;
  return{move,score};
 });
 ranked.sort((a,b)=>b.score-a.score);
 return ranked[0].move;
}
export function MiniChess(){
 const gameRef=useRef(new Chess());
 const [fen,setFen]=useState(gameRef.current.fen());
 const [mode,setMode]=useState<Mode>("cpu");
 const [selected,setSelected]=useState<Square|null>(null);
 const [targets,setTargets]=useState<Square[]>([]);
 const [lastMove,setLastMove]=useState<{from:Square;to:Square}|null>(null);
 const [history,setHistory]=useState<string[]>([]);
 const [notice,setNotice]=useState("");
 const movingRef=useRef(false);
 const modeRef=useRef<Mode>("cpu");

 const refresh=useCallback(()=>{
  const current=gameRef.current;
  setFen(current.fen());
  setHistory(current.history());
 },[]);
 const clearSelection=useCallback(()=>{setSelected(null);setTargets([])},[]);
 const tryMove=useCallback((source:Square,target:Square)=>{
  const chess=gameRef.current;
  if(chess.isGameOver()||movingRef.current)return false;
  if(modeRef.current==="cpu"&&chess.turn()==="b")return false;
  try{
   const move=chess.move({from:source,to:target,promotion:"q"});
   if(!move)return false;
   setLastMove({from:source,to:target});setNotice(move.san);
   clearSelection();refresh();
   return true;
  }catch{
   return false;
  }
 },[clearSelection,refresh]);
 const onSquare=useCallback((square:string)=>{
  const chess=gameRef.current;
  const target=square as Square;
  if(chess.isGameOver()||(modeRef.current==="cpu"&&chess.turn()==="b"))return;
  const piece=chess.get(target);
  if(selected&&tryMove(selected,target))return;
  if(piece&&piece.color===chess.turn()){
   setSelected(target);
   setTargets(chess.moves({square:target,verbose:true}).map(m=>m.to));
  }else clearSelection();
 },[selected,tryMove,clearSelection]);
 const onDrop=useCallback(({sourceSquare,targetSquare}:{
  sourceSquare:string;targetSquare:string|null
 })=>Boolean(targetSquare&&tryMove(sourceSquare as Square,targetSquare as Square)),[tryMove]);

 useEffect(()=>{
  const chess=gameRef.current;
  if(mode!=="cpu"||chess.turn()!=="b"||chess.isGameOver())return;
  const timer=setTimeout(()=>{
   const current=gameRef.current;
   if(current.turn()!=="b"||modeRef.current!=="cpu"||current.isGameOver())return;
   const next=chooseCpuMove(current);
   if(!next)return;
   movingRef.current=true;
   try{
    current.move({from:next.from,to:next.to,promotion:next.promotion||"q"});
    setLastMove({from:next.from,to:next.to});
    setNotice("CPU: "+next.san);
    clearSelection();refresh();
   }finally{movingRef.current=false}
  },410);
  return()=>clearTimeout(timer);
 },[fen,mode,refresh,clearSelection]);

 const reset=useCallback(()=>{
  gameRef.current.reset();movingRef.current=false;
  setLastMove(null);setNotice("");clearSelection();refresh();
 },[clearSelection,refresh]);
 const changeMode=(next:Mode)=>{
  modeRef.current=next;setMode(next);reset();
 };
 const undo=()=>{
  const chess=gameRef.current;
  if(!chess.history().length)return;
  chess.undo();
  if(mode==="cpu"&&chess.turn()==="b"&&chess.history().length)chess.undo();
  movingRef.current=false;setLastMove(null);setNotice("");clearSelection();refresh();
 };
 const options:ChessboardOptions=useMemo(()=>({
  id:"baste-mini-chessboard",
  position:fen,
  boardOrientation:"white",
  showNotation:false,
  allowDragging:true,
  showAnimations:true,
  animationDurationInMs:180,
  dragActivationDistance:3,
  boardStyle:{width:"100%",height:"100%",borderRadius:3,overflow:"hidden",boxShadow:"0 5px 15px rgba(29,17,8,.25)"},
  lightSquareStyle:{backgroundColor:"#e8d7b4"},
  darkSquareStyle:{backgroundColor:"#8e6548"},
  squareStyles:{
   ...(lastMove?{[lastMove.from]:{backgroundColor:"rgba(243,199,105,.43)"},
     [lastMove.to]:{backgroundColor:"rgba(243,199,105,.43)"}}:{}),
   ...(selected?{[selected]:{backgroundColor:"rgba(80,165,230,.38)"}}:{}),
   ...Object.fromEntries(targets.map(square=>[square,{backgroundImage:"radial-gradient(circle, rgba(46,119,104,.5) 0 17%, transparent 19%)"}]))
  },
  onSquareClick:({square})=>onSquare(square),
  onPieceDrop:onDrop,
  canDragPiece:({piece})=>{
   const chess=gameRef.current;
   if(chess.isGameOver()||movingRef.current)return false;
   if(modeRef.current==="cpu"&&chess.turn()==="b")return false;
   return piece.pieceType[0].toLowerCase()===chess.turn();
  },
 }),[fen,lastMove,selected,targets,onSquare,onDrop]);

 const current=gameRef.current;
 return <Card data-drag-asset id="mini-chess" className="mini-chess" aria-label="Playable tabletop chess mini game"
  style={scenePosition([1265,-275,388,480],388,480)}>
  <div className="chess-heading" title="Drag this wooden board frame to reposition it">
   <div className="chess-title-lockup"><Crown size={17}/><span>CHESS CLUB</span></div>
   <Badge variant="secondary" className="chess-mode-badge">{mode==="cpu"?"VS CPU":"2 PLAYERS"}</Badge>
  </div>
  <CardContent className="chess-content">
   <div className="chess-board-frame" data-game-control>
    <div className="chess-board-inner" data-testid="chess-board"
     onPointerDown={event=>event.stopPropagation()}
     onTouchStart={event=>event.stopPropagation()}>
     <Chessboard options={options}/>
    </div>
   </div>
   <div className="chess-summary">
    <div className="chess-turn" aria-live="polite">
     <span className={"chess-turn-dot "+(current.turn()==="w"?"white":"black")}/>
     <span data-testid="chess-status">{status(current,mode)}</span>
    </div>
    <div className="chess-moves">{history.length?history.slice(-3).join(" · "):"Your move. Make it count."}</div>
   </div>
   <div className="chess-actions" data-game-control>
    <div className="chess-modes">
     <Button size="sm" variant={mode==="cpu"?"secondary":"ghost"} aria-pressed={mode==="cpu"} onClick={()=>changeMode("cpu")}><Brain size={14}/> CPU</Button>
     <Button size="sm" variant={mode==="local"?"secondary":"ghost"} aria-pressed={mode==="local"} onClick={()=>changeMode("local")}><Users size={14}/> 2P</Button>
    </div>
    <div className="chess-tools">
     <Button size="sm" variant="ghost" disabled={!history.length} onClick={undo} aria-label="Undo last move" title="Undo last move"><ArrowUUpLeft size={15}/></Button>
     <Button size="sm" variant="ghost" onClick={reset} aria-label="Reset chess game" title="New game"><ArrowCounterClockwise size={15}/></Button>
    </div>
   </div>
   <span className="chess-announcer" aria-live="polite">{notice&&"Last: "+notice}</span>
  </CardContent>
  <span className="chess-corner-ornament" aria-hidden="true">BC · 64</span>
 </Card>;
}
