import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.merch;

const details = [
  "Trail days, tournaments, food-truck nights, fundraisers, and community events.",
  "Hands-on help for partners, teams, veterans groups, and local organizers.",
  "A clean white Foundation shirt for the people who showed up.",
  "Small Montana Kush Community Foundation logo on the chest. I showed up. on the back."
];

export default function MerchPage() {
  return (
    <>
      <section className="topo-forest py-16 text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-end lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-gold">Volunteer</p>
            <h1 className="mt-4 font-serif text-5xl font-black uppercase leading-[0.9] sm:text-6xl">
              For those who show up.
            </h1>
          </div>
          <p className="max-w-2xl text-xl font-semibold leading-9 text-cream">
            Volunteer with the Montana Kush Community Foundation. Help at events, support local partners, and stand with the communities that support us.
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
            <p className="text-sm font-black uppercase tracking-[0.14em] text-copper">Showing Up</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-none text-forest">
              The shirt is earned by showing up.
            </h2>
            <div className="mt-8 grid gap-4">
              {details.map((detail) => (
                <p key={detail} className="border-t border-forest/20 pt-4 text-base font-semibold leading-7 text-smoke">
                  {detail}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/contact">Volunteer With Us</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
