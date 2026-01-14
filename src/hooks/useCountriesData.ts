import { Country } from '../types/types';

const useCountriesData = () => {
  const fetchCountries = async (url: string): Promise<Country[]> => {
    try {
      const response: Response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch countries');
      }

      const data = await response.json();

      console.log('Fetched countries:', data);
      return data;
    } catch (error) {
      console.error('Error fetching countries:', error);
      throw error;
    }
  };

  return { fetchCountries };
};

export default useCountriesData;
