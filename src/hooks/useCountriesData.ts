import { Country } from '../types/types';

const useCountriesData = () => {
  const fetchCountries = async (url: string): Promise<Country[]> => {
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
  };

  const handleRegionSelect = async (
    region: string,
    setCountries: React.Dispatch<React.SetStateAction<Country[]>>,
  ) => {
    try {
      const url = `https://restcountries.com/v3.1/region/${encodeURIComponent(region)}`;
      const data = await fetchCountries(url);
      setCountries(data);
    } catch (err) {
      console.error('Error fetching countries by region:', err);
    }
  };

  const initialAllCountriesFetch = async (
    setCountries: React.Dispatch<React.SetStateAction<Country[]>>,
  ) => {
    try {
      const data = await fetchCountries(
        'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags',
      );

      setCountries(data);
    } catch (err) {
      console.error('Error fetching all countries:', err);
    }
  };

  return { handleRegionSelect, initialAllCountriesFetch };
};

export default useCountriesData;
