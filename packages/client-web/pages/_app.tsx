import React from 'react';
import App from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { StoreProvider, DarkModeContextProvider } from 'src/utils/storeUtils';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/element';
import { appWithTranslation } from 'I18n';
import { Layout } from 'src/components';

class MyApp extends App {
  // mobxStore = null;
  // static async getInitialProps(appContext) {
  //   const mobxStore = initializeStore();
  //   appContext.ctx.mobxStore = mobxStore;
  //   const appProps = await App.getInitialProps(appContext);
  //   return {
  //     ...appProps,
  //     initialMobxState: mobxStore,
  //     namespacesRequired: ['common']
  //   };
  // }

  // constructor(props) {
  //   super(props);
  //   const isServer = typeof window === 'undefined';
  //   this.mobxStore = isServer ? props.initialMobxState : initializeStore();
  // }
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
      // <StoreProvider {...this.mobxStore}>
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
