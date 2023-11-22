import Head from "next/head";
import { GTMHead } from "../Scripts/GoogleTag";

type HeadComponentPropsType = {
  title?: string;
  metaData?: string;
}

const HeadComponent = ({ title, metaData }: HeadComponentPropsType) => {
  return (
    <Head>
      <GTMHead />
      <title>{title || "Ai United"}</title>
      <meta name="description" content={metaData || "Ai United Insurance provides you with coverage options, benefits and discounts at a price you can afford."} />
      <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/ai-favicon.ico?alt=media&token=192149a1-59c8-48d2-be99-5f751ab91e1a" />

      <meta name="google-site-verification" content="eBcP0RUizk4nbWiQlzGJKWaFZaPuYTm9Fzo2S954WJE" />
    </Head>
  )
}

export default HeadComponent;
