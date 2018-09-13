import App from 'next/app';
import React from 'react';
import nextRedux from '../store/redux-config';
import { Provider } from 'react-redux';
import Layout from '../components/layout';

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Layout>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    )
  }
}

export default nextRedux(MyApp)
