import type { Metadata } from "next";
import Link from "next/link";
import { quarterlyGrantCycles } from "@/lib/grant-calendar";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Quarterly Grant Deadlines & Funding Calendar", description: "Montana statewide community grants: $15,000 each quarter, with $500, $1,000, and $1,500 awards. Deadlines are March 15, June 15, September 15, and December 15.", alternates: { canonical: `${site.url}/grant-calendar` }, openGraph: { title: "Quarterly Grant Deadlines & Funding Calendar", url: `${site.url}/grant-calendar` } };

export default function GrantCalendarPage() {
  return <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
    <p className="text-sm font-bold uppercase tracking-widest text-copper">Montana Kush Community Foundation</p>
    <h1 className="mt-4 font-serif text-4xl font-black text-forest sm:text-5xl">Quarterly grants. Projects statewide.</h1>
    <p className="mt-6 max-w-4xl text-xl leading-9">The Foundation makes <strong>$15,000 available each quarter</strong> for community projects across Montana, with individual awards of <strong>$500, $1,000, or $1,500</strong>.</p>
    <p className="mt-4 max-w-4xl text-lg leading-8">Application deadlines are <strong>March 15, June 15, September 15, and December 15 every year</strong>. The next scheduled deadline is <strong>December 15, 2026</strong>.</p>
    <div className="mt-6 flex flex-wrap gap-4"><Link className="bg-forest px-6 py-3 font-bold text-white" href="/grants.html">Apply for a grant</Link><a className="border-2 border-forest px-6 py-3 font-bold text-forest" href="/quarterly-grant-deadlines.ics" download>Add deadlines to your calendar</a></div>
    <h2 className="mt-12 font-serif text-3xl font-black text-forest">2026–2027 application calendar</h2>
    <div className="mt-5 overflow-x-auto"><table className="w-full border-collapse text-left"><caption className="sr-only">Quarterly application deadlines, available funding, and award announcement dates</caption><thead className="bg-forest text-white"><tr>{["Cycle","Application deadline","Quarterly funding","Award announcement"].map(h=><th key={h} scope="col" className="p-4">{h}</th>)}</tr></thead><tbody>{quarterlyGrantCycles.map(c=><tr key={c.date} className="border-b border-forest/20 even:bg-white"><th scope="row" className="p-4 font-semibold">{c.quarter}</th><td className="p-4"><time dateTime={c.date}>{c.label}</time></td><td className="p-4">$15,000</td><td className="p-4">{c.announcement}</td></tr>)}</tbody></table></div>
    <section className="mt-10 border-l-4 border-copper bg-white p-6"><h2 className="font-serif text-2xl font-bold text-forest">What to prepare</h2><p className="mt-3 leading-8">Describe your project, the Montana communities it will serve, its connection to a Foundation program, your timeline, your budget, and how the requested grant will be used. Applications are reviewed; submitting a request does not guarantee an award.</p><p className="mt-3 leading-8">Awards for the December 15, 2026 deadline will be announced in January 2027. Announcement dates for subsequent cycles will be posted when confirmed. For submission-time or cycle questions, contact <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>. The calendar download records deadlines as all-day reminders, not a specific cutoff time.</p></section>
    <p className="mt-7"><Link href="/faq" className="font-bold underline">Foundation facts and grant questions</Link> · <Link href="/programs" className="font-bold underline">Explore programs</Link></p>
    <p className="mt-8 text-sm">Published by the Montana Kush Community Foundation · Updated October 27, 2026</p>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"WebPage","@id":`${site.url}/grant-calendar#page`,url:`${site.url}/grant-calendar`,name:"Quarterly Grant Deadlines & Funding Calendar",description:"$15,000 per quarter; $500, $1,000, or $1,500 awards. Application deadlines: March 15, June 15, September 15, and December 15 each year.",publisher:{"@id":`${site.url}/#organization`},mainEntity:{"@type":"ItemList",itemListElement:quarterlyGrantCycles.map((c,i)=>({"@type":"ListItem",position:i+1,name:`${c.label} application deadline — ${c.quarter}`,url:`${site.url}/grant-calendar`}))}})}}/>
  </article>;
}
