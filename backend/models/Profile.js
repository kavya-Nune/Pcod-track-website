const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // 🔁 changed key from `userId` to `user` for consistency
  name: { type: String },
  age: { type: Number },
  weight: { type: Number },
  height: { type: Number },
  menstrualCycleLength: { type: Number },
  lastPeriodDate: { type: Date }
}, { timestamps: true });  // ⏱ adds createdAt and updatedAt fields

module.exports = mongoose.model('Profile', profileSchema);
