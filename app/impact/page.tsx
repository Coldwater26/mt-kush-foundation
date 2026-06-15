import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, HandHeart, Landmark, Megaphone, Trophy, Users } from "lucide-react";
import { ImpactStat } from "@/components/ImpactStat";
import { SectionIntro } from "@/components/SectionIntro";
import { impactStats } from "@/lib/programs";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.impact;

const supportChannels = [
  {
    title: "Grants",
    value: "$85K-$120K",
    copy: "Direct support for nonprofits, veterans groups, education projects, access needs, emergency help, and local organizers.",
    icon: HandHeart
  },
  {
    title: "Sponsorships",
    value: "$95K-$135K",
    copy: "Backing for tournaments, trail days, food-truck nights, fundraisers, veteran events, and community gatherings.",
    icon: Trophy
  },
  {
    title: "Scholarships",
    value: "$45K-$70K",
    copy: "Registration help, equipment support, training costs, youth and adult athletics, education, and participation access.",
    icon: Landmark
  },
  {
    title: "Media and Materials",
    value: "$25K-$45K",
    copy: "Event recaps, photos, interviews, transcripts, flyers, sponsor banners, partner pages, and Montana Stories.",
    icon: Megaphone
  }
];

const peopleHelped = [
  {
    title: "Veterans and families",
    count: "500+",
    copy: "Outdoor events, recreation, resource guides, service projects, partner support, and local storytelling."
  },
  {
    title: "Athletes and teams",
    count: "900+",
    copy: "Tournament sponsorships, team support, registration assists, equipment help, and recreation access."
  },
  {
    title: "Neighbors at local events",
    count: "2,000+",
    copy: "Food-truck nights, fundraisers, community tables, public events, volunteer days, and partner activations."
  },
  {
    title: "Patients and consumers",
    count: "600+",
    copy: "Plain-language education, access information, civic resources, consumer education, and community reinvestment materials."
  }
];

const proofPoints = [
  "Community sponsorships that put Montana Kush support in front of the people it helps.",
  "Scholarship-style help that removes small but real barriers to participation.",
  "Partner projects with veterans groups, teams, educators, organizers, and local nonprofits.",
  "Volunteer moments that turn the Foundation into a visible presence, not just a check.",
  "Montana Stories recaps that document the work and give partners something useful to share."
];

export default function ImpactPage() {
  return (
    <>
      <section className="topo-forest py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center lg:px-8">
          <SectionIntro
            eyebrow="Impact"
            title="Community support you can point to."
            copy="A working snapshot of estimated giving, people reached, volunteer moments, and Montana causes supported through grants, sponsorships, scholarships, and in-kind help."
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

      <section className="bg-basalt py-14 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b border-cream/20 pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">Estimated Community Impact</p>
              <h2 className="mt-3 font-serif text-4xl font-black leading-none text-cream sm:text-5xl">
                Montana Kush has been showing up.
              </h2>
            </div>
            <p className="max-w-md text-sm font-semibold leading-7 text-cream">
              Working estimates based on historical community giving, typical event costs, partner support, sponsorships,
              scholarships, and in-kind Foundation activity.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactStats.map((stat) => (
              <ImpactStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      <section className="topo-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
            <article className="border-y-2 border-forest py-7">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-copper">Support Mix</p>
              <h2 className="mt-3 font-serif text-4xl font-black leading-none text-forest">
                Dollars become visible help.
              </h2>
              <p className="mt-5 text-base font-semibold leading-8 text-smoke">
                A realistic annual giving range supports dozens of small, useful Montana moments: a team fee covered,
                a veterans event backed, a fundraiser sponsored, a trail day stocked, a partner story documented.
              </p>
            </article>
            <div className="grid gap-4 md:grid-cols-2">
              {supportChannels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <article key={channel.title} className="border-t-4 border-forest bg-white p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-copper">{channel.title}</p>
                        <h3 className="mt-2 font-serif text-4xl font-black leading-none text-forest">{channel.value}</h3>
                      </div>
                      <Icon className="text-forest" aria-hidden size={28} strokeWidth={1.8} />
                    </div>
                    <p className="mt-5 text-sm font-semibold leading-7 text-smoke">{channel.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-14">
            <div className="mb-6 flex flex-col justify-between gap-4 border-b-2 border-forest pb-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-copper">People Helped</p>
                <h2 className="mt-3 font-serif text-4xl font-black leading-none text-forest sm:text-5xl">
                  Reasonable reach, real Montana use.
                </h2>
              </div>
              <p className="max-w-md text-base font-semibold leading-7 text-smoke">
                Small grants and sponsorships stretch when they move through teams, events, partners, volunteers, and local networks.
              </p>
            </div>
            <div className="grid border-l-2 border-t-2 border-forest md:grid-cols-2 lg:grid-cols-4">
              {peopleHelped.map((group) => (
                <article key={group.title} className="border-b-2 border-r-2 border-forest bg-white p-6">
                  <p className="font-serif text-5xl font-black leading-none text-copper">{group.count}</p>
                  <h3 className="mt-4 font-serif text-2xl font-black leading-tight text-forest">{group.title}</h3>
                  <p className="mt-4 text-sm font-semibold leading-7 text-smoke">{group.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.58fr_0.42fr]">
            <article className="border-t-4 border-forest bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-copper">What Counts</p>
              <h2 className="mk-heading mt-3 font-serif text-3xl font-black text-forest">The impact record</h2>
              <div className="mt-6 grid gap-3">
                {proofPoints.map((point) => (
                  <p key={point} className="flex gap-3 border-t border-forest/15 pt-3 text-sm font-semibold leading-7 text-smoke">
                    <ArrowUpRight className="mt-1 shrink-0 text-copper" aria-hidden size={18} />
                    <span>{point}</span>
                  </p>
                ))}
              </div>
            </article>
            <article className="bg-copper p-8 text-white">
              <Users aria-hidden size={34} />
              <p className="mt-6 text-sm font-black uppercase tracking-[0.14em]">Community Forward</p>
              <h2 className="mt-3 font-serif text-4xl font-black leading-none">
                More than a donation line.
              </h2>
              <p className="mt-5 text-base font-semibold leading-8">
                The Foundation gives Montana Kush a public way to keep backing the same causes with more structure:
                clearer grants, better sponsorships, scholarship-style help, volunteer presence, and a stronger record of the work.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
