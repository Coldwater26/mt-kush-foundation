import type { MetadataRoute } from "next";
import { media } from "@/lib/media";
import { site } from "@/lib/site";
export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{return ["","/about","/programs","/grants.html","/media","/impact","/partners","/stories","/contact","/donate","/merch",...media.map(v=>`/media/${v.slug}`)].map(path=>({url:`${site.url}${path}`,changeFrequency:"monthly",priority:path===""?1:path==="/media"?0.9:0.7}));}
