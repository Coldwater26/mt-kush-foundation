import type { programs } from "@/lib/programs";

type Program = (typeof programs)[number];

export function ProgramDetailSection({ program }: { program: Program }) {
  const Icon = program.icon;

  return (
    <section id={program.slug} className="scroll-mt-28 border border-forest/10 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-forest text-cream">
            <Icon aria-hidden size={24} />
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-copper">{program.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-forest">{program.title}</h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-basalt">&ldquo;{program.quote}&rdquo;</p>
          <p className="mt-5 text-sm leading-7 text-smoke">{program.purpose}</p>
        </div>
        <div className="bg-parchment p-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-copper">Grant, sponsorship, and scholarship pathways</h3>
          <ul className="mt-5 grid gap-3">
            {program.initiatives.map((initiative) => (
              <li key={initiative} className="flex gap-3 text-sm leading-7 text-basalt">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-copper" aria-hidden />
                <span>{initiative}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
