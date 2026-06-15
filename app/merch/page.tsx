import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta.merch;

const volunteerWays = [
  {
    title: "Trail days",
    copy: "Cleanups, trail support, outdoor work days, veteran recreation days, and practical hands-on help."
  },
  {
    title: "Local events",
    copy: "Food-truck nights, fundraisers, tournaments, community tables, sponsor setup, and event support."
  },
  {
    title: "Partner support",
    copy: "Showing up for nonprofits, teams, veterans groups, educators, organizers, and local leaders already doing the work."
  },
  {
    title: "Montana Stories",
    copy: "Helping document the day with photos, recaps, interviews, transcripts, and short videos that give the work a longer life."
  }
];

const volunteerCode = [
  "Come ready to work.",
  "Respect the people already leading.",
  "Help make the day easier.",
  "Leave the place better than you found it."
];

export default function MerchPage() {
  return (
    <>
      <section className="topo-forest py-16 text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.46fr_0.54fr] lg:items-end lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">Volunteer</p>
            <h1 className="mt-4 font-serif text-5xl font-black uppercase leading-[0.9] sm:text-6xl">
              For those who show up.
            </h1>
          </div>
          <p className="max-w-2xl text-xl font-semibold leading-9 text-cream">
            Trail days, local events, partner projects, and community-forward work across Montana. {site.tagline}
          </p>
        </div>
      </section>

      <section className="topo-paper py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.58fr_0.42fr] lg:px-8">
          <div className="relative min-h-[460px] border-4 border-forest bg-forest lg:min-h-[620px]">
            <Image
              src="/assets/foundation-shirt-blonde-shorts-front-back.png"
              alt="Two women wearing white Montana Kush Community Foundation shirts showing the front and back print in Montana"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
              priority
            />
          </div>
          <div className="border-y-2 border-forest py-8">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-copper">Community Forward</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-none text-forest">
              The shirt means you were there.
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-smoke">
              The Foundation volunteer shirt is for the people who put in the time: hauling tables, cleaning trails,
              checking people in, helping partners, covering events, and staying until the work is done.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Volunteer With Us</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b-2 border-forest pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-copper">Where Volunteers Help</p>
              <h2 className="mt-3 font-serif text-4xl font-black leading-none text-forest sm:text-5xl">
                Show up where Montana gathers.
              </h2>
            </div>
            <p className="max-w-md text-base font-semibold leading-7 text-smoke">
              The work is simple on purpose: useful hands, good timing, local respect, and follow-through.
            </p>
          </div>
          <div className="grid border-l-2 border-t-2 border-forest md:grid-cols-2 lg:grid-cols-4">
            {volunteerWays.map((way) => (
              <article key={way.title} className="border-b-2 border-r-2 border-forest bg-parchment p-6">
                <h3 className="font-serif text-2xl font-black leading-tight text-forest">{way.title}</h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-smoke">{way.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-basalt py-14 text-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">Volunteer Code</p>
            <h2 className="mt-3 font-serif text-4xl font-black uppercase leading-[0.9] sm:text-5xl">
              We showed up.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {volunteerCode.map((line) => (
              <p key={line} className="border-l-2 border-gold bg-white/5 px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-cream">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
