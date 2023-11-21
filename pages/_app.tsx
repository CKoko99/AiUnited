import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { ThemeProvider } from '@emotion/react';
import theme from "../providers/theme";
import Script from 'next/script';

const Gtag = ""
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <Script
          strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${Gtag}`}
        />
        <Script
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', '${Gtag}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
