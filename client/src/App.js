import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import 'animate.css';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';
import RegionFilter from './components/RegionFilter';
import LanguageFilter from './components/LanguageFilter';
import CountryFullDetails from './components/CountryFullDetails';
import Header from './components/Header';
import Login from './pages/auth/Login';  // Ensure correct path
import Register from './pages/auth/Register';  // Ensure correct path
import UserProfile from './components/UserProfile';
import useAuth from './hooks/useAuth';  // Correct (default import)
import useCountries from './hooks/useCountries'; 
import Cookies from 'js-cookie';  // Import js-cookie to manage cookies
import CookieConsent from './components/CookieConsent';  // Import CookieConsent component

function App() {
  const { token, login, logout } = useAuth();  // Use the authentication hook
  const [search, setSearch] = useState("");  // Track the search term
  const [region, setRegion] = useState("");  // Track selected region
  const [language, setLanguage] = useState("");  // Track selected language (optional)
  const { countries, loading, error } = useCountries();  // Get countries from useCountries hook

  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  // Check if a session cookie exists on load
  useEffect(() => {
    // Check if cookies are accepted
    const cookiesStatus = Cookies.get('cookiesAccepted');
    if (cookiesStatus === 'true') {
      setCookiesAccepted(true);
    }
  }, []);

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
        {/* Show cookie consent banner if cookies are not accepted yet */}
        {!cookiesAccepted && <CookieConsent />}
        
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
          <Route path="/CountryFullDetails/:name" element={<CountryFullDetails />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login login={login} />} />
          <Route path="/register" element={token ? <Navigate to="/" /> : <Register login={login} />} />
          <Route path="/profile" element={token ? <UserProfile logout={logout} /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
