const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  posts: [
    {
      message: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
