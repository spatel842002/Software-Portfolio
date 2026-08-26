import './globals.css';
import type { Metadata } from 'next';
import { siteMeta } from '../data/site';

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.siteUrl)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="min-h-screen bg-surface text-foreground">{children}</div>
      </body>
    </html>
  );
}
