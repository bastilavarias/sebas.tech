"use client";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import {cn} from "@/lib/utils";
export function Slider({className,value,defaultValue,min=0,max=100,...props}:React.ComponentProps<typeof SliderPrimitive.Root>){
 const vals=React.useMemo(()=>Array.isArray(value)?value:Array.isArray(defaultValue)?defaultValue:[min],[value,defaultValue,min]);
 return <SliderPrimitive.Root data-slot="slider" className={cn("relative flex w-full touch-none select-none items-center",className)} value={value} defaultValue={defaultValue} min={min} max={max} {...props}>
  <SliderPrimitive.Track data-slot="slider-track" className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary"><SliderPrimitive.Range data-slot="slider-range" className="absolute h-full bg-primary"/></SliderPrimitive.Track>
  {vals.map((_,i)=><SliderPrimitive.Thumb key={i} data-slot="slider-thumb" className="block size-3 shrink-0 rounded-full border-2 border-primary bg-background shadow-sm focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50"/>)}
 </SliderPrimitive.Root>;
}
