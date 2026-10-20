import { GraduationCap, BookOpen, Trophy, Target, Briefcase, Award, Shield, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import googleCertImg from '@/assets/Certificates/Googlecertif.png';
import linuxCertImg from '@/assets/Certificates/linuxcertif.png';
import nvidiaCertImg from '@/assets/Certificates/nvidia-certif.png';

interface Milestone {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  icon: typeof BookOpen;
  status: 'current' | 'past' | 'future';
}

const MILESTONES: Milestone[] = [
  {
    id: 'm1',
    period: '2024 - 2027',
    title: 'Bachelor of Software Engineering',
    organization: 'Horizon School of Digital Technologies, Sousse',
    description:
      'Final-year student mastering modern software development, full-stack system architecture, database design, and software engineering methodologies.',
    icon: GraduationCap,
    status: 'current',
  },
  {
    id: 'm2',
    period: 'Present',
    title: 'Founder & Student Branch Chair',
    organization: 'IEEE Horizon School of Digital Technologies SB',
    description:
      'Founded and currently chairing the IEEE Student Branch at Horizon. Organizing technical workshops, inspiring student involvement, and fostering a collaborative engineering culture.',
    icon: Trophy,
    status: 'current',
  },
  {
    id: 'm3',
    period: 'Present',
    title: 'Event Organizer',
    organization: 'Google Developer Group (GDG)',
    description:
      'Active event organizer coordinating developer gatherings, technical talks, and hands-on workshops for the local tech community.',
    icon: Award,
    status: 'current',
  },
  {
    id: 'm4',
    period: '07/2026 - 09/2026',
    title: 'Full-Stack Developer Internships',
    organization: 'TUNCIS 2026 & King Word Contracting (Instaar)',
    description:
      'Architected and deployed the official bilingual platform for the TUNCIS 2026 international AI conference, and developed responsive bilingual web solutions with Next.js, Sanity CMS, and Supabase.',
    icon: Briefcase,
    status: 'past',
  },
  {
    id: 'm5',
    period: '2024 - 2025',
    title: 'Hackathons & Scientific Workshops',
    organization: 'ATIC Congress & Nuit de l\'Info',
    description:
      'Attended ATIC Congress 2025 sessions on Post-Quantum Cryptography, Quantum Computing, IoT & Cybersecurity. Competed in national overnight programming competitions during Nuit de l\'Info 2024 and 2025 editions.',
    icon: BookOpen,
    status: 'past',
  },
  {
    id: 'm6',
    period: 'Future Step',
    title: 'Continuous Growth & Cybersecurity Studies',
    organization: 'Advanced Software & Security',
    description:
      'Aiming to build robust, scalable software systems while pursuing advanced studies and technical specialization in cybersecurity.',
    icon: Target,
    status: 'future',
  },
];

interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  focus: string;
  image?: string;
  verifyUrl?: string;
  pdfUrl?: string;
}

const CERTIFICATES: CertificateItem[] = [
  {
    title: 'Foundations of Cybersecurity',
    issuer: 'Google / Coursera',
    date: 'Aug 23, 2025',
    focus: 'Security concepts, network security, risk assessment, and defense fundamentals.',
    image: googleCertImg,
    verifyUrl: 'https://coursera.org/verify/SK0L847HKA66',
    pdfUrl: '/certificates/Googlecertif.pdf',
  },
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    date: 'Sep 27, 2025',
    focus: 'Neural networks, training computer vision models, and deep learning workflows.',
    image: nvidiaCertImg,
    verifyUrl: 'https://learn.nvidia.com/certificates?id=a6C5obFZRsmJJPlx7TGR6w',
    pdfUrl: '/certificates/My%20Learning%20_%20NVIDIA.pdf',
  },
  {
    title: 'Linux Fundamentals',
    issuer: 'LearnQuest / Coursera',
    date: 'Aug 23, 2025',
    focus: 'Command line operations, file system architecture, user management, and shell scripting.',
    image: linuxCertImg,
    verifyUrl: 'https://coursera.org/verify/CH57H42LFWMJ',
    pdfUrl: '/certificates/linuxcertif.pdf',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Completed',
    focus: 'Threat landscape, secure communications, and foundational network defense.',
  },
];

