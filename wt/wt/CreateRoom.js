import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateRoom = () => {
  const [roomName, setRoomName] = useState('');
  const navigate = useNavigate();

  const createRoom = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rooms', { name: roomName });
      navigate(`/room/${response.data.roomId}`);
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  const styles = {
    container: {
      backgroundColor: '#1E1E2F', // Deep navy background
      color: '#E5E5E5', // Elegant silver text
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',  // Center vertically
      alignItems: 'center',      // Center horizontally
      fontFamily: `'Poppins', sans-serif`,
      padding: '20px',
    },
    form: {
      backgroundColor: '#2A2A3E', // Darker background for the form box
      borderRadius: '10px', // Rounded corners for the form
      padding: '40px', // Add some padding for inner space
      textAlign: 'center',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)', // Soft shadow for depth
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#F4F4F4', // Soft white for the heading
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      maxWidth: '350px', // Limit the input width to ensure it doesn't stretch too wide
      padding: '12px 15px',
      borderRadius: '25px',
      border: '2px solid #665C72', // Muted metallic border
      outline: 'none',
      fontSize: '1rem',
      marginBottom: '20px',
      backgroundColor: '#2A2A3E', // Slightly lighter input field background
      color: '#E5E5E5', // Silver text
      transition: 'all 0.3s ease',
    },
    inputFocus: {
      borderColor: '#9A8CA5', // Highlight border on focus
    },
    button: {
      background: 'linear-gradient(145deg, #4B4453, #312C39)', // Muted champagne gloss
      color: '#E5E5E5', // Silver text
      border: 'none',
      borderRadius: '50px', // Rounded edges
      padding: '12px 25px',
      fontSize: '1.2rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
      marginTop: '15px', // Add some space between button and input field
    },
    buttonHover: {
      background: 'linear-gradient(145deg, #665C72, #4B4453)', // Softer shimmer on hover
      transform: 'scale(1.1)', // Slight zoom
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.heading}>Create a Room</h2>
        <input
          type="text"
          placeholder="Enter room name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          style={styles.input}
          onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
          onBlur={(e) => (e.target.style.borderColor = styles.input.borderColor)}
        />
        <button
          onClick={createRoom}
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
      </div>
    </div>
  );
};

export default CreateRoom;
