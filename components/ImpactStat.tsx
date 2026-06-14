export function ImpactStat({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="border-t-4 border-pine py-5">
      <p className="font-serif text-5xl font-black leading-none text-cream">{value}</p>
      <p className="mt-3 text-sm font-black uppercase tracking-[0.08em] text-cream">{label}</p>
      {note ? <p className="mt-2 text-xs uppercase tracking-[0.08em] text-gold">{note}</p> : null}
    </div>
  );
}
