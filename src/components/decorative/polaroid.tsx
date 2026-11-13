/* eslint-disable @next/next/no-img-element */
import type {CSSProperties} from "react";
import {scenePosition,type PhotoSpec} from "@/data/assets";

/** Photograph stays unaltered; only the physical white Polaroid frame is styled. */
export function Polaroid({photo,entryDelay=0}:{photo:PhotoSpec;entryDelay?:number}){
 const {className,src,alt,rect,angle}=photo;
 const style={
  ...scenePosition(rect,rect[2],rect[3]),
  width:rect[2],height:rect[3],
  "--photo-angle":angle+"deg",
  "--entry-delay":entryDelay+"ms",
  transform:"rotate("+angle+"deg)"
 } as CSSProperties;
 return <figure data-drag-asset className={"photo "+className} style={style} aria-label={"Draggable Polaroid: "+alt}>
  <img src={src} alt="" draggable={false} loading="lazy" decoding="async" />
 </figure>;
}
