import React from 'react';
import { Theme } from '../types/types';

interface CountryOverviewProps {
  theme: Theme | string;
  countryName: string;
  population: number;
  region: string;
  capital: string;
  flag: { png?: string; svg?: string; alt?: string };
}

const CountryOverview: React.FC<CountryOverviewProps> = ({
  theme,
  countryName,
  population,
  region,
  capital,
  flag,
}) => {
  const lightThemeClasses = 'bg-[#fcfcfcff] text-[#202c37ff]';
  const darkThemeClasses = 'bg-[#202c37ff] text-[#fcfcfcff]';

  return (
    <div
      className={`w-[85%] sm:max-w-[300px] mx-auto my-[2rem] rounded-md shadow-md ${theme === 'dark' ? darkThemeClasses : lightThemeClasses}`}
    >
      <img
        src={flag.png}
        alt={flag.alt}
        className="w-full h-[200px] mx-auto rounded-t-md bg-[#ddd]"
      />
      <div className={`py-10 px-8 ${theme === 'dark' ? 'bg-[#2b3945ff]' : lightThemeClasses}`}>
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
