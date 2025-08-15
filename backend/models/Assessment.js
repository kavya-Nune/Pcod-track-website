// backend/models/Assessment.js
const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  answers: [String],
  score: Number,
  result: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Assessment', assessmentSchema);
