/* eslint-disable @next/next/no-img-element */
import type{CSSProperties}from "react";
import {scenePosition,type Rect} from "@/data/assets";
export function Sticker({className,src,rect,width,height,angle,entryDelay=0}:{className:string;src:string;rect?:Rect;width?:number;height?:number;angle?:number;entryDelay?:number}){
 const style={...(rect&&width&&height?{...scenePosition(rect,width,height),width,height,transform:`rotate(${angle||0}deg)`}:{}),"--entry-delay":entryDelay+"ms"} as CSSProperties;
 return <img data-drag-asset className={"world-sticker "+className} src={src} style={style} alt="" draggable={false} loading="lazy"/>;
}
