// api.js
const BASE_URL = 'https://restcountries.com/v3.1';

// Fetch all countries
export const fetchAllCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  const data = await response.json();
  return data;
};

// Fetch country by name
export const fetchCountryByName = async (name) => {
  const response = await fetch(`${BASE_URL}/name/${name}`);
  const data = await response.json();
  return data;
};

// Fetch countries by region
export const fetchCountriesByRegion = async (region) => {
  const response = await fetch(`${BASE_URL}/region/${region}`);
  const data = await response.json();
  return data;
};

// Fetch country details by country code (alpha)
export const fetchCountryByCode = async (code) => {
  const response = await fetch(`${BASE_URL}/alpha/${code}`);
  const data = await response.json();
  return data;
};
