import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound(){
  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-4 text-muted">Sorry, we couldn't find what you were looking for.</p>
        <div className="mt-6">
          <Link href="/" className="px-4 py-2 border rounded">Return home</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
