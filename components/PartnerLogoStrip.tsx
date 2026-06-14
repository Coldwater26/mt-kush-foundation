const partners = ["Veterans groups", "Athletics", "Event organizers", "Educators", "Story partners"];

export function PartnerLogoStrip() {
  return (
    <div className="border-y-2 border-forest py-5">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-black uppercase tracking-[0.12em] text-forest">
        {partners.map((partner) => (
          <span key={partner}>{partner}</span>
        ))}
        <span className="bg-forest px-3 py-2 text-cream">Montana Kush</span>
      </div>
    </div>
  );
}
