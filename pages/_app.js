import React from 'react';
import '../styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
