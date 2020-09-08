import React from 'react';
import App from 'next/app';
import { StoreProvider, DarkModeContextProvider } from 'src/utils/storeUtils';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/element';
import { appWithTranslation } from '../I18n';
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

  render() {
    const { Component, pageProps } = this.props;

    return (
      // <StoreProvider {...this.mobxStore}>
      <StoreProvider>
        <DarkModeContextProvider>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </DarkModeContextProvider>
      </StoreProvider>
    );
  }
}

export default appWithTranslation(MyApp);
