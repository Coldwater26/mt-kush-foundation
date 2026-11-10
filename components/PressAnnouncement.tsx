import Link from "next/link";
import { pressRelease } from "@/lib/press-release";

export function PressAnnouncement() {
  return <section aria-label="Latest Foundation news" className="border-y border-forest/20 bg-parchment">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div><p className="text-xs font-black uppercase tracking-widest text-copper">Foundation news · November 10, 2026</p><h2 className="mt-2 font-serif text-2xl font-black text-forest">Applications open for $15,000 in Montana microgrants</h2><p className="mt-2 text-forest">Apply by December 15. Awards of $500, $1,000 and $1,500.</p></div>
      <Link className="shrink-0 font-bold text-forest underline underline-offset-4" href={pressRelease.path}>Read the release & download press assets →</Link>
    </div>
  </section>;
}
