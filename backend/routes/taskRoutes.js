//backend/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const TaskProgress = require('../models/TaskProgress');

// Save task progress
router.post('/save', async (req, res) => {
  try {
    const newTask = new TaskProgress(req.body);
    await newTask.save();
    res.status(201).json({ message: 'Task progress saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save task progress' });
  }
});

// Get tasks by userId
router.get('/my/:userId', async (req, res) => {
  try {
    const progress = await TaskProgress.find({ userId: req.params.userId });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task progress' });
  }
});

module.exports = router;

