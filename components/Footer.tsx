import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { FoundationLogo } from "./FoundationLogo";

export function Footer() {
  return (
    <footer className="topo-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div>
          <FoundationLogo className="w-[250px] sm:w-[324px]" />
          <p className="mt-5 max-w-xl text-sm leading-7 text-cream">
            Founded with support from Montana Kush. {site.coreMission}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-gold">Foundation</h2>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-cream hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-gold">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-cream">
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              {site.email}
            </a>
            <a href={site.sponsorUrl} className="hover:text-gold" rel="noreferrer" target="_blank">
              Founding Sponsor: Montana Kush
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs leading-6 text-cream sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{site.disclaimer}</p>
          <p>Copyright 2026 Montana Kush Community Foundation.</p>
        </div>
      </div>
    </footer>
  );
}
