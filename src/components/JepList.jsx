// JepList.jsx - Displays list of JEPs for selected version
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JepList = ({ jepData, searchTerm }) => {
  const { version } = useParams();
  
  if (!jepData[version]) {
    return <div className="error-message">Version not found.</div>;
  }
  
  const versionData = jepData[version];
  const filteredJeps = searchTerm 
    ? versionData.jeps.filter(jep => 
        jep.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        jep.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        jep.number.includes(searchTerm)
      )
    : versionData.jeps;
  
  return (
    <div className="jep-list">
      <h2>{versionData.version} - Released: {versionData.releaseDate}</h2>
      {searchTerm && <p>Showing results for: "{searchTerm}"</p>}
      
      {filteredJeps.length === 0 ? (
        <p>No JEPs found matching your search criteria.</p>
      ) : (
        <ul className="jep-items">
          {filteredJeps.map(jep => (
            <li key={jep.number} className="jep-item">
              <Link to={`/versions/${version}/jeps/${jep.number}`}>
                <span className="jep-number">JEP {jep.number}:</span> {jep.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JepList;