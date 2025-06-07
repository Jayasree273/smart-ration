import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState('admin');

  const handleLogin = (e) => {
    e.preventDefault();

    // Redirect based on selected role
    if (role === 'admin') {
      router.push('/admin');
    } else if (role === 'distributor') {
      router.push('/distributor');
    } else if (role === 'citizen') {
      router.push('/citizen');
    }
  };

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f7fdfc',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        width: '400px'
      }}>
        <h1 style={{ color: '#4CAF50', fontSize: '2rem', marginBottom: '1rem' }}>Login</h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Username" required style={{
            padding: '0.8rem',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }} />
          <input type="password" placeholder="Password" required style={{
            padding: '0.8rem',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }} />

          <label style={{ fontSize: '1.1rem' }}>
            Select Role:
            <select value={role} onChange={(e) => setRole(e.target.value)} style={{
              marginTop: '0.5rem',
              padding: '0.6rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '100%'
            }}>
              <option value="admin">Admin</option>
              <option value="distributor">PDS Distributor</option>
              <option value="citizen">Citizen</option>
            </select>
          </label>

          <button type="submit" style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '0.8rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