export function Journey() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="journey" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: 'var(--color-bg-alt)' }}>
      <div ref={ref} className="mx-auto max-w-4xl">
        <div className={`reveal ${isVisible ? 'is-visible' : ''} mb-12`}>
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap size={24} className="text-secondary" />
            <span className="font-mono text-sm text-text-muted uppercase tracking-widest">
              04 - Journey
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
            Education, Leadership & Milestones
          </h2>
          <p className="mt-2 text-text-muted max-w-lg">
            Academic milestones, student leadership initiatives, professional internships, and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-2 bottom-2 w-0.5 rounded-full sm:left-6"
            style={{ background: 'var(--color-border-strong)' }}
          />

          <div className="space-y-8">
            {MILESTONES.map((m, i) => {
              const Icon = m.icon;
              const isFuture = m.status === 'future';
              const isCurrent = m.status === 'current';

              return (
                <div
                  key={m.id}
                  className={`reveal ${isVisible ? 'is-visible' : ''} relative pl-14 sm:pl-16`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {/* Node */}
                  <div
                    className="absolute left-0 top-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full z-10"
                    style={{
                      background: isCurrent
                        ? 'var(--color-secondary)'
                        : isFuture
                        ? 'var(--color-bg)'
                        : 'var(--color-primary)',
                      border: isFuture
                        ? '2px dashed var(--color-border-strong)'
                        : '2px solid var(--color-surface)',
                      boxShadow: isCurrent ? '0 0 0 4px var(--color-secondary-soft)' : 'none',
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        color: isCurrent
                          ? 'var(--color-primary-dark)'
                          : isFuture
                          ? 'var(--color-text-muted)'
                          : 'var(--color-secondary)',
                      }}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className="rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-medium"
                    style={{
                      background: isFuture ? 'transparent' : 'var(--color-surface)',
                      border: isFuture
                        ? '2px dashed var(--color-border)'
                        : '1px solid var(--color-border)',
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                        {m.period}
                      </span>
                      {isCurrent && (
                        <span className="rounded-full bg-secondary/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
                          now
                        </span>
                      )}
                      <span className="text-xs text-text-muted/60">|</span>
                      <span className="font-mono text-xs text-secondary font-medium">
                        {m.organization}
                      </span>
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-semibold text-primary">
                      {m.title}
                    </h3>

                    <p className="mt-2 text-sm text-text-muted leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications showcase */}
        <div className={`reveal ${isVisible ? 'is-visible' : ''} mt-16 pt-12 border-t border-border`} style={{ transitionDelay: '250ms' }}>
          <div className="flex items-center gap-3 mb-3">
            <Shield size={22} className="text-secondary" />
            <h3 className="font-display text-2xl font-bold text-primary">
              Certifications & Verified Credentials
            </h3>
          </div>
          <p className="text-sm text-text-muted mb-8 max-w-xl">
            Verified course completions and technical credentials earned through industry academies and learning platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.title}
                className="group flex flex-col rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-strong"
              >
                {/* Certificate image preview if available */}
                {cert.image ? (
                  <div className="relative h-44 overflow-hidden border-b border-border bg-black/5">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ) : (
                  <div className="h-28 border-b border-border flex flex-col items-center justify-center p-4 bg-primary/5">
                    <Shield size={28} className="text-secondary mb-1 opacity-80" />
                    <span className="font-mono text-[11px] text-text-muted">
                      Certificate record
                    </span>
                  </div>
                )}

                {/* Details */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={15} className="text-secondary shrink-0" />
                      <span className="font-mono text-xs font-semibold text-primary">
                        {cert.issuer}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-text-muted">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="font-display text-base font-semibold text-primary mt-1">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-text-muted mt-1.5 leading-relaxed flex-1">
                    {cert.focus}
                  </p>

                  {/* Links / buttons */}
                  {(cert.verifyUrl || cert.pdfUrl) && (
                    <div className="mt-4 pt-3 border-t border-border/70 flex flex-wrap items-center gap-3">
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-display text-xs font-semibold text-primary hover:text-secondary transition-colors"
                        >
                          <ExternalLink size={13} />
                          <span>Verify Credential</span>
                        </a>
                      )}
                      {cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-text-muted hover:text-primary transition-colors ml-auto"
                        >
                          <FileText size={12} />
                          <span>View PDF</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
