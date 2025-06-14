import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* Add this line to enable Vercel Web Analytics */}
    </>
  );
}
