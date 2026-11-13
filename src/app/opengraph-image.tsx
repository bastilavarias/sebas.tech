import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { shareImageAlt } from "@/lib/site-seo";

export const size={width:1200,height:630};
export const contentType="image/png";
export const alt=shareImageAlt;
export const dynamic="force-static";

/** The blueprint share card reflects the real on-page identity and projects. */
export default function OpenGraphImage(){
 const projectNames=profile.work.map(project=>project.title).join("  ·  ");
 return new ImageResponse(
  <div style={{
   display:"flex",flexDirection:"column",width:"100%",height:"100%",
   position:"relative",padding:"72px 84px 60px",
   overflow:"hidden",background:"#a52e3d",color:"#ffffff",
   fontFamily:"Arial,sans-serif"
  }}>
   <div style={{
    position:"absolute",inset:0,opacity:.28,
    backgroundImage:"linear-gradient(rgba(255,255,255,.26) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.26) 1px,transparent 1px)",
    backgroundSize:"48px 48px"
   }}/>
   <div style={{position:"relative",display:"flex",flexDirection:"column"}}>
    <div style={{fontSize:22,letterSpacing:4,fontWeight:700,color:"#ffe2e4"}}>
     {profile.name.toUpperCase()}
    </div>
    <div style={{fontSize:142,letterSpacing:-8,lineHeight:1.12,fontWeight:800,marginTop:38}}>
     Baste.
    </div>
    <div style={{fontSize:35,letterSpacing:-.8,fontWeight:500,marginTop:10}}>
     {`${profile.role} / Software Developer`}
    </div>
    <div style={{
     display:"flex",flexDirection:"row",alignItems:"center",
     borderTop:"2px solid rgba(255,255,255,.55)",
     marginTop:76,paddingTop:27,width:"100%"
    }}>
     <div style={{fontSize:24,fontWeight:700}}>{projectNames}</div>
     <div style={{display:"flex",flex:1,justifyContent:"flex-end",fontSize:20,color:"#ffe2e4"}}>
      Music · Photos · Chess
     </div>
    </div>
   </div>
  </div>,
  size
 );
}
