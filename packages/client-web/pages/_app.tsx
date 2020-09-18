import React from 'react';
import App from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { StoreProvider, DarkModeContextProvider } from 'src/utils/storeUtils';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/element';
import { appWithTranslation } from 'I18n';
import { Layout } from 'src/components';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <NextAuthProvider
        options={{ site: process.env.SITE }}
        session={pageProps.session}
      >
        <StoreProvider>
          <DarkModeContextProvider>
            <ThemeProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </DarkModeContextProvider>
        </StoreProvider>
      </NextAuthProvider>
    );
  }
}

export default appWithTranslation(MyApp);
