export type EducationRecord = {
  title: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
};

export const education: EducationRecord[] = [
  {
    title: 'BSc Engineering',
    institution: 'University of Benin',
    location: 'Benin City, Nigeria',
    period: '2013 — 2018',
    details: ['Mechanical Engineering', 'Strong foundation in problem solving and systems design'],
  },
  {
    title: 'Senior School Certificate',
    institution: 'Testimony Group of School',
    location: 'Nigeria',
    period: '1999 — 2004',
  },
];

export const certifications: string[] = [
  'Flutter & Dart courses',
  'Python by Meta',
  'PHP, Web, and SQL coursework',
  'OKR planning and product delivery training',
];
