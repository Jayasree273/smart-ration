import { useState } from 'react';

export default function CitizenPage() {
  const [pdsNumber, setPdsNumber] = useState('');
  const [batches, setBatches] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const dummyBatches = [
    { item: 'Wheat', quantity: 10, status: 'Delivered', date: '2025-06-05' },
    { item: 'Rice', quantity: 8, status: 'In Transit', date: '2025-06-07' },
    { item: 'Oil', quantity: 2, status: 'Delivered', date: '2025-06-04' }
  ];

  const handleCheckStatus = () => {
    // For demo, we show dummy batches regardless of PDS number
    setBatches(dummyBatches);
    setShowResults(true);
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
        <h1 style={{ color: '#4CAF50', fontSize: '2.8rem' }}>Citizen Portal</h1>
      </header>

      <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.3rem' }}>Check ration status, give feedback, and access help resources.</p>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          fontSize: '1.2rem',
          lineHeight: '1.8rem',
          marginTop: '1rem'
        }}>
          <li>🔍 <strong>Enter PDS number to track delivery</strong></li>
          <li>📝 <strong>Submit issues to your local distributor</strong></li>
          <li>📘 <strong>View entitlements and usage history</strong></li>
        </ul>
      </section>

      <section style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Track Ration Delivery</h2>
        <input
          type="text"
          placeholder="Enter your PDS Number"
          value={pdsNumber}
          onChange={(e) => setPdsNumber(e.target.value)}
          style={{
            padding: '0.8rem',
            fontSize: '1.1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '80%',
            maxWidth: '400px',
            marginBottom: '1rem'
          }}
        />
        <br />
        <button onClick={handleCheckStatus} style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '0.8rem 1.5rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Check Status
        </button>
      </section>

      {showResults && (
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>📋 Your Ration Deliveries</h2>
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
                <th style={{ border: '2px solid #ccc', padding: '0.8rem' }}>Status</th>
                <th style={{ border: '2px solid #ccc', padding: '0.8rem' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.item}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.quantity}</td>
                  <td style={{
                    border: '1px solid #ccc',
                    padding: '0.8rem',
                    textAlign: 'center',
                    color: batch.status === 'Delivered' ? 'green' : 'orange',
                    fontWeight: 'bold'
                  }}>
                    {batch.status}
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

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
