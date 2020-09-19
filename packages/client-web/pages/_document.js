import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { favicon } from 'src/constants';
import { color } from '@nature/element';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
          <link rel="icon" href={favicon} type="image/x-icon" />
          <link rel="apple-touch-icon" href={favicon} />
          <meta name="theme-color" content={color.primaryVariant} />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <script
            src="https://apis.google.com/js/platform.js"
            async
            defer
          ></script>
          <script
            async
            type="text/javascript"
            src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
            charSet="utf-8"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
