export type Theme = 'light' | 'dark';

export interface ThemeProps {
  theme: Theme | string;
  setTheme: (value: Theme) => void;
}
