import type { Metadata } from "next";
import Link from "next/link";
import { FoundationVideo } from "@/components/FoundationVideo";
import { media } from "@/lib/media";
import { site } from "@/lib/site";
export const metadata:Metadata={title:"Videos, Media & Transcripts",description:"Watch Montana Kush Community Foundation films and grant guides. Read complete transcripts and download 60-, 30-, and 15-second videos, vertical editions, and captions.",alternates:{canonical:`${site.url}/media`}};
export default function MediaPage(){return <>
  <section className="topo-forest text-cream"><div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <p className="text-sm font-black uppercase tracking-widest text-gold">Montana Media</p><h1 className="mt-4 font-serif text-4xl font-black sm:text-6xl">The stories behind the support.</h1>
    <p className="mt-5 max-w-3xl text-xl leading-8">Foundation films, community updates, and practical grant guidance. Watch, read the full transcripts, or download a version to share.</p>
    <nav aria-label="Media library" className="mt-6 flex flex-wrap gap-4 font-bold underline underline-offset-4">{media.map(v=><a key={v.slug} href={`#${v.slug}`}>{v.seconds<61?`${v.seconds}-second film`:"Application guide"}</a>)}</nav>
  </div></section>
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">{media.map((v,i)=><article key={v.slug} id={v.slug} className="mb-14 scroll-mt-44 border-b-2 border-forest/20 pb-12">
    <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_1fr]"><div className="overflow-hidden border-4 border-forest"><FoundationVideo video={v}/></div><div>
      <p className="text-sm font-bold uppercase tracking-widest text-copper">{i===0?"Featured film · 60 seconds":v.seconds<61?`${v.seconds}-second spot`:"Application walkthrough"}</p>
      <h2 className="mt-3 font-serif text-3xl font-black text-forest"><Link href={`/media/${v.slug}`}>{v.title}</Link></h2><p className="mt-4 text-lg leading-8">{v.description}</p>
      <p className="mt-3 text-sm">Published <time dateTime={v.date}>{v.date}</time> · English captions available</p><Link className="mt-5 inline-block bg-forest px-5 py-3 font-bold text-white" href={`/media/${v.slug}`}>Watch & read transcript →</Link>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-forest underline underline-offset-4"><a href={v.video} download>Download widescreen MP4</a>{v.vertical&&<a href={v.vertical} download>Download vertical MP4</a>}<a href={v.srt} download>Captions (SRT)</a><a href={v.transcriptFile} download>Transcript (text)</a></div>
    </div></div>
    <details className="mt-6 border-l-4 border-copper bg-white p-5"><summary className="cursor-pointer font-bold text-forest">Read the complete transcript</summary><p className="mt-4 max-w-4xl leading-8">{v.transcript}</p></details>
    {v.vertical&&<details className="mt-4 border-l-4 border-forest bg-white p-5"><summary className="cursor-pointer font-bold text-forest">Watch the vertical edition</summary><div className="mt-4"><FoundationVideo video={v} portrait/></div></details>}
  </article>)}
  <section className="border-l-4 border-copper p-6"><h2 className="font-serif text-2xl font-black text-forest">Have a Montana story to tell?</h2><p className="mt-3 leading-7">We welcome community stories, partner updates, and event recaps. <Link className="font-bold underline" href="/contact">Contact the Foundation</Link> or <Link className="font-bold underline" href="/stories">explore Montana Stories</Link>.</p></section></div>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage",name:"Montana Kush Community Foundation Videos & Transcripts",url:`${site.url}/media`,mainEntity:{"@type":"ItemList",itemListElement:media.map((v,i)=>({"@type":"ListItem",position:i+1,url:`${site.url}/media/${v.slug}`,name:v.title}))}})}}/>
</>;}
