/**
 * Generate a Netlify-ready library index from metadata plus *present* audio files.
 * No audio is downloaded, modified, or copied. Empty folders remain preview-only.
 */
import {readdir,readFile,mkdir,writeFile} from "node:fs/promises";
import {fileURLToPath} from "node:url";
import path from "node:path";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const musicRoot=path.join(root,"public","music");
const manifestRoot=path.join(root,"src","data","music-manifests");
const ids=["apoc-loob-ng-kabaong","mhot-panalo-kasa","kolateral-kolateral"];
const playable=/\.(mp3|m4a|aac|flac|wav|ogg)$/i;
const normalize=(s)=>s.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase()
  .replace(/&/g," and ").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ");
const audioUrl=(id,file)=>"/music/"+encodeURIComponent(id)+"/"+encodeURIComponent(file);

function locateFile(track,filenames,artist){
  if(track.filename&&filenames.includes(track.filename))return track.filename;
  const numbered=filenames.find(f=>new RegExp("^0?"+track.number+"(?=[ ._-]|$)").test(f));
  if(numbered)return numbered;
  const title=normalize(track.title);
  return filenames.find(f=>normalize(f.replace(/\.[^.]+$/,""))===title)
    ||filenames.find(f=>normalize(f.replace(/\.[^.]+$/,""))===normalize(artist)+" "+title)
    ||null;
}

const albums=[];
for(const id of ids){
  const metadata=JSON.parse(await readFile(path.join(manifestRoot,id+".json"),"utf8"));
  const directory=path.join(musicRoot,id);
  await mkdir(directory,{recursive:true});
  const files=(await readdir(directory,{withFileTypes:true}))
    .filter(f=>f.isFile()&&playable.test(f.name)).map(f=>f.name);
  const tracks=metadata.tracks.map(track=>{
    const found=locateFile(track,files,metadata.artist);
    return {...track,url:found?audioUrl(id,found):null};
  });
  albums.push({id:metadata.id,title:metadata.title,artist:metadata.artist,tracks});
  console.log(metadata.title+": "+tracks.filter(t=>t.url).length+"/"+tracks.length+" playable tracks");
}
await mkdir(musicRoot,{recursive:true});
await writeFile(path.join(musicRoot,"library.json"),JSON.stringify({version:1,albums},null,2)+"\n");
console.log("Wrote public/music/library.json for static hosting");
