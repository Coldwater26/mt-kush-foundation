import {
  BadgeCheck,
  BookOpenCheck,
  CalendarDays,
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

export const programEvents = [
  {
    title: "Cannabis for Conservation",
    date: "Sept. 19, 2026",
    format: "Frisbee golf tournament",
    location: "Montana",
    eyebrow: "Foundation Event",
    icon: CalendarDays,
    copy:
      "A community-forward tournament built around outdoor recreation, conservation support, local sponsorships, volunteer energy, and Montana Stories coverage.",
    supports: ["Conservation projects", "Local athletics", "Volunteer participation", "Montana Stories recap"]
  },
  {
    title: "Montana Kush Derby Car Build",
    date: "Sept. 11-13, 2026",
    format: "Helena Septemberfest Soapbox Derby",
    location: "Downtown Helena",
    eyebrow: "Volunteer Build",
    icon: CalendarDays,
    copy:
      "Volunteers can help build, paint, prep, and crew the Montana Kush derby car for Septemberfest in downtown Helena.",
    supports: ["Derby car build crew", "Race day volunteers", "United Way fundraiser", "Downtown Helena community event"]
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
  { value: "$250K-$350K", label: "Estimated community support", note: "Grants, sponsorships, scholarships, and in-kind help" },
  { value: "3K-5K", label: "Montanans reached", note: "Events, teams, veterans programs, education, and access support" },
  { value: "75+", label: "Local activations", note: "Trail days, tournaments, fundraisers, community nights, and partner projects" },
  { value: "500+", label: "Veterans and families touched", note: "Direct support, recreation, service projects, guides, and community events" },
  { value: "100+", label: "Scholarship-style assists", note: "Registrations, equipment, education, training, and participation costs" },
  { value: "6", label: "Support lanes", note: "Veterans, athletics, events, education, media, and partnerships" }
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

