'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="focus-ring inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-surface-hover"
      >
        {copied ? <Check size={14} className="text-accent-600" /> : <Copy size={14} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
      <div aria-live="polite" className="sr-only">
        {copied ? 'Email copied to clipboard' : ''}
      </div>
    </>
  );
}
