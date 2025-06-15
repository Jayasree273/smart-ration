import { useState } from 'react';
import Link from 'next/link';

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

      <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📦 Create New Ration Batch</h2>
        <form onSubmit={handleAddBatch} style={{
          display: 'inline-block',
          textAlign: 'left',
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          maxWidth: '500px',
          width: '100%'
        }}>
          <label style={{ fontSize: '1.2rem', display: 'block', marginBottom: '1rem' }}>
            Item:
            <select value={item} onChange={(e) => setItem(e.target.value)} style={{
              marginTop: '0.5rem',
              padding: '0.6rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '100%'
            }}>
              <option value="Wheat">Wheat</option>
              <option value="Rice">Rice</option>
              <option value="Sugar">Sugar</option>
              <option value="Oil">Oil</option>
              <option value="Dal">Dal (Pulses)</option>
              <option value="Salt">Salt</option>
              <option value="Kerosene">Kerosene</option>
            </select>
          </label>

          <label style={{ fontSize: '1.2rem', display: 'block', marginBottom: '1rem' }}>
            Quantity (kg or liters):
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              style={{
                marginTop: '0.5rem',
                padding: '0.6rem',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '100%'
              }}
            />
          </label>

          <label style={{ fontSize: '1.2rem', display: 'block', marginBottom: '1rem' }}>
            Arrival Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={{
                marginTop: '0.5rem',
                padding: '0.6rem',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '100%'
              }}
            />
          </label>

          <label style={{ fontSize: '1.2rem', display: 'block', marginBottom: '1rem' }}>
            Destination (PDS Shop / Area):
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              placeholder="Enter PDS Shop Name or Area"
              style={{
                marginTop: '0.5rem',
                padding: '0.6rem',
                fontSize: '1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '100%'
              }}
            />
          </label>

          <button type="submit" style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '0.8rem 1.5rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'background-color 0.3s ease',
            width: '100%'
          }}>
            ➕ Add Batch
          </button>
        </form>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>📋 Existing Batches</h2>
        {batches.length === 0 ? (
          <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>No batches added yet.</p>
        ) : (
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '1rem',
            fontSize: '1.1rem',
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(0,0,0,0.05)'
          }}>
            <thead style={{ backgroundColor: '#e0f7e9' }}>
              <tr>
                <th style={{ border: '2px solid #ccc', padding: '0.8rem' }}>Item</th>
                <th style={{ border: '2px solid #ccc', padding: '0.8rem' }}>Quantity (kg/L)</th>
                <th style={{ border: '2px solid #ccc', padding: '0.8rem' }}>Arrival Date</th>
                <th style={{ border: '2px solid #ccc', padding: '0.8rem' }}>Destination</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch) => (
                <tr key={batch.id}>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.item}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.quantity}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.date}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.destination}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
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
