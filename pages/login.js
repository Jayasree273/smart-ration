import { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect based on selected role
      if (role === 'admin') {
        router.push('/admin');
      } else if (role === 'distributor') {
        router.push('/distributor');
      } else if (role === 'citizen') {
        router.push('/citizen');
      }
    } catch (error) {
      setMessage('❌ ' + error.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <label style={{ fontSize: '1rem', textAlign: 'left' }}>
            Select Role:
            <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.select}>
              <option value="admin">Admin</option>
              <option value="distributor">PDS Distributor</option>
              <option value="citizen">Citizen</option>
            </select>
          </label>

          <button type="submit" style={styles.button}>Login</button>
        </form>

        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f7fdfc',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '400px',
    textAlign: 'center',
  },
  title: {
    color: '#4CAF50',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    marginTop: '0.5rem',
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '0.8rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '1rem',
    color: 'red',
  },
};
