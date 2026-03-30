export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'Core technologies',
    items: ['Dart', 'Flutter', 'Firebase', 'REST APIs', 'GraphQL', 'SQLite'],
  },
  {
    category: 'Architecture & tooling',
    items: ['BLoC', 'Provider', 'GetX', 'Git', 'CI/CD', 'Version control'],
  },
  {
    category: 'Design & delivery',
    items: ['Mobile UI/UX', 'Responsive layout', 'Performance optimization', 'Unit testing'],
  },
  {
    category: 'Collaboration',
    items: ['Agile workflows', 'Team communication', 'Technical documentation', 'Stakeholder alignment'],
  },
];
