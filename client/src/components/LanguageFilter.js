import React from 'react';

const LanguageFilter = ({ setLanguage }) => {
  return (
    <div className="filter-container">
      <select onChange={(e) => setLanguage(e.target.value)} className="language-filter">
        <option value="">All Languages</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        {/* Add more language options if needed */}
      </select>
    </div>
  );
};

export default LanguageFilter;
