// Header.jsx - Application header with search functionality
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ onSearch }) => {
  return (
    <header className="app-header">
      <Link to="/" className="app-title">Java Enhancement Proposals Explorer</Link>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;