import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import BatchTrackerComponent from '../components/BatchTrackerComponent';
import DeliveryMonitorComponent from '../components/DeliveryMonitorComponent' ;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#154734',
        color: 'white',
        fontSize: '1.5rem'
      }}>
        <div className="logo">Smart Ration Portal</div>
        <div className="nav-buttons">
          <a href="/login" className="highlighted" style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: '1rem'
          }}>Login</a>
          <a href="/signup" className="highlighted" style={{
            color: 'white',
            textDecoration: 'none'
          }}>Sign Up</a>
          <a href="/chat" className="highlighted" style={{ color: 'white', textDecoration: 'none', marginLeft: '1rem' }}>
  Chat Assistant
           </a>

        </div>
      </header>

      <section className="hero" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '3rem 1rem',
        backgroundColor: '#f7fdfc'
      }}>
        <div className="hero-text" style={{
          flex: '1 1 400px',
          maxWidth: '600px'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Transforming Ration Delivery</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            Empowering citizens with smart access to their ration entitlements. Real-time access,
            reliable tracking, and a secure future—at your fingertips.
          </p>
          <div className="location-box" style={{
            marginBottom: '1rem'
          }}>
            <label htmlFor="area" className="sr-only">Area or PDS Number</label>
            <input id="area" type="text" placeholder="Enter your Area or PDS Number" style={{
              padding: '0.8rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginRight: '0.5rem',
              width: '70%'
            }} />
            <button style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '0.8rem 1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Check Now</button>
          </div>
          <small>
            Enter your area or PDS number above to instantly check your ration delivery status and enjoy
            a transparent, hassle-free experience.
          </small>
        </div>

        <div className="hero-image" style={{
          flex: '1 1 300px',
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          <img src="/ration.jpg" alt="Ration Distribution" style={{
            width: '100%',
            height: 'auto',
            maxHeight: '300px',
            objectFit: 'contain'
          }} />
        </div>
      </section>

      <section className="features-section" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: '2rem',
        backgroundColor: '#154734',
        color: 'white',
        padding: '3rem 1rem',
        textAlign: 'center'
      }}>
        <div className="feature-card" style={{
          flex: '1 1 280px',
          maxWidth: '300px',
          backgroundColor: '#1c5c45',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
        }}>
          <img src="https://cdn-icons-png.flaticon.com/512/584/584052.png" alt="Fair Distribution"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
              marginBottom: '1rem'
            }} />
          <h3>Fair Distribution</h3>
          <p>No more corruption or hidden costs. Full transparency for every user.</p>
        </div>
        <div className="feature-card" style={{
          flex: '1 1 280px',
          maxWidth: '300px',
          backgroundColor: '#1c5c45',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
        }}>
          <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Live Tracking"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
              marginBottom: '1rem'
            }} />
          <h3>Live Tracking</h3>
          <p>Track where your assigned ration batch is, and when it will arrive.</p>
        </div>
        <div className="feature-card" style={{
          flex: '1 1 280px',
          maxWidth: '300px',
          backgroundColor: '#1c5c45',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
        }}>
          <img src="https://cdn-icons-png.flaticon.com/512/2909/2909894.png" alt="Instant Feedback"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'contain',
              marginBottom: '1rem'
            }} />
          <h3>Instant Feedback</h3>
          <p>Report issues instantly to the admin or shopkeeper via our feedback system.</p>
        </div>
      </section>

      
      <div>
        <p>
          Smart Ration is a citizen-first portal ensuring food security and transparency in public
          distribution systems. Built with ❤️ for people, powered by technology.
        </p>
      </footer>
    </div>
  );
}
