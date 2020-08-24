import React from 'react';
import App from 'next/app';
import { StoreProvider } from '../src/utils/storeUtils';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/element';
import { appWithTranslation } from '../I18n';
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

export default appWithTranslation(MyApp);
