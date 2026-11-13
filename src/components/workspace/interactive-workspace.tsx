/* eslint-disable @next/next/no-img-element */
"use client";
import {useEffect,useRef} from "react";
import {ArrowsOutCardinal} from "@phosphor-icons/react/ssr";
import {Button} from "@/components/ui/button";
import {MusicProvider} from "@/components/music/music-provider";
import {MusicDock} from "@/components/music/music-dock";
import {ProfileCard} from "@/components/profile/profile-card";
import {FocusCard} from "@/components/profile/focus-card";
import {Polaroid} from "@/components/decorative/polaroid";
import {MobileAlbumPicker} from "@/components/workspace/mobile-album-picker";
import {Sticker} from "@/components/decorative/sticker";
import {Book3D} from "@/components/decorative/book-3d";
import {MoviePoster} from "@/components/decorative/movie-poster";
import {LcdClock} from "@/components/decorative/lcd-clock";
import {MiniChess} from "@/components/games/chess/mini-chess";
import {PicturePuzzle} from "@/components/games/puzzle/picture-puzzle";
import {RetroPong} from "@/components/games/pong/retro-pong";
import {Tile2048} from "@/components/games/tile-2048/tile-2048";
import {VinylRecord} from "@/components/music/vinyl-record";
import {albums,books,posters,photos,stickers} from "@/data/assets";
import {useSpatialInteraction} from "@/hooks/use-spatial-interaction";

function Stage(){
 const viewportRef=useRef<HTMLElement|null>(null);
 const indicatorRef=useRef<HTMLButtonElement|null>(null);
 useSpatialInteraction(viewportRef,indicatorRef);
 // The profile card's text wraps differently on phone, tablet and desktop.
 // Keep the separate draggable focus card 16px below its real rendered height.
 useEffect(()=>{
  const scene=document.getElementById("scene");
  const profile=document.getElementById("home-panel");
  if(!scene||!profile)return;
  const update=()=>scene.style.setProperty("--profile-half-height",profile.offsetHeight/2+"px");
  const observer=new ResizeObserver(update);
  observer.observe(profile);
  update();
  return()=>{observer.disconnect();scene.style.removeProperty("--profile-half-height")};
 },[]);
 return <>
  <main className="viewport" ref={viewportRef} tabIndex={0} aria-label="Baste workspace. Scroll to browse on mobile or drag the background to explore on desktop.">
   <div className="world" id="world">
    <div className="blueprint" aria-hidden="true">
     <div className="blueprint-weather"/>
     <div className="blueprint-grid"/>
     <div className="blueprint-diagonal"/>
    </div>
    <div className="scene" id="scene">
     <aside className="mobile-desktop-notice" aria-label="Viewing tip">
      <span className="mobile-notice-dot" aria-hidden="true"/>
      Best experienced on desktop
     </aside>
     {photos.map((photo,i)=><Polaroid key={photo.className} photo={photo} entryDelay={360+i*120}/>)}
     {stickers.map((sticker,i)=><Sticker key={sticker.className} {...sticker} entryDelay={480+i*120}/>)}
     {books.map((book,i)=><Book3D key={book.id} book={book} entryDelay={600+i*120}/>)}
     {posters.map((poster,i)=><MoviePoster key={poster.id} poster={poster} entryDelay={720+i*120}/>)}
     {albums.map((album,i)=><VinylRecord key={album.id} album={album} entryDelay={240+i*120}/>)}
     <MiniChess/>
     <PicturePuzzle/>
     <RetroPong/>
     <Tile2048/>
     <div data-drag-asset className="reference-badge" aria-label="Baste badge">BASTE</div>
     <ProfileCard/>
     <FocusCard/>
     <MobileAlbumPicker/>
     <LcdClock/>
    </div>
   </div>
  </main>
  <Button ref={indicatorRef} variant="outline" id="drag-indicator" className="drag-indicator" title="Click to grab without holding the mouse" aria-pressed="false">
   <ArrowsOutCardinal size={18} weight="regular"/><span className="drag-label">Drag to move</span>
  </Button>
  <MusicDock/>
 </>;
}
export function InteractiveWorkspace(){
 return <MusicProvider><Stage/></MusicProvider>;
}
