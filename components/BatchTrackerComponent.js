import { useState, useEffect } from 'react';

export default function BatchTrackerComponent() {
  const [batches, setBatches] = useState([]);
  const [newBatch, setNewBatch] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const initialBatches = ['Wheat Batch', 'Rice Batch'];
    setBatches(initialBatches);
    setCount(initialBatches.length);
  }, []);

  useEffect(() => {
    console.log(`Batch count changed: ${count}`);
  }, [count]);

  const handleAddBatch = () => {
    if (newBatch.trim() !== '') {
      setBatches([...batches, newBatch]);
      setCount(count + 1);
      setNewBatch('');
    }
  };

  return (
    <div style={{
      padding: '2rem',
      border: '2px solid #4CAF50',
      borderRadius: '12px',
      marginBottom: '2rem',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '500px',
      margin: '2rem auto',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#4CAF50', fontSize: '2rem', marginBottom: '1rem' }}>📦 Batch Tracker</h2>

      <input
        type="text"
        placeholder="Enter new batch name"
        value={newBatch}
        onChange={(e) => setNewBatch(e.target.value)}
        style={{
          padding: '0.8rem',
          fontSize: '1.1rem',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '80%',
          marginBottom: '1rem'
        }}
      />
      <br />
      <button onClick={handleAddBatch} style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '0.8rem 1.5rem',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
      }}>
        ➕ Add Batch
      </button>

      <h3 style={{ marginTop: '2rem', fontSize: '1.5rem', color: '#333' }}>Current Batches:</h3>
      <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.2rem' }}>
        {batches.map((batch, index) => (
          <li key={index} style={{
            padding: '0.5rem',
            borderBottom: '1px solid #ddd'
          }}>{batch}</li>
        ))}
      </ul>

      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Total Batches: <strong>{count}</strong></p>
    </div>
  );
}
