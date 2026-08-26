import type { Metadata } from 'next';
import { projects } from '../../data/projects';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects'
};

export default function ProjectsPage() {
  return (
    <main id="main">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Selected work emphasizing backend systems, distributed architecture, cloud infrastructure, and applied AI.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
