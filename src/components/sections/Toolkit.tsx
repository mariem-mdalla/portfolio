import { Code2, Palette, Wrench, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SkillCategory {
  icon: typeof Code2;
  title: string;
  skills: string[];
  variant: 'solid' | 'outline';
}

const CATEGORIES: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'Bash', 'SQL'],
    variant: 'solid',
  },
  {
    icon: Palette,
    title: 'Web & Frameworks',
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Django', 'HTML5', 'CSS3'],
    variant: 'solid',
  },
  {
    icon: Wrench,
    title: 'Databases & Tools',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase', 'Drizzle ORM', 'Sequelize', 'Docker', 'Git', 'Postman', 'Playwright', 'Vercel', 'Render'],
    variant: 'solid',
  },
  {
    icon: ShieldCheck,
    title: 'Exploring & Fundamentals',
    skills: ['Cybersecurity Concepts', 'Linux Fundamentals', 'Network Security', 'Cryptography', 'Deep Learning Basics'],
    variant: 'outline',
  },
];

export function Toolkit() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="toolkit" className="py-20 sm:py-28 px-5 sm:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="flex items-center gap-3 mb-2">
            <Wrench size={24} className="text-secondary" />
            <span className="font-mono text-sm text-text-muted uppercase tracking-widest">
              03 - Toolkit
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
            Technical Toolkit
          </h2>
          <p className="mt-2 text-text-muted max-w-lg">
            Technologies, frameworks, databases, and development tools I work with across projects and academic coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            const isOutline = cat.variant === 'outline';

            return (
              <div
                key={cat.title}
                className={`reveal ${isVisible ? 'is-visible' : ''} rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  background: isOutline ? 'transparent' : 'var(--color-surface)',
                  border: isOutline
                    ? '2px dashed var(--color-border-strong)'
                    : '1px solid var(--color-border)',
                  boxShadow: isOutline ? 'none' : '0 2px 12px var(--color-shadow)',
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background: isOutline
                        ? 'transparent'
                        : 'var(--color-primary)',
                      border: isOutline ? '2px dashed var(--color-border-strong)' : 'none',
                    }}
                  >
                    <Icon
                      size={20}
                      style={{ color: isOutline ? 'var(--color-text-muted)' : 'var(--color-secondary)' }}
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary">
                    {cat.title}
                  </h3>
                  {isOutline && (
                    <span className="ml-auto rounded-full bg-secondary/20 px-2.5 py-1 font-mono text-[10px] text-primary">
                      active learning
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all duration-200 hover:scale-105"
                      style={{
                        background: isOutline
                          ? 'transparent'
                          : 'var(--color-bg-alt)',
                        color: isOutline
                          ? 'var(--color-text-muted)'
                          : 'var(--color-text-main)',
                        border: isOutline
                          ? '1px dashed var(--color-border)'
                          : '1px solid var(--color-border)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
