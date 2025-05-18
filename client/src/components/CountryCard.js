import React, { useState } from 'react';
import 'animate.css'; // Importing Animate.css for animation
import useAuth from '../hooks/useAuth';  // Custom hook to manage login state
import { toast } from 'react-toastify';  // Import Toastify components
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify CSS
import { useNavigate } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const { token } = useAuth();  // Access login state from useAuth
  const [addedToFavorites, setAddedToFavorites] = useState(false);  // State to track if the country was added to favorites
  const navigate = useNavigate();
  const flagUrl = country.flags && (country.flags[0] || country.flags.svg) ? country.flags[0] || country.flags.svg : null;

  // Function to handle Add to Favorites button click
  const handleAddToFavorites = () => {
    // Dismiss any previous toasts before showing a new one
    toast.dismiss();

    // Display toast notification
    toast.success(`${country.name.common} has been added to your favorites!`);

    // Set addedToFavorites state to true
    setAddedToFavorites(true);
  };

  const handleFullDetails = (name) => {
  navigate(`/CountryFullDetails/${name}`);
  };

  return (
    <div className="country-card card shadow-lg rounded p-3 mb-4 animate__animated animate__fadeIn">
      <div className="card-body text-center"  onClick={() => handleFullDetails(country.name.common)}>
        {/* Display flag image or a placeholder if no flag URL */}
        {flagUrl ? (
          <img 
            src={flagUrl} 
            alt={`${country.name.common} flag`} 
            className="country-flag img-fluid rounded mb-3"
            style={{ maxWidth: '100px' }} // Limit the flag image size
          />
        ) : (
          <p>No flag available</p>  // Display placeholder text if no flag is available
        )}

        <h2 className="card-title">{country.name.common}</h2>
        {/* <p className="card-text">Capital: {country.capital}</p>
        <p className="card-text">Region: {country.region}</p>
        <p className="card-text">Population: {country.population}</p>
        <p className="card-text">
          Languages: {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}
        </p> */}

        {/* Conditional rendering: Show Add to Favorites button if user is logged in */}
        {token && (
          <button
            className={`btn ${addedToFavorites ? 'btn-secondary' : 'btn-primary'} mt-3 px-4 py-2 rounded-3 shadow-lg border-0 hover-shadow animate__animated animate__fadeIn animate__delay-1s`}
            onClick={handleAddToFavorites}
            disabled={addedToFavorites}  // Disable the button after click
          >
            <span className="d-flex align-items-center justify-content-center">
              <i className="fas fa-heart me-2"></i>
              {addedToFavorites ? 'Added to Favorites' : 'Add to Favorites'}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CountryCard;
