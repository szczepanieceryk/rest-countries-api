import React, { useEffect, useState } from 'react';
import Navigation from './layouts/Navigation';
import useLocalStorage from './hooks/useLocalStorage';
import CountriesDisplay from './layouts/CountriesDisplay';
import useCountriesData from './hooks/useCountriesData';
import { Country } from './types/types';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [countries, setCountries] = useState<Country[]>([]);
  const { handleRegionSelect, initialAllCountriesFetch } = useCountriesData();

  useEffect(() => {
    initialAllCountriesFetch(setCountries);
  }, []); // call on initial page load

  return (
    <div
      className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
    >
      <Navigation theme={theme} setTheme={setTheme} />
      <CountriesDisplay
        theme={theme}
        apiData={countries}
        onRegionSelect={(region) => handleRegionSelect(region, setCountries)}
      />
    </div>
  );
};

export default App;
