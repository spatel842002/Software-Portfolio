import './globals.css';
import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import { siteMeta } from '../data/site';

export const metadata: Metadata = {
  title: siteMeta.title,
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
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="min-h-screen bg-surface text-foreground">{children}</div>
      </body>
    </html>
  );
}
