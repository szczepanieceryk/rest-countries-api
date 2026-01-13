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
        const data = await fetchCountries();
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
  return (
    <div>
      <Navigation theme={theme} setTheme={setTheme} />
      <CountriesDisplay theme={theme} apiData={countries} />
    </div>
  );
};

export default App;
