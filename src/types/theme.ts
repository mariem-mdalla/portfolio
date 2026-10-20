export type ThemeName = 'marine' | 'cocoa';

export interface ThemeOption {
  name: ThemeName;
  label: string;
  swatches: [string, string, string];
}

export const THEMES: ThemeOption[] = [
  {
    name: 'marine',
    label: 'Marine',
    swatches: ['#1b3a5c', '#f0c93f', '#f4eee0'],
  },
  {
    name: 'cocoa',
    label: 'Cocoa',
    swatches: ['#4a3020', '#e08aa0', '#f5ebd8'],
  },
];
