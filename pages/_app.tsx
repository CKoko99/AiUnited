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
        <link rel="shortcut icon" href="https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/ai-favicon.ico?alt=media&token=192149a1-59c8-48d2-be99-5f751ab91e1a" />
      </Head>
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
