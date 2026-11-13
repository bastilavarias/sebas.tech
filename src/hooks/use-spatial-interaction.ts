"use client";
import {useEffect,useState,type RefObject} from "react";

// A single scoped hook owns spatial input. React handles the content while
// this hook only updates CSS transforms (avoids rerendering all art on drag).
export function useSpatialInteraction(
  viewportRef:RefObject<HTMLElement|null>,
  indicatorRef:RefObject<HTMLButtonElement|null>
){
 const [compact,setCompact]=useState(false);
 useEffect(()=>{
  const media=window.matchMedia("(max-width: 767px)");
  const sync=()=>setCompact(media.matches);
  sync();
  media.addEventListener("change",sync);
  return()=>media.removeEventListener("change",sync);
 },[]);
 useEffect(()=>{
  // On phones the workspace is a normal scrollable document, never a pan target.
  if(compact)return;
  const viewport=viewportRef.current;
  const indicator=indicatorRef.current;
  const world=document.getElementById("world");
  if(!viewport||!world||!indicator)return;
  const listeners:Array<()=>void>=[];
  const listen=(target:EventTarget,type:string,fn:(event:Event)=>void,options?:AddEventListenerOptions)=>{
    target.addEventListener(type,fn as EventListener,options);
    listeners.push(()=>target.removeEventListener(type,fn as EventListener,options));
  };
  const assetOffsets=new WeakMap<HTMLElement,{x:number;y:number}>();
  let drag:{kind:"pointer"|"mouse"|"touch";id:number;x:number;y:number;ox:number;oy:number}|null=null;
  let assetDrag:{element:HTMLElement;kind:"pointer"|"mouse"|"touch";id:number;x:number;y:number;ox:number;oy:number;moved:boolean}|null=null;
  let offset={x:0,y:0};
  let layer=40;
  let grab:{x:number;y:number;ox:number;oy:number}|null=null;
  let frame=0;
  let focusTimer:ReturnType<typeof setTimeout>|null=null;
  const clamp=()=>{
    const bounds=Math.max(0,(world.offsetWidth-window.innerWidth)/2-20);
    const bY=Math.max(0,(world.offsetHeight-window.innerHeight)/2-20);
    offset.x=Math.max(-bounds,Math.min(bounds,offset.x));
    offset.y=Math.max(-bY,Math.min(bY,offset.y));
  };
  const apply=()=>{
    frame=0;
    world.style.setProperty("--pan-x",offset.x+"px");
    world.style.setProperty("--pan-y",offset.y+"px");
  };
  const move=(x:number,y:number)=>{
    offset={x,y};clamp();
    if(!frame)frame=requestAnimationFrame(apply);
  };
  const blocked=(target:EventTarget|null)=>
    target instanceof Element&&Boolean(target.closest("button,a,input,select,[data-drag-asset]"));
  const showGrab=(on:boolean)=>{
    indicator.setAttribute("aria-pressed",String(on));
    indicator.classList.toggle("grab-enabled",on);
    const label=indicator.querySelector(".drag-label");
    if(label)label.textContent=on?"Move mouse, click to release":"Drag to move";
  };
  const stopGrab=()=>{grab=null;showGrab(false)};
  const finish=()=>{
    if(!drag)return;
    drag=null;
    viewport.classList.remove("is-dragging");
    indicator.classList.remove("is-dragging");
  };
  const begin=(kind:"pointer"|"mouse"|"touch",id:number,x:number,y:number)=>{
    if(drag||assetDrag)return;
    if(focusTimer){clearTimeout(focusTimer);focusTimer=null;world.style.transition="";}
    drag={kind,id,x,y,ox:offset.x,oy:offset.y};
    viewport.classList.add("is-dragging");
    indicator.classList.add("is-dragging");
  };
  const pan=(x:number,y:number)=>{
    if(drag)move(drag.ox+x-drag.x,drag.oy+y-drag.y);
  };
  listen(viewport,"pointerdown",e=>{
    const event=e as PointerEvent;
    if(event.button!==0||blocked(event.target))return;
    if(grab){stopGrab();event.preventDefault();return;}
    begin("pointer",event.pointerId,event.clientX,event.clientY);
    try{viewport.setPointerCapture(event.pointerId)}catch{}
    event.preventDefault();
  });
  listen(viewport,"mousedown",e=>{
    const event=e as MouseEvent;
    if(event.button!==0||blocked(event.target)||drag||grab)return;
    begin("mouse",0,event.clientX,event.clientY);
    event.preventDefault();
  });
  listen(viewport,"touchstart",e=>{
    const event=e as TouchEvent;
    if(drag||blocked(event.target)||!event.changedTouches.length)return;
    const touch=event.changedTouches[0];
    begin("touch",touch.identifier,touch.clientX,touch.clientY);
  },{passive:false});
  listen(window,"pointermove",e=>{
    const event=e as PointerEvent;
    if(grab&&!drag&&event.pointerType!=="touch")move(grab.ox+event.clientX-grab.x,grab.oy+event.clientY-grab.y);
    if(drag?.kind==="pointer"&&drag.id===event.pointerId)pan(event.clientX,event.clientY);
  });
  listen(window,"mousemove",e=>{
    const event=e as MouseEvent;
    if(grab&&!drag)move(grab.ox+event.clientX-grab.x,grab.oy+event.clientY-grab.y);
    if(drag?.kind==="mouse")pan(event.clientX,event.clientY);
  });
  listen(window,"touchmove",e=>{
    const event=e as TouchEvent;
    if(drag?.kind!=="touch")return;
    const finger=[...event.touches].find(t=>t.identifier===drag?.id);
    if(finger){pan(finger.clientX,finger.clientY);event.preventDefault();}
  },{passive:false});
  listen(window,"pointerup",e=>{const ev=e as PointerEvent;if(drag?.kind==="pointer"&&drag.id===ev.pointerId)finish();});
  listen(window,"pointercancel",e=>{const ev=e as PointerEvent;if(drag?.kind==="pointer"&&drag.id===ev.pointerId)finish();});
  listen(window,"mouseup",()=>{if(drag?.kind==="mouse")finish()});
  listen(window,"touchend",e=>{const ev=e as TouchEvent;if(drag?.kind==="touch"&&![...ev.touches].some(t=>t.identifier===drag?.id))finish()});
  listen(window,"touchcancel",()=>finish());
  listen(viewport,"wheel",e=>{
    const ev=e as WheelEvent;
    if(ev.ctrlKey)return;
    ev.preventDefault();
    move(offset.x-ev.deltaX,offset.y-ev.deltaY);
  },{passive:false});
  listen(viewport,"keydown",e=>{
    const ev=e as KeyboardEvent;
    if(ev.target!==viewport)return;
    const v:Record<string,[number,number]>={ArrowUp:[0,60],ArrowDown:[0,-60],ArrowLeft:[60,0],ArrowRight:[-60,0]};
    if(!v[ev.key])return;
    ev.preventDefault();move(offset.x+v[ev.key][0],offset.y+v[ev.key][1]);
  });
  listen(indicator,"click",e=>{
    const ev=e as MouseEvent;
    if(grab)stopGrab();
    else {grab={x:ev.clientX,y:ev.clientY,ox:offset.x,oy:offset.y};showGrab(true);}
    indicator.blur();
  });
  listen(viewport,"click",e=>{if(grab&&!blocked(e.target))stopGrab()});
  listen(window,"resize",()=>{clamp();apply()});
  // Game dock shortcuts jump to the real cards on the same blueprint.
  listen(window,"baste:focus-asset",event=>{
    const id=(event as CustomEvent<{id?:string}>).detail?.id;
    if(!id)return;
    const element=document.getElementById(id);
    if(!element||!world.contains(element))return;
    if(focusTimer){
      clearTimeout(focusTimer);focusTimer=null;
      world.style.transition="none";
      apply();
      void world.getBoundingClientRect();
    }
    const rect=element.getBoundingClientRect();
    const centerX=rect.left+rect.width/2;
    const centerY=rect.top+rect.height/2;
    world.style.transition="transform 550ms cubic-bezier(.18,1,.32,1)";
    move(offset.x+(window.innerWidth*.5-centerX),offset.y+(window.innerHeight*.46-centerY));
    focusTimer=setTimeout(()=>{world.style.transition="";focusTimer=null},630);
    if(grab)stopGrab();
  });
  showGrab(false);

  const assets=[...world.querySelectorAll<HTMLElement>("[data-drag-asset]")];
  const startAsset=(element:HTMLElement,kind:"pointer"|"mouse"|"touch",id:number,x:number,y:number)=>{
    if(assetDrag||drag)return;
    if(grab)stopGrab();
    const prior=assetOffsets.get(element)||{x:0,y:0};
    assetDrag={element,kind,id,x,y,ox:prior.x,oy:prior.y,moved:false};
    element.classList.add("asset-dragging");
    element.style.zIndex=String(++layer);
    if(kind==="pointer"){try{element.setPointerCapture(id)}catch{}}
  };
  const moveAsset=(x:number,y:number)=>{
    if(!assetDrag)return;
    const active=assetDrag;
    const dx=active.ox+x-active.x,dy=active.oy+y-active.y;
    active.moved ||= Math.hypot(x-active.x,y-active.y)>7;
    active.element.style.setProperty("--asset-dx",dx+"px");
    active.element.style.setProperty("--asset-dy",dy+"px");
    assetOffsets.set(active.element,{x:dx,y:dy});
  };
  const finishAsset=()=>{
    if(!assetDrag)return;
    const active=assetDrag;
    assetDrag=null;
    active.element.classList.remove("asset-dragging");
    if(active.moved)active.element.dataset.lastDragged=String(performance.now());
    if(active.kind==="pointer"){
      try{if(active.element.hasPointerCapture(active.id))active.element.releasePointerCapture(active.id)}catch{}
    }
  };
  for(const element of assets){
    element.draggable=false;
    element.querySelectorAll("img").forEach(img=>img.draggable=false);
    listen(element,"dragstart",e=>e.preventDefault());
    listen(element,"pointerdown",e=>{
      const ev=e as PointerEvent;
      if(ev.button!==0||blockedChild(ev.target))return;
      startAsset(element,"pointer",ev.pointerId,ev.clientX,ev.clientY);
      ev.preventDefault();ev.stopPropagation();
    });
    listen(element,"mousedown",e=>{
      const ev=e as MouseEvent;
      if(ev.button!==0||assetDrag||blockedChild(ev.target))return;
      startAsset(element,"mouse",0,ev.clientX,ev.clientY);
      ev.preventDefault();ev.stopPropagation();
    });
    listen(element,"touchstart",e=>{
      const ev=e as TouchEvent;
      if(assetDrag||!ev.changedTouches.length||blockedChild(ev.target))return;
      const touch=ev.changedTouches[0];
      startAsset(element,"touch",touch.identifier,touch.clientX,touch.clientY);
      ev.stopPropagation();
    },{passive:false});
  }
  function blockedChild(target:EventTarget|null){return target instanceof Element&&Boolean(target.closest("button,input,select,a,[data-game-control]"));}
  listen(window,"pointermove",e=>{
    const ev=e as PointerEvent;
    if(assetDrag?.kind==="pointer"&&assetDrag.id===ev.pointerId)moveAsset(ev.clientX,ev.clientY);
  });
  listen(window,"pointerup",e=>{const ev=e as PointerEvent;if(assetDrag?.kind==="pointer"&&assetDrag.id===ev.pointerId)finishAsset();});
  listen(window,"pointercancel",e=>{const ev=e as PointerEvent;if(assetDrag?.kind==="pointer"&&assetDrag.id===ev.pointerId)finishAsset();});
  listen(window,"mousemove",e=>{const ev=e as MouseEvent;if(assetDrag?.kind==="mouse")moveAsset(ev.clientX,ev.clientY);});
  listen(window,"mouseup",()=>{if(assetDrag?.kind==="mouse")finishAsset()});
  listen(window,"touchmove",e=>{
    const ev=e as TouchEvent;
    if(assetDrag?.kind!=="touch")return;
    const finger=[...ev.touches].find(t=>t.identifier===assetDrag?.id);
    if(finger){moveAsset(finger.clientX,finger.clientY);ev.preventDefault();}
  },{passive:false});
  listen(window,"touchend",e=>{const ev=e as TouchEvent;if(assetDrag?.kind==="touch"&&![...ev.touches].some(t=>t.identifier===assetDrag?.id))finishAsset();});
  listen(window,"touchcancel",finishAsset);
  for(const element of world.querySelectorAll<HTMLElement>(".photo")){
    listen(element,"pointermove",e=>{
      const ev=e as PointerEvent;
      if(assetDrag?.element===element||ev.pointerType==="touch")return;
      const rect=element.getBoundingClientRect();
      const x=Math.max(-1,Math.min(1,2*(ev.clientX-rect.left)/rect.width-1));
      const y=Math.max(-1,Math.min(1,2*(ev.clientY-rect.top)/rect.height-1));
      element.style.setProperty("--tilt-y",(x*4).toFixed(2)+"deg");
      element.style.setProperty("--tilt-x",(-y*4).toFixed(2)+"deg");
    });
    listen(element,"pointerleave",()=>{element.style.removeProperty("--tilt-x");element.style.removeProperty("--tilt-y");});
  }
  apply();
  return ()=>{
    listeners.forEach(off=>off());
    if(frame)cancelAnimationFrame(frame);
    if(focusTimer)clearTimeout(focusTimer);
    world.style.transition="";
  };
 },[viewportRef,indicatorRef,compact]);
}
