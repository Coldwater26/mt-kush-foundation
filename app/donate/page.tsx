import type { Metadata } from "next";
import { DonationCTA } from "@/components/DonationCTA";
import { SectionIntro } from "@/components/SectionIntro";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta.donate;

const ways = [
  "Make a donation",
  "Sponsor a program pillar",
  "Fund a community activation",
  "Corporate/community partners",
  "In-kind support"
];

export default function DonatePage() {
  return (
    <>
      <section className="topo-forest py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Sponsor / Donate"
            title="Support veterans, sports, education, events, and Montana Stories."
            copy="Use the form to start a conversation about donations, program sponsorships, community activations, in-kind support, or partner opportunities."
            light
          />
        </div>
      </section>
      <section className="topo-paper py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="grid gap-4">
            {ways.map((way) => (
              <div key={way} className="border-t-4 border-forest bg-white p-5">
                <h2 className="text-xl font-bold text-forest">{way}</h2>
                <p className="mt-2 text-sm leading-7 text-smoke">Start a conversation about support, sponsorship, materials, or volunteer help.</p>
              </div>
            ))}
          </div>
          <DonationCTA />
        </div>
      </section>
    </>
  );
}

