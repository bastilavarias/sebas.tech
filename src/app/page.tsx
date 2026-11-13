import { InteractiveWorkspace } from "@/components/workspace/interactive-workspace";
import { profile } from "@/data/profile";
import { canonicalHomepage, publicOrigin, seoDescription, seoTitle, siteName } from "@/lib/site-seo";

/** Only mark up facts and featured links that actually appear on the home page. */
const person={
 "@type":"Person",
 name:profile.name,
 alternateName:[siteName,profile.handle],
 jobTitle:"Software Developer",
 description:`${profile.role}. ${profile.description[1]}`,
 sameAs:profile.social.map(item=>item.href),
 knowsAbout:[...profile.skills.map(item=>item.title),"Technology","Science","Culture","Sports"],
 ...(canonicalHomepage?{url:canonicalHomepage,image:`${publicOrigin}/images/profile-avatar.webp`}:{})
};
const featuredProjects={
 "@type":"ItemList",
 name:"Projects",
 numberOfItems:profile.work.length,
 itemListElement:profile.work.map((project,index)=>({
  "@type":"ListItem",
  position:index+1,
  item:{
   "@type":"WebSite",
   name:project.title,
   url:project.href,
   description:project.subtitle
  }
 }))
};
const structured={
 "@context":"https://schema.org",
 "@type":"ProfilePage",
 name:seoTitle,
 description:seoDescription,
 inLanguage:"en-PH",
 mainEntity:person,
 hasPart:featuredProjects,
 ...(canonicalHomepage?{
  "@id":`${canonicalHomepage}#profile`,
  url:canonicalHomepage,
  isPartOf:{"@type":"WebSite",name:siteName,url:canonicalHomepage}
 }:{})
};

export default function HomePage(){
 return <>
  <script
   type="application/ld+json"
   dangerouslySetInnerHTML={{__html:JSON.stringify(structured).replace(/</g,"\\u003c")}}
  />
  <InteractiveWorkspace/>
 </>;
}
