import type { Metadata } from "next";
import Image from "next/image";
import { PartnerLogoStrip } from "@/components/PartnerLogoStrip";
import { SectionIntro } from "@/components/SectionIntro";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.partners;

const partnerRecords = [
  {
    date: "Spring 2026",
    title: "Veterans trail day",
    group: "Veteran-serving partners",
    copy: "A Montana outdoor day with lunch, volunteers, partner quotes, and a recap.",
    image: "/assets/partners-veterans-trail-day.png"
  },
  {
    date: "Summer 2026",
    title: "Local athletics tournament",
    group: "Athletics and recreation",
    copy: "Registration help, field support, volunteer shirts, sponsor materials, and a Montana Stories recap.",
    image: "/assets/partners-athletics-tournament.png"
  },
  {
    date: "Summer 2026",
    title: "Food truck community night",
    group: "Community events",
    copy: "A small-town gathering with local food, families, volunteers, photos, partner tags, and a simple public recap.",
    image: "/assets/partners-food-truck-night.png"
  },
  {
    date: "Fall 2026",
    title: "Field story interview",
    group: "Montana Stories",
    copy: "Video, photos, pull quotes, and a Montana Stories feature for local partners.",
    image: "/assets/partners-field-story-interview.png"
  }
];

const proofPoints = ["Who showed up", "What was funded", "What happened next"];

export default function PartnersPage() {
  return (
    <>
      <section className="topo-forest py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center lg:px-8">
          <SectionIntro
            eyebrow="Partners"
            title="Local partnerships that strengthen Montana communities."
            copy="The Foundation works with veterans groups, athletics organizers, event crews, educators, storytellers, and local leaders across Montana."
            light
          />
          <div className="relative min-h-[360px] overflow-hidden border-4 border-gold">
            <Image
              src="/assets/partners-hero-bozeman-veteran-housing.png"
              alt="Bozeman Montana volunteers building veteran housing"
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
          <PartnerLogoStrip />

          <div className="mt-10 grid border-l-2 border-t-2 border-forest md:grid-cols-2">
            {partnerRecords.map((record) => (
              <article key={record.title} className="grid border-b-2 border-r-2 border-forest bg-white sm:grid-cols-[0.42fr_0.58fr]">
                <div className="relative min-h-56">
                  <Image
                    src={record.image}
                    alt={`${record.title} in Montana`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 21vw, 100vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-copper">{record.date}</p>
                  <h2 className="mt-3 font-serif text-2xl font-black leading-tight text-forest">{record.title}</h2>
                  <p className="mt-2 text-sm font-black uppercase tracking-[0.1em] text-forest/60">{record.group}</p>
                  <p className="mt-4 text-base font-semibold leading-7 text-smoke">{record.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 border-y-2 border-forest py-8 lg:grid-cols-[0.35fr_0.65fr]">
            <h2 className="font-serif text-4xl font-black leading-none text-forest">Every partnership leaves a record.</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <p key={item} className="bg-white p-5 text-base font-black uppercase leading-6 tracking-[0.08em] text-forest">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
