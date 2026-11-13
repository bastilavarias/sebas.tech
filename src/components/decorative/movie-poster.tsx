/* eslint-disable @next/next/no-img-element */
import type {CSSProperties} from "react";
import {scenePosition,type PosterSpec} from "@/data/assets";

/** Flat paper print, deliberately not the volumetric book treatment. */
export function MoviePoster({poster,entryDelay=0}:{poster:PosterSpec;entryDelay?:number}){
 const style={
  ...scenePosition(poster.rect,poster.width,poster.height),
  width:poster.width,height:poster.height,
  "--poster-angle":poster.angle+"deg",
  "--entry-delay":entryDelay+"ms"
 } as CSSProperties;
 return <figure data-drag-asset className={"movie-poster poster-"+poster.id} style={style} aria-label={"Movie poster: "+poster.title}>
  <img src={poster.image} alt={poster.title+" theatrical poster"} draggable={false} loading="lazy" decoding="async" />
 </figure>;
}
