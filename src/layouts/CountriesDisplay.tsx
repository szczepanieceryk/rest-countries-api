import React from 'react';
import CountrySearch from '../components/countrySearch';
import { Theme } from '../types/types';
const CountriesDisplay = ({ theme }: { theme: Theme | string }) => {
  return (
    <div>
      <CountrySearch theme={theme} />
    </div>
  );
};

export default CountriesDisplay;
