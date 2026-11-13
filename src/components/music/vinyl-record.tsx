/* eslint-disable @next/next/no-img-element */
"use client";
import type{CSSProperties}from "react";
import {useMusic}from "@/components/music/music-provider";
import {scenePosition,type AlbumSpec}from "@/data/assets";
export function VinylRecord({album,entryDelay=0}:{album:AlbumSpec;entryDelay?:number}){
 const music=useMusic();
 const open=music.openRecord===album.id;
 const playing=open&&music.playing;
 const preview=open&&music.previewing;
 const src=music.selectedId===album.id?music.cover:album.cover;
 const style={...scenePosition(album.rect,208,208),"--record-angle":album.angle+"deg","--entry-delay":entryDelay+"ms"} as CSSProperties;
 return <figure
  data-drag-asset data-album={album.id} data-open={String(open)} data-playing={String(playing)}
  className={["album-record",open?"is-open":"",playing?"is-playing":"",preview?"is-previewing":""].filter(Boolean).join(" ")}
  role="button" tabIndex={0} aria-pressed={open} aria-label={(open?"Close ":"Open ")+album.title+" vinyl"}
  style={style}
  onClick={e=>void music.openVinyl(album.id,Number(e.currentTarget.dataset.lastDragged||0))}
  onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();void music.openVinyl(album.id)}}}>
  <div className="record-vinyl"><div className="record-grooves"/><div className="record-center"><img src={src} alt="" draggable={false}/></div></div>
  <div className="record-sleeve"><img src={src} alt={album.title+" album artwork"} draggable={false}/><span className="record-sleeve-shade"/></div>
  <span className="record-tooltip"><strong>{album.title}</strong><small>{album.artist}</small></span>
 </figure>;
}
