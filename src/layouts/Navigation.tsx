import React from 'react';
import { ThemeProps } from '../types/types';
import ThemeSwitcher from '../components/ThemeSwitcher';

const Navigation: React.FC<ThemeProps> = ({ theme, setTheme }) => {
  const lightThemeClasses = 'bg-[#fcfcfcff] text-[#202c37ff]';
  const darkThemeClasses = 'bg-[#202c37ff] text-[#fcfcfcff]';

  return (
    <nav
      className={`px-4 py-[2rem] shadow-md ${theme === 'dark' ? darkThemeClasses : lightThemeClasses}`}
    >
      <div className="max-w-[95%] mx-auto flex flex-wrap justify-between items-center">
        <strong className="text-md lg:text-lg">Where in the world?</strong>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
};

export default Navigation;
