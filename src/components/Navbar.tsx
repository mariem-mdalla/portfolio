import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { PaletteSwitcher } from '@/components/PaletteSwitcher';

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Toolkit', href: '#toolkit' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-md border-b border-border py-3'
            : 'bg-transparent py-5'
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
          <a
            href="#hero"
            className="font-display text-lg font-bold text-primary tracking-tight"
            aria-label="Back to top"
          >
            <span className="text-secondary">{'{'}</span>
            MM
            <span className="text-secondary">{'}'}</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text-main/70 hover:text-primary hover:bg-surface/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <PaletteSwitcher compact />
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden rounded-lg p-2 text-primary hover:bg-surface/60 transition-colors"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-bg flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between px-5 py-5 border-b border-border">
            <span className="font-display text-lg font-bold text-primary">
              <span className="text-secondary">{'{'}</span>
              MM
              <span className="text-secondary">{'}'}</span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-lg p-2 text-primary hover:bg-surface transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl font-semibold text-primary/80 hover:text-primary transition-colors py-3"
                style={{
                  animation: `float-soft 0s, fadeInUp 0.4s ease forwards`,
                  animationDelay: `${i * 60}ms`,
                  opacity: 0,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 pb-12 border-t border-border pt-8">
            <PaletteSwitcher />
          </div>
        </div>
      )}
    </>
  );
}
