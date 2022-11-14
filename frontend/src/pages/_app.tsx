import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.scss';
import React from 'react';
import { RecoilRoot } from 'recoil';
import AuthProvider from './AuthProvider';
import { Footer } from '../components';
import 'tailwindcss/tailwind.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
          <link rel="manifest" href="/manifest.json" /> */}
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
      <Footer />
    </RecoilRoot>
  );
};

export default App;
