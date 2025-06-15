import React, { useState } from 'react';

export default function GeminiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();
      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not respond.';
      setMessages((prev) => [...prev, { role: 'ai', text: aiReply }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'ai', text: '❌ Error connecting to Gemini API.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#4f46e5',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 1000,
        }}
      >
        💬
      </div>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '320px',
            height: '420px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '12px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            fontFamily: 'Segoe UI, sans-serif',
          }}
        >
          <div style={{ padding: '10px', backgroundColor: '#4f46e5', color: 'white', fontWeight: 'bold' }}>
            AI Chat Assistant
          </div>

          <div style={{ flex: 1, padding: '10px', overflowY: 'auto' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '10px',
                  textAlign: msg.role === 'user' ? 'right' : 'left',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '8px 12px',
                    backgroundColor: msg.role === 'user' ? '#e0e7ff' : '#f3f4f6',
                    borderRadius: '12px',
                    maxWidth: '80%',
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {loading && (
              <div style={{ textAlign: 'left', marginBottom: '10px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '8px 12px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '12px',
                  fontStyle: 'italic'
                }}>
                  Gemini is typing...
                </span>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: '10px',
                border: 'none',
                outline: 'none',
              }}
            />
            <button
              onClick={handleSend}
              style={{
                backgroundColor: '#4f46e5',
                color: 'white',
                padding: '10px 14px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
