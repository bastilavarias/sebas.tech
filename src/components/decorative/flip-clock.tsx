"use client";
import {useEffect,useMemo,useRef,useState}from "react";
const format=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Manila",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});
type Stamp={hour:string;minute:string;second:string};
const blank:Stamp={hour:"00",minute:"00",second:"00"};
function now():Stamp{
 const result={...blank};
 for(const t of format.formatToParts(new Date())){
  if(t.type==="hour"||t.type==="minute"||t.type==="second")result[t.type]=t.value;
 }
 return result;
}
function Half({value,position,name}:{value:string;position:"top"|"bottom";name:string}){
 return <span className={`clock-half clock-half-${position} ${name}`} aria-hidden="true"><span className="clock-face">{value}</span></span>;
}
function FlipDigit({value,kind}:{value:string;kind:string}){
 const [display,setDisplay]=useState("00");
 const [prior,setPrior]=useState("00");
 const [flipping,setFlipping]=useState(false);
 const latest=useRef("00");
 const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const frame=useRef<number|null>(null);
 useEffect(()=>{
  if(latest.current===value)return;
  const previous=latest.current;
  latest.current=value;
  if(timer.current)clearTimeout(timer.current);
  if(frame.current!==null)cancelAnimationFrame(frame.current);
  if(previous==="00"||document.hidden||matchMedia("(prefers-reduced-motion: reduce)").matches){
   setPrior(value);setDisplay(value);setFlipping(false);
   return;
  }
  setFlipping(false);
  setPrior(previous);
  setDisplay(value);
  // Trigger the next fold in a fresh rendering frame, even if a second tick
  // interrupts a still-running flip. No state dependency cancels this timer.
  frame.current=requestAnimationFrame(()=>{
   frame.current=null;
   setFlipping(true);
   timer.current=setTimeout(()=>{setFlipping(false);timer.current=null},490);
  });
 },[value]);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);if(frame.current!==null)cancelAnimationFrame(frame.current)},[]);
 return <span className={"clock-unit is-enhanced"+(flipping?" is-flipping":"")} data-clock-part={kind}>
  <strong className="clock-value">{display}</strong>
  <Half value={display} position="top" name="clock-static-top"/>
  <Half value={flipping?prior:display} position="bottom" name="clock-static-bottom"/>
  <Half value={prior} position="top" name="clock-flap-top"/>
  <Half value={display} position="bottom" name="clock-flap-bottom"/>
 </span>;
}
export function FlipClock(){
 const [value,setValue]=useState<Stamp>(blank);
 useEffect(()=>{
  const tick=()=>setValue(now());
  tick();const interval=setInterval(tick,1000);
  document.addEventListener("visibilitychange",tick);
  return()=>{clearInterval(interval);document.removeEventListener("visibilitychange",tick)};
 },[]);
 const parts=useMemo(()=>Object.entries(value) as [keyof Stamp,string][],[value]);
 return <div className="clock-tile" data-drag-asset role="timer" aria-label="Clock in Philippine time">
  {parts.map(([kind,number])=><FlipDigit key={kind} kind={kind} value={number}/>)}
  <small>UTC+08 · PH</small>
 </div>;
}
