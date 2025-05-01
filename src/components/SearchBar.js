// import React from 'react';

// const SearchBar = ({ search, setSearch, onSearch }) => {
//   return (
//     <div className="search-bar">
//       <input 
//         type="text" 
//         value={search} 
//         onChange={(e) => setSearch(e.target.value)} 
//         placeholder="Search for a country" 
//       />
//       <button onClick={onSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;
import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Search for a country" 
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default SearchBar;
