'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // One-time sync from the theme-init script's DOM state (set before hydration) to React state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(document.documentElement.classList.contains('dark'));
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextDark = !dark;
    document.documentElement.classList.toggle('dark', nextDark);
    try {
      window.localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    } catch {
      // ignore storage errors (private browsing, disabled storage)
    }
    setDark(nextDark);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-foreground"
    >
      {mounted && dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
