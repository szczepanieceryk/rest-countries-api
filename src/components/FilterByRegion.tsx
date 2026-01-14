import React, { useState } from 'react';
import { Theme } from '../types/types';
const FilterByRegion = ({ theme }: { theme: Theme | string }) => {
  const [open, setOpen] = useState<boolean>(false);
  const darkThemeClasses = 'bg-gray-700 border border-gray-700 text-white';
  const lightThemeClasses = 'bg-white border border-gray-300 text-gray-700';

  return (
    <div className="ml-5 min-w-[250px] relative">
      <div
        className={`p-4 px-6 flex justify-between items-center rounded-lg cursor-pointer shadow-md ${theme === 'dark' ? darkThemeClasses : lightThemeClasses}`}
        onClick={() => setOpen(!open)}
      >
        <span>Filter by Region</span>
        <i className="fas fa-chevron-down"></i>
      </div>

      {open && (
        <div
          className={`mt-2 p-4 px-6 flex flex-wrap gap-2 rounded-lg shadow-md ${theme === 'dark' ? darkThemeClasses : lightThemeClasses} absolute`}
        >
          <button className="basis-full text-left">Africa</button>
          <button className="basis-full text-left">America</button>
          <button className="basis-full text-left">Asia</button>
          <button className="basis-full text-left">Europe</button>
          <button className="basis-full text-left">Oceania</button>
        </div>
      )}
    </div>
  );
};

export default FilterByRegion;
