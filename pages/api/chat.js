import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;
    const apiKey = process.env.DEEPAI_API_KEY;

    if (!apiKey) {
      console.error('❌ DeepAI API key missing');
      return res.status(500).json({ error: 'API key not found' });
    }

    try {
      const response = await axios.post(
        'https://api.deepai.org/api/text-generator',
        { text: message },
        { headers: { 'Api-Key': apiKey } }
      );

      res.status(200).json({ reply: response.data.output });
    } catch (error) {
      console.error('❌ Chat API Error:', error?.response?.data || error.message);
      res.status(500).json({ error: 'Failed to get chat response.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
