import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/mark.png"></link>
          <meta name="theme-color" content="#fff" />
          <meta name='application-name' content='PWA App' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
<meta name='apple-mobile-web-app-status-bar-style' content='default' />
<meta name='apple-mobile-web-app-title' content='PWA App' />
<meta name='description' content='My first PWA' />
<meta name='format-detection' content='telephone=no' />
<meta name='mobile-web-app-capable' content='yes' />
<meta name='msapplication-config' content='/icons/browserconfig.xml' />
<meta name='msapplication-TileColor' content='#2B5797' />
<meta name='msapplication-tap-highlight' content='no' />
<meta name='twitter:card' content='summary' />
<meta name='twitter:url' content='https://yourdomain.com' />
<meta name='twitter:title' content='PWA App' />
<meta name='twitter:description' content='Best PWA App in the world' />
<meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' />
<meta name='twitter:creator' content='@DavidWShadow' />
<meta property='og:type' content='website' />
<meta property='og:title' content='PWA App' />
<meta property='og:description' content='Best PWA App in the world' />
<meta property='og:site_name' content='PWA App' />
<meta property='og:url' content='https://yourdomain.com' />
<meta property='og:image' content='https://yourdomain.com/icons/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;