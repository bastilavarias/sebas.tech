"use client";

import {useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent} from "react";
import {ArrowCounterClockwise, GameController, Pause, Play} from "@phosphor-icons/react/ssr";
import {Button} from "@/components/ui/button";
import {scenePosition} from "@/data/assets";
import {
  advanceBall, BALL_RADIUS, clamp, LEFT_X, PADDLE_HEIGHT, PADDLE_WIDTH,
  PONG_HEIGHT, PONG_WIDTH, RIGHT_X, serveBall, WIN_SCORE, type Ball
} from "./pong-physics";

type Phase = "ready" | "playing" | "paused" | "won" | "lost";
type Hud = {phase:Phase; player:number; cpu:number};
type Engine = {
  phase:Phase;
  ball:Ball;
  playerY:number;
  cpuY:number;
  player:number;
  cpu:number;
  delay:number;
  up:boolean;
  down:boolean;
  pointerY:number|null;
  pointerId:number|null;
  trail:{x:number;y:number}[];
};

function newEngine():Engine {
  return {
    phase:"ready", ball:serveBall("cpu"),
    playerY:(PONG_HEIGHT-PADDLE_HEIGHT)/2,
    cpuY:(PONG_HEIGHT-PADDLE_HEIGHT)/2,
    player:0, cpu:0, delay:0.8,
    up:false, down:false, pointerY:null, pointerId:null, trail:[]
  };
}
const centerPaddle=(center:number)=>clamp(center-PADDLE_HEIGHT/2,2,PONG_HEIGHT-PADDLE_HEIGHT-2);
const colors={
  bg:"#071c1b", grid:"#11332e", accent:"#a6f5c4", accentDim:"#5bbd92",
  dim:"#3e7565", white:"#e1ffec", line:"#2a6552"
};

function drawScreen(ctx:CanvasRenderingContext2D, game:Engine) {
  ctx.setTransform(2,0,0,2,0,0);
  ctx.clearRect(0,0,PONG_WIDTH,PONG_HEIGHT);
  ctx.fillStyle=colors.bg;
  ctx.fillRect(0,0,PONG_WIDTH,PONG_HEIGHT);
  ctx.strokeStyle=colors.grid;
  ctx.lineWidth=1;
  for(let x=24;x<PONG_WIDTH;x+=24) {
    ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,PONG_HEIGHT);ctx.stroke();
  }
  for(let y=24;y<PONG_HEIGHT;y+=24) {
    ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(PONG_WIDTH,y);ctx.stroke();
  }
  ctx.fillStyle=colors.line;
  for(let y=10;y<PONG_HEIGHT-4;y+=16)ctx.fillRect(PONG_WIDTH/2-1,y,2,8);
  ctx.fillStyle=colors.dim;
  ctx.font="600 9px monospace";
  ctx.fillText("PLAYER",42,18);
  ctx.fillText("CPU",PONG_WIDTH-67,18);
  ctx.fillStyle=colors.accent;
  ctx.textAlign="center";
  ctx.font="700 38px monospace";
  ctx.fillText(String(game.player),PONG_WIDTH/2-51,53);
  ctx.fillText(String(game.cpu),PONG_WIDTH/2+51,53);
  ctx.textAlign="left";

  ctx.fillStyle=colors.accent;
  ctx.shadowBlur=12;ctx.shadowColor=colors.accentDim;
  ctx.fillRect(LEFT_X,game.playerY,PADDLE_WIDTH,PADDLE_HEIGHT);
  ctx.fillRect(RIGHT_X,game.cpuY,PADDLE_WIDTH,PADDLE_HEIGHT);
  game.trail.forEach((point,i)=>{
    ctx.globalAlpha=((i+1)/game.trail.length)*0.25;
    ctx.beginPath();ctx.arc(point.x,point.y,BALL_RADIUS*.65,0,Math.PI*2);ctx.fill();
  });
  ctx.globalAlpha=1;
  ctx.beginPath();
  ctx.arc(game.ball.x,game.ball.y,BALL_RADIUS,0,Math.PI*2);
  ctx.fill();
  ctx.shadowBlur=0;

  if(game.delay>0 && game.phase==="playing") {
    ctx.fillStyle=colors.white;ctx.textAlign="center";
    ctx.font="600 12px monospace";ctx.fillText("GET READY",PONG_WIDTH/2,PONG_HEIGHT/2-23);
    ctx.textAlign="left";
  }
  if(game.phase!=="playing"){
    ctx.fillStyle="rgba(7,28,27,.77)";
    ctx.fillRect(36,86,PONG_WIDTH-72,76);
    ctx.strokeStyle=colors.line;ctx.strokeRect(36.5,86.5,PONG_WIDTH-73,75);
    ctx.fillStyle=colors.white;ctx.textAlign="center";
    ctx.font="700 19px monospace";
    ctx.fillText(
      game.phase==="ready"?"INSERT COIN":game.phase==="paused"?"PAUSED":game.phase==="won"?"YOU WIN!":"CPU WINS",
      PONG_WIDTH/2,116
    );
    ctx.fillStyle=colors.accentDim;
    ctx.font="600 10px monospace";
    ctx.fillText(
      game.phase==="ready"?"NO COINS NEEDED • PRESS PLAY":
        game.phase==="paused"?"PRESS RESUME":
          "PLAY AGAIN?",
      PONG_WIDTH/2,137
    );
    ctx.textAlign="left";
  }
}

