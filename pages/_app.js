import React from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/components/Layout';
import { Provider } from 'react-redux';
import store from '../store';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
