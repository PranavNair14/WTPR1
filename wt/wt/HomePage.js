import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const styles = {
    container: {
      backgroundColor: '#1E1E2F',
      color: '#E5E5E5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontFamily: `'Poppins', sans-serif`,
      padding: '20px',
      textAlign: 'center',
    },
    navBar: {
      display: 'flex',
      flexWrap: 'wrap', // Responsive layout for smaller screens
      justifyContent: 'center',
      gap: '20px',
      marginTop: '30px',
    },
    button: {
      background: 'linear-gradient(145deg, #4B4453, #312C39)',
      color: '#E5E5E5',
      border: 'none',
      borderRadius: '50px',
      padding: '14px 24px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
      width: '180px',
    },
    buttonHover: {
      background: 'linear-gradient(145deg, #665C72, #4B4453)',
      transform: 'scale(1.1)',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#F4F4F4',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.1rem',
      color: '#A5A5A5',
      maxWidth: '600px',
      margin: '10px 0 30px',
      lineHeight: '1.6',
    },
    link: {
      textDecoration: 'none',
    },
    footer: {
      marginTop: 'auto',
      fontSize: '0.9rem',
      color: '#A5A5A5',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Group Chat Posting Site</h1>
      <p style={styles.description}>
        Seamlessly create and join chat rooms to connect with your peers. Start your journey today!
      </p>
      <div style={styles.navBar}>
        <Link to="/create-room" style={styles.link}>
          <button
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.background = styles.buttonHover.background;
              e.target.style.transform = styles.buttonHover.transform;
            }}
            onMouseOut={(e) => {
              e.target.style.background = styles.button.background;
              e.target.style.transform = 'scale(1)';
            }}
          >
            Create Room
          </button>
        </Link>
        <Link to="/join-room" style={styles.link}>
          <button
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.background = styles.buttonHover.background;
              e.target.style.transform = styles.buttonHover.transform;
            }}
            onMouseOut={(e) => {
              e.target.style.background = styles.button.background;
              e.target.style.transform = 'scale(1)';
            }}
          >
            Join Room
          </button>
        </Link>
        <Link to="/about-us" style={styles.link}>
          <button
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.background = styles.buttonHover.background;
              e.target.style.transform = styles.buttonHover.transform;
            }}
            onMouseOut={(e) => {
              e.target.style.background = styles.button.background;
              e.target.style.transform = 'scale(1)';
            }}
          >
            About Us
          </button>
        </Link>
        <Link to="/contact-us" style={styles.link}>
          <button
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.background = styles.buttonHover.background;
              e.target.style.transform = styles.buttonHover.transform;
            }}
            onMouseOut={(e) => {
              e.target.style.background = styles.button.background;
              e.target.style.transform = 'scale(1)';
            }}
          >
            Contact Us
          </button>
        </Link>
      </div>
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Chat Group. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
