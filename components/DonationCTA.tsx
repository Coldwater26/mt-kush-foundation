import { site } from "@/lib/site";
import { InquiryDelivery } from "@/components/InquiryDelivery";

export function DonationCTA() {
  return (
    <form
      action={`https://formsubmit.co/${site.email}`}
      className="grid gap-4 border-t-4 border-forest bg-white p-6"
      method="post"
    >
      <InquiryDelivery subject="Support interest" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Name
          <input className="rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper" name="Name" placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Email
          <input className="rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper" name="email" placeholder="you@example.com" required type="email" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-forest">
        Organization
        <input className="rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper" name="Organization" placeholder="Optional" />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Donation interest
          <select className="rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper" name="Donation interest">
            <option>Make a donation</option>
            <option>Sponsor a program pillar</option>
            <option>Fund a community activation</option>
            <option>In-kind support</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-forest">
          Program area
          <select className="rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper" name="Program area">
            <option>Veterans and service</option>
            <option>Sports and recreation</option>
            <option>Public education</option>
            <option>Montana Media</option>
            <option>Community events</option>
            <option>Lawful-market education</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-forest">
        Message
        <textarea className="min-h-32 rounded-md border border-forest/20 px-3 py-3 text-basalt outline-none focus:border-copper" name="Message" placeholder="Tell us what you would like to support." />
      </label>
      <button type="submit" className="rounded-md bg-forest px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-cream transition hover:bg-copper">
        Submit Interest
      </button>
    </form>
  );
}
