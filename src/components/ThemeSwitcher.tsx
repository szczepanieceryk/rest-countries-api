import React from 'react';
import { ThemeProps } from '../types/types';
const ThemeSwitcher: React.FC<ThemeProps> = ({ theme, setTheme }) => {
  return (
    <div className="cursor-pointer" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <i className={`fas fa-${theme === 'light' ? 'sun' : 'moon'} mr-2`}></i>
      <span className="font-light">Dark Mode</span>
    </div>
  );
};

export default ThemeSwitcher;
