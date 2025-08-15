//backend/routes/moodRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { saveMoodData, getMyMoods } = require('../controllers/moodController');

// POST mood data
router.post('/', authMiddleware, saveMoodData);

// GET moods for logged-in user
router.get('/my/:userId', authMiddleware, getMyMoods);

module.exports = router;
