import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

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
      <header>
        <div className="logo">Smart Ration Portal</div>
        <div className="nav-buttons">
            <a href="/login" className="highlighted">Login</a>
            <a href="/signup" className="highlighted">Sign Up</a>
        </div>

      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Transforming Ration Delivery</h1>
          <p>
            Empowering citizens with smart access to their ration entitlements. Real-time access,
            reliable tracking, and a secure future—at your fingertips.
          </p>
          <div className="location-box">
            <label htmlFor="area" className="sr-only">Area or PDS Number</label>
            <input id="area" type="text" placeholder="Enter your Area or PDS Number" />
            <button>Check Now</button>
          </div>
          <small>
            Enter your area or PDS number above to instantly check your ration delivery status and enjoy
            a transparent, hassle-free experience.
          </small>
        </div>

        <div className="hero-image">
          <img src="/ration.png.jpg" alt="Ration Distribution" />

        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/584/584052.png" alt="Fair Distribution" />
          <h3>Fair Distribution</h3>
          <p>No more corruption or hidden costs. Full transparency for every user.</p>
        </div>
        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Live Tracking" />
          <h3>Live Tracking</h3>
          <p>Track where your assigned ration batch is, and when it will arrive.</p>
        </div>
        <div className="feature-card">
          <img src="https://cdn-icons-png.flaticon.com/512/2909/2909894.png" alt="Instant Feedback" />
          <h3>Instant Feedback</h3>
          <p>Report issues instantly to the admin or shopkeeper via our feedback system.</p>
        </div>
      </section>

      <footer>
        <p>
          Smart Ration is a citizen-first portal ensuring food security and transparency in public
          distribution systems. Built with ❤️ for people, powered by technology.
        </p>
      </footer>

      {/* Optional: Global CSS should be added in globals.css, not inline this big */}
    </div>
  );
}

