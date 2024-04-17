import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
//import { ThemeProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../providers/theme";
import GoogleAnalytics from "../components/Scripts/Google/GoogleAnalytics";
import { useEffect } from 'react';
import PATHCONSTANTS from 'constants/sitemap';
import * as fbq from "@/components/Scripts/Facebook/FacebookEvents";
import * as ttq from "@/components/Scripts/TikTok/TikTokEvents";

function MyApp({ Component, pageProps }: AppProps) {
  async function fetchArticles() {
    await fetch(`${PATHCONSTANTS.BACKEND}/articles`,).then(
      () => { }).catch((err) => { console.log(err) })
  }
  useEffect(() => {
    fetchArticles()
    const siteVisit = "SiteVisit"
    fbq.event(siteVisit)
    ttq.event(siteVisit)
  }, [])
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
