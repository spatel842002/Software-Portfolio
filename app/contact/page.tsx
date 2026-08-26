'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { siteMeta } from '../../data/site';
import { useState } from 'react';

export default function Contact(){
  const [copied, setCopied] = useState(false);
  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="text-muted mt-2">Preferred contact: email. No forms are provided; please use the email below.</p>
        <div className="mt-6">
          <p className="font-medium">Email</p>
          <div className="mt-2 flex items-center gap-4">
            <a href={`mailto:${siteMeta.email}`} className="underline">{siteMeta.email}</a>
            <button onClick={async ()=>{await navigator.clipboard.writeText(siteMeta.email); setCopied(true); setTimeout(()=>setCopied(false),2000)}} className="px-3 py-1 border rounded">Copy</button>
          </div>
          <div aria-live="polite" className="sr-only">{copied? 'Email copied to clipboard':''}</div>
        </div>
        <noscript>
          <p className="mt-4">Email: {siteMeta.email}</p>
        </noscript>
      </section>
      <Footer />
    </main>
  )
}
