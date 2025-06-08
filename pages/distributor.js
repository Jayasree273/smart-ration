import { useState } from 'react';

export default function DistributorPage() {
  // Simulate some assigned batches (you can connect to Admin in future)
  const initialBatches = [
    { id: 1, item: 'Wheat', quantity: 100, destination: 'PDS Shop 12', date: '2025-06-08', delivered: false },
    { id: 2, item: 'Rice', quantity: 80, destination: 'PDS Shop 5', date: '2025-06-09', delivered: false },
    { id: 3, item: 'Oil', quantity: 50, destination: 'PDS Shop 3', date: '2025-06-07', delivered: false }
  ];

  const [batches, setBatches] = useState(initialBatches);

  const markAsDelivered = (id) => {
    const updatedBatches = batches.map(batch =>
      batch.id === id ? { ...batch, delivered: true } : batch
    );
    setBatches(updatedBatches);
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
        <h1 style={{ color: '#4CAF50', fontSize: '2.8rem' }}>PDS Distributor Panel</h1>
      </header>

      <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.3rem' }}>Manage ration batch status and receive instructions from admin.</p>
        <ul style={{
          listStyleType: 'none',
          padding: 0,
          fontSize: '1.2rem',
          lineHeight: '1.8rem',
          marginTop: '1rem'
        }}>
          <li>🚚 <strong>View current and upcoming batch deliveries</strong></li>
          <li>✅ <strong>Confirm and report distribution completion</strong></li>
          <li>📌 <strong>Get updates or special notices</strong></li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>📋 Assigned Batches</h2>
        {batches.length === 0 ? (
          <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>No assigned batches.</p>
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
                <th style={{ border: '2px solid #ccc', padding: '0.8rem' }}>Destination</th>
                <th style={{ border: '2px solid #ccc', padding: '0.8rem' }}>Arrival Date</th>
                <th style={{ border: '2px solid #ccc', padding: '0.8rem' }}>Status</th>
                <th style={{ border: '2px solid #ccc', padding: '0.8rem' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch) => (
                <tr key={batch.id}>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.item}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.quantity}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.destination}</td>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>{batch.date}</td>
                  <td style={{
                    border: '1px solid #ccc',
                    padding: '0.8rem',
                    textAlign: 'center',
                    color: batch.delivered ? 'green' : 'orange',
                    fontWeight: 'bold'
                  }}>
                    {batch.delivered ? 'Delivered' : 'Pending'}
                  </td>
                  <td style={{ border: '1px solid #ccc', padding: '0.8rem', textAlign: 'center' }}>
                    {!batch.delivered && (
                      <button onClick={() => markAsDelivered(batch.id)} style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}>
                        Mark as Delivered
                      </button>
                    )}
                    {batch.delivered && '✅'}
                  </td>
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
