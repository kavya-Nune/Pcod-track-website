const express = require('express');
const router = express.Router();
const Assessment = require('../models/Assessment');

// Save assessment
router.post('/save', async (req, res) => {
  try {
    const newAssessment = new Assessment(req.body);
    await newAssessment.save();
    res.status(201).json({ message: 'Assessment saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save assessment' });
  }
});

// Get assessments by userId
router.get('/my/:userId', async (req, res) => {
  try {
    const results = await Assessment.find({ userId: req.params.userId });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assessments' });
  }
});

module.exports = router;

