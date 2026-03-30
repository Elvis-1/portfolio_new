export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};

export const experiences: ExperienceItem[] = [
  {
    title: 'Flutter Developer (Contract)',
    company: 'Polaris Digital Bank',
    location: 'Lagos, Nigeria',
    period: 'Oct 2024 — Nov 2024',
    description: 'Worked on Vulte 3.0, enhancing banking workflows and beneficiary management.',
    highlights: [
      'Implemented beneficiary profile and payment transfer flows.',
      'Enabled transfers to other banks, airtime, data, and bill payments.',
      'Built beneficiary save, fetch, update, and delete features.',
      'Added account detail validation and biller ID checks to reduce payment errors.',
    ],
  },
  {
    title: 'Flutter Developer (Contract)',
    company: 'Craftytech',
    location: 'Lagos, Nigeria',
    period: 'Jun 2024 — Aug 2024',
    description: 'Built a full-featured MoneySwap app focused on wallet management and currency swap.',
    highlights: [
      'Developed authentication flows for registration, login, and password recovery.',
      'Implemented wallet funding, swap, withdraw, and wallet switching features.',
      'Integrated Paystack for secure payments and transaction handling.',
      'Designed intuitive user flows for currency swaps and bid management.',
    ],
  },
  {
    title: 'Frontend Engineer Flutter (Contract)',
    company: 'Calm Global Information Technologies Ltd',
    location: 'Remote',
    period: 'Dec 2023 — Apr 2024',
    description: 'Contributed to African Proverbs and performance improvements across Flutter apps.',
    highlights: [
      'Integrated Stripe payment gateway for package upgrades.',
      'Implemented custom ads, Google ads, and profile management features.',
      'Optimized app performance and memory usage across devices.',
    ],
  },
  {
    title: 'Software Engineer (Contract)',
    company: 'BuzyDev Technologies Ltd',
    location: 'Remote',
    period: 'Oct 2021 — Aug 2024',
    description: 'Managed engineering efforts for multiple mobile and web products.',
    highlights: [
      'Led delivery of Mr. Empowerment app and the Hostengines hosting platform.',
      'Developed Bell Global Express authentication and localization flows.',
      'Built the LearnIt edutech app using BLoC state management.',
    ],
  },
];
