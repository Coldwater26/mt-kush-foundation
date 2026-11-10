import type { Metadata } from "next";
import Image from "next/image";
import { pressRelease as release } from "@/lib/press-release";
import { site } from "@/lib/site";

const photo = `${release.assets}/Montana-Kush-Covellite-4800-Donation.jpg`;
export const metadata: Metadata = {
  title: "$15,000 in Statewide Microgrants | Press Release",
  description: release.subtitle,
  alternates: { canonical: `${site.url}${release.path}` },
  openGraph: { type: "article", title: release.title, description: release.subtitle, url: `${site.url}${release.path}`, publishedTime: "2026-11-10T09:00:00-07:00", images: [{ url: photo, width: 1800, height: 1350, alt: release.caption }] }
};

export default function PressReleasePage() {
  return <article>
    <header className="topo-forest text-cream">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-sm font-black uppercase tracking-widest text-gold">For immediate release · <time dateTime="2026-11-10">{release.date}</time></p>
        <h1 className="mt-5 font-serif text-4xl font-black leading-tight sm:text-5xl">{release.title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-8">{release.subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a className="bg-copper px-6 py-3 font-bold text-white" href="/grants.html">Apply for a grant</a>
          <a className="border border-cream/50 px-6 py-3 font-bold" href="#press-assets">Download press assets</a>
        </div>
      </div>
    </header>
    <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <figure>
        <Image src={photo} width={1800} height={1350} alt="Blake LaDouceur, left, and Demetrius Fassas hold a $4,800 donation check outside the Covellite Theatre in Butte." priority className="h-auto w-full border border-forest/20" />
        <figcaption className="mt-3 text-sm leading-6 text-forest/80">{release.caption}<br />Photo credit: Montana Kush Community Foundation</figcaption>
      </figure>
      <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-8 text-forest">
        {release.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p><a href="/grants.html" className="font-bold underline underline-offset-4">View grant details and apply</a></p>
      </div>
      <section id="press-assets" className="mt-12 scroll-mt-40 border-t-4 border-copper bg-white p-6 sm:p-8">
        <h2 className="font-serif text-3xl font-black text-forest">Press assets</h2>
        <p className="mt-3 leading-7">Download the release and photo for coverage of this announcement. Please include the photo credit provided.</p>
        <ul className="mt-5 space-y-4 font-bold text-forest underline underline-offset-4">
          <li><a href={`${release.assets}/Montana-Kush-Microgrants-Press-Release.txt`} download>Press release (plain text)</a></li>
          <li><a href={photo} download>Covellite donation photo (JPG, 1800 × 1350)</a></li>
          <li><a href={`${release.assets}/Photo-Caption.txt`} download>Photo caption and credit (text)</a></li>
        </ul>
      </section>
      <section className="mt-8 border-l-4 border-forest p-6">
        <h2 className="font-serif text-2xl font-black text-forest">Media contact</h2>
        <p className="mt-3 leading-7">Pepper Petersen<br />Executive Director, Montana Kush Community Foundation<br /><a className="underline" href="mailto:pepper@montanakush.org">pepper@montanakush.org</a><br /><a className="underline" href="tel:+14064618883">(406) 461-8883</a></p>
      </section>
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "NewsArticle", headline: release.title, description: release.subtitle, datePublished: "2026-11-10T09:00:00-07:00", image: `${site.url}${photo}`, mainEntityOfPage: `${site.url}${release.path}`, author: { "@type": "Organization", name: site.name, url: site.url }, publisher: { "@type": "Organization", name: site.name, url: site.url }, articleBody: release.paragraphs.join("\n\n") }) }} />
  </article>;
}
