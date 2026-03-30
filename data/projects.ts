export type ProjectItem = {
  name: string;
  summary: string;
  details: string[];
  link?: string;
};

export const projects: ProjectItem[] = [
  {
    name: 'Vulte',
    summary: 'A digital banking experience focused on beneficiary payments, airtime, and bill management.',
    details: ['Beneficiary management', 'Account verification', 'Multiple transfer channels', 'Smooth payment flows'],
  },
  {
    name: 'MoneySwap',
    summary: 'A currency swap and wallet app that supports funding, withdrawals, and Paystack.',
    details: ['User authentication', 'Wallet funding and swapping', 'Paystack integration', 'Bid-based currency exchange'],
  },
  {
    name: 'African Proverbs',
    summary: 'A mobile app featuring African wisdom and premium content delivery.',
    details: ['App store deployment', 'Stripe payment upgrade', 'Profile and ad features'],
  },
  {
    name: 'LearnIt',
    summary: 'An edutech app built from scratch with Bloc state management for learning workflows.',
    details: ['BLoC state architecture', 'Learning content delivery', 'Interactive learning features'],
  },
];
