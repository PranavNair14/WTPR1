import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CreateRoom from './CreateRoom';
import JoinRoom from './JoinRoom';
import Room from './Room';
import ContactUs from './ContactUs'; 
import AboutUs from './AboutUs'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-room" element={<CreateRoom />} />
        <Route path="/join-room" element={<JoinRoom />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/about-us" element={<AboutUs />} /> 
      </Routes>
    </Router>
  );
}

export default App;
