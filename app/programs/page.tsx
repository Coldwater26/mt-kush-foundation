import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { ProgramCard } from "@/components/ProgramCard";
import { ProgramDetailSection } from "@/components/ProgramDetailSection";
import { SectionIntro } from "@/components/SectionIntro";
import { programs } from "@/lib/programs";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.programs;

export default function ProgramsPage() {
  return (
    <>
      <section className="topo-forest py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center lg:px-8">
          <SectionIntro
            eyebrow="Programs"
            title="The Montana Kush Community Foundation shows up for Montana."
            copy="Veterans programs, athletics and tournaments, public education, community events, Montana Stories, and local partnerships."
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
