import {
  BadgeCheck,
  BookOpenCheck,
  Clapperboard,
  HeartHandshake,
  Landmark,
  Megaphone,
  Trophy,
  ShieldCheck
} from "lucide-react";

export const fundingPaths = [
  {
    title: "Grants",
    eyebrow: "Direct Support",
    icon: HeartHandshake,
    copy:
      "Flexible support for nonprofits, local organizers, veteran groups, educators, and community projects doing useful work in Montana."
  },
  {
    title: "Sponsorships",
    eyebrow: "Community Events",
    icon: ShieldCheck,
    copy:
      "Visible backing for tournaments, food-truck nights, fundraisers, public events, media projects, and partner-led gatherings."
  },
  {
    title: "Scholarships",
    eyebrow: "Access",
    icon: BookOpenCheck,
    copy:
      "Help with registrations, equipment, education, training, resource access, and participation costs for Montanans who need it."
  }
];

export const programs = [
  {
    slug: "veterans-service-community-support",
    title: "Veterans, Service, and Community Support",
    eyebrow: "Veterans",
    icon: Landmark,
    quote: "Service deserves public support that is visible, practical, and sustained.",
    purpose:
      "Support veteran-serving nonprofits, veterans sports and recreation, outdoor events, resource guides, entrepreneur education, service projects, and public storytelling.",
    initiatives: [
      "Veteran-serving nonprofit partnerships",
      "Veterans sports and recreation support",
      "Veterans outdoor events",
      "Veteran entrepreneur education",
      "Veterans resource guides and community service projects"
    ]
  },
  {
    slug: "sports-recreation-community-events",
    title: "Sports, Recreation, and Community Events",
    eyebrow: "Community Life",
    icon: Trophy,
    quote: "Athletics, tournaments, outdoor events, and community gatherings are where Montana connection gets built.",
    purpose:
      "Support athletics, tournaments, adult leagues, youth leagues, veterans recreation, first responder recreation, outdoor events, equipment grants, and community gatherings.",
    initiatives: [
      "Team and tournament sponsorships",
      "Adult, youth, veteran, and first responder recreation",
      "Outdoor events and community gatherings",
      "Equipment grants",
      "Registration scholarships and local sports storytelling"
    ]
  },
  {
    slug: "public-education-consumer-freedom",
    title: "Public Education and Consumer Freedom",
    eyebrow: "Education",
    icon: BookOpenCheck,
    quote: "Good public education is clear, local, and useful.",
    purpose:
      "Support veteran resource guides, patient access education, consumer education, cannabis and hemp explainers, civic education, public revenue education, and community reinvestment education.",
    initiatives: [
      "Veteran resource guides",
      "Patient access education",
      "Consumer freedom education",
      "Lawful-market and practical regulation explainers",
      "Public revenue and community reinvestment education"
    ]
  },
  {
    slug: "montana-media-project",
    title: "Montana Media Project",
    eyebrow: "Media",
    icon: Clapperboard,
    quote:
      "Every video gets a transcript. Every podcast gets a transcript. Every event gets a recap.",
    purpose:
      "Develop podcasts, short videos, interviews, event recaps, veteran profiles, sports features, community partner stories, public education clips, consumer freedom explainers, patient access explainers, and Foundation updates.",
    initiatives: [
      "Podcasts and short videos",
      "Veteran profiles and sports features",
      "Community partner stories",
      "Public education clips",
      "Transcripts, web summaries, and event recaps"
    ]
  },
  {
    slug: "patient-access-consumer-education",
    title: "Patient Access and Consumer Education",
    eyebrow: "Civic Education",
    icon: Megaphone,
    quote: "Montanans deserve practical information about access, choice, and civic participation.",
    purpose:
      "Support education around patient access, consumer choice, practical civic information, and Montana community reinvestment.",
    initiatives: [
      "Public education briefs",
      "Patient access and consumer freedom explainers",
      "Lawful-market participation materials",
      "Community roundtables where appropriate",
      "Plain-language education materials"
    ]
  },
  {
    slug: "community-partnerships-events",
    title: "Community Partnerships and Events",
    eyebrow: "Partnerships",
    icon: BadgeCheck,
    quote:
      "Community support is strongest when people can see it, join it, and build on it.",
    purpose:
      "Support Foundation events, partner announcements, local publication placements, impact reporting, and community materials.",
    initiatives: [
      "Community event materials",
      "Event posters and sports sponsorship banners",
      "Community flyers and partner announcements",
      "Impact report layout and limited printing",
      "Digital pages for major events and partner updates"
    ]
  }
];

export const impactStats = [
  { value: "6", label: "Program areas", note: "Veterans, sports, education, events, stories, and partnerships" },
  { value: "2026", label: "Foundation launch", note: "First public program cycle" },
  { value: "MT", label: "Montana-first", note: "Built around local people and local projects" },
  { value: "Year-round", label: "Community support", note: "Events, resources, recaps, and partner updates" },
  { value: "Open", label: "Partner conversations", note: "Athletics groups, nonprofits, educators, veterans groups, and organizers" },
  { value: "Stories", label: "Local documentation", note: "Interviews, profiles, event recaps, podcasts, and transcripts" }
];

export const stories = [
  {
    title: "The public home for the Montana Kush Community Foundation",
    category: "Foundation",
    excerpt:
      "The public home for Montana Kush Community Foundation programs, partners, events, media, education, and impact."
  },
  {
    title: "Supporting Montana veterans and the communities they call home",
    category: "Veterans",
    excerpt:
      "Veterans programs anchor the Foundation in service, local connection, and practical support."
  },
  {
    title: "Sports, recreation, and community events",
    category: "Community Life",
    excerpt:
      "Athletics, tournaments, leagues, outdoor events, and community gatherings create repeated, useful ways to show up."
  },
  {
    title: "Montana Stories: interviews, recaps, and transcripts",
    category: "Stories",
    excerpt:
      "A media project built around podcasts, videos, partner stories, event recaps, and searchable transcripts."
  },
  {
    title: "Patient access, consumer education, and community reinvestment",
    category: "Public Education",
    excerpt:
      "Public education explains patient access, consumer choice, civic participation, and community reinvestment."
  }
];

