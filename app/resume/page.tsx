import type { Metadata } from 'next';
import { Download, ExternalLink } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Resume'
};

export default function Resume() {
  const pdfPath = '/Shriya_Patel_Resume.pdf';
  return (
    <main id="main">
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Resume</h1>
        <p className="mt-3 text-muted">Download or view the official resume PDF.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-accent-500 px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <ExternalLink size={16} /> View PDF
          </a>
          <a
            href={pdfPath}
            download="Shriya_Patel_Resume.pdf"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
