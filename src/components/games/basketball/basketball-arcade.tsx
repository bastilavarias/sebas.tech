"use client";

import {useCallback,useEffect,useRef,useState} from "react";
import Matter from "matter-js";
import { ArrowCounterClockwise, Target, Trophy, Lightning } from "@phosphor-icons/react/ssr";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {scenePosition} from "@/data/assets";

const W=360,H=310;
const SPAWN={x:92,y:265};
const R=12;
const RIM={left:247,right:310,y:118};
const SHOT_MS=2550;
const BEST_KEY="baste-arcade-basketball-best";
type Aim={x:number;y:number}|null;
type PhysicsState={
 engine:Matter.Engine;
 ball:Matter.Body;
 launched:boolean;
 lastY:number;
 scored:boolean;
 launchTime:number;
 resetAt:number;
 queuedReset:boolean;
 aim:Aim;
 origin:Aim;
 sparkle:number;
};
type Hud={score:number;clock:number;shots:number;best:number;playing:boolean};

function clamp(n:number,min:number,max:number){return Math.max(min,Math.min(max,n));}
function roundRect(ctx:CanvasRenderingContext2D,x:number,y:number,w:number,h:number,r:number,fill:string,stroke?:string){
 ctx.beginPath();ctx.roundRect(x,y,w,h,r);
 ctx.fillStyle=fill;ctx.fill();
 if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1;ctx.stroke();}
}
export function BasketballArcade(){
 const canvasRef=useRef<HTMLCanvasElement|null>(null);
 const physicsRef=useRef<PhysicsState|null>(null);
 const hudRef=useRef<Hud>({score:0,clock:30,shots:0,best:0,playing:false});
 const [hud,setHud]=useState<Hud>(hudRef.current);
 const [message,setMessage]=useState("Pull back and release to shoot!");
 const rafRef=useRef(0);
 const pointerRef=useRef<number|null>(null);
 const visibleRef=useRef(false);

 const updateHud=useCallback((patch:Partial<Hud>)=>{
  const next={...hudRef.current,...patch};hudRef.current=next;setHud(next);
 },[]);
 const setupBall=useCallback((p:PhysicsState)=>{
  Matter.Body.setPosition(p.ball,SPAWN);
  Matter.Body.setVelocity(p.ball,{x:0,y:0});
  Matter.Body.setAngularVelocity(p.ball,0);
  Matter.Body.setAngle(p.ball,0);
  Matter.Body.setStatic(p.ball,true);
  p.launched=false;p.scored=false;p.lastY=SPAWN.y;
  p.resetAt=0;p.queuedReset=false;p.aim=null;p.origin=null;
 },[]);
 const reset=useCallback(()=>{
  const p=physicsRef.current;
  if(p)setupBall(p);
  updateHud({score:0,clock:30,shots:0,playing:false});
  setMessage("Pull back and release to shoot!");
 },[setupBall,updateHud]);

 useEffect(()=>{
  try{const best=Number(localStorage.getItem(BEST_KEY)||0);if(Number.isFinite(best))updateHud({best})}catch{}
 },[updateHud]);

 useEffect(()=>{
  const canvas=canvasRef.current;
  if(!canvas)return;
  const ctx:CanvasRenderingContext2D=canvas.getContext("2d")!;
  const engine=Matter.Engine.create({gravity:{x:0,y:1.05,scale:.001}});
  const ball=Matter.Bodies.circle(SPAWN.x,SPAWN.y,R,{
   restitution:.72,friction:.005,frictionAir:.0008,density:.0025,
   label:"basketball"
  });
  const floor=Matter.Bodies.rectangle(W/2,H+11,W+80,22,{isStatic:true,restitution:.72,label:"floor"});
  const backboard=Matter.Bodies.rectangle(330,100,11,105,{isStatic:true,restitution:.63,label:"backboard"});
  const leftRim=Matter.Bodies.circle(RIM.left,RIM.y,5.5,{isStatic:true,restitution:.58,label:"left-rim"});
  const rightRim=Matter.Bodies.circle(RIM.right,RIM.y,5.5,{isStatic:true,restitution:.58,label:"right-rim"});
  Matter.Composite.add(engine.world,[ball,floor,backboard,leftRim,rightRim]);
  Matter.Body.setStatic(ball,true);
  const p:PhysicsState={engine,ball,launched:false,lastY:SPAWN.y,
   scored:false,launchTime:0,resetAt:0,queuedReset:false,
   aim:null,origin:null,sparkle:0};
  physicsRef.current=p;
  let previous=performance.now();
  let accumulator=0;
  let lastSecond=previous;
  const canvasPause=()=>!document.hidden&&visibleRef.current;

  function draw(now:number){
   ctx.clearRect(0,0,W,H);
   const backdrop=ctx.createLinearGradient(0,0,0,H);
   backdrop.addColorStop(0,"#102238");backdrop.addColorStop(.65,"#143a53");backdrop.addColorStop(1,"#264f57");
   ctx.fillStyle=backdrop;ctx.fillRect(0,0,W,H);

   // Floor perspective, gym lights and score signage.
   ctx.fillStyle="rgba(255,255,255,.055)";
   for(let i=0;i<9;i++){ctx.fillRect(12+i*45,0,1,H);}
   for(let i=0;i<8;i++){ctx.fillRect(0,20+i*36,W,1);}
   roundRect(ctx,15,14,138,29,7,"#091b28","rgba(225,244,255,.12)");
   ctx.font="700 12px Inter,Arial,sans-serif";
   ctx.fillStyle="#d5eaf2";ctx.fillText("BASTE • HOOP LAB",27,33);
   ctx.strokeStyle="rgba(242,173,104,.3)";ctx.lineWidth=2;
   ctx.beginPath();ctx.ellipse(165,292,105,24,0,Math.PI,Math.PI*2);ctx.stroke();
   ctx.beginPath();ctx.moveTo(0,288);ctx.lineTo(360,288);ctx.stroke();
   ctx.beginPath();ctx.moveTo(160,288);ctx.lineTo(122,310);ctx.moveTo(200,288);ctx.lineTo(238,310);ctx.stroke();

   // Stand and angled arcade backboard, drawn behind the ball.
   ctx.strokeStyle="#0b2537";ctx.lineCap="round";ctx.lineWidth=10;
   ctx.beginPath();ctx.moveTo(326,122);ctx.lineTo(340,275);ctx.stroke();
   roundRect(ctx,312,43,32,101,4,"#f5f2e9","#d7d9d9");
   ctx.fillStyle="#e15d32";ctx.fillRect(312,82,27,3);
   ctx.strokeStyle="#db532c";ctx.lineWidth=3;
   ctx.strokeRect(318,65,13,36);

   // Hoop and mesh; side rim balls are Matter.js static circles.
   ctx.strokeStyle="#e98332";ctx.lineWidth=5;ctx.lineCap="round";
   ctx.beginPath();ctx.moveTo(RIM.left,RIM.y);ctx.lineTo(RIM.right,RIM.y);ctx.stroke();
   ctx.fillStyle="#ffb34c";
   ctx.beginPath();ctx.arc(RIM.left,RIM.y,5,0,Math.PI*2);ctx.arc(RIM.right,RIM.y,5,0,Math.PI*2);ctx.fill();
   ctx.strokeStyle="rgba(242,241,220,.9)";ctx.lineWidth=1.6;
   for(let i=0;i<=5;i++){
     const x=RIM.left+(RIM.right-RIM.left)*i/5;
     const bottomX=RIM.left+14+(RIM.right-RIM.left-28)*i/5;
     ctx.beginPath();ctx.moveTo(x,RIM.y+4);ctx.lineTo(bottomX,RIM.y+51);ctx.stroke();
   }
   for(let j=1;j<5;j++){
    const y=RIM.y+j*11,xL=RIM.left+j*2.8,xR=RIM.right-j*2.8;
    ctx.beginPath();ctx.moveTo(xL,y);ctx.lineTo(xR,y);ctx.stroke();
   }

   // Pull-back arrow, projected guide, and charge.
   if(p.aim&&p.origin&&!p.launched){
     const vx=clamp((p.origin.x-p.aim.x)*.105,-2,14);
     const vy=clamp((p.origin.y-p.aim.y)*.175,-18,-2);
     ctx.strokeStyle="rgba(255,222,148,.88)";ctx.lineWidth=2.5;
     ctx.setLineDash([5,8]);ctx.beginPath();ctx.moveTo(SPAWN.x,SPAWN.y);
     for(let step=1;step<=55;step+=2){
       const t=step;
       const x=SPAWN.x+vx*t;
       const y=SPAWN.y+vy*t+.24*t*t;
       if(x<-15||x>W+15||y<0||y>H)break;
       ctx.lineTo(x,y);
     }
     ctx.stroke();ctx.setLineDash([]);
     ctx.fillStyle="#ffd985";ctx.font="700 11px Inter,Arial,sans-serif";
     ctx.fillText("RELEASE TO SHOOT",28,62);
   }

   const b=p.ball.position;
   ctx.save();ctx.translate(b.x,b.y);ctx.rotate(p.ball.angle);
   ctx.fillStyle="rgba(4,8,17,.22)";ctx.beginPath();ctx.ellipse(2,10,12,3,0,0,Math.PI*2);ctx.fill();
   const gradient=ctx.createRadialGradient(-5,-6,1,0,0,R+2);
   gradient.addColorStop(0,"#ffc35c");gradient.addColorStop(.55,"#ea7b28");gradient.addColorStop(1,"#9e3c17");
   ctx.beginPath();ctx.arc(0,0,R,0,Math.PI*2);ctx.fillStyle=gradient;ctx.fill();
   ctx.strokeStyle="#6b2c19";ctx.lineWidth=1.35;
   ctx.beginPath();ctx.moveTo(-R,0);ctx.lineTo(R,0);
   ctx.moveTo(0,-R);ctx.lineTo(0,R);ctx.moveTo(-8,-8);ctx.quadraticCurveTo(7,0,-8,8);
   ctx.moveTo(8,-8);ctx.quadraticCurveTo(-7,0,8,8);ctx.stroke();
   ctx.restore();
   if(p.sparkle>now){
     ctx.fillStyle="#fef4b5";ctx.font="900 32px Inter,Arial,sans-serif";
     ctx.textAlign="center";ctx.fillText("+2",RIM.left+31,RIM.y-30);ctx.textAlign="left";
   }
   ctx.fillStyle="rgba(250,251,238,.6)";
   ctx.font="11px Inter,Arial,sans-serif";
   ctx.fillText("PULL · AIM · RELEASE",16,H-14);
  }
  function frame(now:number){
   rafRef.current=requestAnimationFrame(frame);
   const delta=Math.min(48,Math.max(0,now-previous));previous=now;
   if(!canvasPause()){accumulator=0;lastSecond=now;return;}
   accumulator+=delta;
   let cycles=0;
   while(accumulator>=1000/60&&cycles++<3){
    Matter.Engine.update(engine,1000/60);
    accumulator-=1000/60;
    if(p.launched&&!p.scored){
     const y=p.ball.position.y,x=p.ball.position.x;
     if(p.lastY<RIM.y+14&&y>=RIM.y+14&&
        p.ball.velocity.y>0&&x>RIM.left+R&&x<RIM.right-R){
       p.scored=true;p.sparkle=now+1000;
       const next=hudRef.current.score+2;
       updateHud({score:next});
       setMessage("SWISH! +2 points");
       if(next>hudRef.current.best){
        updateHud({best:next});
        try{localStorage.setItem(BEST_KEY,String(next))}catch{}
       }
       p.resetAt=now+700;
     }
     p.lastY=y;
    }
   }
   if(hudRef.current.playing&&now-lastSecond>=1000){
    const ticks=Math.floor((now-lastSecond)/1000);
    lastSecond+=ticks*1000;
    const t=Math.max(0,hudRef.current.clock-ticks);
    updateHud({clock:t,playing:t>0});
    if(t===0)setMessage("Time! Play again to beat your best.");
   }else if(!hudRef.current.playing)lastSecond=now;
   if(p.launched&&!p.queuedReset&&now-p.launchTime>SHOT_MS){
     p.resetAt=now+80;p.queuedReset=true;
   }
   if(p.resetAt&&now>=p.resetAt){
    setupBall(p);setMessage(hudRef.current.clock>0?"Take another shot!":"Hit RESET to play again.");
   }
   draw(now);
  }
  rafRef.current=requestAnimationFrame(frame);
  return()=>{
   cancelAnimationFrame(rafRef.current);
   physicsRef.current=null;
   Matter.Composite.clear(engine.world,false);
   Matter.Engine.clear(engine);
  };
 },[setupBall,updateHud]);

 useEffect(()=>{
  const el=canvasRef.current;
  if(!el)return;
  const observer=new IntersectionObserver(entries=>{
   visibleRef.current=entries.some(e=>e.isIntersecting);
  },{threshold:.05});
  observer.observe(el);
  return()=>observer.disconnect();
 },[]);

 const point=(event:React.PointerEvent<HTMLCanvasElement>)=>{
  const rect=event.currentTarget.getBoundingClientRect();
  return{x:(event.clientX-rect.left)*W/rect.width,y:(event.clientY-rect.top)*H/rect.height};
 };
 const pointerDown=(event:React.PointerEvent<HTMLCanvasElement>)=>{
  const p=physicsRef.current;
  if(!p||p.launched||hudRef.current.clock===0||event.button!==0)return;
  pointerRef.current=event.pointerId;
  const pt=point(event);
  p.origin=pt;p.aim=pt;
  try{event.currentTarget.setPointerCapture(event.pointerId)}catch{/* Embedded browsers may disallow capture. */}
  event.stopPropagation();event.preventDefault();
 };
 const pointerMove=(event:React.PointerEvent<HTMLCanvasElement>)=>{
  const p=physicsRef.current;
  if(!p||pointerRef.current!==event.pointerId||!p.origin)return;
  p.aim=point(event);
  event.stopPropagation();
 };
 const pointerUp=(event:React.PointerEvent<HTMLCanvasElement>)=>{
  const p=physicsRef.current;
  if(!p||pointerRef.current!==event.pointerId||!p.origin)return;
  pointerRef.current=null;
  const pt=point(event);
  const dx=p.origin.x-pt.x,dy=p.origin.y-pt.y;
  if(Math.hypot(dx,dy)<16){setMessage("Pull down and left to aim.");p.origin=null;p.aim=null;return;}
  const vx=clamp(dx*.105,-2,14);
  const vy=clamp(dy*.175,-18,-2);
  Matter.Body.setStatic(p.ball,false);
  Matter.Body.setVelocity(p.ball,{x:vx,y:vy});
  Matter.Body.setAngularVelocity(p.ball,.09);
  p.launched=true;p.scored=false;p.lastY=p.ball.position.y;
  p.launchTime=performance.now();
  p.origin=null;p.aim=null;p.resetAt=0;p.queuedReset=false;
  const nowPlaying=hudRef.current.playing;
  updateHud({shots:hudRef.current.shots+1,playing:nowPlaying||hudRef.current.clock>0});
  setMessage("Ball away! Watch the hoop.");
  event.stopPropagation();
 };
 const pointerCancel=()=>{pointerRef.current=null;const p=physicsRef.current;if(p){p.origin=null;p.aim=null;}};
 return <Card className="arcade-machine" id="basketball-arcade" data-drag-asset aria-label="Arcade basketball mini game" style={scenePosition([34,90,368,520],368,520)}>
  <div className="arcade-heading" title="Drag this frame to reposition the arcade">
   <div className="arcade-sign"><Target size={17}/><span>HOOP LAB</span><span className="arcade-heading-flare">★</span></div>
   <Badge variant="outline" className="arcade-sign-badge">30 SEC ARCADE</Badge>
  </div>
  <div className="arcade-stats" aria-live="polite">
   <div><small>SCORE</small><strong data-testid="basket-score">{hud.score.toString().padStart(2,"0")}</strong></div>
   <div><small>TIME</small><strong data-testid="basket-time">{String(hud.clock).padStart(2,"0")}s</strong></div>
   <div><small>BEST</small><strong><Trophy size={13}/>{hud.best}</strong></div>
  </div>
  <div className="arcade-canvas-wrap" data-game-control>
   <canvas ref={canvasRef} width={W} height={H} data-testid="basketball-canvas"
    aria-label="Basketball game. Drag down and left, then release to shoot the ball toward the hoop."
    onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp}
    onPointerCancel={pointerCancel} onLostPointerCapture={pointerCancel}/>
  </div>
  <footer className="arcade-bottom" data-game-control>
   <span className="arcade-helper" aria-live="polite">{message}</span>
   <Button size="sm" variant="secondary" onClick={reset} className="arcade-reset">
    <ArrowCounterClockwise size={14}/> Reset
   </Button>
  </footer>
  <div className="arcade-underbar"><Lightning size={12}/> <span>PHYSICS POWERED • NO COINS NEEDED</span></div>
 </Card>;
}
