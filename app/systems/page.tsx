import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Systems(){
  return (
    <main>
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Systems</h1>
        <p className="text-muted mt-2">Representative event-driven AI/data platform architecture and design approach.</p>
        <section className="mt-6">
          <h2 className="font-semibold">Representative Architecture</h2>
          <p className="text-sm text-muted">This diagram represents Shriya's typical approach: ingest → validate → transform → queue/stream → ML/RAG inference → storage → observability. It is illustrative and not tied to a single employer.</p>
        </section>
      </section>
      <Footer />
    </main>
  )
}
