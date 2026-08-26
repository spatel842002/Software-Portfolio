import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Check, Github } from 'lucide-react';
import { projects } from '../../../data/projects';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main id="main">
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/projects" className="focus-ring inline-flex items-center gap-1 text-sm text-muted hover:text-foreground">
          <ArrowLeft size={14} /> All projects
        </Link>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h1>
          {project.featured && (
            <span className="rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-medium text-accent-600">Featured</span>
          )}
        </div>
        <p className="mt-4 max-w-2xl text-muted">{project.description}</p>

        <div className="mt-8 rounded-xl border border-border bg-surface p-6">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted">Highlights</h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm">
                <Check size={16} className="mt-0.5 shrink-0 text-accent-600" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-muted">Technology</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-md border border-border px-2.5 py-1 text-xs text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <a
            href={project.repo}
            rel="noopener noreferrer"
            target="_blank"
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-accent-500 px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Github size={16} /> View Repository
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
