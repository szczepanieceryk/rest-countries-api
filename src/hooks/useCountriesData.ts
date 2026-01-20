import { useCallback } from 'react';
import { Country } from '../types/types';

const useCountriesData = () => {
  const fetchCountries = useCallback(async (url: string): Promise<Country[]> => {
    try {
      const response: Response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }

      const data: Country[] = await response.json();

      console.log('Fetched countries:', data);
      return data;
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw error;
    }
  }, []);

  const handleRegionSelect = useCallback(
    async (region: string, setCountries: React.Dispatch<React.SetStateAction<Country[]>>) => {
      try {
        const url = `https://restcountries.com/v3.1/region/${encodeURIComponent(region)}`;
        const data = await fetchCountries(url);
        setCountries(data);
      } catch (err) {
        console.error('Error fetching countries by region:', err);
      }
    },
    [fetchCountries],
  );

  const initialAllCountriesFetch = useCallback(
    async (setCountries: React.Dispatch<React.SetStateAction<Country[]>>) => {
      try {
        const initialURL =
          'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags';
        const data = await fetchCountries(initialURL);

        setCountries(data);
      } catch (err) {
        console.error('Error fetching all countries:', err);
      }
    },
    [fetchCountries],
  );

  return { fetchCountries, handleRegionSelect, initialAllCountriesFetch };
};

export default useCountriesData;
