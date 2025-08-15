/*require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// ROUTES
const testRoute = require('./routes/index');
const authRoutes = require('./routes/authRoutes');

app.use('/api', testRoute);
app.use('/api/auth', authRoutes);

// MONGO CONNECTION
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});*/

// backend/server.js
/*('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ===== MIDDLEWARE =====
app.use(express.json());
app.use(cors());

// ===== ROUTES =====
const testRoute = require('./routes/index');
const authRoutes = require('./routes/authRoutes');
const assessmentRoutes = require('./routes/assessmentRoutes');
const moodRoutes = require('./routes/moodRoutes');
const taskRoutes = require('./routes/taskRoutes');
const profileRoutes = require('./routes/profileRoutes'); // ✅ Profile route

// ===== USE ROUTES =====
app.use('/api', testRoute);                     // Health/test route
app.use('/api/auth', authRoutes);               // Register & Login
app.use('/api/assessments', assessmentRoutes);  // Assessment logic
app.use('/api/moods', moodRoutes);              // Mood/Symptom tracking
app.use('/api/tasks', taskRoutes);              // Daily Tasks
app.use('/api/profile', profileRoutes);         // 👤 User profile

// ===== MONGODB CONNECTION =====
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ MongoDB connection error:', err));

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});*/
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// ===== MIDDLEWARE =====
app.use(express.json());
app.use(cors());

// ===== ROUTES =====
const testRoute = require('./routes/index');
const authRoutes = require('./routes/authRoutes');
const assessmentRoutes = require('./routes/assessmentRoutes');
const moodRoutes = require('./routes/moodRoutes');
const taskRoutes = require('./routes/taskRoutes');
const profileRoutes = require('./routes/profileRoutes');
const chatRoutes = require('./routes/chatRoutes');

// ===== USE ROUTES =====
app.use('/api', testRoute);                     // Health/test route
app.use('/api/auth', authRoutes);               // Register & Login
app.use('/api/assessments', assessmentRoutes);  // Assessment logic
app.use('/api/moods', moodRoutes);              // Mood/Symptom tracking
app.use('/api/tasks', taskRoutes);              // Daily Tasks
app.use('/api/profile', profileRoutes);   
app.use('/api/chat', chatRoutes);      // User profile

// ===== MONGODB CONNECTION =====
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ MongoDB connection error:', err));

// ===== START SERVER =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



