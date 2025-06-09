import { useState, useEffect } from 'react';

export default function DeliveryMonitorComponent() {
  const [deliveryStatus, setDeliveryStatus] = useState('In Transit');
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const statuses = ['In Transit', 'Out for Delivery', 'Delivered'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setDeliveryStatus(randomStatus);
      setLastUpdated(new Date().toLocaleTimeString());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(`Delivery status updated: ${deliveryStatus}`);
  }, [deliveryStatus]);

  return (
    <div style={{
      padding: '2rem',
      border: '2px solid #4CAF50',
      borderRadius: '12px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '500px',
      margin: '2rem auto',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#4CAF50', fontSize: '2rem', marginBottom: '1rem' }}>🚚 Delivery Monitor</h2>
      <p style={{ fontSize: '1.3rem' }}>Current Status: <strong style={{
        color: deliveryStatus === 'Delivered' ? 'green' : 'orange'
      }}>{deliveryStatus}</strong></p>
      <p style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>Last Updated: {lastUpdated}</p>
    </div>
  );
}
