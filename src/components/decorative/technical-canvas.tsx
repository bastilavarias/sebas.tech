"use client";
import{useEffect,useRef}from "react";
import {scenePosition}from "@/data/assets";
export function TechnicalCanvas(){
 const ref=useRef<HTMLCanvasElement|null>(null);
 useEffect(()=>{
  const canvas=ref.current,ctx=canvas?.getContext("2d");
  if(!ctx||!canvas)return;
  let raf=0;
  const draw=(px=.5,py=.5)=>{
   ctx.fillStyle="#070b12";ctx.fillRect(0,0,360,360);
   for(let i=0;i<17;i++){
    const n=18+i*20.3;ctx.beginPath();
    ctx.strokeStyle="rgba(255,255,255,.055)";ctx.lineWidth=.9;
    ctx.moveTo(n,0);ctx.lineTo(n,360);ctx.moveTo(0,n);ctx.lineTo(360,n);ctx.stroke();
   }
   for(let y=0;y<18;y++)for(let x=0;x<18;x++){
    const xx=15+x*20,yy=15+y*20,dist=Math.hypot(xx-px*360,yy-py*360);
    const influence=Math.max(0,1-dist/170);ctx.beginPath();ctx.arc(xx,yy,.7+influence*3,0,Math.PI*2);
    ctx.fillStyle="rgba(157,220,249,"+(.16+influence*.72)+")";ctx.fill();
   }
   ctx.beginPath();ctx.strokeStyle="rgba(179,224,255,.52)";
   ctx.arc(px*360,py*360,70,0,Math.PI*2);ctx.stroke();
  };
  const move=(e:PointerEvent)=>{
   const r=canvas.getBoundingClientRect();
   const x=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));
   const y=Math.max(0,Math.min(1,(e.clientY-r.top)/r.height));
   if(raf)cancelAnimationFrame(raf);
   raf=requestAnimationFrame(()=>draw(x,y));
  };
  const reset=()=>draw();
  canvas.addEventListener("pointermove",move);
  canvas.addEventListener("pointerleave",reset);
  draw();
  return()=>{canvas.removeEventListener("pointermove",move);canvas.removeEventListener("pointerleave",reset);if(raf)cancelAnimationFrame(raf)};
 },[]);
 return <figure data-drag-asset className="design-art-tile" style={scenePosition([-350,-290,372,372],360,360)}>
  <canvas ref={ref} width={360} height={360} aria-hidden="true"/>
 </figure>;
}
