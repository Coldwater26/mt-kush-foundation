import catalog from "./media-catalog.json";
import { site } from "./site";
export const media = catalog;
export type FoundationVideo = (typeof media)[number];
export function videoSchema(v: FoundationVideo) {
  return {"@context":"https://schema.org","@type":"VideoObject","@id":`${site.url}/media/${v.slug}#video`,name:`${v.title} — ${v.seconds < 61 ? `${v.seconds}-second film` : "application guide"}`,description:v.description,thumbnailUrl:[`${site.url}${v.poster}`],uploadDate:`${v.date}T00:00:00-06:00`,duration:`PT${v.seconds}S`,contentUrl:`${site.url}${v.video}`,url:`${site.url}/media/${v.slug}`,inLanguage:"en-US",transcript:v.transcript,publisher:{"@type":"Organization",name:site.name,url:site.url},about:{"@type":"Organization",name:site.name,url:site.url}};
}
