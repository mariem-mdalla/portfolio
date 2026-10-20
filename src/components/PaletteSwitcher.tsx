import { THEMES } from '@/types/theme';
import { useTheme } from '@/context/ThemeContext';

export function PaletteSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex items-center gap-2"
      role="radiogroup"
      aria-label="Color palette"
    >
      {!compact && (
        <span className="text-xs font-medium text-text-muted mr-1 hidden sm:inline">
          Palette
        </span>
      )}
      {THEMES.map((opt) => (
        <button
          key={opt.name}
          onClick={() => setTheme(opt.name)}
          role="radio"
          aria-checked={theme === opt.name}
          aria-label={`${opt.label} palette`}
          className={`group relative flex items-center gap-1 rounded-full border-2 p-0.5 transition-all duration-200 ${
            theme === opt.name
              ? 'border-text-main scale-110'
              : 'border-transparent opacity-60 hover:opacity-100'
          }`}
        >
          <span className="flex overflow-hidden rounded-full">
            {opt.swatches.map((color) => (
              <span
                key={color}
                className="h-4 w-4 first:rounded-l-full last:rounded-r-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </span>
        </button>
      ))}
    </div>
  );
}
