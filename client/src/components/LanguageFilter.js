import React from 'react';
import 'animate.css';  // Importing Animate.css for animation

const LanguageFilter = ({ setLanguage }) => {
  return (
    <div className="filter-container mb-4 animate__animated animate__fadeIn">
      <div className="d-flex justify-content-center align-items-center">
        <label htmlFor="languageSelect" className="me-2">Select Language:</label>
        <select
          onChange={(e) => setLanguage(e.target.value)}
          className="form-select form-select-lg"
          id="languageSelect"
        >
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          {/* Add more language options if needed */}
        </select>
      </div>
    </div>
  );
};

export default LanguageFilter;
