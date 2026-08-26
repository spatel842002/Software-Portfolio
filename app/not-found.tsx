import Link from 'next/link';
import { Home } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <main id="main">
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <span className="font-display text-sm font-medium text-accent-600">404</span>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Sorry, we couldn&apos;t find what you were looking for.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-accent-500 px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Home size={16} /> Return home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
