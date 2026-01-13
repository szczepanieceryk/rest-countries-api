import React from 'react';
import CountrySearch from '../components/CountrySearch';
import { Country, Theme } from '../types/types';
import CountryOverview from '../components/CountryOverview';
const CountriesDisplay = ({ theme, apiData }: { theme: Theme | string; apiData: Country[] }) => {
  const darkThemeClasses = 'bg-[#2b3945ff] text-[#fcfcfcff]';
  const lightThemeClasses = 'bg-[#fcfcfcff] text-[#202c37ff]';

  return (
    <div className={`max-w-7xl mx-auto ${theme == 'dark' ? darkThemeClasses : lightThemeClasses}`}>
      <CountrySearch theme={theme} />
      <div className="flex flex-wrap gap-6">
        {apiData.map((country) => (
          <CountryOverview
            key={country.name.common}
            theme={theme}
            countryName={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesDisplay;
