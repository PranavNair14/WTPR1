const express = require('express');
const Room = require('../models/Room');

const router = express.Router();

// Create Room
router.post('/', async (req, res) => {
  try {
    const room = new Room({ name: req.body.name });
    await room.save();
    res.status(201).json({ roomId: room._id });
  } catch (error) {
    res.status(400).send('Error creating room');
  }
});

// Get Room by Name
router.get('/:roomId', async (req, res) => {
  try {
    const room = await Room.findOne({ name: req.params.roomId });
    if (!room) return res.status(404).send('Room not found');
    res.status(200).json(room);
  } catch (error) {
    res.status(400).send('Error fetching room');
  }
});

// Get Posts from Room
router.get('/:roomId/posts', async (req, res) => {
  try {
    const room = await Room.findOne({ name: req.params.roomId });
    if (!room) return res.status(404).send('Room not found');
    res.status(200).json(room.posts);
  } catch (error) {
    res.status(400).send('Error fetching posts');
  }
});

// Post Message to Room
router.post('/:roomId/posts', async (req, res) => {
  const { roomId } = req.params;
  const { message } = req.body;

  try {
    const room = await Room.findOne({ name: roomId });
    if (!room) return res.status(404).send('Room not found');
    room.posts.push({ message });
    await room.save();
    res.status
    res.status(201).json({ message: 'Post added successfully' });
  } catch (error) {
    res.status(400).send('Error posting message');
  }
});

module.exports = router;
