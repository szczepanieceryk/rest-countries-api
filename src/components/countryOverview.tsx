import React from 'react';
import { Theme } from '../types/types';

const CountryOverview: React.FC<{ theme: Theme | string }> = ({ theme }) => {
  const darkThemeClasses = 'bg-gray-800 text-white';
  const lightThemeClasses = 'bg-white text-gray-800';

  return (
    <div
      className={`w-[85%] sm:max-w-[300px] mx-auto my-[2rem] rounded-md shadow-md ${theme === 'dark' ? darkThemeClasses : lightThemeClasses}`}
    >
      <img src="" alt="" className="w-full h-[200px] mx-auto rounded-t-md bg-[#ddd]" />
      <div className="py-10 px-8">
        <p className="mb-3 text-lg font-bold">
          <strong>Country Name</strong>
        </p>
        <p className="mb-2 ">
          <span className="font-semibold">Population:</span> 100 million
        </p>
        <p className="mb-2 ">
          <span className="font-semibold">Region:</span> South America
        </p>
        <p className="mb-2 ">
          <span className="font-semibold">Capital:</span> Brasília
        </p>
      </div>
    </div>
  );
};

export default CountryOverview;
