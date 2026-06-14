type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionIntro({ eyebrow, title, copy, align = "left", light = false }: SectionIntroProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`mk-kicker text-sm font-black uppercase tracking-[0.08em] ${light ? "text-gold" : "text-copper"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h1 className={`mk-heading mt-3 font-serif text-4xl font-black leading-[0.92] sm:text-5xl ${light ? "text-cream" : "text-forest"}`}>
        {title}
      </h1>
      {copy ? (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-cream" : "text-smoke"}`}>{copy}</p>
      ) : null}
    </div>
  );
}
