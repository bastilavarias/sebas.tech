import {albums} from "@/data/assets";
export {albums};
export type TrackMeta={number:number;title:string;duration:string;filename:string|null;expectedStem?:string;url?:string|null};
export type LoadedAlbum={id:string;title:string;artist:string;cover:string;tracks:TrackMeta[]};
export const audioExtensions=/\.(mp3|m4a|aac|flac|wav|ogg)$/i;
export const coverExtensions=/^cover\.(jpe?g|png|webp|svg)$/i;
export const mediaPath=(id:string,file:string)=>"/music/"+encodeURIComponent(id)+"/"+encodeURIComponent(file);
export function normalizeTrack(s:string){return s.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/&/g," and ").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ");}
export function matchTrack(track:TrackMeta,filenames:string[],artist:string){
 const allowed=filenames.filter(f=>audioExtensions.test(f));
 if(track.filename&&allowed.includes(track.filename))return track.filename;
 const numbered=allowed.find(f=>new RegExp("^0?"+track.number+"(?=[ ._-]|$)").test(f));
 if(numbered)return numbered;
 const title=normalizeTrack(track.title);
 return allowed.find(f=>normalizeTrack(f.replace(/\.[^.]+$/,""))===title)||
 allowed.find(f=>normalizeTrack(f.replace(/\.[^.]+$/,""))===normalizeTrack(artist)+" "+title)||null;
}
