import React from 'react';
import App from 'next/app';
import { StoreProvider } from '../src/utils/storeUtils';
import { ThemeProvider } from 'styled-components';
import { theme, light, dark } from '@nature/element';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    );
  }
}

export default MyApp;
