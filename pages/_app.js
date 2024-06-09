import React from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../src/components/Layout';
import { Provider } from 'react-redux';
import store from '../store';
import Head from 'next/head'
import { ScreenLoading } from '../src/components/common/Loading/Loading'
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout >
        <ScreenLoading />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
