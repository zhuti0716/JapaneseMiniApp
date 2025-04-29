const axios = require('axios');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await axios.post(
      'https://api.deepseek.com/v1/chat/completions',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_API_KEY`  // 🔥 替换成你的 DeepSeek API Key
        }
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error connecting to DeepSeek:', error.message);
    res.status(500).json({ error: 'Failed to fetch from DeepSeek' });
  }
};