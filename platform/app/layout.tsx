import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Institute 9 | Cyber Security, AI Engineering & Data Science',
  description: 'Institute 9 is a career-focused technology institute for Cyber Security, AI Engineering and Data Science with practical labs, projects and expert mentorship.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  robots: { index: true, follow: true },
  openGraph: { title: 'Institute 9', description: 'Learn in-demand technology skills through practical, career-focused programs.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}</body></html>;
}
