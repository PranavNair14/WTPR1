import React from 'react';

const AboutUs = () => {
  const styles = {
    container: {
      backgroundColor: '#1E1E2F', 
      color: '#E5E5E5', 
      fontFamily: `'Poppins', sans-serif`, 
      padding: '40px 20px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#F4F4F4', 
      marginBottom: '20px',
    },
    subHeading: {
      fontSize: '2rem',
      fontWeight: '600',
      color: '#F4F4F4',
      marginBottom: '15px',
    },
    paragraph: {
      fontSize: '1.2rem',
      color: '#E5E5E5',
      marginBottom: '20px',
      lineHeight: '1.6',
    },
    list: {
      listStyleType: 'none',
      paddingLeft: '0',
      color: '#E5E5E5',
      fontSize: '1.1rem',
      marginBottom: '20px',
    },
    listItem: {
      marginBottom: '10px',
    },
    footer: {
      marginTop: '40px',
      fontSize: '1rem',
      color: '#9A8CA5', 
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our group chat platform! Our mission is to create a seamless and user-friendly environment
        where people can connect, collaborate, and communicate effortlessly. Whether you're chatting with
        friends, organizing team meetings, or hosting discussions, we've got you covered.
      </p>
      <h2 style={styles.subHeading}>Our Vision</h2>
      <p style={styles.paragraph}>
        We aim to redefine the way people connect online by providing a platform that is simple, intuitive,
        and accessible for everyone. Our team is dedicated to improving your communication experience with
        innovative features and a focus on user privacy.
      </p>
      <h2 style={styles.subHeading}>Why Choose Us?</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>No sign-ups or registrations required</li>
        <li style={styles.listItem}>Instant room creation for quick discussions</li>
        <li style={styles.listItem}>Secure and private communication</li>
        <li style={styles.listItem}>Easy-to-use interface</li>
      </ul>
      <p style={styles.paragraph}>
        Thank you for choosing our platform. We are constantly working to enhance your experience. If you have
        any feedback, feel free to reach out!
      </p>
      <footer style={styles.footer}>
        <p>&copy; 2024 Our Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
