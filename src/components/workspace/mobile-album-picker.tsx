/* eslint-disable @next/next/no-img-element */
"use client";
import {albums} from "@/data/assets";
import {useMusic} from "@/components/music/music-provider";

/** Small-screen music entry points, replacing the offscreen draggable sleeves. */
export function MobileAlbumPicker(){
 const music=useMusic();
 return <section className="mobile-albums" aria-label="Favorite music">
  <div className="mobile-section-heading">
   <h2>On repeat</h2>
   <span>Pick a record</span>
  </div>
  <div className="mobile-album-list">
   {albums.map(album=><button type="button" key={album.id}
    className="mobile-album-button"
    aria-label={"Listen to "+album.title+" by "+album.artist}
    aria-pressed={music.openRecord===album.id}
    onClick={()=>void music.openVinyl(album.id)}>
    <img src={album.cover} alt="" loading="lazy" draggable={false}/>
    <span className="mobile-album-name">{album.title}</span>
    <span className="mobile-album-artist">{album.artist}</span>
   </button>)}
  </div>
 </section>;
}
