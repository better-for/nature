import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { favicon } from 'src/constants';
import { color } from '@nature/design';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="ko">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-170287798-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments)}
                gtag("js", new Date());
                gtag("config", "UA-170287798-1");
            `,
            }}
          ></script>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="google-site-verification"
            content="iqRNIL_d0ZBv4gxuxBquEdKy9RT3dhjWvFVi2QkibCc"
          />
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
          <link rel="icon" href={favicon} type="image/x-icon" />
          <link rel="apple-touch-icon" href={favicon} />
          <meta name="theme-color" content={color.primaryVariant} />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
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
