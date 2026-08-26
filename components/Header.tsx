'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { siteMeta } from '../data/site';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/systems', label: 'Systems' },
  { href: '/skills', label: 'Skills' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2 focus-ring rounded" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-sm font-bold text-accent-foreground">
            SP
          </span>
          <span className="font-display text-base font-semibold tracking-tight">Shriya Patel</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={siteMeta.github}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub profile"
            className="focus-ring rounded-md p-2 text-muted transition-colors hover:text-foreground"
          >
            <Github size={18} />
          </a>
          <ThemeToggle />
          <a
            href={`mailto:${siteMeta.email}`}
            className="focus-ring rounded-md bg-accent-500 px-3.5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Email Me
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="focus-ring rounded-md border border-border p-2 text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`focus-ring rounded-md px-3 py-2.5 text-sm font-medium ${
                    active ? 'bg-surface text-foreground' : 'text-muted hover:text-foreground'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-4 border-t border-border pt-4">
              <a
                href={siteMeta.github}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2 text-sm text-muted hover:text-foreground"
              >
                <Github size={16} /> GitHub
              </a>
              <a href={`mailto:${siteMeta.email}`} className="text-sm font-medium text-accent-500">
                Email Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
