import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Systems'
};

const STAGES = ['Ingest', 'Validate', 'Stream', 'Inference', 'Store', 'Observe'];

export default function Systems() {
  return (
    <main id="main">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Systems</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Representative event-driven AI/data platform architecture and design approach.
        </p>

        <section className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold">Representative Architecture</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            This diagram represents Shriya&apos;s typical approach: ingest → validate → transform → queue/stream →
            ML/RAG inference → storage → observability. It is illustrative and not tied to a single employer.
          </p>
          <svg
            className="mt-8 w-full"
            viewBox="0 0 900 140"
            role="img"
            aria-labelledby="systems-title systems-desc"
          >
            <title id="systems-title">Event-driven platform flow</title>
            <desc id="systems-desc">
              Data moves from ingestion through validation, streaming, inference, storage, and observability.
            </desc>
            <g fill="none" stroke="rgb(var(--color-accent))" strokeWidth="2.5">
              <path d="M145 70h55M290 70h55M435 70h55M580 70h55M725 70h55" />
            </g>
            {STAGES.map((label, index) => (
              <g key={label}>
                <rect
                  x={20 + index * 145}
                  y="35"
                  width="120"
                  height="70"
                  rx="10"
                  fill="rgb(var(--color-background))"
                  stroke="rgb(var(--color-border))"
                  strokeWidth="1.5"
                />
                <text x={80 + index * 145} y="75" textAnchor="middle" fill="rgb(var(--color-foreground))" fontSize="14" fontWeight="500">
                  {label}
                </text>
              </g>
            ))}
          </svg>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-display font-semibold">Reliability first</h3>
            <p className="mt-2 text-sm text-muted">
              Validation and error handling live at every boundary — ingestion, transformation, and inference — so
              failures are contained and observable rather than silent.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5">
            <h3 className="font-display font-semibold">Decoupled by default</h3>
            <p className="mt-2 text-sm text-muted">
              Queues and streams separate producers from consumers, allowing services to scale, fail, and deploy
              independently without cascading outages.
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
