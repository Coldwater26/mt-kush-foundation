import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { SectionIntro } from "@/components/SectionIntro";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta.about;

const sections = [
  {
    title: "Our Mission",
    copy: site.legalMission
  },
  {
    title: "Who We Help",
    copy: "Veterans, service organizations, athletics groups, tournaments, adult and youth recreation, event organizers, patients, consumers, community educators, local nonprofits, and Montana families."
  },
  {
    title: "What We Support",
    copy: "Veterans programs, sports and recreation, public education, community events, Montana Stories, patient access education, and community partnerships."
  },
  {
    title: "Montana Media",
    copy: "The Foundation shares local stories through interviews, short videos, podcasts, event recaps, veteran profiles, sports features, partner stories, and Foundation updates."
  },
  {
    title: "Founding Supporter: Montana Kush",
    copy: "The Foundation was founded with support from Montana Kush as a long-term commitment to the Montana communities that helped build the company."
  },
  {
    title: "How People Connect",
    copy: "Community partners can reach out about events, sponsorships, education projects, Montana Stories, veterans programs, sports support, and local projects."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="topo-forest py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center lg:px-8">
          <SectionIntro
            eyebrow="About"
            title="Montana community support, built to show up year-round."
            copy={site.coreMission}
            light
          />
          <div className="relative min-h-[360px] overflow-hidden border-4 border-gold">
            <Image
              src="/assets/about-hero-butte-headframe.png"
              alt="Butte Montana headframe overlooking town and mountains"
              fill
              priority
              className="object-cover object-[62%_center]"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </div>
      </section>
      <section className="topo-paper py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {sections.map((section) => (
            <article key={section.title} className="border-t-4 border-forest bg-white p-6">
              <h2 className="mk-heading font-serif text-2xl font-black text-forest">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-smoke">{section.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}

