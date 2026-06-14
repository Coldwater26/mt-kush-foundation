import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { ProgramCard } from "@/components/ProgramCard";
import { ProgramDetailSection } from "@/components/ProgramDetailSection";
import { SectionIntro } from "@/components/SectionIntro";
import { fundingPaths, programs } from "@/lib/programs";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta.programs;

export default function ProgramsPage() {
  return (
    <>
      <section className="topo-forest py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center lg:px-8">
          <SectionIntro
            eyebrow="Programs"
            title="The Montana Kush Community Foundation shows up for Montana."
            copy="The work moves through grants, sponsorships, and scholarships that help Montanans where support can make a real difference."
            light
          />
          <div className="relative min-h-[360px] overflow-hidden border-4 border-gold">
            <Image
              src="/assets/programs-hero-veterans-trailhead.png"
              alt="Montana veteran trailhead support day"
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
          <div className="mb-12 grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="border-y-2 border-forest py-6">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-copper">How Support Moves</p>
              <h2 className="mt-3 font-serif text-4xl font-black leading-none text-forest sm:text-5xl">
                Grants. Sponsorships. Scholarships.
              </h2>
              <p className="mt-5 text-base font-semibold leading-7 text-smoke">{site.coreMission}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {fundingPaths.map((path) => {
                const Icon = path.icon;

                return (
                  <article key={path.title} className="border-t-4 border-forest bg-white p-5">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-copper">{path.eyebrow}</p>
                      <Icon className="text-forest" aria-hidden size={24} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-4 font-serif text-3xl font-black leading-none text-forest">{path.title}</h3>
                    <p className="mt-4 text-sm font-semibold leading-7 text-smoke">{path.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
          <div className="mt-12 grid gap-6">
            {programs.map((program) => (
              <ProgramDetailSection key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
