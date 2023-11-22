import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import { ThemeProvider } from '@emotion/react';
import theme from "../providers/theme";
import GoogleAnalytics from "../components/Scripts/GoogleAnalytics";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <GoogleAnalytics />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
