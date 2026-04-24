export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectItem = {
  name: string;
  summary: string;
  details: string[];
  link?: string;
  storeLinks?: ProjectLink[];
  platforms?: string[];
  techStack?: string[];
  aiTools?: string[];
  timeline?: string;
  metrics?: string[];
  assets?: string[];
  category?: 'mobile' | 'web';
};

export const projects: ProjectItem[] = [
  {
    name: 'Vulte',
    summary: 'A digital banking experience focused on beneficiary payments, airtime, and bill management.',
    details: ['Beneficiary management', 'Account verification', 'Multiple transfer channels', 'Smooth payment flows'],
    storeLinks: [
      { label: 'Play Store', href: 'https://play.google.com/store/search?q=Vulte' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/vulte/id1541640258?uo=4' },
    ],
    platforms: ['Android', 'iOS'],
    techStack: ['Flutter', 'Dart', 'REST APIs'],
    aiTools: [],
    timeline: 'Oct 2024 — Nov 2024',
    metrics: [],
    assets: [],
    category: 'mobile',
  },
  {
    name: 'MoneySwap',
    summary: 'A currency swap and wallet app that supports funding, withdrawals, and Paystack.',
    details: ['User authentication', 'Wallet funding and swapping', 'Paystack integration', 'Bid-based currency exchange'],
    storeLinks: [
      { label: 'Play Store', href: 'https://play.google.com/store/search?q=MoneySwap' },
      { label: 'App Store', href: 'https://apps.apple.com/us/search?term=MoneySwap' },
    ],
    platforms: ['Android', 'iOS'],
    techStack: ['Flutter', 'Dart', 'Paystack', 'Firebase'],
    aiTools: ['Basic AI-assisted pricing suggestions'],
    timeline: 'Jun 2024 — Aug 2024',
    metrics: [],
    assets: [],
    category: 'mobile',
  },
  {
    name: 'African Proverbs',
    summary: 'A mobile app featuring African wisdom and premium content delivery.',
    details: ['App store deployment', 'Stripe payment upgrade', 'Profile and ad features'],
    storeLinks: [
      { label: 'Play Store', href: 'https://play.google.com/store/search?q=African+Proverbs' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/african-proverbs/id1516529570?uo=4' },
    ],
    platforms: ['Android', 'iOS'],
    techStack: ['Flutter', 'Dart', 'Stripe'],
    aiTools: [],
    timeline: 'Dec 2023 — Apr 2024',
    metrics: [],
    assets: [],
    category: 'mobile',
  },
  {
    name: 'LearnIt',
    summary: 'An edutech app built from scratch with Bloc state management for learning workflows.',
    details: ['BLoC state architecture', 'Learning content delivery', 'Interactive learning features'],
    storeLinks: [
      { label: 'Play Store', href: 'https://play.google.com/store/search?q=LearnIt' },
      { label: 'App Store', href: 'https://apps.apple.com/us/search?term=LearnIt' },
    ],
    platforms: ['Android', 'iOS'],
    techStack: ['Flutter', 'Dart', 'BLoC'],
    aiTools: [],
    timeline: 'Oct 2021 — Aug 2024',
    metrics: [],
    assets: [],
    category: 'mobile',
  },
  {
    name: 'Sohenation (sohenation.com)',
    summary: 'E-commerce platform built with Next.js for the frontend and Django for the backend, enhanced with AI features for personalized recommendations and copy generation.',
    details: ['Next.js storefront', 'Django REST APIs', 'AI-powered recommendations and content generation'],
    link: 'https://sohenation.com',
    platforms: ['Web'],
    techStack: ['Next.js', 'Django', 'Postgres', 'Vercel'],
    aiTools: ['OpenAI (recommendation prompts)', 'vector search'],
    timeline: '2023 — 2024',
    metrics: [],
    assets: [],
    category: 'web',
  },
  {
    name: 'Sohenation Dashboard (dashboard.sohenation.com)',
    summary: 'Admin dashboard for merchants and analytics built on Next.js with role-based access and reporting.',
    details: ['Analytics dashboards', 'Merchant management', 'Order and inventory reporting'],
    link: 'https://dashboard.sohenation.com',
    platforms: ['Web'],
    techStack: ['Next.js', 'Django', 'Charting libraries'],
    aiTools: ['Automated report summarization'],
    timeline: '2023 — 2024',
    metrics: [],
    assets: [],
    category: 'web',
  },
  {
    name: 'TravelMate Partner Platforms',
    summary: 'Partner portals and APIs for TravelMate (partner.travelmateglo.com, adminpartner.travelmateglo.com): platforms for agents and businesses to list stays and transfers, with APIs for integrations.',
    details: ['Partner listing portals', 'Agent/admin dashboards', 'Public APIs for listings and integrations'],
    link: 'https://partner.travelmateglo.com',
    platforms: ['Web', 'API'],
    techStack: ['Next.js', 'Django', 'REST APIs'],
    aiTools: ['AI-assisted listing copy generation', 'search relevance tuning'],
    timeline: '2022 — 2024',
    metrics: [],
    assets: [],
    category: 'web',
  },
];
