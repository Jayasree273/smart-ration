import '../styles/globals.css';
import GeminiChat from '../components/GeminiChat';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GeminiChat />
      <Analytics />
    </>
  );
}
