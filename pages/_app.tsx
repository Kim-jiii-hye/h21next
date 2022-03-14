import type { AppProps } from 'next/app';
import '../styles/globals.css'
import Footer from '../Component/view/Footer'
import Header from '../Component/view/header'
import { Provider } from '../context'

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <div id="viewBase" className="css3	W_M1M2L W_M2L W_L">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}