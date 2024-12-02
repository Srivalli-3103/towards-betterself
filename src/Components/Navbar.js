import React, { useState } from 'react';

const Navbar = ({ onSelectSection }) => {
  const [activeLink, setActiveLink] = useState('lifestyle');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onSelectSection(link);
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li
          style={activeLink === 'lifestyle' ? styles.activeLink : styles.navItem}
          onClick={() => handleLinkClick('lifestyle')}
        >
          <a href="#lifestyle" style={styles.navLink}>Lifestyle</a>
        </li>
        <li
          style={activeLink === 'health' ? styles.activeLink : styles.navItem}
          onClick={() => handleLinkClick('health')}
        >
          <a href="#health" style={styles.navLink}>Health</a>
        </li>
        <li
          style={activeLink === 'organization' ? styles.activeLink : styles.navItem}
          onClick={() => handleLinkClick('organization')}
        >
          <a href="#organization" style={styles.navLink}>Organization</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#3498db', // Blue background for the navbar
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Light shadow for a lifted effect
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    padding: '14px 20px',
    transition: 'background-color 0.3s ease', // Smooth background transition
  },
  activeLink: {
    padding: '14px 20px',
    backgroundColor: '#2ecc71', // Green active link
    borderRadius: '5px', // Rounded corners for the active link
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
  navItemHover: {
    backgroundColor: '#2980b9', // Darker blue when hovering
  },
};

export default Navbar;
