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
};

export const projects: ProjectItem[] = [
  {
    name: 'Vulte',
    summary: 'A digital banking experience focused on beneficiary payments, airtime, and bill management.',
    details: ['Beneficiary management', 'Account verification', 'Multiple transfer channels', 'Smooth payment flows'],
    storeLinks: [
      { label: 'Play Store', href: 'https://play.google.com/store/search?q=Vulte' },
      { label: 'App Store', href: 'https://apps.apple.com/us/search?term=Vulte' },
    ],
  },
  {
    name: 'MoneySwap',
    summary: 'A currency swap and wallet app that supports funding, withdrawals, and Paystack.',
    details: ['User authentication', 'Wallet funding and swapping', 'Paystack integration', 'Bid-based currency exchange'],
    storeLinks: [
      { label: 'Play Store', href: 'https://play.google.com/store/search?q=MoneySwap' },
      { label: 'App Store', href: 'https://apps.apple.com/us/search?term=MoneySwap' },
    ],
  },
  {
    name: 'African Proverbs',
    summary: 'A mobile app featuring African wisdom and premium content delivery.',
    details: ['App store deployment', 'Stripe payment upgrade', 'Profile and ad features'],
    storeLinks: [
      { label: 'Play Store', href: 'https://play.google.com/store/search?q=African+Proverbs' },
      { label: 'App Store', href: 'https://apps.apple.com/us/search?term=African%20Proverbs' },
    ],
  },
  {
    name: 'LearnIt',
    summary: 'An edutech app built from scratch with Bloc state management for learning workflows.',
    details: ['BLoC state architecture', 'Learning content delivery', 'Interactive learning features'],
    storeLinks: [
      { label: 'Play Store', href: 'https://play.google.com/store/search?q=LearnIt' },
      { label: 'App Store', href: 'https://apps.apple.com/us/search?term=LearnIt' },
    ],
  },
];
