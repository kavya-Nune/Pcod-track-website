// backend/models/Mood.js
const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema({
  name: String,
  intensity: Number,
});

const moodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mood: String,
  periodFlow: String,
  symptoms: [symptomSchema],
  notes: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Mood', moodSchema);

