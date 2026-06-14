import type { Metadata } from "next";
import { SectionIntro } from "@/components/SectionIntro";
import { StoryCard } from "@/components/StoryCard";
import { stories } from "@/lib/programs";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta.stories;

const storiesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Montana Stories",
  url: `${site.url}/stories`,
  isPartOf: {
    "@type": "CollectionPage",
    name: "Montana Media",
    url: `${site.url}/media`
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url
  },
  hasPart: stories.map((story) => ({
    "@type": "Article",
    headline: story.title,
    articleSection: story.category,
    description: story.excerpt
  }))
};

export default function StoriesPage() {
  return (
    <>
      <section className="topo-forest py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Stories"
            title="Montana Stories, event recaps, partner features."
            copy="Interviews, profiles, short videos, podcasts, recaps, and transcripts from the people and places the Foundation supports."
            light
          />
        </div>
      </section>
      <section className="topo-paper py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {stories.map((story) => (
            <StoryCard key={story.title} {...story} />
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storiesSchema) }}
      />
    </>
  );
}

