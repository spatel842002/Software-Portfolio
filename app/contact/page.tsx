import type { Metadata } from 'next';
import { Github, Mail } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CopyEmailButton from '../../components/CopyEmailButton';
import { siteMeta } from '../../data/site';

export const metadata: Metadata = {
  title: 'Contact'
};

export default function Contact() {
  return (
    <main id="main">
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 max-w-xl text-muted">
          Preferred contact: email. No forms are provided; please use the details below.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center gap-2.5 text-muted">
              <Mail size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">Email</span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a href={`mailto:${siteMeta.email}`} className="focus-ring font-medium underline-offset-4 hover:underline">
                {siteMeta.email}
              </a>
              <CopyEmailButton email={siteMeta.email} />
            </div>
            <noscript>
              <p className="mt-2 text-sm text-muted">Email: {siteMeta.email}</p>
            </noscript>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="flex items-center gap-2.5 text-muted">
              <Github size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">GitHub</span>
            </div>
            <div className="mt-3">
              <a
                href={siteMeta.github}
                rel="noopener noreferrer"
                target="_blank"
                className="focus-ring font-medium underline-offset-4 hover:underline"
              >
                {siteMeta.github.replace('https://', '')}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
