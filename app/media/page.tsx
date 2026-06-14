import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { FoundationLogo } from "@/components/FoundationLogo";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta.media;

const channels = [
  {
    title: "Video",
    copy: "Short features, event recaps, interviews, and field pieces from Montana communities.",
    image: "/assets/media-video-field-crew.png"
  },
  {
    title: "Podcasts",
    copy: "Recorded conversations with partners, veterans, organizers, educators, and local voices.",
    image: "/assets/media-podcast-cabin-recording.png"
  },
  {
    title: "Social",
    copy: "Clips, photos, announcements, partner tags, and quick updates from Foundation work.",
    image: "/assets/media-social-food-truck-night.png"
  },
  {
    title: "Montana Stories",
    copy: "Profiles, event recaps, partner features, and local stories from the communities the Foundation supports.",
    image: "/assets/media-transcripts-workbench.png"
  }
];

const mediaSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Montana Media",
  url: `${site.url}/media`,
  isPartOf: {
    "@type": "WebSite",
    name: site.name,
    url: site.url
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url
  },
  about: [
    "Montana Media",
    "Montana Stories",
    "podcasts",
    "video interviews",
    "social media clips",
    "event recaps"
  ],
  mainEntity: channels.map((channel) => ({
    "@type": "CreativeWorkSeries",
    name: `Montana Media ${channel.title}`,
    description: channel.copy
  }))
};

export default function MediaPage() {
  return (
    <>
      <section className="topo-forest text-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.55fr_0.45fr] lg:px-8">
          <div className="border-y-2 border-cream/20 py-8">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">Montana Media</p>
            <h1 className="mt-5 font-serif text-5xl font-black leading-none sm:text-6xl">
              Podcasts, video, social, and Montana Stories.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-9 text-cream">
              Interviews, event recaps, short clips, partner features, and Foundation updates from Montana communities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/stories" className="bg-gold text-forest hover:bg-cream">
                Browse Stories
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="border-cream/35 bg-transparent text-cream hover:bg-cream hover:text-forest">
                Pitch A Story
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[420px] border-4 border-gold">
            <Image
              src="/assets/media-hero-interview-setup.png"
              alt="Montana Media interview setup"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute bottom-0 left-0 bg-white p-3">
              <FoundationLogo className="w-40" />
            </div>
          </div>
        </div>
      </section>

      <section className="topo-paper py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-6 border-b-2 border-forest pb-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-copper">Channels</p>
              <h2 className="mt-3 font-serif text-4xl font-black leading-none text-forest sm:text-5xl">
                Watch, listen, share, and follow the work.
              </h2>
            </div>
            <p className="text-lg font-semibold leading-8 text-smoke">
              Montana Media follows the Foundation into the field: events, teams, veterans programs, partner stories, and community nights.
            </p>
          </div>
          <div className="grid border-l-2 border-t-2 border-forest md:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <article key={channel.title} className="border-b-2 border-r-2 border-forest bg-white">
                <div className="relative h-40">
                  <Image
                    src={channel.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-2xl font-black text-forest">{channel.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-smoke">{channel.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-copper text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-white">Montana Stories</p>
            <h2 className="mt-3 font-serif text-4xl font-black leading-none sm:text-5xl">Bring a story or event forward.</h2>
          </div>
          <ButtonLink href="/contact" variant="dark">
            Contact The Foundation
          </ButtonLink>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mediaSchema) }}
      />
    </>
  );
}
