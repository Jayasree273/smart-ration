import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const response = await axios.post(
        'https://api.deepai.org/api/text-generator',
        { text: message },
        { headers: { 'Api-Key': process.env.NEXT_PUBLIC_DEEPAI_API_KEY } }
      );

      res.status(200).json({ reply: response.data.output });
    } catch (error) {
      console.error('Chat API Error:', error);
      res.status(500).json({ error: 'Failed to get chat response.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
