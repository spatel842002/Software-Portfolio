import Link from 'next/link';
import { ArrowRight, Boxes, Cloud, Cpu, FileText, Layers, Network, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { siteMeta } from '../data/site';

const STATS = [
  { label: 'Years of experience', value: '4+' },
  { label: 'Records processed / day', value: '20K+' },
  { label: 'Page-load reduction', value: '60%' },
  { label: 'Graduate GPA', value: '4.0' }
];

const FOCUS_AREAS = [
  { icon: Layers, title: 'Backend & Distributed Systems', description: 'Microservices, event-driven pipelines, and APIs in Python, Java, and Node.js.' },
  { icon: Sparkles, title: 'AI, LLM & Machine Learning', description: 'RAG pipelines, LangChain, embeddings, vector search, and reproducible ML systems.' },
  { icon: Cloud, title: 'Cloud Infrastructure', description: 'AWS and Azure infrastructure, containers, and observability at production scale.' }
];

const OVERVIEW_CARDS = [
  { href: '/experience', icon: Boxes, title: 'Experience', description: 'Backend and cloud engineering across data-heavy, event-driven systems.' },
  { href: '/systems', icon: Network, title: 'Systems thinking', description: 'Clear boundaries, observable workflows, and dependable paths from input to insight.' },
  { href: '/skills', icon: Cpu, title: 'Tools I use', description: 'Python, Java, AWS, Azure, distributed systems, and applied AI.' }
];

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);
  return (
    <main id="main">
      <Header />

      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 -z-10 h-[520px]" />
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> Software Engineer · Arizona, USA
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              I build reliable software across backend systems, cloud infrastructure, and applied AI.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-muted sm:text-lg">
              I design scalable services, event-driven workflows, data platforms, and AI-enabled applications using
              Python, Java, AWS, Azure, and modern distributed-systems practices.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/projects"
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-accent-500 px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Explore Projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/resume"
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
              >
                <FileText size={16} /> View Resume
              </Link>
              <a
                href={`mailto:${siteMeta.email}`}
                className="focus-ring inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                Email Me
              </a>
            </div>
          </div>

          <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-surface px-4 py-5 text-center">
                <dt className="text-xs text-muted">{stat.label}</dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-accent-600">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            {FOCUS_AREAS.map((area) => (
              <div key={area.title} className="rounded-xl border border-border bg-surface p-5">
                <area.icon size={20} className="text-accent-600" />
                <h2 className="mt-3 font-display text-sm font-semibold">{area.title}</h2>
                <p className="mt-1.5 text-sm text-muted">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="focus-ring inline-flex items-center gap-1 text-sm font-medium text-accent-600">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20" aria-label="Portfolio overview">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {OVERVIEW_CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="focus-ring group rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-card"
            >
              <card.icon size={20} className="text-accent-600" />
              <h2 className="mt-3 font-display font-semibold">{card.title}</h2>
              <p className="mt-1.5 text-sm text-muted">{card.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-600">
                Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
