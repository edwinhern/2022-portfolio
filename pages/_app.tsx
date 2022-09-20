import type { AppProps } from 'next/app'
import { Socialicons } from '../components/social-icons/social-icons';
import Navbar from '../components/navbar';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Socialicons />
    </>
  );
}

export default MyApp
