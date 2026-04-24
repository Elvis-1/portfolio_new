export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Mobile',
    items: ['Dart', 'Flutter', 'BLoC', 'Provider', 'Mobile UI/UX', 'Performance optimization'],
  },
  {
    category: 'Web',
    items: ['Next.js', 'React', 'TypeScript', 'HTML/CSS', 'Responsive design', 'SSR/SSG'],
  },
  {
    category: 'Backend & Infra',
    items: ['Django', 'Node.js', 'Postgres', 'REST APIs', 'GraphQL', 'Authentication', 'Caching'],
  },
  {
    category: 'AI & Tooling',
    items: ['OpenAI / LLMs', 'Prompt engineering', 'Vector search & embeddings', 'AI-assisted code generation', 'Model evaluation'],
  },
  {
    category: 'DevOps & CI',
    items: ['Docker', 'GitHub Actions', 'CI/CD', 'Vercel', 'Cloud deployments', 'Monitoring & logging'],
  },
  {
    category: 'Design & Delivery',
    items: ['Product thinking', 'Prototyping', 'UX research', 'Accessibility', 'Animation (Framer Motion)'],
  },
  {
    category: 'Collaboration',
    items: ['Agile workflows', 'Mentoring', 'Technical documentation', 'Stakeholder alignment'],
  },
];
