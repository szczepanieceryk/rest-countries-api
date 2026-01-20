import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Country, Theme } from '../types/types';
import useCountriesData from '../hooks/useCountriesData';

interface CountryDetailsProps {
  theme: Theme | string;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ theme }) => {
  const lightThemeClasses = 'bg-[#ffffff] text-[#202c37ff]';
  const darkThemeClasses = 'bg-[#202c37ff] text-[#ffffff]';
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = useParams<{ name: string }>();

  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { fetchCountries } = useCountriesData();
  const FIELDS = 'name,population,region,subregion,capital,flags,tld,currencies,languages,borders';

  useEffect(() => {
    // jeśli przekazano kraj w state (z CountryOverview), użyj go
    if ((location.state as any)?.country) {
      setCountry((location.state as any).country as Country);
      return;
    }

    // inaczej pobierz po name (z params)
    const load = async () => {
      if (!name) return;
      setLoading(true);
      setError(null);

      const controller = new AbortController();
      const URL = `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true&fields=${FIELDS}`;
      try {
        const data = await fetchCountries(URL);
        setCountry(Array.isArray(data) && data.length > 0 ? data[0] : null);
      } catch (err: any) {
        if (err?.name === 'AbortError') {
          // fetch został anulowany — ignoruj
          return;
        }
        setError(err?.message ?? 'Error fetching country');
      } finally {
        setLoading(false);
      }

      return () => controller.abort();
    };

    const maybeCancel = load();

    // cleanup jeśli effect zostanie przerwany
    return () => {
      // if load returned cleanup (it does), call it
      Promise.resolve(maybeCancel).then((cleanup: any) => {
        if (typeof cleanup === 'function') cleanup();
      });
    };
    // dodałem fetchCountries do deps — jeśli fetchCountries jest niestabilne, najlepiej go zmemoizować w hooku
  }, [name, location.state, fetchCountries]);

  return (
    <div
      className={`p-6 md:p-[4rem] max-w-7xl mx-auto ${theme === 'dark' ? darkThemeClasses : lightThemeClasses}`}
    >
      <button
        className="mt-3 mb-6 md:mb-12 py-2 px-6 bg-gray-700 text-white rounded-md"
        onClick={() => navigate(-1)}
      >
        <i className="fas fa-arrow-left mr-2"></i>
        <span>Back</span>
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {country && (
        <div className="flex flex-wrap py-4 md:justify-between">
          <img
            src={(country.flags as any)?.png ?? (country.flags as any)?.svg ?? ''}
            alt={(country.flags as any)?.alt ?? country.name?.common ?? ''}
            className="mb-[3em] md:mb-0 w-full max-w-[500px] h-[200px] md:h-[300px] mx-auto md:mx-0 bg-[#ddd] object-cover"
          />
          <div className="basis-full md:basis-1/2 md:flex flex-wrap">
            <span className="mb-5 block basis-full">
              <span className="text-2xl font-semibold">{country?.name.common}</span>
            </span>
            <div className="basis-full md:basis-1/2">
              <span className="block mb-2">
                <span className="font-semibold">Population:</span>{' '}
                {country?.population?.toLocaleString() ?? '—'}
              </span>
              <span className="block mb-2">
                <span className="font-semibold">Region:</span> {country?.region ?? '—'}
              </span>
              <span className="block mb-2">
                <span className="font-semibold">Subregion:</span> {country?.subregion ?? '—'}
              </span>
              <span className="block mb-2">
                <span className="font-semibold">Capital:</span>{' '}
                {(country?.capital && country.capital[0]) ?? '—'}
              </span>
            </div>

            <div className="mt-8 md:mt-0 basis-full md:basis-1/2">
              <span className="block mb-2">
                <span className="font-semibold">Top Level Domain:</span>{' '}
                {(country as any)?.tld?.join(', ') ?? '—'}
              </span>
              <span className="block mb-2">
                <span className="font-semibold">Currency:</span>{' '}
                {country && (country as any).currencies
                  ? Object.values((country as any).currencies)
                      .map((c: any) => c.name)
                      .join(', ')
                  : '—'}
              </span>
              <span className="block mb-2">
                <span className="font-semibold">Language:</span>{' '}
                {country && (country as any).languages
                  ? Object.values((country as any).languages).join(', ')
                  : '—'}
              </span>
            </div>

            <div className="mt-8 basis-full md:basis-none md:flex md:flex-wrap md:items-center">
              <span className="block md:mr-2 mt-3">
                <strong>Border Countries:</strong>{' '}
              </span>
              <div className="mt-4 flex flex-wrap justify-start gap-3">
                {!(country?.borders && country.borders.length) && <span>—</span>}
                {country?.borders?.map((border) => (
                  <button
                    key={border}
                    className="py-3 md:py-1 px-4 bg-gray-700 text-white rounded-md"
                  >
                    {border}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
