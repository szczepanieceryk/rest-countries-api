import React from 'react';
import { Theme } from '../types/types';

interface CountryOverviewProps {
  theme: Theme | string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
}

const CountryOverview: React.FC<CountryOverviewProps> = ({
  theme,
  countryName,
  population,
  region,
  capital,
}) => {
  const darkThemeClasses = 'bg-gray-800 text-white';
  const lightThemeClasses = 'bg-white text-gray-800';

  return (
    <div
      className={`w-[85%] sm:max-w-[300px] mx-auto my-[2rem] rounded-md shadow-md ${theme === 'dark' ? darkThemeClasses : lightThemeClasses}`}
    >
      <img src="" alt="" className="w-full h-[200px] mx-auto rounded-t-md bg-[#ddd]" />
      <div className="py-10 px-8">
        <p className="mb-3 text-lg font-bold">
          <strong>{countryName}</strong>
        </p>
        <p className="mb-2 ">
          <span className="font-semibold">Population:</span> {population}
        </p>
        <p className="mb-2 ">
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p className="mb-2 ">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryOverview;
