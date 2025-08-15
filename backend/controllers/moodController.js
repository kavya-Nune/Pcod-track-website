const Mood = require('../models/Mood');

exports.saveMoodData = async (req, res) => {
  try {
    const { mood, periodFlow, symptoms, notes, date } = req.body;

    if (!mood || !symptoms || !Array.isArray(symptoms)) {
      return res.status(400).json({ message: 'Mood and symptoms are required' });
    }

    const moodEntry = new Mood({
      userId: req.userId,
      mood,
      periodFlow,
      symptoms,
      notes,
      date: date || new Date(),
    });

    await moodEntry.save();
    res.status(201).json({ message: '✅ Mood saved successfully!' });
  } catch (err) {
    console.error('❌ Error saving mood:', err);
    res.status(500).json({ message: 'Server error while saving mood', error: err });
  }
};

exports.getMyMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ userId: req.userId }).sort({ date: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching moods' });
  }
};
