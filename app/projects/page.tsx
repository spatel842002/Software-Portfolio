import Link from 'next/link';
import { projects } from '../../data/projects';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProjectsPage(){
  return (
    <main>
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <p className="text-muted mt-2">Selected work emphasizing backend systems, distributed architecture, cloud infrastructure, and AI.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projects.map(p=> (
            <article key={p.slug} className="border rounded p-4">
              <h3 className="font-semibold text-lg"><Link href={`/projects/${p.slug}`}>{p.title}</Link></h3>
              <p className="text-sm text-muted mt-2">{p.summary}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-muted">{p.stack.join(' · ')}</div>
                <a href={p.repo} rel="noopener noreferrer" className="underline">Repository</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
