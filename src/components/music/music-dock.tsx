/* eslint-disable @next/next/no-img-element */
"use client";
import {useEffect,useState}from "react";
import {House,MusicNotes,Moon,Sun,SpeakerHigh,SpeakerSlash,SkipBack,SkipForward,Play,Pause,Stop,GameController, SquaresFour, MonitorPlay, Calculator} from "@phosphor-icons/react/ssr";
import {Button}from "@/components/ui/button";
import {Separator}from "@/components/ui/separator";
import {Slider}from "@/components/ui/slider";
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger}from "@/components/ui/tooltip";
import {useMusic}from "@/components/music/music-provider";
const format=(seconds:number)=>{
 const n=Math.floor(Number.isFinite(seconds)?seconds:0);
 return Math.floor(n/60)+":"+String(n%60).padStart(2,"0");
};
function DockAction({label,children,onClick,id}:{label:string;children:React.ReactNode;onClick:()=>void;id?:string}){
 return <Tooltip><TooltipTrigger asChild>
  <Button variant="ghost" size="icon" className="dock-action" id={id} aria-label={label} title={label} onClick={onClick}>{children}</Button>
 </TooltipTrigger><TooltipContent side="top">{label}</TooltipContent></Tooltip>;
}
export function MusicDock(){
 const music=useMusic();
 const [theme,setTheme]=useState<"light"|"dark">("light");
 const focusSection=(id:string)=>{
  if(window.matchMedia("(max-width: 767px)").matches){
   document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});
  }else window.dispatchEvent(new CustomEvent("baste:focus-asset",{detail:{id}}));
 };
 const jumpToChess=()=>focusSection("mini-chess");
 const jumpToPuzzle=()=>focusSection("picture-puzzle");
 const jumpToPong=()=>focusSection("retro-pong");
 const jumpTo2048=()=>focusSection("tile-2048");
 useEffect(()=>{
  let selected:"light"|"dark"="light";
  try{
   const saved=localStorage.getItem("baste-theme");
   if(saved==="light"||saved==="dark")selected=saved;
   else selected=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
  }catch{}
  setTheme(selected);
  document.documentElement.dataset.theme=selected;
 },[]);
 const toggleTheme=()=>{
  const next=theme==="dark"?"light":"dark";
  setTheme(next);document.documentElement.dataset.theme=next;
  try{localStorage.setItem("baste-theme",next)}catch{}
 };
 const current=music.track;
 const end=music.duration>0?format(music.duration):current?.duration||"0:00";
 const progress=music.duration>0?Math.round(music.currentTime/music.duration*1000):0;
 return <TooltipProvider>
  <nav id="main-dock" className={["dock",music.expanded?"has-player":"",music.playing?"is-audio-playing":music.previewing?"is-preview-playing":""].filter(Boolean).join(" ")} aria-label="Home and music controls">
   <Tooltip><TooltipTrigger asChild>
    <Button variant="ghost" size="sm" className="dock-link active" aria-current="page" aria-label="Home" title="Home" onClick={()=>focusSection("home-panel")}>
     <House size={20} weight="regular"/><span className="dock-label">Home</span>
    </Button>
   </TooltipTrigger><TooltipContent>Home</TooltipContent></Tooltip>
   <Tooltip><TooltipTrigger asChild>
    <Button variant="ghost" size="icon" className="dock-link" id="music-dock"
     aria-label={music.expanded?"Collapse music player":"Expand music player"}
     aria-expanded={music.expanded} aria-controls="dock-player"
     title={music.expanded?"Collapse music player":"Expand music player"}
     onClick={music.toggleDock}>
      <MusicNotes size={20} weight="regular"/><span className="dock-label">Music</span>
    </Button>
   </TooltipTrigger><TooltipContent>Music player</TooltipContent></Tooltip>
   <DockAction id="games-dock" label="Go to Chess mini game" onClick={jumpToChess}>
    <GameController size={20} weight="regular"/><span className="gamepad-ping" aria-hidden="true"/>
   </DockAction>
   <DockAction id="puzzle-dock" label="Go to picture puzzle" onClick={jumpToPuzzle}>
    <SquaresFour size={20} weight="regular"/>
   </DockAction>
   <DockAction id="pong-dock" label="Go to Pong arcade" onClick={jumpToPong}>
    <MonitorPlay size={20} weight="regular"/>
   </DockAction>
   <DockAction id="tile-2048-dock" label="Go to 2048" onClick={jumpTo2048}>
    <Calculator size={20} weight="regular"/>
   </DockAction>
   <div className="dock-player" id="dock-player" role="group" aria-label="Music player" inert={!music.expanded}>
    <div className="dock-player-inner">
     <img className="dock-track-art" id="dock-track-art" src={music.cover} alt={music.selectedAlbum.title+" album cover"} draggable={false}/>
     <div className="dock-track-meta">
      <div className="dock-track-line">
       <strong id="dock-track-title">{current?.title||music.selectedAlbum.title}</strong>
       <span className="dock-equalizer" aria-hidden="true"><i/><i/><i/><i/></span>
      </div>
      <div className="dock-track-subline">
       <span id="dock-track-artist">{music.selectedAlbum.artist+" · "+(music.playing?"Playing":music.previewing?"Vinyl demo · silent":current?.url?"Paused":"No audio yet")}</span>
       <span id="dock-track-time">{format(music.currentTime)} / {end}</span>
      </div>
      <Slider id="dock-seek" aria-label="Seek in song" min={0} max={1000} value={[progress]} disabled={!music.duration} onValueChange={v=>music.seek(v[0]/1000)} className="dock-track-seek"/>
     </div>
     <div className="dock-transport">
      <Button variant="ghost" size="icon" id="dock-prev" aria-label="Previous song" title="Previous song" onClick={()=>void music.skip(-1)}><SkipBack size={19} weight="fill"/></Button>
      <Button variant="ghost" size="icon" className="dock-play" id="dock-play" aria-label={music.playing?"Pause song":music.previewing?"Pause visual preview":"Play song"} title="Play / pause" onClick={()=>void music.togglePlay()}>
       <Play className="dock-play-icon" size={18} weight="fill"/><Pause className="dock-pause-icon" size={18} weight="fill"/>
      </Button>
      <Button variant="ghost" size="icon" id="dock-next" aria-label="Next song" title="Next song" onClick={()=>void music.skip(1)}><SkipForward size={19} weight="fill"/></Button>
      <span className="dock-transport-separator" aria-hidden="true"/>
      <Button variant="ghost" size="icon" id="dock-stop" className="dock-stop" aria-label="Stop music" title="Stop music" disabled={!music.openRecord&&!music.playing&&!music.previewing} onClick={music.stopPlayback}><Stop size={17} weight="fill"/></Button>
     </div>
    </div>
   </div>
   <Separator orientation="vertical" className="dock-divider"/>
   <DockAction id="theme-toggle" label={theme==="light"?"Switch to dark theme":"Switch to light theme"} onClick={toggleTheme}>
    {theme==="light"?<Moon size={20} weight="regular"/>:<Sun size={20} weight="regular"/>}
   </DockAction>
   <DockAction id="sound-toggle" label={music.muted?"Unmute music":"Mute music"} onClick={music.toggleMute}>
    {music.muted?<SpeakerSlash size={20} weight="regular"/>:<SpeakerHigh size={20} weight="regular"/>}
   </DockAction>
  </nav>
  <div className="sr-only" role="status" aria-live="polite">{music.status}</div>
 </TooltipProvider>;
}
