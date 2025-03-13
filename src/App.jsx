// App.jsx - Main application component with routing
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import JepList from './components/JepList';
import JepDetail from './components/JepDetail';
import jepData from './data/jeps.json';
import './index.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [versions] = useState(Object.keys(jepData).sort((a, b) => parseInt(a) - parseInt(b)));
  
  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="app-container">
        <Header onSearch={handleSearch} />
        <div className="main-content">
          <NavigationMenu versions={versions} />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Navigate to={`/versions/${versions[0]}`} />} />
              <Route path="/versions/:version" element={<JepList jepData={jepData} searchTerm={searchTerm} />} />
              <Route path="/versions/:version/jeps/:jepNumber" element={<JepDetail jepData={jepData} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;