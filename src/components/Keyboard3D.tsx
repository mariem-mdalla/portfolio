import { useState, useCallback } from 'react';

interface KeyData {
  label: string;
  sub?: string;
  width?: number;
  isEnter?: boolean;
  isSpecial?: boolean;
}

const ROW_1: KeyData[] = [
  { label: '`', sub: '~' }, { label: '1', sub: '!' }, { label: '2', sub: '@' },
  { label: '3', sub: '#' }, { label: '4', sub: '$' }, { label: '5', sub: '%' },
  { label: '6', sub: '^' }, { label: '7', sub: '&' }, { label: '8', sub: '*' },
  { label: '9', sub: '(' }, { label: '0', sub: ')' }, { label: '-', sub: '_' },
  { label: '=', sub: '+' }, { label: 'delete', width: 2, isSpecial: true },
];

const ROW_2: KeyData[] = [
  { label: 'tab', width: 1.5, isSpecial: true },
  { label: 'Q' }, { label: 'W' }, { label: 'E' }, { label: 'R' },
  { label: 'T' }, { label: 'Y' }, { label: 'U' }, { label: 'I' },
  { label: 'O' }, { label: 'P' }, { label: '[', sub: '{' }, { label: ']', sub: '}' },
  { label: '\\', sub: '|', width: 1.5 },
];

const ROW_3: KeyData[] = [
  { label: 'caps', width: 1.75, isSpecial: true },
  { label: 'A' }, { label: 'S' }, { label: 'D' }, { label: 'F' },
  { label: 'G' }, { label: 'H' }, { label: 'J' }, { label: 'K' },
  { label: 'L' }, { label: ';', sub: ':' }, { label: "'", sub: '"' },
  { label: 'enter', width: 2.25, isEnter: true },
];

const ROW_4: KeyData[] = [
  { label: 'shift', width: 2.25, isSpecial: true },
  { label: 'Z' }, { label: 'X' }, { label: 'C' }, { label: 'V' },
  { label: 'B' }, { label: 'N' }, { label: 'M' },
  { label: ',', sub: '<' }, { label: '.', sub: '>' }, { label: '/', sub: '?' },
  { label: 'shift', width: 2.75, isSpecial: true },
];

const ROW_5: KeyData[] = [
  { label: 'ctrl', width: 1.25, isSpecial: true },
  { label: 'opt', width: 1.25, isSpecial: true },
  { label: 'cmd', width: 1.25, isSpecial: true },
  { label: 'space', width: 6.25, isSpecial: true },
  { label: 'cmd', width: 1.25, isSpecial: true },
  { label: 'opt', width: 1.25, isSpecial: true },
  { label: 'fn', isSpecial: true },
];

const KEY_ROWS = [ROW_1, ROW_2, ROW_3, ROW_4, ROW_5];
const BASE_KEY_WIDTH = 42;
const BASE_KEY_HEIGHT = 42;
const KEY_GAP = 5;

function Key({
  data,
  pressedKey,
  onEnterClick,
}: {
  data: KeyData;
  pressedKey: string | null;
  onEnterClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const width = (data.width ?? 1) * BASE_KEY_WIDTH + ((data.width ?? 1) - 1) * KEY_GAP;
  const isPressed = pressedKey === data.label.toLowerCase();

  if (data.isEnter) {
    return (
      <button
        onClick={onEnterClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsClicked(true)}
        onMouseUp={() => setIsClicked(false)}
        className="key-3d relative flex items-center justify-center rounded-lg font-mono text-xs font-semibold text-primary-dark animate-pulse-glow"
        style={{
          width,
          height: BASE_KEY_HEIGHT,
          backgroundColor: 'var(--color-key-highlight)',
          boxShadow: isClicked || isPressed
            ? '0 1px 0 #c9a82e, 0 2px 0 #c9a82e, 0 2px 6px var(--color-shadow-strong)'
            : '0 1px 0 #c9a82e, 0 2px 0 #c9a82e, 0 4px 0 #c9a82e, 0 6px 12px var(--color-shadow-strong)',
          transform: isClicked || isPressed ? 'translateY(5px)' : isHovered ? 'translateY(2px)' : 'translateY(0)',
          transition: 'transform 0.08s ease-out, box-shadow 0.08s ease-out',
        }}
        aria-label="Enter - scroll to projects"
      >
        Enter
      </button>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      className="key-3d relative flex flex-col items-center justify-center rounded-md"
      style={{
        width,
        height: BASE_KEY_HEIGHT,
        backgroundColor: isHovered ? 'var(--color-key-top)' : 'var(--color-key-base)',
        color: data.isSpecial ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.85)',
        boxShadow: isClicked || isPressed
          ? '0 1px 0 var(--color-key-side), 0 2px 0 var(--color-key-side), 0 2px 4px var(--color-shadow)'
          : '0 1px 0 var(--color-key-side), 0 2px 0 var(--color-key-side), 0 4px 0 var(--color-key-side), 0 5px 8px var(--color-shadow-strong)',
        transform: isClicked || isPressed ? 'translateY(5px)' : isHovered ? 'translateY(2px)' : 'translateY(0)',
        fontSize: data.isSpecial ? 9 : 11,
        fontFamily: 'JetBrains Mono, monospace',
        fontWeight: data.isSpecial ? 400 : 500,
        cursor: 'pointer',
      }}
    >
      {data.sub && !data.isSpecial && (
        <span style={{ fontSize: 8, opacity: 0.5, lineHeight: 1 }}>{data.sub}</span>
      )}
      <span style={{ lineHeight: 1 }}>{data.label}</span>
    </div>
  );
}

export function Keyboard3D({ onEnterClick }: { onEnterClick: () => void }) {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const handleEnter = useCallback(() => {
    setPressedKey('enter');
    setTimeout(() => setPressedKey(null), 200);
    onEnterClick();
  }, [onEnterClick]);

  return (
    <div className="keyboard-scene w-full">
      <div className="keyboard-tilt mx-auto">
        <div
          className="relative rounded-2xl p-4 sm:p-5 mx-auto"
          style={{
            background: 'var(--color-surface)',
            boxShadow: '0 20px 60px var(--color-shadow-strong), 0 8px 20px var(--color-shadow)',
            border: '1px solid var(--color-border)',
            width: 'fit-content',
          }}
        >
          {/* Keyboard top label bar */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#e8607c' }} />
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#f0c93f' }} />
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#5cb85c' }} />
            </div>
            <span className="font-mono text-[9px] text-text-muted tracking-widest uppercase">
              interactive
            </span>
          </div>

          {/* Key rows */}
          <div className="flex flex-col gap-[5px]">
            {KEY_ROWS.map((row, rowIdx) => (
              <div key={rowIdx} className="flex gap-[5px] justify-center">
                {row.map((key, keyIdx) => (
                  <Key
                    key={`${rowIdx}-${keyIdx}`}
                    data={key}
                    pressedKey={pressedKey}
                    onEnterClick={handleEnter}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
