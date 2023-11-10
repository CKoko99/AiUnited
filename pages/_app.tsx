import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { ThemeProvider } from '@emotion/react';
import theme from "../providers/theme";
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
