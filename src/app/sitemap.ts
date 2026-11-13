import type { MetadataRoute } from "next";
import { canonicalHomepage } from "@/lib/site-seo";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{
 // Only the homepage is a public page; do not invent subpages or update dates.
 return canonicalHomepage?[{url:canonicalHomepage}]:[];
}
