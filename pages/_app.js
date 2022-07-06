
import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../commponents';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
   
      <Layout>
        
        <Component {...pageProps} />
      </Layout>

  )
}

export default MyApp