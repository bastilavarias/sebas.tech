"use client";
import {createContext,useCallback,useContext,useEffect,useMemo,useRef,useState,type ReactNode} from "react";
import {albums,mediaPath,matchTrack,coverExtensions,type LoadedAlbum,type TrackMeta} from "@/data/music";

type MusicContextValue={
  selectedId:string;selectedAlbum:typeof albums[number];track:TrackMeta|null;
  cover:string;expanded:boolean;playing:boolean;previewing:boolean;
  openRecord:string|null;available:number;totalTracks:number;
  currentTime:number;duration:number;muted:boolean;status:string;
  toggleDock:()=>void;togglePlay:()=>Promise<void>;stopPlayback:()=>void;
  openVinyl:(id:string,draggedAt?:number)=>Promise<void>;
  skip:(direction:number)=>Promise<void>;
  seek:(fraction:number)=>void;toggleMute:()=>void;
  refresh:()=>Promise<void>;
};
const Context=createContext<MusicContextValue|null>(null);
export function useMusic(){
 const value=useContext(Context);
 if(!value)throw new Error("Music components require MusicProvider");
 return value;
}
type AlbumMap=Record<string,LoadedAlbum>;
const initialId=albums[0].id;
export function MusicProvider({children}:{children:ReactNode}){
 const audio=useRef<HTMLAudioElement|null>(null);
 const currentSource=useRef("");
 const libraryRef=useRef<AlbumMap>({});
 const selectedRef=useRef(initialId);
 const trackRef=useRef(0);
 const generation=useRef(0);
 const skipRef=useRef<(direction:number)=>Promise<void>>(async()=>{});
 const [library,setLibrary]=useState<AlbumMap>({});
 const [selectedId,setSelectedId]=useState(initialId);
 const [trackIndex,setTrackIndex]=useState(0);
 const [openRecord,setOpenRecord]=useState<string|null>(null);
 const [previewing,setPreviewing]=useState(false);
 const [expanded,setExpanded]=useState(false);
 const [playing,setPlaying]=useState(false);
 const [time,setTime]=useState(0);
 const [duration,setDuration]=useState(0);
 const [muted,setMuted]=useState(false);
 const [status,setStatus]=useState("Choose a record to listen.");

 const readLibrary=useCallback(async()=>{
   const id=++generation.current;
   try{
     const catalogResponse=await fetch("/music/catalog.json",{cache:"no-store"});
     if(!catalogResponse.ok)throw new Error("Album catalog is unavailable");
     const catalog=await catalogResponse.json() as {albums:Array<{id:string}>};
     const filtered=catalog.albums.filter(a=>albums.some(x=>x.id===a.id));
     const loaded=await Promise.all(filtered.map(async entry=>{
       const folder="/music/"+encodeURIComponent(entry.id)+"/";
       const [manifestResponse,listResponse]=await Promise.all([
         fetch(folder+"album.json",{cache:"no-store"}),fetch(folder,{cache:"no-store"})
       ]);
       if(!manifestResponse.ok||!listResponse.ok)throw new Error("Unable to read album "+entry.id);
       const [manifest,files]=await Promise.all([
         manifestResponse.json() as Promise<{title:string;artist:string;tracks:TrackMeta[]}>,
         listResponse.json() as Promise<Array<{type:string;name:string}>>
       ]);
       const names=files.filter(f=>f?.type==="file"&&typeof f.name==="string"&&!f.name.includes("/")).map(f=>f.name);
       const art=names.find(f=>coverExtensions.test(f));
       const fallback=albums.find(a=>a.id===entry.id)!;
       const next:LoadedAlbum={
         id:entry.id,title:manifest.title,artist:manifest.artist,
         cover:art?mediaPath(entry.id,art):fallback.cover,
         tracks:manifest.tracks.map(t=>{
           const file=matchTrack(t,names,manifest.artist);
           return {...t,url:file?mediaPath(entry.id,file):null};
         })
       };
       return next;
     }));
     if(id!==generation.current)return libraryRef.current;
     const next:AlbumMap={};
     for(const album of loaded)next[album.id]=album;
     libraryRef.current=next;setLibrary(next);
     return next;
   }catch{
     // Vercel's static export has no server-mounted music library or Nginx
     // directory-index API. Keep the album artwork and controls usable as
     // visual previews without shipping full third-party MP3 recordings.
     const fallback:AlbumMap={};
     for(const a of albums)fallback[a.id]={id:a.id,title:a.title,artist:a.artist,cover:a.cover,tracks:[]};
     if(id===generation.current){
       libraryRef.current=fallback;
       setLibrary(fallback);
       setStatus("Album preview — audio is available in the private music library.");
     }
     return fallback;
   }
 },[]);
 useEffect(()=>{void readLibrary()},[readLibrary]);

 const stop=useCallback(()=>{
   const el=audio.current;
   if(el){
     el.pause();
     el.removeAttribute("src");
     el.load();
   }
   currentSource.current="";
   setPlaying(false);setTime(0);setDuration(0);
 },[]);
 const choose=useCallback((id:string)=>{
   if(id!==selectedRef.current){
     stop();
     selectedRef.current=id;setSelectedId(id);
     trackRef.current=0;setTrackIndex(0);
   }
   setOpenRecord(id);setPreviewing(false);
 },[stop]);
 const playTrack=useCallback(async(id:string,nextIndex:number,lib:AlbumMap=libraryRef.current)=>{
   const chosen=lib[id];const song=chosen?.tracks[nextIndex];
   if(!song)return false;
   trackRef.current=nextIndex;setTrackIndex(nextIndex);
   setExpanded(true);setOpenRecord(id);
   if(!song.url){
     stop();setPreviewing(true);
     setStatus("Visual preview only — upload "+song.title+" to play it.");
     return false;
   }
   setPreviewing(false);
   const el=audio.current;
   if(!el)return false;
   if(currentSource.current!==song.url){
     el.pause();
     el.src=song.url;
     currentSource.current=song.url;
     el.load();
   }
   try{
     await el.play();
     setPlaying(true);setStatus("Playing "+song.title);
     return true;
   }catch(error){
     setPlaying(false);
     setStatus(error instanceof DOMException&&error.name==="NotAllowedError"?
       "Tap play to enable audio":"Unable to play "+song.title);
     return false;
   }
 },[stop]);
 const openVinyl=useCallback(async(id:string,draggedAt=0)=>{
   if(draggedAt&&performance.now()-draggedAt<330)return;
   if(openRecord===id){
     stop();setOpenRecord(null);setPreviewing(false);setExpanded(false);
     return;
   }
   choose(id);setExpanded(true);setPreviewing(true);
   setStatus("Checking "+(albums.find(a=>a.id===id)?.title||id)+" tracks…");
   const lib=await readLibrary();
   if(selectedRef.current!==id)return;
   const tracks=lib[id]?.tracks||[];
   const target=tracks.findIndex(t=>t.url);
   if(target>=0)await playTrack(id,target,lib);
   else setStatus("Vinyl preview only — no public audio hosted.");
 },[choose,openRecord,playTrack,readLibrary,stop]);
 const togglePlay=useCallback(async()=>{
   const el=audio.current;
   if(el&&!el.paused){
     el.pause();setPlaying(false);setStatus("Paused");
     return;
   }
   if(el&&currentSource.current){
     try{await el.play();setPlaying(true)}catch{setStatus("Tap again to enable audio")}
     return;
   }
   if(previewing){setPreviewing(false);setStatus("Visual preview paused");return;}
   const id=selectedRef.current;
   const lib=await readLibrary();
   const tracks=lib[id]?.tracks||[];
   const target=tracks[trackRef.current]?.url?trackRef.current:tracks.findIndex(t=>t.url);
   if(target>=0)await playTrack(id,target,lib);
   else{
     setOpenRecord(id);setExpanded(true);setPreviewing(true);
     setStatus("Vinyl preview only — no public audio hosted.");
   }
 },[playTrack,previewing,readLibrary]);
 const skip=useCallback(async(direction:number)=>{
   const id=selectedRef.current;const list=libraryRef.current[id]?.tracks||[];
   let next=trackRef.current+direction;
   if(next<0||next>=list.length){
     if(direction>0){stop();setOpenRecord(null);setPreviewing(false);setExpanded(false);}
     return;
   }
   const hasMusic=list.some(t=>t.url);
   if(hasMusic){
     while(next>=0&&next<list.length&&!list[next].url)next+=direction;
     if(next<0||next>=list.length){
       if(direction>0){stop();setOpenRecord(null);setPreviewing(false);setExpanded(false);}
       return;
     }
     await playTrack(id,next);
   }else{
     stop();trackRef.current=next;setTrackIndex(next);setOpenRecord(id);
     setPreviewing(true);setExpanded(true);
   }
 },[playTrack,stop]);
 skipRef.current=skip;
 const toggleDock=useCallback(()=>{
   if(expanded){
     stop();setOpenRecord(null);setPreviewing(false);setExpanded(false);
   }else{
     setExpanded(true);void readLibrary();
   }
 },[expanded,readLibrary,stop]);
 const stopPlayback=useCallback(()=>{
   stop();
   setOpenRecord(null);
   setPreviewing(false);
   setExpanded(false);
   trackRef.current=0;
   setTrackIndex(0);
   setStatus("Music stopped");
 },[stop]);
 const seek=useCallback((fraction:number)=>{
   const el=audio.current;
   if(el&&Number.isFinite(el.duration)&&el.duration>0){
     el.currentTime=Math.max(0,Math.min(el.duration,el.duration*fraction));
     setTime(el.currentTime);
   }
 },[]);
 const toggleMute=useCallback(()=>{
   const next=!muted;setMuted(next);
   if(audio.current)audio.current.muted=next;
 },[muted]);
 const selectedAlbum=albums.find(a=>a.id===selectedId)||albums[0];
 const track=library[selectedId]?.tracks[trackIndex]||null;
 const cover=library[selectedId]?.cover||selectedAlbum.cover;
 const counts=useMemo(()=>{
   const entries=Object.values(library);
   return {available:entries.reduce((n,x)=>n+x.tracks.filter(t=>t.url).length,0),
     total:entries.reduce((n,x)=>n+x.tracks.length,0)};
 },[library]);
 const value:MusicContextValue={
   selectedId,selectedAlbum,track,cover,expanded,playing,previewing,
   openRecord,available:counts.available,totalTracks:counts.total,
   currentTime:time,duration,muted,status,
   toggleDock,togglePlay,stopPlayback,openVinyl,skip,seek,toggleMute,refresh:async()=>{await readLibrary()}
 };
 return <Context.Provider value={value}>
  <audio ref={audio} preload="metadata" aria-hidden
    onTimeUpdate={e=>setTime(e.currentTarget.currentTime)}
    onLoadedMetadata={e=>setDuration(e.currentTarget.duration)}
    onDurationChange={e=>setDuration(e.currentTarget.duration)}
    onPlay={()=>setPlaying(true)}
    onPause={()=>setPlaying(false)}
    onEnded={()=>{void skipRef.current(1)}}
    onError={()=>{setPlaying(false);setStatus("Audio file could not be loaded");}}
   />
  {children}
 </Context.Provider>;
}
