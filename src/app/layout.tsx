import type { Metadata, Viewport } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { GeistSans } from "geist/font/sans";
import { profile } from "@/data/profile";
import { canonicalHomepage, isIndexable, metadataOrigin, seoDescription, seoTitle, shareImageAlt, siteName } from "@/lib/site-seo";
import "./globals.css";

export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#a52e3d"};

// Use the exact owner-supplied screenshot after it is uploaded to public/.
// Until then, retain the existing generated image so live social previews never break.
const hasOriginalScreenshot=existsSync(join(process.cwd(),"public","og-workspace.png"));
const ogImage=hasOriginalScreenshot
 ? {url:"/og-workspace.png",width:2048,height:1048,alt:"Baste interactive digital workspace with Polaroids, albums, projects and chess"}
 : {url:"/opengraph-image",width:1200,height:630,alt:shareImageAlt};

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
  images:[ogImage]
 },
 twitter:{
  card:"summary_large_image",
  title:seoTitle,
  description:seoDescription,
  images:[ogImage.url]
 },
 ...(canonicalHomepage?{alternates:{canonical:canonicalHomepage}}:{})
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en-PH" className={GeistSans.variable} suppressHydrationWarning><body>{children}</body></html>;
}
