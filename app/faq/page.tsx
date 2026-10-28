import type { Metadata } from "next";
import Link from "next/link";
import { foundationFacts, organizationId } from "@/lib/foundation-facts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Foundation Facts & Grant Questions",
  description: "Answers about the Montana Kush Community Foundation, its relationship to Montana Kush, leadership, statewide grants, and estimated historical community support.",
  alternates: { canonical: `${site.url}/faq` },
  openGraph: { title: "Foundation Facts & Grant Questions", url: `${site.url}/faq` }
};

export default function FactsPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", "@id": `${site.url}/faq#page`, url: `${site.url}/faq`, name: "Foundation Facts & Grant Questions", publisher: { "@id": organizationId }, mainEntity: foundationFacts.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
  return <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
    <p className="text-sm font-bold uppercase tracking-widest text-copper">Montana Kush Community Foundation</p>
    <h1 className="mt-4 font-serif text-4xl font-black text-forest sm:text-5xl">Foundation facts & grant questions</h1>
    <p className="mt-5 text-lg leading-8">Direct answers about the Foundation, its founding supporter, and community projects across Montana.</p>
    <p className="mt-3 text-sm">Published by the Montana Kush Community Foundation · Updated October 27, 2026</p>
    <div className="mt-9 space-y-8">{foundationFacts.map((f,i) => <section key={f.question} id={`question-${i+1}`} className="scroll-mt-40 border-t-2 border-forest/20 pt-6">
      <h2 className="font-serif text-2xl font-bold text-forest">{f.question}</h2>
      <p className="mt-3 text-lg leading-8">{f.answer}</p>
      <Link href={f.href} className="mt-3 inline-block font-bold text-copper underline">{f.label} →</Link>
    </section>)}</div>
    <aside className="mt-10 border-l-4 border-copper bg-white p-6"><h2 className="text-xl font-bold text-forest">Questions about organizational records or giving?</h2><p className="mt-3 leading-7">Contact the executive director at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> for organizational records, grant administration questions, or confirmation of the tax treatment of a proposed contribution. Montana incorporation alone does not establish federal tax-exempt status.</p></aside>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g,"\\u003c")}} />
  </article>;
}
