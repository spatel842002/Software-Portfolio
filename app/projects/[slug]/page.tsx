import { projects } from '../../../data/projects';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: Props){
  const { slug } = await params;
  const project = projects.find(p=> p.slug === slug);
  if(!project) notFound();
  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <p className="text-muted mt-2">{project.summary}</p>
        <h2 className="mt-6 font-semibold">System Design</h2>
        <p className="text-sm text-muted">Representative system overview and responsibilities. See repository for implementation details.</p>
        <h3 className="mt-4 font-semibold">Technology</h3>
        <div className="text-xs text-muted">{project.stack.join(' · ')}</div>
        <h3 className="mt-6 font-semibold">Repository</h3>
        <a href={project.repo} rel="noopener noreferrer" className="underline">{project.repo}</a>
      </section>
      <Footer />
    </main>
  )
}
