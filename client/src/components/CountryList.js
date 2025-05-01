import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries, search }) => {
  // Filter countries based on the search term
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="country-list">
      {filteredCountries.map(country => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
