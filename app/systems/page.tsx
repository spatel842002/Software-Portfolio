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
          <p className="text-sm text-muted">This diagram represents Shriya&apos;s typical approach: ingest → validate → transform → queue/stream → ML/RAG inference → storage → observability. It is illustrative and not tied to a single employer.</p>
          <svg className="w-full mt-8" viewBox="0 0 900 180" role="img" aria-labelledby="systems-title systems-desc">
            <title id="systems-title">Event-driven platform flow</title>
            <desc id="systems-desc">Data moves from ingestion through validation, streaming, inference, storage, and observability.</desc>
            <g fill="none" stroke="#08b6a8" strokeWidth="3"><path d="M145 90h55M290 90h55M435 90h55M580 90h55M725 90h55"/></g>
            {['Ingest','Validate','Stream','Inference','Store','Observe'].map((label, index) => <g key={label}><rect x={20 + index * 145} y="55" width="120" height="70" rx="8" fill="var(--fg)"/><text x={80 + index * 145} y="95" textAnchor="middle" fill="var(--bg)" fontSize="14">{label}</text></g>)}
          </svg>
        </section>
      </section>
      <Footer />
    </main>
  )
}
