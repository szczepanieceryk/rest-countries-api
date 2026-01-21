import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../types/types';
import { useDebounce } from '../hooks/useDebounce';

interface CountrySearchProps {
  theme: Theme | string;
}
const CountrySearch: React.FC<CountrySearchProps> = ({ theme }) => {
  const lightThemeClasses = 'bg-white text-gray-800';
  const darkThemeClasses = 'bg-[#2b3945ff] text-[#fcfcfcff]';
  const [countryName, setCountryName] = useState<string>('');
  const navigate = useNavigate();

  const debounceCountryName = useDebounce(countryName, 1000);

  useEffect(() => {
    if (debounceCountryName && countryName.trim()) {
      navigate(`/country/${encodeURIComponent(countryName.trim().toLowerCase())}`);
    }
  }, [debounceCountryName]);

  return (
    <div
      className={`w-[90%] sm:max-w-[400px] mx-auto md:m-0 my-[2rem] ${theme === 'dark' ? darkThemeClasses : lightThemeClasses}`}
    >
      <div className="relative">
        <svg
          className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${theme === 'dark' ? 'text-[#fcfcfcff]' : 'text-gray-500'}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21l-4.35-4.35"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          onChange={(e) => setCountryName(e.target.value)}
          value={countryName}
          type="text"
          placeholder="Search for a country..."
          className={`pl-10 p-4 w-full mx-auto shadow-md border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-700 text-[#fcfcfcff] placeholder-[#fcfcfcff]' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'}`}
        />
      </div>
    </div>
  );
};

export default CountrySearch;
