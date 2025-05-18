import React from 'react';
import 'animate.css';  // Importing Animate.css for animation

const RegionFilter = ({ setRegion }) => {
  return (
    <div className="filter-container mb-4 animate__animated animate__fadeIn">
      <div className="d-flex justify-content-center align-items-center">
        <label htmlFor="regionSelect" className="me-2">Select Region:</label>
        <select
          onChange={(e) => setRegion(e.target.value)}
          className="form-select form-select-lg"
          id="regionSelect"
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default RegionFilter;