export function RetroPong(){
  const canvasRef=useRef<HTMLCanvasElement|null>(null);
  const engineRef=useRef<Engine>(newEngine());
  const [hud,setHud]=useState<Hud>({phase:"ready",player:0,cpu:0});

  const refresh=useCallback(()=>{
    const game=engineRef.current;
    setHud({phase:game.phase,player:game.player,cpu:game.cpu});
  },[]);
  const pause=useCallback(()=>{
    const game=engineRef.current;
    if(game.phase!=="playing")return;
    game.phase="paused";game.up=false;game.down=false;game.pointerId=null;
    refresh();
  },[refresh]);
  const start=useCallback(()=>{
    const game=engineRef.current;
    if(game.phase!=="paused"){
      engineRef.current=newEngine();
    }
    engineRef.current.phase="playing";
    engineRef.current.up=false;
    engineRef.current.down=false;
    refresh();
    canvasRef.current?.focus({preventScroll:true});
  },[refresh]);
  const restart=useCallback(()=>{
    engineRef.current=newEngine();
    refresh();
  },[refresh]);

  useEffect(()=>{
    const canvas=canvasRef.current;
    const ctx=canvas?.getContext("2d");
    if(!ctx||!canvas)return;
    let raf=0;
    let last=0;
    let visible=false;
    const pauseIfOffscreen=()=>{
      if(document.hidden||!visible){
        const game=engineRef.current;
        if(game.phase==="playing"){
          game.phase="paused";game.up=false;game.down=false;game.pointerId=null;
          setHud({phase:"paused",player:game.player,cpu:game.cpu});
        }
      }
    };
    const observer=new IntersectionObserver(entries=>{
      visible=entries[0]?.isIntersecting??false;
      pauseIfOffscreen();
    },{threshold:0.12});
    observer.observe(canvas);
    document.addEventListener("visibilitychange",pauseIfOffscreen);
    const onBlur=()=>{engineRef.current.up=false;engineRef.current.down=false};
    window.addEventListener("blur",onBlur);
    const render=(time:number)=>{
      const dt=last?Math.min((time-last)/1000,1/30):0;
      last=time;
      const game=engineRef.current;
      if(game.phase==="playing" && visible && !document.hidden){
        if(game.pointerY!==null){
          game.playerY=centerPaddle(game.pointerY);
        }else if(game.up!==game.down){
          game.playerY=clamp(
            game.playerY+(game.down?1:-1)*310*dt,2,PONG_HEIGHT-PADDLE_HEIGHT-2
          );
        }
        // A beat of reaction time and capped paddle speed make the CPU beatable.
        const chase=game.ball.vx>0?game.ball.y+game.ball.vy*.09:PONG_HEIGHT/2;
        const difference=centerPaddle(chase)-game.cpuY;
        game.cpuY=clamp(
          game.cpuY+clamp(difference,-168*dt,168*dt),
          2,PONG_HEIGHT-PADDLE_HEIGHT-2
        );
        if(game.delay>0){
          game.delay=Math.max(0,game.delay-dt);
        }else{
          const result=advanceBall(game.ball,game.playerY,game.cpuY,dt);
          game.ball=result.ball;
          game.trail.push({x:game.ball.x,y:game.ball.y});
          if(game.trail.length>7)game.trail.shift();
          if(result.hit)game.trail=[];
          if(result.point){
            if(result.point==="player")game.player+=1;
            else game.cpu+=1;
            game.trail=[];
            if(game.player>=WIN_SCORE || game.cpu>=WIN_SCORE){
              game.phase=game.player>=WIN_SCORE?"won":"lost";
              game.up=false;game.down=false;
            }else{
              game.ball=serveBall(result.point==="player"?"player":"cpu");
              game.delay=.85;
            }
            setHud({phase:game.phase,player:game.player,cpu:game.cpu});
          }
        }
      }
      drawScreen(ctx,game);
      raf=requestAnimationFrame(render);
    };
    raf=requestAnimationFrame(render);
    return()=>{
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange",pauseIfOffscreen);
      window.removeEventListener("blur",onBlur);
      observer.disconnect();
    };
  },[]);

  const setPointer=(event:PointerEvent<HTMLCanvasElement>)=>{
    const game=engineRef.current;
    if(game.phase!=="playing")return;
    if(event.pointerType==="touch" && game.pointerId!==event.pointerId)return;
    const rect=event.currentTarget.getBoundingClientRect();
    game.pointerY=clamp((event.clientY-rect.top)/rect.height*PONG_HEIGHT,0,PONG_HEIGHT);
  };
  const pointerDown=(event:PointerEvent<HTMLCanvasElement>)=>{
    if(event.button!==0 && event.pointerType!=="touch")return;
    event.stopPropagation();
    const game=engineRef.current;
    game.pointerId=event.pointerId;
    game.pointerY=null;
    setPointer(event);
    event.currentTarget.focus({preventScroll:true});
    try{event.currentTarget.setPointerCapture(event.pointerId)}catch{}
  };
  const pointerEnd=(event:PointerEvent<HTMLCanvasElement>)=>{
    const game=engineRef.current;
    if(game.pointerId===event.pointerId){
      game.pointerId=null;
      if(event.pointerType!=="mouse")game.pointerY=null;
    }
  };
  const keyDown=(event:KeyboardEvent<HTMLCanvasElement>)=>{
    const game=engineRef.current;
    if(game.phase!=="playing")return;
    const key=event.key.toLowerCase();
    if(key==="arrowup"||key==="w"||key==="arrowdown"||key==="s"){
      event.preventDefault();event.stopPropagation();
      game.pointerY=null;
      if(key==="arrowup"||key==="w")game.up=true;
      else game.down=true;
    }else if(key===" "||key==="escape"){
      event.preventDefault();event.stopPropagation();pause();
    }
  };
  const keyUp=(event:KeyboardEvent<HTMLCanvasElement>)=>{
    const game=engineRef.current;
    const key=event.key.toLowerCase();
    if(key==="arrowup"||key==="w"||key==="arrowdown"||key==="s"){
      event.preventDefault();event.stopPropagation();
      if(key==="arrowup"||key==="w")game.up=false;
      else game.down=false;
    }
  };
  const playable=hud.phase==="playing";
  const ended=hud.phase==="won"||hud.phase==="lost";
  return (
    <section id="retro-pong" data-drag-asset className="retro-pong"
      style={scenePosition([650,-715,404,440],404,440)}
      aria-label="Draggable retro Pong arcade machine">
      <header className="pong-marquee" title="Drag this arcade machine by its frame">
        <div className="pong-brand"><GameController size={19} weight="duotone"/><strong>BASTE</strong><span>ARCADE</span></div>
        <span className="pong-machine-number">01 / PONG</span>
      </header>
      <div className="pong-bezel" data-game-control>
        <div className="pong-screen-wrap">
          <canvas ref={canvasRef} width={PONG_WIDTH*2} height={PONG_HEIGHT*2}
            className="pong-screen"
            tabIndex={0}
            aria-label={`Pong: You ${hud.player}, CPU ${hud.cpu}. First to seven. Focus this screen and use W/S or up/down to move your left paddle, or drag your finger or mouse.`}
            onPointerDown={pointerDown}
            onPointerMove={setPointer}
            onPointerUp={pointerEnd}
            onPointerCancel={pointerEnd}
            onPointerLeave={e=>{if(e.pointerType==="mouse"&&engineRef.current.pointerId===null)engineRef.current.pointerY=null}}
            onKeyDown={keyDown}
            onKeyUp={keyUp}
          >Pong arcade game. First to seven. Use the Start button to begin.</canvas>
          <div className="pong-scanlines" aria-hidden="true"/>
        </div>
        <div className="pong-screen-bottom"><span>1 PLAYER / VS CPU</span><span className="pong-power">● <span>CRT 1980</span></span></div>
      </div>
      <div className="pong-control-panel" data-game-control>
        <div className="pong-buttons">
          <Button type="button" size="sm" variant="ghost" className="pong-play"
            onClick={playable?pause:start}
            aria-label={playable?"Pause Pong":hud.phase==="paused"?"Resume Pong":ended?"Play Pong again":"Start Pong"}>
            {playable?<Pause size={16} weight="fill"/>:<Play size={16} weight="fill"/>}
            <span>{playable?"Pause":hud.phase==="paused"?"Resume":ended?"Play again":"Start game"}</span>
          </Button>
          <Button type="button" size="icon-sm" variant="ghost" className="pong-restart"
            onClick={restart} title="Reset Pong" aria-label="Reset Pong"><ArrowCounterClockwise size={17}/></Button>
        </div>
        <div className="pong-instructions">Move <kbd>W</kbd><kbd>S</kbd> / <kbd>↑</kbd><kbd>↓</kbd> / touch</div>
      </div>
      <p className="pong-status" role="status" aria-live="polite">
        {hud.phase==="ready"?"Free play. Beat the CPU to 7.":
          hud.phase==="paused"?"Paused — resume whenever you're ready.":
            hud.phase==="won"?"You win! Another round?":
              hud.phase==="lost"?"CPU wins this round. Rematch?":
                `You ${hud.player} : ${hud.cpu} CPU — first to ${WIN_SCORE}`}
      </p>
    </section>
  );
}
