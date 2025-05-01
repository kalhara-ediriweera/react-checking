import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';
import RegionFilter from './components/RegionFilter';
import LanguageFilter from './components/LanguageFilter';
import Header from './components/Header';
import Login from './pages/auth/Login';  // Ensure correct path
import Register from './pages/auth/Register';  // Ensure correct path
import UserProfile from './components/UserProfile';
import  useAuth  from './hooks/useAuth';  // Correct (default import)
import useCountries from './hooks/useCountries'; 

function App() {
  const { token, login, logout } = useAuth();  // Use the authentication hook
  const [search, setSearch] = useState("");  // Track the search term
  const [region, setRegion] = useState("");  // Track selected region
  const [language, setLanguage] = useState("");  // Track selected language (optional)
  const { countries, loading, error } = useCountries();  // Get countries from useCountries hook

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
    <Router>
      <Header token={token} logout={logout} />  {/* Display Header with Login/Logout */}
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar search={search} setSearch={setSearch} />
                <RegionFilter setRegion={setRegion} />
                <LanguageFilter setLanguage={setLanguage} />
                {loading ? <p>Loading...</p> : <CountryList countries={filteredCountries} search={search} />}
                {error && <p>{error}</p>}
              </>
            }
          />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/register" element={<Register login={login} />} />
          <Route path="/profile" element={token ? <UserProfile logout={logout} /> : <Login login={login} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
