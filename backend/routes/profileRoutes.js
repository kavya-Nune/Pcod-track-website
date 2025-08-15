/*const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Save or update profile
router.post('/save', async (req, res) => {
  try {
    const { user, ...data } = req.body;
    const existing = await Profile.findOne({ user });
    if (existing) {
      await Profile.findOneAndUpdate({ user }, data);
      res.json({ message: 'Profile updated' });
    } else {
      const newProfile = new Profile(req.body);
      await newProfile.save();
      res.status(201).json({ message: 'Profile created' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Profile error' });
  }
});

// Get profile for a user
router.get('/my/:userId', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

module.exports = router;*/

/*const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const authMiddleware = require('../middleware/authMiddleware');

// Save or update profile (Protected)
router.post('/save', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId; // ✅ Extracted from token
    const data = req.body;

    const existing = await Profile.findOne({ user: userId });
    if (existing) {
      await Profile.findOneAndUpdate({ user: userId }, data);
      res.json({ message: '✅ Profile updated' });
    } else {
      const newProfile = new Profile({ ...data, user: userId });
      await newProfile.save();
      res.status(201).json({ message: '✅ Profile created' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Profile error' });
  }
});

// Get profile for current logged-in user (Protected)
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return res.status(404).json({ message: 'No profile found' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Failed to fetch profile' });
  }
});

module.exports = router;*/

/*const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const authMiddleware = require('../middleware/authMiddleware'); // ✅ Must use require()

// Save or update profile (Protected)
router.post('/save', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId; // ✅ Extracted from token
    const data = req.body;

    const existing = await Profile.findOne({ user: userId });
    if (existing) {
      await Profile.findOneAndUpdate({ user: userId }, data);
      res.json({ message: '✅ Profile updated' });
    } else {
      const newProfile = new Profile({ ...data, user: userId });
      await newProfile.save();
      res.status(201).json({ message: '✅ Profile created' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Profile error' });
  }
});

// Get profile for current logged-in user (Protected)
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return res.status(404).json({ message: 'No profile found' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Failed to fetch profile' });
  }
});

module.exports = router;*/
//backend/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const authMiddleware = require('../middleware/authMiddleware');

// ✅ GET current user's profile
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return res.status(404).json({ message: 'No profile found' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Failed to fetch profile' });
  }
});

// ✅ POST or update user profile
router.post('/save', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const data = req.body;

    const existing = await Profile.findOne({ user: userId });
    if (existing) {
      await Profile.findOneAndUpdate({ user: userId }, data);
      res.json({ message: '✅ Profile updated' });
    } else {
      const newProfile = new Profile({ ...data, user: userId });
      await newProfile.save();
      res.status(201).json({ message: '✅ Profile created' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: '❌ Profile save error' });
  }
});

module.exports = router;



