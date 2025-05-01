import React from 'react';

const CountryCard = ({ country }) => {
  // Log country data to see its structure (useful for debugging)
  console.log("Country Data: ", country);

  // Ensure the flag data is valid
  const flagUrl = country.flags && country.flags[0] ? country.flags[0] : null;


  return (
    <div className="country-card">
      {/* Display flag image or a placeholder if no flag URL */}
      {flagUrl ? (
        <img src={flagUrl} alt={`${country.name.common} flag`} className="country-flag" />
      ) : (
        <p>No flag available</p>  // Display placeholder text if no flag is available
      )}
      
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <p>Languages: {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
    </div>
  );
};

export default CountryCard;
