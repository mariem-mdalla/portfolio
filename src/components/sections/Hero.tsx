import { useCallback } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Keyboard3D } from '@/components/Keyboard3D';
import { CodeWindow, TerminalWindow, BrowserWindow } from '@/components/FloatingWindows';

export function Hero() {
  const scrollToProjects = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 px-5"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Decorative background dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating windows - positioned around the keyboard */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Top-left code window */}
        <div
          className="absolute left-0 top-0 hidden lg:block animate-float-soft z-10"
          style={{ width: 240 }}
        >
          <CodeWindow />
        </div>

        {/* Top-right terminal */}
        <div
          className="absolute right-0 top-8 hidden lg:block animate-float-slow z-10"
          style={{ width: 210 }}
        >
          <TerminalWindow />
        </div>

        {/* Small browser window, left side */}
        <div
          className="absolute left-4 top-[300px] hidden lg:block animate-float-slow z-10"
          style={{ width: 180, animationDelay: '1s' }}
        >
          <BrowserWindow />
        </div>

        {/* Center content - headline + keyboard */}
        <div className="relative flex flex-col items-center text-center z-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-surface/60 border border-border px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Sparkles size={14} className="text-secondary" />
            <span className="text-xs font-medium text-text-muted">
              Full-Stack Development & Community Leadership
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] max-w-3xl">
            Building the web,
            <br />
            <span className="text-secondary">one keystroke</span> at a time
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-text-muted">
            Mariem Mdalla - Final-year Software Engineering student at Horizon School of Digital Technologies. Founder & Chair of IEEE Student Branch, GDG Event Organizer, and passionate web developer.
          </p>

          {/* Keyboard */}
          <div className="mt-8 sm:mt-10 w-full overflow-x-auto no-scrollbar">
            <div className="min-w-[680px] mx-auto">
              <Keyboard3D onEnterClick={scrollToProjects} />
            </div>
          </div>

          {/* Hint */}
          <button
            onClick={scrollToProjects}
            className="group mt-6 flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors"
          >
            <span>Click Enter to explore</span>
            <ArrowDown
              size={16}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
