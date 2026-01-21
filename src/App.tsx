import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './layouts/Navigation';
import useLocalStorage from './hooks/useLocalStorage';
import CountriesDisplay from './layouts/CountriesDisplay';
import useCountriesData from './hooks/useCountriesData';
import { Country } from './types/types';
import CountryDetails from './components/CountryDetails';
import Footer from './layouts/Footer';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [countries, setCountries] = useState<Country[]>([]);
  const { handleRegionSelect, initialAllCountriesFetch } = useCountriesData();

  useEffect(() => {
    initialAllCountriesFetch(setCountries);
  }, []); // call on initial page load

  return (
    <Router>
      <div
        className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      >
        <header>
          <Navigation theme={theme} setTheme={setTheme} />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <CountriesDisplay
                  theme={theme}
                  apiData={countries}
                  onRegionSelect={(region) => handleRegionSelect(region, setCountries)}
                />
              }
            />
            <Route path="/country/:name" element={<CountryDetails theme={theme} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
