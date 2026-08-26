import Link from 'next/link';
import { Github, Mail } from 'lucide-react';
import { siteMeta } from '../data/site';

const LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/systems', label: 'Systems' },
  { href: '/skills', label: 'Skills' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="font-display text-base font-semibold">Shriya Patel</span>
            <p className="mt-2 text-sm text-muted">
              Software Engineer building backend systems, cloud infrastructure, and applied AI. Based in Arizona,
              open to relocate.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={siteMeta.github}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="GitHub profile"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-foreground"
              >
                <Github size={16} />
              </a>
              <a
                href={`mailto:${siteMeta.email}`}
                aria-label="Send email"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-foreground"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shriya Patel. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS · Privacy-first, email-only contact.</p>
        </div>
      </div>
    </footer>
  );
}
