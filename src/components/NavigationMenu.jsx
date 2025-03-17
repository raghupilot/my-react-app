// NavigationMenu.jsx - Side navigation menu with version selection
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavigationMenu = ({ versions }) => {
  return (
    <nav className="navigation-menu">
      <h3>JEPs and Projects</h3>
      <ul>
      <Link to="/projects">Java Projects</Link>
      </ul>
      <ul>
        {versions.map(version => (
          <li key={version}>
            <NavLink 
              to={`/versions/${version}`}
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              Java SE {version}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;