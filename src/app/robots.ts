import type { MetadataRoute } from "next";
import { canonicalHomepage, isIndexable } from "@/lib/site-seo";
export const dynamic = "force-static";
export default function robots():MetadataRoute.Robots{
 return {
  rules:{userAgent:"*",[isIndexable?"allow":"disallow"]:"/"},
  ...(canonicalHomepage?{sitemap:canonicalHomepage+"sitemap.xml"}:{})
 };
}
