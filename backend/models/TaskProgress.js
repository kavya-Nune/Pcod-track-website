// backend/models/TaskProgress.js
const mongoose = require('mongoose');

const taskProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tasks: [
    {
      text: String,
      completed: Boolean
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TaskProgress', taskProgressSchema);
