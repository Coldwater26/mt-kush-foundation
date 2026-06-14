import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import { ImpactStat } from "@/components/ImpactStat";
import { SectionIntro } from "@/components/SectionIntro";
import { impactStats } from "@/lib/programs";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.impact;

const downloads = ["Annual Impact Report", "Community Partner Guidelines", "Program Support Guide"];

const proofMoments = [
  {
    date: "May 2026",
    title: "Volunteer day in the mountains",
    copy: "Photos, volunteer count, partner quote, field notes, and a recap page."
  },
  {
    date: "June 2026",
    title: "Athletics support drop",
    copy: "Registration help, equipment needs, sponsor photo, and participant story."
  },
  {
    date: "July 2026",
    title: "Montana Stories interview",
    copy: "Video, transcript, stills, pull quotes, and clips for social."
  }
];

export default function ImpactPage() {
  return (
    <>
      <section className="topo-forest py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center lg:px-8">
          <SectionIntro
            eyebrow="Impact"
            title="Reports, recaps, transcripts, and results."
            copy="A clear place to show what the Foundation supports, what happened, who participated, and what comes next."
            light
          />
          <div className="relative min-h-[360px] overflow-hidden border-4 border-gold">
            <Image
              src="/assets/impact-hero-miles-city-bucking-horse.png"
              alt="Miles City bucking horse event with riders, volunteers, and spectators"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </div>
      </section>
      <section className="topo-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactStats.map((stat) => (
              <ImpactStat key={stat.label} {...stat} />
            ))}
          </div>
          <article className="mt-10 border-t-4 border-forest bg-white p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-copper">2026 Impact Report</p>
            <h2 className="mk-heading mt-3 font-serif text-3xl font-black text-forest">Impact report</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-smoke">
              The annual report collects the visible record: dates, partners, dollars, volunteer hours, photos,
              recaps, transcripts, and the practical things that changed because people showed up.
            </p>
          </article>
          <div className="mt-8 grid border-l-2 border-t-2 border-forest md:grid-cols-3">
            {proofMoments.map((moment) => (
              <article key={moment.title} className="border-b-2 border-r-2 border-forest bg-white p-6">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-copper">{moment.date}</p>
                <h2 className="mt-3 font-serif text-2xl font-black leading-tight text-forest">{moment.title}</h2>
                <p className="mt-4 text-sm font-semibold leading-7 text-smoke">{moment.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {downloads.map((item) => (
              <div key={item} className="border-t-4 border-forest bg-white p-6">
                <Download aria-hidden className="text-copper" />
                <h2 className="mt-4 text-xl font-bold text-forest">{item}</h2>
                <p className="mt-3 text-sm leading-7 text-smoke">Reports and guides from Montana events, partner work, and Foundation support.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

