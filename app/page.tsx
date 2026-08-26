import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { projects } from '../data/projects';
import { siteMeta } from '../data/site';

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0,6);
  return (
    <main>
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-muted">Software Engineer · Arizona, USA</p>
            <h1 className="text-3xl md:text-4xl font-semibold mt-2">I build reliable software across backend systems, cloud infrastructure, and applied AI.</h1>
            <p className="mt-4 text-muted max-w-prose">I design scalable services, event-driven workflows, data platforms, and AI-enabled applications using Python, Java, AWS, Azure, and modern distributed-systems practices.</p>
            <div className="mt-6 flex gap-4">
              <Link href="/projects" className="inline-block px-4 py-2 bg-accent-500 text-white rounded">Explore Projects</Link>
              <a href="/resume" className="inline-block px-4 py-2 border rounded">View Resume</a>
              <a href={`mailto:${siteMeta.email}`} className="inline-block px-4 py-2 text-sm">Email Me</a>
            </div>
          </div>
          <div>
            {/* systems visualization - accessible svg illustration */}
            <svg role="img" aria-labelledby="vizTitle vizDesc" viewBox="0 0 600 360" className="w-full h-64">
              <title id="vizTitle">Systems flow visualization</title>
              <desc id="vizDesc">An abstract visualization showing requests moving through API, services, queue, AI, and observability nodes.</desc>
              <rect x="20" y="20" width="120" height="60" rx="8" fill="#0f172a"/>
              <text x="80" y="55" textAnchor="middle" fill="#9ca3af" fontSize="12">API</text>
              <rect x="180" y="20" width="120" height="60" rx="8" fill="#0f172a"/>
              <text x="240" y="55" textAnchor="middle" fill="#9ca3af" fontSize="12">Service</text>
              <rect x="340" y="20" width="120" height="60" rx="8" fill="#0f172a"/>
              <text x="400" y="55" textAnchor="middle" fill="#9ca3af" fontSize="12">Queue/Stream</text>
              <rect x="100" y="140" width="120" height="60" rx="8" fill="#0f172a"/>
              <text x="160" y="175" textAnchor="middle" fill="#9ca3af" fontSize="12">DB</text>
              <rect x="280" y="140" width="120" height="60" rx="8" fill="#0f172a"/>
              <text x="340" y="175" textAnchor="middle" fill="#9ca3af" fontSize="12">AI / RAG</text>
              <line x1="140" y1="50" x2="180" y2="50" stroke="#06b6d4" strokeWidth="2"/>
              <line x1="300" y1="50" x2="340" y2="50" stroke="#06b6d4" strokeWidth="2"/>
              <line x1="260" y1="80" x2="260" y2="140" stroke="#06b6d4" strokeWidth="2"/>
              <circle cx="260" cy="110" r="6" fill="#06b6d4"/>
            </svg>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {featured.map((p) => (
              <article key={p.slug} className="border rounded p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-muted mt-2">{p.summary}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-muted">{p.stack.join(' · ')}</div>
                  <a href={p.repo} className="text-sm underline" rel="noopener noreferrer">GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

      </section>
      <Footer />
    </main>
  );
}
