import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/assets/montana-kush-logo.svg`,
  email: site.email,
  founder: {
    "@type": "Organization",
    name: "Montana Kush",
    url: site.sponsorUrl
  },
  sameAs: [site.sponsorUrl],
  description: site.legalMission,
  knowsAbout: [
    "Montana Media",
    "Montana Stories",
    "community partnerships",
    "veterans support",
    "sports and recreation",
    "community events",
    "public education",
    "podcasts",
    "video interviews",
    "event recaps",
    "transcripts"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  publisher: {
    "@type": "Organization",
    name: site.name
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url}/media?search={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: site.keywords,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
