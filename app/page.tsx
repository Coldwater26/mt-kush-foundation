import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FoundationLogo } from "@/components/FoundationLogo";
import { PartnerLogoStrip } from "@/components/PartnerLogoStrip";
import { site } from "@/lib/site";

const supportAreas = [
  {
    title: "Veterans",
    copy: "Outdoor events, resource guides, service projects, veteran profiles, and partner support.",
    image: "/assets/community-veterans.png"
  },
  {
    title: "Athletics and recreation",
    copy: "Athletics, tournaments, adult leagues, youth leagues, equipment grants, and registration help.",
    image: "/assets/community-sports.png"
  },
  {
    title: "Community events",
    copy: "Local gatherings, fundraisers, public events, small-town projects, and event materials.",
    image: "/assets/community-food-truck.png"
  },
  {
    title: "Education",
    copy: "Plain-language resources for patients, consumers, civic participation, and Montana families.",
    image: "/assets/community-education.png"
  },
  {
    title: "Montana Media",
    copy: "Podcasts, short videos, interviews, transcripts, event recaps, and partner features.",
    image: "/assets/media-transcripts-workbench.png"
  },
  {
    title: "Local partnerships",
    copy: "Nonprofits, organizers, educators, athletics groups, veterans groups, and local leaders doing the work.",
    image: "/assets/community-partners.png"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="mk-topographic-panel overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="relative grid gap-8 lg:min-h-[620px] lg:grid-cols-[560px_1fr] lg:items-center">
            <div className="relative z-10 max-w-[560px]">
              <FoundationLogo className="w-[320px] shadow-[12px_12px_0_rgba(199,155,69,0.28)] sm:w-[455px] lg:w-[520px]" priority />
              <a
                href={site.sponsorUrl}
                className="mt-6 inline-flex border-l-4 border-copper bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-copper shadow-[8px_8px_0_rgba(23,55,45,0.12)] underline-offset-4 transition hover:text-forest hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                Supported by Montana Kush
              </a>
              <h1 className="mt-10 max-w-[520px] font-serif text-[3rem] font-black leading-[0.96] text-forest sm:text-[3.45rem]">
                {site.tagline}
              </h1>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border-[6px] border-white shadow-[18px_18px_0_rgba(23,55,45,0.18)] lg:absolute lg:bottom-14 lg:right-0 lg:top-14 lg:w-[52%]">
              <Image
                src="/assets/home-hero-community-night.png"
                alt="Montana community food truck night with volunteers and neighbors"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
            </div>
          </div>
        </div>
        <div className="topo-forest text-cream">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-7 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p className="max-w-3xl text-lg font-semibold leading-8 text-cream sm:text-xl">
              Veterans, athletics, events, education, Montana Stories, and local partnerships across Montana.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/programs" className="bg-gold text-forest hover:bg-cream">
                See Programs
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-cream/35 bg-transparent text-cream hover:bg-cream hover:text-forest">
                Get In Touch
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="topo-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.34fr_0.66fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-copper">Mission</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-none text-forest sm:text-5xl">
              The Montana Kush Community Foundation shows up for Montana.
            </h2>
          </div>
          <div className="border-y-2 border-forest">
            <p className="py-7 text-2xl font-semibold leading-10 text-smoke">
              {site.coreMission}
            </p>
          </div>
        </div>
      </section>

      <section className="topo-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 border-b-2 border-forest pb-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-copper">What We Help With</p>
              <h2 className="mt-3 font-serif text-4xl font-black leading-none text-forest sm:text-5xl">Philanthropy in action.</h2>
            </div>
            <p className="max-w-md text-base font-semibold leading-7 text-smoke">
              Built around real people, real events, and the kind of help you can see from the parking lot.
            </p>
          </div>
          <div className="grid border-l-2 border-t-2 border-forest md:grid-cols-2 lg:grid-cols-3">
            {supportAreas.map((area) => (
              <article key={area.title} className="border-b-2 border-r-2 border-forest bg-white">
                <div className="relative h-40 border-b-2 border-forest">
                  <Image
                    src={area.image}
                    alt={`${area.title} in Montana`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-black leading-tight text-forest">{area.title}</h3>
                  <p className="mt-4 text-base font-semibold leading-7 text-smoke">{area.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="topo-forest text-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.58fr_0.42fr] lg:px-8">
          <div className="border-y-2 border-cream/25 py-8 lg:border-r-2 lg:pr-10">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">Montana Stories</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-none sm:text-5xl">
              Local stories, event recaps, interviews, and profiles.
            </h2>
            <p className="text-xl font-semibold leading-9 text-cream">
              Montana Media helps produce the work. Montana Stories is where people meet it:
              interviews with partners, veteran profiles, tournament recaps, short videos, podcasts, and transcripts.
            </p>
            <div className="mt-7">
              <ButtonLink href="/media" variant="secondary" className="border-cream/35 bg-transparent text-cream hover:bg-cream hover:text-forest">
                Explore Montana Media
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[360px] border-4 border-gold">
            <Image
              src="/assets/montana-skydiving-owner-story.png"
              alt="Montana skydiving group preparing gear near the mountains"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="topo-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-copper">Partners</p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-forest sm:text-4xl">
              Built with local partners.
            </h2>
            <p className="mt-4 max-w-md text-base font-semibold leading-7 text-smoke">
              Veterans groups, athletics groups, event organizers, educators, storytellers, and Montana Kush.
            </p>
          </div>
          <PartnerLogoStrip />
        </div>
      </section>

      <section className="bg-basalt text-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.46fr_0.54fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">Volunteer</p>
            <h2 className="mt-3 font-serif text-4xl font-black uppercase leading-[0.9] sm:text-5xl">
              For those who show up.
            </h2>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <p className="max-w-2xl text-xl font-semibold leading-8 text-cream">
              Volunteer at trail days, local events, partner projects, and community-forward work across Montana.
            </p>
            <div className="mt-6">
              <ButtonLink href="/merch" className="bg-gold text-forest hover:bg-cream">
                Volunteer
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-copper text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-white">Foundation Work</p>
            <h2 className="mt-3 font-serif text-4xl font-black leading-none sm:text-5xl">Bring a community project forward.</h2>
          </div>
          <ButtonLink href="/contact" variant="dark">
            Contact the Foundation
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
