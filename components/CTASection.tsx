import { ButtonLink } from "./ButtonLink";

export function CTASection() {
  return (
    <section className="topo-forest text-cream">
      <div className="mx-auto grid w-full max-w-7xl overflow-hidden border-y border-cream/15 lg:grid-cols-[1fr_auto] lg:items-stretch">
        <div className="min-w-0 p-6 sm:p-10">
          <p className="mk-kicker text-sm font-black uppercase tracking-[0.08em] text-gold">Support the work</p>
          <h2 className="mk-heading mt-4 font-serif text-3xl font-black leading-[0.9] text-cream sm:text-5xl">
            Help fund Montana community programs.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-cream">
            Veterans programs, sports and recreation, public events, education, Montana Stories, patient access, and community partnerships.
          </p>
        </div>
        <div className="flex min-w-0 items-center border-t border-cream/15 p-6 sm:p-10 lg:border-l lg:border-t-0">
          <ButtonLink href="/donate" variant="primary" className="bg-gold text-forest hover:bg-cream">
            Support the Foundation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

