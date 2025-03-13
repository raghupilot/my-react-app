// SearchBar.jsx - Search component for filtering JEPs
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };
  
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === '') {
      onSearch('');
    }
  };
  
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search JEPs..."
        value={searchInput}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;