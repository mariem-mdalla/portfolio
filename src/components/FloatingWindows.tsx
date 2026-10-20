interface WindowProps {
  className?: string;
  style?: React.CSSProperties;
}

export function CodeWindow({ className = '', style }: WindowProps) {
  return (
    <div
      className={`float-window rounded-xl overflow-hidden border border-border ${className}`}
      style={{
        background: 'var(--color-window-bg)',
        boxShadow: '0 12px 40px var(--color-shadow-strong), 0 4px 12px var(--color-shadow)',
        ...style,
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b border-border"
        style={{ background: 'var(--color-window-header)' }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#e8607c' }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#f0c93f' }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#5cb85c' }} />
        <span className="ml-2 font-mono text-[10px] text-text-muted">developer.tsx</span>
      </div>
      <div className="p-4 font-mono text-[11px] leading-relaxed">
        <div><span style={{ color: 'var(--color-text-muted)' }}>01</span> <span style={{ color: 'var(--color-primary-light)' }}>const</span> <span style={{ color: 'var(--color-secondary)' }}>developer</span> <span style={{ color: 'var(--color-text-muted)' }}>=</span></div>
        <div><span style={{ color: 'var(--color-text-muted)' }}>02</span> &nbsp;&nbsp;{'{'} <span style={{ color: 'var(--color-accent-soft)' }}>name</span>: <span style={{ color: 'var(--color-secondary)' }}>'Mariem Mdalla'</span>,</div>
        <div><span style={{ color: 'var(--color-text-muted)' }}>03</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--color-accent-soft)' }}>role</span>: <span style={{ color: 'var(--color-secondary)' }}>'Full-Stack Developer'</span>,</div>
        <div><span style={{ color: 'var(--color-text-muted)' }}>04</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--color-accent-soft)' }}>ieee</span>: <span style={{ color: 'var(--color-secondary)' }}>'Founder & Chair'</span>,</div>
        <div><span style={{ color: 'var(--color-text-muted)' }}>05</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'var(--color-accent-soft)' }}>gdg</span>: <span style={{ color: 'var(--color-secondary)' }}>'Event Organizer'</span>,</div>
        <div><span style={{ color: 'var(--color-text-muted)' }}>06</span> &nbsp;&nbsp;{'}'}</div>
        <div><span style={{ color: 'var(--color-text-muted)' }}>07</span></div>
        <div><span style={{ color: 'var(--color-text-muted)' }}>08</span> <span style={{ color: 'var(--color-primary-light)' }}>export default</span> developer<span className="animate-blink">|</span></div>
      </div>
    </div>
  );
}

export function TerminalWindow({ className = '', style }: WindowProps) {
  return (
    <div
      className={`float-window rounded-xl overflow-hidden ${className}`}
      style={{
        background: 'var(--color-terminal-bg)',
        boxShadow: '0 12px 40px var(--color-shadow-strong), 0 4px 12px var(--color-shadow)',
        ...style,
      }}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 font-mono text-[10px] text-white/40">bash</span>
      </div>
      <div className="p-4 font-mono text-[11px] leading-relaxed" style={{ color: 'var(--color-terminal-text)' }}>
        <div>$ whoami</div>
        <div className="text-white/50">mariem-mdalla - SE student</div>
        <div className="mt-2">$ cat stack.txt</div>
        <div className="text-white/50">React, TypeScript, Node.js,</div>
        <div className="text-white/50">PostgreSQL, MongoDB Atlas</div>
        <div className="mt-2">$ <span className="animate-blink">_</span></div>
      </div>
    </div>
  );
}

export function BrowserWindow({ className = '', style }: WindowProps) {
  return (
    <div
      className={`float-window rounded-xl overflow-hidden border border-border ${className}`}
      style={{
        background: 'var(--color-window-bg)',
        boxShadow: '0 12px 40px var(--color-shadow-strong), 0 4px 12px var(--color-shadow)',
        ...style,
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b border-border"
        style={{ background: 'var(--color-window-header)' }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#e8607c' }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#f0c93f' }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#5cb85c' }} />
        <div className="ml-2 flex-1 rounded-md px-3 py-1 bg-bg/60">
          <span className="font-mono text-[9px] text-text-muted">localhost:3000</span>
        </div>
      </div>
      <div className="p-5">
        <div className="h-2 w-3/4 rounded-full bg-primary/15 mb-2" />
        <div className="h-2 w-1/2 rounded-full bg-primary/10 mb-4" />
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-lg bg-secondary/30" />
          <div className="h-8 w-8 rounded-lg bg-primary/20" />
          <div className="h-8 w-8 rounded-lg bg-accent-soft/30" />
        </div>
      </div>
    </div>
  );
}
