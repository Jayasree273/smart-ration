import { useState } from 'react';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { sender: 'user', text: message };
    const botMessage = { sender: 'bot', text: `This is a sample reply to "${message}"` };

    setChatHistory((prev) => [...prev, userMessage, botMessage]);
    setMessage('');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4CAF50' }}>Citizen Chat Assistant</h1>

      <div style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '1rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        overflowY: 'auto',
        marginBottom: '1rem'
      }}>
        {chatHistory.map((msg, index) => (
          <div key={index} style={{
            textAlign: msg.sender === 'user' ? 'right' : 'left',
            marginBottom: '0.8rem'
          }}>
            <span style={{
              display: 'inline-block',
              backgroundColor: msg.sender === 'user' ? '#DCF8C6' : '#EDEDED',
              padding: '0.8rem 1rem',
              borderRadius: '16px',
              maxWidth: '80%',
              fontSize: '1rem'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        gap: '0.5rem'
      }}>
        <input
          type="text"
          placeholder="Ask a question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            flex: 1,
            padding: '0.8rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc'
          }}
        />
        <button type="submit" style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          padding: '0.8rem 1.2rem',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          ➤
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}
