import './globals.css';
import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import { siteMeta } from '../data/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const lexend = Lexend({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: siteMeta.title,
    template: `%s — ${siteMeta.title}`
  },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.siteUrl),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.siteUrl,
    images: [
      {
        url: `${siteMeta.siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'Shriya Patel — software engineer'
      }
    ]
  }
};

const themeInitScript = `(function(){try{var stored=localStorage.getItem('theme');var dark=stored?stored==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',dark);}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shriya Patel',
    jobTitle: 'Software Engineer',
    url: siteMeta.siteUrl,
    email: siteMeta.email,
    sameAs: [siteMeta.github]
  };
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="min-h-screen bg-background text-foreground">{children}</div>
      </body>
    </html>
  );
}
