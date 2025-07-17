const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/ask', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'gryphe/mythomax-l2-13b', 
        messages: [{ role: 'user', content: userMessage }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:4200',
          'X-Title': 'CraveKart-AI',
        },
      }
    );

    const aiReply = response.data.choices[0].message.content;
    res.json({ response: aiReply });

  } catch (error) {
    console.error('OpenRouter error:', error.response?.data || error.message);
    res.status(500).json({ error: 'AI failed to respond. Check server logs.' });
  }
});

app.listen(3000, () => {
  console.log('AI server with OpenRouter running at http://localhost:3000');
});
