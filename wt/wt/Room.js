import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Room = () => {
  const { roomId } = useParams();
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/rooms/${roomId}/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [roomId]);

  const postMessage = async () => {
    try {
      await axios.post(`http://localhost:5000/api/rooms/${roomId}/posts`, { message: newPost });
      setNewPost('');
      
      const response = await axios.get(`http://localhost:5000/api/rooms/${roomId}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  const styles = {
    container: {
      backgroundColor: '#1E1E2F',
      color: '#E5E5E5', 
      minHeight: '100vh',
      fontFamily: `'Poppins', sans-serif`,
      padding: '20px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#F4F4F4', 
      marginBottom: '20px',
    },
    textarea: {
      width: '100%',
      maxWidth: '600px',
      padding: '15px',
      borderRadius: '15px',
      border: '2px solid #665C72',
      backgroundColor: '#2A2A3E', 
      color: '#E5E5E5',
      fontSize: '1rem',
      outline: 'none',
      marginBottom: '20px',
      transition: 'all 0.3s ease',
    },
    button: {
      background: 'linear-gradient(145deg, #4B4453, #312C39)', 
      color: '#E5E5E5', 
      border: 'none',
      borderRadius: '50px',
      padding: '12px 20px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    },
    buttonHover: {
      background: 'linear-gradient(145deg, #665C72, #4B4453)', 
      transform: 'scale(1.05)', 
    },
    postsContainer: {
      marginTop: '30px',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    post: (index) => ({
      backgroundColor: index % 2 === 0 ? '#2A2A3E' : '#312C39', 
      padding: '10px',
      borderRadius: '10px',
      marginBottom: '10px',
      border: '2px solid #665C72',
      color: '#E5E5E5', 
    }),
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Room: {roomId}</h2>
      <textarea
        placeholder="Post your message"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        style={styles.textarea}
      />
      <button
        onClick={postMessage}
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
        Post
      </button>
      <div style={styles.postsContainer}>
        <h3>Posts</h3>
        {posts.map((post, index) => (
          <div key={index} style={styles.post(index)}>
            <p>{post.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
