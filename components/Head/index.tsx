import Head from "next/head";
import { GTMHead } from "../Scripts/GoogleTag";
import { useEffect } from "react";

type HeadComponentPropsType = {
  title?: string;
  metaData?: string;
  canonical?: string;
  graphImg?: string;
}

const HeadComponent = ({ title, metaData, canonical, graphImg }: HeadComponentPropsType) => {

  useEffect(() => {
    console.log('HeadComponent', title, metaData, canonical, graphImg);
    console.log('GraphImg', (graphImg ? graphImg : "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/og-fb.png?alt=media&token=580378a4-b1a3-473f-98cd-da5ef169513d"))
  }, [])

  return (
    <Head>
      <GTMHead />
      <title>{title || "Ai United Insurance"}</title>
      <meta name="creator" content="Ai United" />
      <meta name="publisher" content="Ai United" />
      <meta name="description" content={metaData || "Ai United Insurance provides you with coverage options, benefits and discounts at a price you can afford."} />
      <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/ai-favicon.ico?alt=media&token=192149a1-59c8-48d2-be99-5f751ab91e1a" />
      {canonical && <link rel="canonical" href={canonical} />}
      {//<!-- Facebook Meta Tags -->
      }
      <meta property="og:url" content="https://www.aiunited.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={graphImg || "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/og-fb.png?alt=media&token=580378a4-b1a3-473f-98cd-da5ef169513d"} />

      {//      <!-- Twitter Meta Tags -->
      }
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="aiunited.com" />
      <meta property="twitter:url" content="https://www.aiunited.com/" />
      <meta name="twitter:title" content="Ai United Insurance - Free Auto Insurance Quote - Car Insurance" />
      <meta name="twitter:description" content={metaData || "Ai United Insurance provides you with coverage options, benefits and discounts at a price you can afford."} />
      <meta name="twitter:image" content={graphImg || "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/og-fb.png?alt=media&token=580378a4-b1a3-473f-98cd-da5ef169513d"} />

      {// <!-- Meta Tags Generated via https://www.opengraph.xyz -->
      }

      <meta name="google-site-verification" content="eBcP0RUizk4nbWiQlzGJKWaFZaPuYTm9Fzo2S954WJE" />
    </Head>
  )
}

export default HeadComponent;
