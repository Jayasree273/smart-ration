import { useState } from 'react';
import axios from 'axios';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResponse('');

    try {
      const res = await axios.post('/api/chat', { message });
      setResponse(res.data.reply);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Citizen Chat Assistant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask a question about your delivery"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{ padding: '0.8rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc', marginRight: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
          Ask
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

      {response && (
        <div style={{ marginTop: '2rem', fontSize: '1.2rem', backgroundColor: '#f7f7f7', padding: '1rem', borderRadius: '5px' }}>
          <h2>Chat Assistant:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
