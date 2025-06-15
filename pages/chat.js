import { useState, useRef, useEffect } from 'react';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [error, setError] = useState('');
  const chatBoxRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { sender: 'user', text: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setChatHistory((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <h1 style={{
        fontSize: '2.2rem',
        marginBottom: '1.5rem',
        color: '#2c7a7b'
      }}>
        💬 Citizen Chat Assistant
      </h1>

      <div
        ref={chatBoxRef}
        style={{
          width: '100%',
          maxWidth: '600px',
          height: '500px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          marginBottom: '1rem',
        }}
      >
        {chatHistory.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '0.8rem',
            }}
          >
            <div
              style={{
                backgroundColor: msg.sender === 'user' ? '#dcf8c6' : '#e2e8f0',
                color: '#333',
                padding: '0.8rem 1rem',
                borderRadius: '16px',
                maxWidth: '80%',
                fontSize: '1rem',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          gap: '0.5rem'
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={{
            flex: 1,
            padding: '0.9rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#2c7a7b',
            color: 'white',
            border: 'none',
            padding: '0.9rem 1.3rem',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          ➤
        </button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}
