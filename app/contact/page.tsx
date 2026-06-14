import type { Metadata } from "next";
import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta.contact;

export default function ContactPage() {
  return (
    <div className="mk-topographic">
      <section className="mk-topographic-forest py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.52fr_0.48fr] lg:items-center lg:px-8">
          <SectionIntro
            eyebrow="Contact"
            title="Start a community foundation conversation."
            copy={site.coreMission}
            light
          />
          <div className="relative min-h-[360px] overflow-hidden border-4 border-gold bg-white">
            <Image
              src="/assets/contact-hero-butte-sunset-headframe.png"
              alt="Butte Montana headframe at sunset"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </div>
      </section>
      <section className="topo-paper py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="border-t-4 border-forest bg-white p-6">
            <h2 className="text-2xl font-bold text-forest">Foundation email</h2>
            <a href={`mailto:${site.email}`} className="mt-4 inline-flex text-copper underline-offset-4 hover:underline">
              {site.email}
            </a>
          </div>
          <form className="grid gap-4 border-t-4 border-forest bg-white p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-forest">
                Name
                <input className="rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-forest">
                Email
                <input className="rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper" type="email" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-forest">
              Organization
              <input className="rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-forest">
              Program interest
              <select className="rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper">
                <option>General</option>
                <option>Veterans and service</option>
                <option>Athletics and recreation</option>
                <option>Public education</option>
                <option>Montana Media</option>
                <option>Community sponsorship</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-forest">
              Message
              <textarea className="min-h-36 rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper" />
            </label>
            <button type="button" className="rounded-md bg-forest px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-cream transition hover:bg-copper">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
