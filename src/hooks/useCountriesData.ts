const useCountriesData = () => {
  const fetchCountries = async (): Promise<Response> => {
    try {
      const response: Response = await fetch('https://restcountries.com/v3.1/all?fields=name');

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
