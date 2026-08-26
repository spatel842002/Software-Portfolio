import Link from 'next/link';
import { siteMeta } from '../data/site';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 bg-opacity-90 backdrop-blur z-40 border-b">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex flex-wrap items-center justify-end gap-3">
          <Link href="/" className="font-semibold text-lg">
            Shriya Patel
          </Link>
          <span className="text-sm text-muted">Software Engineer</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/projects" className="text-sm">
            Projects
          </Link>
          <Link href="/experience" className="text-sm">
            Experience
          </Link>
          <Link href="/systems" className="text-sm">
            Systems
          </Link>
          <Link href="/skills" className="text-sm">
            Skills
          </Link>
          <Link href="/resume" className="text-sm">
            Resume
          </Link>
          <Link href="/contact" className="text-sm">
            Contact
          </Link>
          <a href={`mailto:${siteMeta.email}`} className="text-sm">
            Email
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
