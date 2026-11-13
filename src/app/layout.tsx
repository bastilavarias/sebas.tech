import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { profile } from "@/data/profile";
import { canonicalHomepage, isIndexable, metadataOrigin, seoDescription, seoTitle, shareImageAlt, siteName } from "@/lib/site-seo";
import "./globals.css";

export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#a52e3d"};
export const metadata:Metadata={
 metadataBase:new URL(metadataOrigin),
 title:seoTitle,
 description:seoDescription,
 applicationName:"Baste — Personal Digital Workspace",
 creator:profile.name,
 publisher:profile.name,
 category:"personal website",
 robots:{
  index:isIndexable,
  follow:isIndexable,
  ...(isIndexable
   ? {googleBot:{index:true,follow:true,"max-snippet":-1,"max-image-preview":"large" as const,"max-video-preview":-1}}
   : {googleBot:{index:false,follow:false}})
 },
 openGraph:{
  type:"website",
  siteName,
  title:seoTitle,
  description:seoDescription,
  locale:"en_PH",
  ...(canonicalHomepage?{url:canonicalHomepage}:{}),
  images:[{url:"/opengraph-image",width:1200,height:630,alt:shareImageAlt}]
 },
 twitter:{
  card:"summary_large_image",
  title:seoTitle,
  description:seoDescription,
  images:["/opengraph-image"]
 },
 ...(canonicalHomepage?{alternates:{canonical:canonicalHomepage}}:{})
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en-PH" className={GeistSans.variable} suppressHydrationWarning><body>{children}</body></html>;
}
