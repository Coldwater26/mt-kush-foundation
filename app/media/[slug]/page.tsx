import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FoundationVideo } from "@/components/FoundationVideo";
import { MediaContext } from "@/components/MediaContext";
import { media, videoSchema } from "@/lib/media";
import { site } from "@/lib/site";
export function generateStaticParams(){return media.map(v=>({slug:v.slug}));}
export function generateMetadata({params}:{params:{slug:string}}):Metadata{
  const v=media.find(v=>v.slug===params.slug);if(!v)return {};
  return {title:`${v.title} | Video & Transcript`,description:v.description,alternates:{canonical:`${site.url}/media/${v.slug}`},openGraph:{title:v.title,description:v.description,url:`${site.url}/media/${v.slug}`,images:[{url:v.poster,width:1280,height:720}],type:"article"},twitter:{card:"summary_large_image",title:v.title,description:v.description,images:[v.poster]}};
}
export default function VideoPage({params}:{params:{slug:string}}){
  const v=media.find(v=>v.slug===params.slug);if(!v)notFound();
  return <><article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
    <Link href="/media" className="font-bold text-copper underline underline-offset-4">← All media & transcripts</Link>
    <h1 className="mt-5 font-serif text-4xl font-black leading-tight text-forest sm:text-5xl">{v.title}</h1>
    <p className="mt-4 max-w-3xl text-lg leading-8">{v.description}</p>
    <p className="mt-3 text-sm">By {site.name} · Published <time dateTime={v.date}>{v.date}</time> · {v.seconds<61?`${v.seconds} seconds`:"3 minutes 29 seconds"}</p>
    <div className="mt-7 overflow-hidden border-4 border-forest"><FoundationVideo video={v}/></div>
    <div className="mt-5 flex flex-wrap gap-4 font-bold underline underline-offset-4"><a href="#transcript">Read transcript</a><a href={v.video} download>Download video</a>{v.vertical&&<a href={v.vertical} download>Vertical version</a>}<a href={v.captions}>English captions</a><a href={v.transcriptFile} download>Text transcript</a></div>
    <section className="my-10 border-l-4 border-copper bg-white p-6 sm:p-8"><h2 className="font-serif text-2xl font-black text-forest">Community support and the 2026 grant cycle</h2>
      <p className="mt-4 leading-8">The Montana Kush Community Foundation supports community projects across Montana through local partnerships, grants, and sponsorships. Focus areas include veterans and service, athletics and recreation, education, community events, Montana storytelling, and local partnerships.</p>
      <p className="mt-4 leading-8">The 2026 grant cycle has <strong>$15,000 available</strong>, with awards of <strong>$500, $1,000, or $1,500</strong>. Applications are open for projects statewide. The deadline is <strong>December 15, 2026</strong>, with awards announced in <strong>January 2027</strong>. Awards are subject to review.</p>
      <p className="mt-4 leading-8">These grant-cycle details reflect the October 2026 announcement. <Link href="/grants.html" className="font-bold text-forest underline">Check the grant application page for current details and to apply.</Link></p>
    </section>
    <section id="transcript" className="scroll-mt-44"><h2 className="font-serif text-3xl font-black text-forest">Complete video transcript</h2><p className="mt-2 text-sm">Spoken words, with punctuation and proper-name spelling standardized for readability.</p><div className="mt-5 max-w-4xl space-y-5 text-lg leading-9">{v.transcript.split(/(?<=\.) /).reduce<string[][]>((chunks,s,i)=>{if(i%3===0)chunks.push([]);chunks[chunks.length-1].push(s);return chunks;},[]).map((p,i)=><p key={i}>{p.join(' ')}</p>)}</div></section>
    {v.seconds<61&&<MediaContext/>}
    <footer className="mt-10 border-t-2 border-forest pt-7"><p className="text-xl font-bold text-forest">Supporting the communities that support us.</p><p className="mt-4"><Link href="/programs" className="underline">Explore programs</Link> · <Link href="/media" className="underline">More videos and transcripts</Link> · <Link href="/contact" className="underline">Contact the Foundation</Link></p></footer>
  </article><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(videoSchema(v)).replace(/</g,'\\u003c')}}/></>;
}
