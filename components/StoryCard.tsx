import Image from "next/image";

type StoryCardProps = {
  title: string;
  category: string;
  excerpt: string;
};

const categoryImages: Record<string, string> = {
  Foundation: "/assets/story-foundation-info-table.png",
  Veterans: "/assets/story-veteran-supplies-drop.png",
  "Community Life": "/assets/story-community-sports-cleanup.png",
  Stories: "/assets/story-montana-media-interview.png",
  "Public Education": "/assets/story-public-education-briefing.png"
};

export function StoryCard({ title, category, excerpt }: StoryCardProps) {
  const image = categoryImages[category] ?? "/assets/story-general-community-gathering.png";

  return (
    <article className="group border-t-4 border-forest bg-white">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <p className="mk-kicker text-xs font-black uppercase tracking-[0.08em] text-copper">{category}</p>
        <h2 className="mk-heading mt-3 font-serif text-2xl font-black leading-[0.98] text-forest">{title}</h2>
        <p className="mt-4 text-sm leading-7 text-smoke">{excerpt}</p>
      </div>
    </article>
  );
}
