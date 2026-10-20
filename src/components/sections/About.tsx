import { User, BookOpen, Shield, Award, Users, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import profilePic from '@/assets/profile-pic.jpeg';

export function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: 'var(--color-bg-alt)' }}>
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="flex items-center gap-3 mb-2">
            <User size={24} className="text-secondary" />
            <span className="font-mono text-sm text-text-muted uppercase tracking-widest">
              02 - About
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
            A bit about me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Portrait - 2 cols, offset */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} md:col-span-2 md:col-start-1`} style={{ transitionDelay: '80ms' }}>
            <div className="relative mx-auto max-w-xs">
              {/* Decorative shapes behind portrait */}
              <div
                className="absolute -top-4 -left-4 h-24 w-24 rounded-2xl opacity-20"
                style={{ background: 'var(--color-secondary)' }}
              />
              <div
                className="absolute -bottom-6 -right-3 h-20 w-20 rounded-full opacity-15"
                style={{ background: 'var(--color-accent-soft)' }}
              />

              {/* Portrait image container */}
              <div
                className="relative rounded-3xl border-2 border-border overflow-hidden shadow-strong aspect-[4/5] max-w-[280px] mx-auto"
                style={{ background: 'var(--color-surface)' }}
              >
                <img
                  src={profilePic}
                  alt="Mariem Mdalla"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Text content - 3 cols */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} md:col-span-3`} style={{ transitionDelay: '160ms' }}>
            <p className="text-lg sm:text-xl text-text-main leading-relaxed">
              I'm <span className="font-semibold text-primary">Mariem Mdalla</span>, a
              final-year Software Engineering student at{' '}
              <span className="font-semibold text-primary">Horizon School of Digital Technologies</span> in
              Sousse, Tunisia, with a strong focus on building dependable full-stack web applications.
            </p>
            <p className="mt-4 text-base text-text-muted leading-relaxed">
              My engineering experience ranges from architecting bilingual platforms for international
              scientific conferences to developing full-stack web applications with modern ecosystems like
              React, Next.js, Node.js, TypeScript, PostgreSQL, and MongoDB. I care deeply about writing clean,
              maintainable code and designing delightful user experiences.
            </p>
            <p className="mt-4 text-base text-text-muted leading-relaxed">
              Beyond software development, I am active in student leadership and community building: I founded
              and currently lead the <span className="font-semibold text-primary">IEEE Horizon School of Digital Technologies Student Branch</span> as
              its Chair, and organize developer events as a <span className="font-semibold text-primary">GDG Event Organizer</span>.
              I also hold a keen passion for cybersecurity and exploring security concepts across modern systems.
            </p>

            {/* Currently callout */}
            <div className="mt-6 rounded-2xl border border-border p-5" style={{ background: 'var(--color-surface)' }}>
              <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                Currently
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary">
                  <Award size={14} className="text-secondary" /> Founder & Chair, IEEE Horizon SB
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft/15 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary">
                  <Users size={14} /> GDG Event Organizer
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary">
                  <GraduationCap size={14} /> Final-year Software Engineering
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary">
                  <Shield size={14} /> Exploring Cybersecurity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
