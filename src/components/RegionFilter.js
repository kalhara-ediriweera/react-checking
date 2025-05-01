import React from 'react';

const RegionFilter = ({ setRegion }) => {
  return (
    <div className="filter-container">
      <select onChange={(e) => setRegion(e.target.value)} className="region-filter">
        <option value="">All Regions</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default RegionFilter;
