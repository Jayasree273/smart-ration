import Link from 'next/link';
import { useState } from 'react';

export default function AdminPage() {
  const [batches, setBatches] = useState([]);
  const [item, setItem] = useState('Wheat');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');

  const handleAddBatch = (e) => {
    e.preventDefault();

    const newBatch = {
      item,
      quantity,
      date,
      destination,
      id: Date.now()
    };

    setBatches([...batches, newBatch]);
    setQuantity('');
    setDate('');
    setDestination('');
  };

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f7fdfc',
      minHeight: '100vh',
      color: '#333',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <header style={{
        marginBottom: '2rem',
        borderBottom: '4px solid #4CAF50',
        paddingBottom: '1rem',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#4CAF50', fontSize: '2.8rem' }}>Smart Ration Portal - Admin Dashboard</h1>
      </header>

      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link href="/batch">
          <button style={{
            margin: '1rem',
            padding: '1rem 2rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>📦 Go to Batch Tracker</button>
        </Link>

        <Link href="/delivery">
          <button style={{
            margin: '1rem',
            padding: '1rem 2rem',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>🚚 Go to Delivery Monitor</button>
        </Link>
      </section>

      <footer style={{
        marginTop: '3rem',
        borderTop: '2px solid #ddd',
        paddingTop: '1rem',
        textAlign: 'center'
      }}>
        <a href="/" style={{
          textDecoration: 'none',
          color: '#4CAF50',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>← Back to Home</a>
      </footer>
    </div>
  );
}

