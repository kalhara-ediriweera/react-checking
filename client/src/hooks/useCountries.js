// hooks/useCountries.js
import { useState, useEffect } from 'react';
import { fetchAllCountries, fetchCountryByName, fetchCountriesByRegion } from '../api/api';

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all countries initially
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllCountries();
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Search country by name
  const searchCountries = async (search) => {
    if (search.trim() === '') {
      return countries;
    }
    try {
      const data = await fetchCountryByName(search);
      return data;
    } catch (error) {
      setError(error.message);
      return [];
    }
  };

  // Filter countries by region
  const filterCountriesByRegion = async (region) => {
    try {
      const data = await fetchCountriesByRegion(region);
      setCountries(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return { countries, loading, error, searchCountries, filterCountriesByRegion };
};

export default useCountries;
