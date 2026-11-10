import Image from "next/image";
import { Flag, Gamepad2, MapPin } from "lucide-react";
import { foodDriveLocations, kartStops } from "@/lib/community-events";

const titles = { griz: "Can the Griz", cats: "Can the Cats", both: "Can the Griz + Can the Cats" };

export function CommunityCalendar() {
  return <section id="calendar" className="mb-12 scroll-mt-40" aria-labelledby="calendar-heading">
    <div className="mb-6 border-b-2 border-forest pb-6">
      <p className="text-sm font-black uppercase tracking-widest text-copper">Community calendar</p>
      <h2 id="calendar-heading" className="mt-3 font-serif text-4xl font-black text-forest sm:text-5xl">Show up in your town.</h2>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-smoke">Give food, help your neighbors, and join the next statewide tournament. Find Montana Kush Community Foundation events by location.</p>
      <nav aria-label="Calendar locations" className="mt-5 flex flex-wrap gap-2">
        {foodDriveLocations.map(({town}) => <a key={town} href={`#events-${town.toLowerCase().replaceAll(" ", "-")}`} className="border border-forest px-4 py-2 text-sm font-bold text-forest hover:bg-gold">{town}</a>)}
        <a href="#mario-kart" className="bg-forest px-4 py-2 text-sm font-bold text-cream">Mario Kart series</a>
      </nav>
    </div>
    <div className="mb-6 bg-forest p-6 text-cream">
      <p className="text-sm font-black uppercase tracking-widest text-gold">November 2026 food drive</p>
      <h3 className="mt-2 font-serif text-3xl font-bold">Every can counts.</h3>
      <p className="mt-3 leading-7">Bring unopened, nonperishable food: canned goods, pasta, rice, and peanut butter. The statewide rivalry drive runs November 7-21. Local store collection cutoffs may be earlier to allow time for delivery and weighing.</p>
      <p className="mt-3 leading-7">Stop by your Montana Kush location during store hours and ask the team where to leave your donation.</p>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      {foodDriveLocations.map(event => <article id={`events-${event.town.toLowerCase().replaceAll(" ", "-")}`} key={event.town} className="scroll-mt-40 overflow-hidden border-2 border-forest bg-white">
        {event.campaign === "cats" ? <div className="flex aspect-video items-center justify-center gap-4 bg-[#f8f3e8] p-5">
          <div className="w-1/2"><Image src="/assets/mt-kush-community-foundation-logo.svg" alt="Montana Kush Community Foundation" width={280} height={100} className="h-auto w-full"/><p className="mt-4 font-serif text-2xl font-black text-[#650c2b]">Give food.<br/>Help neighbors.</p></div>
          <Image src="/assets/can-drive-2026/can-the-cats-logo.png" alt="Can the Cats" width={320} height={280} className="h-auto w-1/2"/>
        </div> : <Image src={`/assets/can-drive-2026/foundation-${event.campaign}.png`} alt={`Montana Kush Community Foundation ${titles[event.campaign]} food drive: donate unopened, nonperishable food`} width={1920} height={1080} className="h-auto w-full" sizes="(min-width: 768px) 50vw, 100vw"/>}
        <div className="p-6">
          <p className="text-sm font-black uppercase tracking-widest text-copper">{event.town} · November 2026</p>
          <h3 className="mt-2 font-serif text-3xl font-black text-forest">{titles[event.campaign]}</h3>
          <p className="mt-4 flex items-start gap-2 font-bold text-forest"><MapPin size={20} className="shrink-0" aria-hidden/>{event.address}</p>
          <p className="mt-4 leading-7 text-smoke">{event.note}</p>
          <a href="https://montanakush.com/contact/" className="mt-5 inline-block font-bold text-forest underline">Store locations and contact details</a>
        </div>
      </article>)}
    </div>
    <p className="mt-5 text-sm leading-7 text-smoke">Campaign details: <a className="underline" href="https://www.montana.edu/canthegriz/">Can the Griz</a> · <a className="underline" href="https://missoulafoodbank.org/get-involved/events/can-the-cats">Can the Cats</a>. For Gallatin Valley donations, HRDC needs collected food at 206 E. Griffin Dr., Bozeman, by November 20 at 5 p.m.</p>
    <section id="mario-kart" className="mt-12 scroll-mt-40 overflow-hidden border-2 border-forest" aria-labelledby="kart-heading">
      <Image src="/assets/montana-kush-racing-crew.png" alt="Illustrated Montana Kush crew racing on a rainbow track, with Pepper in a cowboy hat driving a green and gold monster kart" width={1672} height={941} className="h-auto w-full" sizes="100vw"/>
      <div className="bg-forest p-6 text-cream sm:p-8">
        <div className="flex items-center justify-between"><p className="text-sm font-black uppercase tracking-widest text-gold">Statewide · Winter 2027 · 21+</p><Flag size={32} aria-hidden/></div>
        <h3 id="kart-heading" className="mt-4 font-serif text-4xl font-black sm:text-5xl">Mario Kart tournament series</h3>
        <p className="mt-4 max-w-3xl text-lg leading-8">Four communities. Regional qualifiers. One Montana championship at the Covellite in Butte.</p>
        <p className="mt-3 max-w-3xl leading-7">Montana Kush, Lewis & Clark Brewing, and the Covellite are planning a statewide series for adult racers. Save these planned dates. Start times, final venue details, entry fees, and registration links will be posted when confirmed.</p>
      </div>
      <div className="grid gap-px bg-forest md:grid-cols-2">
        {kartStops.map(stop => <article key={stop.town} className="overflow-hidden bg-white">
          <div className="relative aspect-video"><Image src="/assets/montana-kush-racing-crew.png" alt="" fill className="object-contain" sizes="(min-width: 768px) 50vw, 100vw"/></div>
          <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3"><p className="text-xs font-black uppercase tracking-widest text-copper">{stop.status}</p><Gamepad2 className="text-forest" aria-hidden/></div>
          <h4 className="mt-3 font-serif text-3xl font-black text-forest">{stop.town}</h4>
          <p className="mt-2 text-xl font-bold text-forest">{stop.date}</p>
          <p className="mt-2 font-bold text-copper">{stop.venue}</p>
          <p className="mt-4 leading-7 text-smoke">{stop.note}</p>
          </div>
        </article>)}
      </div>
      <div className="bg-parchment p-6"><p className="font-bold text-forest">Registration coming soon.</p><p className="mt-2 leading-7">Questions about taking part? <a href="mailto:pepper@montanakush.org" className="font-bold underline">Contact the Foundation</a>.</p></div>
    </section>
  </section>;
}
