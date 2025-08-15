const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array required' });
    }

    // Format the user message into one string (latest user message)
    const latestUserMessage = messages[messages.length - 1]?.content || '';

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          parts: [
            { text: latestUserMessage }
          ]
        }
      ]
    };

    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const botReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini API';

    res.json({ role: 'assistant', content: botReply });
  } catch (error) {
    console.error('Error in /api/chat:', error.response?.data || error.message || error);
    res.status(500).json({ error: 'Failed to get response from Gemini API' });
  }
});

module.exports = router;




