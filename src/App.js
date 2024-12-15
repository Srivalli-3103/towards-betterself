import React, { useState } from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

const App = () => {
  const [activeSection, setActiveSection] = useState('lifestyle');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'lifestyle':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionHeader}>Lifestyle</h2>
            <p style={styles.sectionText}>
              Lifestyle is about finding balance and living life to its fullest. It involves personal growth, leisure activities, managing time, and having a positive mindset. Here are some tips for improving your lifestyle:
            </p>
            <ul style={styles.sectionList}>
              <li style={styles.listItem}>Practice mindfulness every day.</li>
              <li style={styles.listItem}>Find time for hobbies and relaxation.</li>
              <li style={styles.listItem}>Stay connected with loved ones.</li>
              <li style={styles.listItem}>Learn something new every day.</li>
            </ul>
          </div>
        );
      case 'health':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionHeader}>Health</h2>
            <p style={styles.sectionText}>
              Health is wealth. Physical and mental health are equally important for a happy life. Here are some tips for maintaining good health:
            </p>
            <ul style={styles.sectionList}>
              <li style={styles.listItem}>Eat a balanced diet with plenty of fruits and vegetables.</li>
              <li style={styles.listItem}>Exercise regularly to keep your body strong.</li>
              <li style={styles.listItem}>Take care of your mental health by managing stress.</li>
              <li style={styles.listItem}>Get enough sleep and rest to recharge your energy.</li>
            </ul>
          </div>
        );
      case 'organization':
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionHeader}>Organization</h2>
            <p style={styles.sectionText}>
              Being organized can help you achieve your goals and reduce stress. Here are some strategies to become more organized:
            </p>
            <ul style={styles.sectionList}>
              <li style={styles.listItem}>Set clear and achievable goals.</li>
              <li style={styles.listItem}>Prioritize your tasks and break them into smaller steps.</li>
              <li style={styles.listItem}>Use tools like planners or digital apps to track your tasks.</li>
              <li style={styles.listItem}>Declutter your workspace for better focus and productivity.</li>
            </ul>
          </div>
        );
      default:
        return (
          <div style={styles.section}>
            <h2 style={styles.sectionHeader}>Welcome!</h2>
            <p style={styles.sectionText}>Select a section from the navbar to explore more.</p>
          </div>
        );
    }
  };

  return (
    <div style={styles.page}>
      <Header />
      <Navbar onSelectSection={handleSectionChange} />
      {renderContent()}
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#f4f4f9', 
    fontFamily: 'Poppins, Arial, sans-serif', 
    color: '#2c3e50', 
    margin: 0,
    padding: '0',
  },
  section: {
    backgroundColor: '#ffffff', 
    padding: '40px',
    margin: '20px auto',
    maxWidth: '800px',
    borderRadius: '8px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  },
  sectionHeader: {
    fontSize: '2.5rem',
    color: '#3498db', 
    textAlign: 'center', 
    textTransform: 'uppercase', 
    fontWeight: '700', 
    marginBottom: '20px', 
    letterSpacing: '1px', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', 
  },
  sectionText: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    color: '#34495e', 
    fontWeight: '400', 
    textAlign: 'justify', 
    padding: '0 15px',
    textIndent: '20px', 
    background: 'linear-gradient(135deg, rgba(52,152,219,0.2), rgba(46,204,113,0.1))', 
    borderRadius: '8px', 
  },
  sectionList: {
    listStyleType: 'none',
    paddingLeft: '0',
    marginTop: '20px',
  },
  listItem: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '10px',
    color: '#2c3e50', 
    fontWeight: '500',
    position: 'relative',
    paddingLeft: '20px',
  },
  pageHeader: {
    textAlign: 'center',
    fontSize: '3rem',
    color: '#2980b9',
  },
};

export default App;
