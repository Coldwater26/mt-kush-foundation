import Link from "next/link";
import type { programs } from "@/lib/programs";

type Program = (typeof programs)[number];

export function ProgramCard({ program }: { program: Program }) {
  const Icon = program.icon;

  return (
    <article className="group grid border-t-4 border-forest bg-cream transition hover:bg-white lg:grid-cols-[92px_1fr]">
      <div className="flex items-start justify-between border-b border-forest/15 p-5 lg:block lg:border-b-0 lg:border-r">
        <p className="font-serif text-3xl font-black text-pine">MT</p>
        <Icon className="mt-2 text-forest" aria-hidden size={26} strokeWidth={1.8} />
      </div>
      <div className="p-5">
        <p className="mk-kicker text-xs font-black uppercase tracking-[0.08em] text-copper">{program.eyebrow}</p>
        <h2 className="mk-heading mt-2 font-serif text-2xl font-black leading-[0.98] text-forest">{program.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-smoke">{program.purpose}</p>
        <Link
          href={`/programs#${program.slug}`}
          className="mt-5 inline-flex text-xs font-black uppercase tracking-[0.08em] text-forest underline-offset-4 group-hover:text-pine group-hover:underline"
        >
          View initiatives
        </Link>
      </div>
    </article>
  );
}
