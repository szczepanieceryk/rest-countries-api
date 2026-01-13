export type Theme = 'light' | 'dark';

export interface ThemeProps {
  theme: Theme | string;
  setTheme: (value: Theme) => void;
}

export type Country = {
  name: { common: string; official?: string } | string;
  population?: number;
  region?: string;
  capital?: string[];
  flags?: { svg?: string; png?: string; alt?: string };
};
