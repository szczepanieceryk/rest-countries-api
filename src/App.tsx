import React from 'react';
import Navigation from './layouts/Navigation';
import useLocalStorage from './hooks/useLocalStorage';
import CountriesDisplay from './layouts/CountriesDisplay';
const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <Navigation theme={theme} setTheme={setTheme} />
      <CountriesDisplay theme={theme} />
    </div>
  );
};

export default App;
