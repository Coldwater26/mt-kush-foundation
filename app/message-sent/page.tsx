import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you | Montana Kush Community Foundation",
  robots: { index: false, follow: true },
};

export default function MessageSentPage() {
  return <section className="topo-paper px-4 py-20">
    <div className="mx-auto max-w-2xl border-t-4 border-forest bg-white p-8 sm:p-12">
      <p className="text-sm font-bold uppercase tracking-widest text-copper">Montana Kush Community Foundation</p>
      <h1 className="mt-4 font-serif text-4xl font-bold text-forest">Thank you for reaching out.</h1>
      <p className="mt-6 leading-8">You have completed the form submission process. Foundation messages and applications are directed to Pepper Petersen at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      <p className="mt-4 leading-8">If you need to add information or follow up, email Pepper directly. A submitted grant application does not guarantee an award.</p>
      <Link href="/" className="mt-8 inline-block bg-forest px-6 py-3 font-bold text-cream">Return to the Foundation</Link>
    </div>
  </section>;
}
