// For Next.js API route (pages/api/chat.js)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const geminiRes = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBnNpbh5qoYkcKRuii8D3BebYKd_MeoX4E',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    const data = await geminiRes.json();

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received.';

    res.status(200).json({ reply });
  } catch (err) {
    console.error('Error talking to Gemini:', err);
    res.status(500).json({ error: 'Failed to get response from Gemini API' });
  }
}
