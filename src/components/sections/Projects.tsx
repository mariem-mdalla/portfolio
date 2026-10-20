import { FolderGit2, Github, ExternalLink, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import mochitaskImg from '@/assets/mochitask.png';
import tuncisImg from '@/assets/tuncispng.png';
import kingwordImg from '@/assets/kingword.png';

interface ProjectSlot {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  size?: 'large' | 'medium';
  pattern: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
}

const PROJECTS: ProjectSlot[] = [
  {
    id: 'mochitask',
    title: 'MochiTask',
    category: 'Full-stack Productivity App',
    description:
      'A full-stack Kanban productivity board featuring real-time task management across To Do, In Progress, and Done columns. Engineered with a dedicated REST API handling CRUD operations connected to MongoDB Atlas.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas'],
    pattern: 'circles',
    image: mochitaskImg,
    liveUrl: 'https://mochitask.vercel.app',
    githubUrl: 'https://github.com/mariem-mdalla/mochitask',
    badge: 'Live & Deployed',
  },
  {
    id: 'tuncis',
    title: 'TUNCIS 2026',
    category: 'International AI Conference Platform',
    description:
      'Official bilingual (EN/FR) web platform for an international AI conference. Built dynamic multi-currency registration (DT / €), serverless backend on Vercel with Neon PostgreSQL (Drizzle ORM), automated notifications, and paper submission pipeline.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Vercel'],
    pattern: 'dots',
    image: tuncisImg,
    liveUrl: 'https://tuncis-2026-website-frontend.vercel.app/',
    badge: 'Production',
  },
  {
    id: 'kingword',
    title: 'King Word Contracting Platform',
    category: 'Corporate Web Platform',
    description:
      'Responsive, bilingual (EN/AR) web pages built with Next.js and Sanity CMS. Features interactive career/inquiry forms with React Hook Form and Zod validation, Supabase PostgreSQL storage with file uploads, and GA4 consent mode.',
    tags: ['Next.js', 'TypeScript', 'Sanity CMS', 'Supabase', 'Zod'],
    pattern: 'stripes',
    image: kingwordImg,
    liveUrl: 'https://king-word.vercel.app/',
    badge: 'Production',
  },
  {
    id: 'vaultpass',
    title: 'VaultPass',
    category: 'Security & Credential Management',
    description:
      'A secure credential and password manager designed with client-side cryptographic handling, secure record storage, and an intuitive user interface for managing passwords safely. Currently in active development.',
    tags: ['React', 'TypeScript', 'Web Crypto', 'Tailwind CSS'],
    pattern: 'circles',
    githubUrl: 'https://github.com/mariem-mdalla/vaultpass',
    badge: 'In Progress',
  },
  {
    id: 'horixam',
    title: 'HoriXam',
    category: 'University Exam Platform',
    description:
      'University exam management platform with a multi-layer security architecture featuring RS256 JWT authentication, refresh token rotation, bcrypt password hashing, RBAC dashboards, and API hardening with Helmet.js.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT'],
    pattern: 'grid',
    badge: 'Academic Project',
  },
];

function PatternBg({ pattern }: { pattern: string }) {
  const patterns: Record<string, React.CSSProperties> = {
    grid: {
      backgroundImage:
        'linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    },
    dots: {
      backgroundImage: 'radial-gradient(circle, var(--color-border-strong) 1.5px, transparent 1.5px)',
      backgroundSize: '16px 16px',
    },
    stripes: {
      backgroundImage:
        'repeating-linear-gradient(45deg, var(--color-border) 0, var(--color-border) 2px, transparent 2px, transparent 12px)',
    },
    circles: {
      backgroundImage:
        'radial-gradient(circle at 30% 40%, var(--color-secondary-soft) 0%, transparent 40%), radial-gradient(circle at 70% 60%, var(--color-accent-soft) 0%, transparent 40%)',
    },
  };
  return <div className="absolute inset-0 opacity-30" style={patterns[pattern]} />;
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-20 sm:py-28 px-5 sm:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="flex items-center gap-3 mb-2">
            <FolderGit2 size={24} className="text-secondary" />
            <span className="font-mono text-sm text-text-muted uppercase tracking-widest">
              01 - Selected Work
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
            Featured Projects
          </h2>
          <p className="mt-2 text-text-muted max-w-lg">
            A selection of web platforms, full-stack applications, and systems I have engineered for academic, industry, and personal initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const isFeatured = i === 0 || i === 1;

            return (
              <article
                key={project.id}
                className={`reveal ${isVisible ? 'is-visible' : ''} ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1' : ''
                } flex flex-col group relative rounded-2xl border border-border overflow-hidden hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-strong`}
                style={{
                  background: 'var(--gradient-card)',
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                {/* Thumbnail area */}
                <div
                  className="relative h-48 sm:h-52 overflow-hidden border-b border-border bg-surface"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <PatternBg pattern={project.pattern} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                        <span className="font-display font-semibold text-xl text-primary/80">
                          {project.title}
                        </span>
                        <span className="font-mono text-xs text-text-muted mt-1">
                          {project.category}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Badge */}
                  {project.badge && (
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold backdrop-blur-md border ${
                          project.badge === 'In Progress'
                            ? 'bg-amber-500/20 text-amber-900 dark:text-amber-200 border-amber-500/30'
                            : 'bg-surface/90 text-primary border-border'
                        }`}
                      >
                        {project.badge === 'In Progress' && <Clock size={10} />}
                        {project.badge}
                      </span>
                    </div>
                  )}

                  {/* External links */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full bg-surface/90 border border-border flex items-center justify-center text-primary hover:text-secondary hover:border-secondary transition-colors shadow-sm"
                        aria-label={`${project.title} GitHub repository`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full bg-surface/90 border border-border flex items-center justify-center text-primary hover:text-secondary hover:border-secondary transition-colors shadow-sm"
                        aria-label={`${project.title} live website`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider mb-1">
                    {project.category}
                  </span>

                  <h3 className="font-display text-lg sm:text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/8 border border-border px-2.5 py-1 font-mono text-[10px] text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions footer */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="mt-5 pt-4 border-t border-border/70 flex items-center justify-between text-xs">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-semibold text-primary hover:text-secondary transition-colors"
                        >
                          <span>Visit Website</span>
                          <ExternalLink size={13} />
                        </a>
                      ) : (
                        <span className="text-text-muted font-mono text-[11px]">Source repository</span>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-text-muted hover:text-primary transition-colors font-mono text-[11px]"
                        >
                          <Github size={13} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
