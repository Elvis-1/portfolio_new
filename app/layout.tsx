import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elvis Igiebor | Flutter Software Engineer',
  description: 'Portfolio site for Elvis Igiebor, Flutter Software Engineer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
