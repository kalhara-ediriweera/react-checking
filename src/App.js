import React, { useState, useEffect } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';
import RegionFilter from './components/RegionFilter';
import LanguageFilter from './components/LanguageFilter'; // Optional, only if you need language filtering
import useCountries from './hooks/useCountries';

function App() {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState(""); // Track the search term
  const [region, setRegion] = useState(""); // Track selected region
  const [language, setLanguage] = useState(""); // Track selected language (optional)

  // Filter countries based on search, region, and language
  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    const matchesLanguage = language
      ? country.languages && Object.values(country.languages).includes(language)
      : true;

    return matchesSearch && matchesRegion && matchesLanguage;
  });

  return (
    <div className="App">
      <h1>Country Information</h1>
      <SearchBar search={search} setSearch={setSearch} /> {/* Search Bar */}
      <RegionFilter setRegion={setRegion} /> {/* Region filter */}
      <LanguageFilter setLanguage={setLanguage} /> {/* Language filter (optional) */}
      {loading ? <p>Loading...</p> : <CountryList countries={filteredCountries} search={search} />}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
