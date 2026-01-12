import React, { useEffect } from 'react';
import Navigation from './layouts/Navigation';
import useLocalStorage from './hooks/useLocalStorage';
import CountriesDisplay from './layouts/CountriesDisplay';
import useCountriesData from './hooks/useCountriesData';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { fetchCountries } = useCountriesData();

  useEffect(() => {
    // let mounted = true;

    const load = async () => {
      // setLoading(true);
      // setError(null);
      try {
        const data = await fetchCountries();
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
    // jeśli eslint narzeka na zależności, możesz dodać fetchCountries do listy zależności
    // ale wtedy upewnij się, że fetchCountries jest stabilne (useCallback) lub ignoruj regułę
  }, []); // wywołaj tylko raz przy starcie

  return (
    <div>
      <Navigation theme={theme} setTheme={setTheme} />
      <CountriesDisplay theme={theme} />
    </div>
  );
};

export default App;
