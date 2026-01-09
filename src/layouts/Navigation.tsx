import React from 'react';
import { ThemeProps } from '../types/types';
import ThemeSwitcher from '../components/ThemeSwitcher';

const Navigation: React.FC<ThemeProps> = ({ theme, setTheme }) => {
  return (
    <nav
      className={`px-4 py-[2rem] shadow-md ${theme === 'dark' ? 'bg-[#202c37ff] text-[#fcfcfcff]' : 'bg-[#fcfcfcff] text-[#202c37ff]'}`}
    >
      <div className="max-w-[95%] mx-auto flex flex-wrap justify-between items-center">
        {' '}
        <strong className="text-md lg:text-lg">Where in the world?</strong>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
};

export default Navigation;
