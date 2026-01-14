import React, { useEffect, useState } from 'react';
import Navigation from './layouts/Navigation';
import useLocalStorage from './hooks/useLocalStorage';
import CountriesDisplay from './layouts/CountriesDisplay';
import useCountriesData from './hooks/useCountriesData';
import { Country } from './types/types';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [countries, setCountries] = useState<Country[]>([]);
  const { fetchCountries } = useCountriesData();

  useEffect(() => {
    // let mounted = true;

    const load = async () => {
      // setLoading(true);
      // setError(null);
      try {
        const allCountriesURL =
          'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags';
        const data = await fetchCountries(allCountriesURL);
        setCountries(data);
        console.log('Fetched countries:', data);
        // if (mounted) setCountries(data);
      } catch (err) {
        // if (mounted) setError((err as Error).message);
      } finally {
        // if (mounted) setLoading(false);
      }
    };

    load();

    return () => {
      // mounted = false;
    };
  }, []); // call on initial page load

  const handleRegionSelect = async (region: string) => {
    try {
      const url = `https://restcountries.com/v3.1/region/${encodeURIComponent(region)}`;
      const data = await fetchCountries(url);
      setCountries(data);
    } catch (err) {
      console.error('Error fetching countries by region:', err);
    }
  };

  return (
    <div>
      <Navigation theme={theme} setTheme={setTheme} />
      <CountriesDisplay theme={theme} apiData={countries} onRegionSelect={handleRegionSelect} />
    </div>
  );
};

export default App;
