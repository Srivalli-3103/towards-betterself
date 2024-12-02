import React from 'react';

const Header = () => {
  const currentHour = new Date().getHours();
  let greeting = '';

  if (currentHour < 12) {
    greeting = 'Good Morning';
  } else if (currentHour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Towards Betterself</h1>
      <p style={styles.greeting}>{greeting}, Welcome to the website!</p>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2ecc71', // Green background
    color: '#fff', // White text
    padding: '40px 20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow for a 3D effect
  },
  title: {
    margin: 0,
    fontSize: '3rem',
  },
  greeting: {
    fontSize: '1.5rem',
    marginTop: '10px',
  },
};

export default Header;
