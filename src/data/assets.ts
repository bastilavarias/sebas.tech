import {lukaStickerSrc} from "./luka-sticker";
import {scooterStickerSrc} from "./scooter-sticker";
import {cpuStickerSrc} from "./cpu-sticker";
import {personalPhoto1} from "./personal-photo-01";
import {personalPhoto2} from "./personal-photo-02";
import {personalPhoto3} from "./personal-photo-03";
import {personalPhoto4} from "./personal-photo-04";
import {personalPhoto5} from "./personal-photo-05";
import {personalPhoto6} from "./personal-photo-06";
import {personalPhoto7} from "./personal-photo-07";
import {personalPhoto8} from "./personal-photo-08";
import {personalPhoto9} from "./personal-photo-09";
import {personalPhoto10} from "./personal-photo-10";
import {personalPhoto11} from "./personal-photo-11";
import {coverBible} from "./cover-bible";
import {coverAtomicHabits} from "./cover-atomic-habits";
import {coverAttackOnTitan} from "./cover-attack-on-titan";
import {coverOnePunchMan} from "./cover-one-punch-man";
import {coverMushokuTensei} from "./cover-mushoku-tensei";
import {posterFightClub} from "./poster-fight-club";
import {posterThreeIdiots} from "./poster-three-idiots";
import {posterMemento} from "./poster-memento";
import {mhotCover} from "./mhot-cover";

export const sourceImage=(path:string,width=256)=>"https://www.andregs.com/_next/image?url="+encodeURIComponent(path)+"&w="+width+"&q=95";
export type Rect=[number,number,number,number];
export type BookSpec={id:string;title:string;cover:string;width:number;height:number;rect:Rect;angle:number;back:string;legacy?:string};
export const books:BookSpec[]=[
 {id:"atomic-habits",title:"Atomic Habits",cover:coverAtomicHabits,width:160,height:230,rect:[-120,515,165,225],angle:9,back:"#a98665",legacy:"book-a"},
 {id:"holy-bible",title:"Holy Bible — Douay-Rheims",cover:coverBible,width:151,height:224,rect:[2100,1320,160,230],angle:-11,back:"#161515",legacy:"book-b"},
 {id:"attack-on-titan",title:"Attack on Titan — Volume 1",cover:coverAttackOnTitan,width:153,height:218,rect:[-350,280,160,230],angle:6,back:"#692b28",legacy:"book-c"},
 {id:"one-punch-man",title:"One-Punch Man — Volume 1",cover:coverOnePunchMan,width:153,height:221,rect:[1670,1470,152,217],angle:-14,back:"#aa6843"},
 {id:"mushoku-tensei",title:"Mushoku Tensei — Manga Volume 1",cover:coverMushokuTensei,width:151,height:218,rect:[1970,-410,157,220],angle:13,back:"#c8995a"}
];
export type PosterSpec={id:string;title:string;image:string;width:number;height:number;rect:Rect;angle:number};
export const posters:PosterSpec[]=[
 {id:"fight-club",title:"Fight Club (1999)",image:posterFightClub,width:163,height:236,rect:[-700,1100,168,238],angle:11},
 {id:"three-idiots",title:"3 Idiots (2009)",image:posterThreeIdiots,width:171,height:246,rect:[-700,25,196,196],angle:-8},
 {id:"memento",title:"Memento (2000)",image:posterMemento,width:161,height:235,rect:[210,1470,162,239],angle:-12}
];
export type AlbumSpec={id:string;title:string;artist:string;cover:string;rect:Rect;angle:number};
export const albums:AlbumSpec[]=[
 {id:"apoc-loob-ng-kabaong",title:"Loob ng Kabaong",artist:"Apoc",cover:"https://f4.bcbits.com/img/a3168554070_10.jpg",rect:[105,350,208,208],angle:-8},
 {id:"mhot-panalo-kasa",title:"Panalo Kasa",artist:"Mhot",cover:mhotCover,rect:[1062,716,208,208],angle:-9},
 {id:"kolateral-kolateral",title:"Kolateral",artist:"Kolateral",cover:"https://f4.bcbits.com/img/a0778429664_10.jpg",rect:[104,685,208,208],angle:8}
];
export type PhotoSpec={className:string;src:string;alt:string;rect:Rect;angle:number};
/**
 * Private, owner-supplied photographs. Positions are anchored to the 1440x900
 * blueprint reference stage; the background can be panned to see all 11.
 * Frame sizes honor source aspect ratios, including wide group photographs.
 */
export const photos:PhotoSpec[]=[
 {className:"photo-one",src:personalPhoto1,alt:"Family and friends sharing a meal",rect:[-30,45,246,220],angle:10},
 {className:"photo-two",src:personalPhoto2,alt:"A selfie with two dogs",rect:[15,1090,192,279],angle:-13},
 {className:"photo-three",src:personalPhoto3,alt:"Mirror selfie against a wooden wall",rect:[1770,-10,200,230],angle:7},
 {className:"photo-four",src:personalPhoto4,alt:"Friends gathered for a group selfie",rect:[1480,345,258,184],angle:12},
 {className:"photo-five",src:personalPhoto5,alt:"Two people sitting together outdoors at night",rect:[-405,840,252,224],angle:-8},
 {className:"photo-six",src:personalPhoto6,alt:"Two dogs sitting together on a chair",rect:[1390,1010,190,277],angle:14},
 {className:"photo-seven",src:personalPhoto7,alt:"Portrait in a blue suit outside a stone doorway",rect:[-500,-380,190,277],angle:-10},
 {className:"photo-eight",src:personalPhoto8,alt:"An older family member smiling for a portrait",rect:[1990,330,190,277],angle:9},
 {className:"photo-nine",src:personalPhoto9,alt:"Two people taking a mirror photo at the gym",rect:[2050,900,185,270],angle:-6},
 {className:"photo-ten",src:personalPhoto10,alt:"Two people taking a close-up selfie",rect:[-680,560,189,275],angle:10},
 {className:"photo-eleven",src:personalPhoto11,alt:"A large family group posing outdoors",rect:[615,1480,268,208],angle:-9}
];

export const stickers=[
 {className:"luka",src:lukaStickerSrc},
 {className:"sticker-go",src:"/images/go-sticker.svg",rect:[505,1130,95,80] as Rect,width:220,height:91,angle:-6},
 {className:"sticker-laravel",src:"/images/laravel-sticker.svg",rect:[1710,930,330,140] as Rect,width:194,height:200,angle:10},
 {className:"sticker-cpu",src:cpuStickerSrc,rect:[1690,-690,183,182] as Rect,width:190,height:180,angle:9},
 {className:"sticker-vue",src:"/images/vue-sticker.svg",rect:[1270,1500,160,142] as Rect,width:200,height:176,angle:-7},
 {className:"sticker-scooter",src:scooterStickerSrc,rect:[-270,1400,173,187] as Rect,width:240,height:204,angle:-8}
];
export function scenePosition(rect:Rect,width:number,height:number):React.CSSProperties {
 const [x,y,w,h]=rect;
 return {left:`calc(50% + ${x-720+(w-width)/2}px)`,top:`calc(50% + ${y-450+(h-height)/2}px)`};
}
