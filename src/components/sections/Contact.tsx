import { Mail, Github, Linkedin, ArrowUp, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8">
        <div ref={ref} className="mx-auto max-w-3xl text-center">
          <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <Mail size={24} className="text-secondary" />
              <span className="font-mono text-sm text-text-muted uppercase tracking-widest">
                05 - Contact
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-primary">
              Let's connect & build
            </h2>
            <p className="mt-4 text-base sm:text-lg text-text-muted max-w-xl mx-auto">
              Open to full-stack software development internships, engineering opportunities, and technical community initiatives. Feel free to get in touch!
            </p>
          </div>

          {/* Availability badge */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} mt-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2`} style={{ transitionDelay: '80ms' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-medium text-primary">
              Available for internships & software projects
            </span>
          </div>

          {/* Email button & social links */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} mt-8 flex flex-col sm:flex-row items-center justify-center gap-4`} style={{ transitionDelay: '160ms' }}>
            <a
              href="mailto:mariem.mdalla.tech@gmail.com"
              className="group inline-flex items-center gap-3 rounded-xl px-6 py-4 font-display text-base font-semibold text-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-strong"
              style={{
                background: 'var(--color-secondary)',
                boxShadow: '0 4px 15px var(--color-shadow)',
              }}
            >
              <Mail size={20} />
              mariem.mdalla.tech@gmail.com
            </a>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mariem-mdalla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:text-secondary hover:shadow-medium"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mariem-mdalla-7a3126384"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:text-secondary hover:shadow-medium"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} mt-6 flex items-center justify-center gap-2 text-sm text-text-muted`} style={{ transitionDelay: '240ms' }}>
            <MapPin size={14} />
            <span>Sousse, Tunisia</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-5 sm:px-8" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold text-primary">
              <span className="text-secondary">{'{'}</span>
              Mariem Mdalla
              <span className="text-secondary">{'}'}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Mariem Mdalla
            </span>
            <a
              href="#hero"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-primary transition-colors"
            >
              Back to top
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
