import React from 'react';
import Navigation from './layouts/Navigation';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <Navigation theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
