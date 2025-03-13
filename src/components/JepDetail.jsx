// JepDetail.jsx - Displays detailed information about a specific JEP
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JepDetail = ({ jepData }) => {
  const { version, jepNumber } = useParams();
  
  if (!jepData[version]) {
    return <div className="error-message">Version not found.</div>;
  }
  
  const jep = jepData[version].jeps.find(j => j.number === jepNumber);
  
  if (!jep) {
    return <div className="error-message">JEP not found.</div>;
  }
  
  return (
    <div className="jep-detail">
      <Link to={`/versions/${version}`} className="back-link">
        ← Back to Java SE {version}
      </Link>
      
      <h2>JEP {jep.number}: {jep.title}</h2>
      <div className="jep-description">
        <h3>Description</h3>
        <p>{jep.description}</p>
      </div>
      
      <div className="jep-examples">
        <h3>Examples and Resources</h3>
        {jep.examples && jep.examples.length > 0 ? (
          <ul>
            {jep.examples.map((url, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url.includes('openjdk.org') ? 'Official JEP Documentation' : 
                   url.includes('baeldung') ? 'Baeldung Tutorial' : 
                   url.includes('happycoders') ? 'Happy Coders Tutorial' : 
                   url.includes('oracle') ? 'Oracle Documentation' : 
                   url.includes('infoworld') ? 'InfoWorld Article' :
                   'Example Resource'}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No examples available yet.</p>
        )}
      </div>
    </div>
  );
};

export default JepDetail;