import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountryByName } from '../api/api'; // Adjust the path as needed

function CountryFullDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchCountryByName(name);
        setCountry(data[0]); // API returns an array
      } catch (err) {
        setError('Failed to fetch country details.');
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, [name]);

  if (loading) return <p>Loading country details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="d-flex justify-content-center">
  <div className="flex align-items-center country-card card shadow-lg rounded p-3 mb-4 animate__animated animate__fadeIn">
    <img
      src={country.flags.svg || country.flags.png}
      alt={`${country.name.common} flag`}
      style={{ maxWidth: '100px', height: 'auto' }}
      className="me-3 border rounded"
    />
    <div>
      <h2 className="card-title">{country.name.common}</h2>
      <p className="card-text">Capital: {country.capital?.[0] || 'N/A'}</p>
      <p className="card-text">Region: {country.region}</p>
      <p className="card-text">Population: {country.population.toLocaleString()}</p>
      <p className="card-text">
        Languages: {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
      </p>
    </div>
  </div>
</div>
  );
}

export default CountryFullDetails;
