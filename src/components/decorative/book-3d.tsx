/* eslint-disable @next/next/no-img-element */
import type {CSSProperties} from "react";
import {scenePosition,type BookSpec} from "@/data/assets";
export function Book3D({book,entryDelay=0}:{book:BookSpec;entryDelay?:number}){
 const style={
  ...scenePosition(book.rect,book.width,book.height),
  width:book.width,height:book.height,
  "--book-angle":book.angle+"deg","--book-back":book.back,
  "--entry-delay":entryDelay+"ms"
 } as CSSProperties;
 return <figure data-drag-asset className={"book-cover "+(book.legacy||"book-extra")} style={style} aria-label={"Book: "+book.title}>
  <div className="book-object">
   <div className="book-back"/><div className="book-pages"/>
   <img className="book-front" src={book.cover} alt={book.title+" cover"} draggable={false} loading="lazy"/>
  </div>
 </figure>;
}
