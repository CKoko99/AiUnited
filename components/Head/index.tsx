import Head from "next/head";

type HeadComponentPropsType = {
  title: string;
  metaData: string;
}

const HeadComponent = ({ title, metaData }: HeadComponentPropsType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaData} />
      <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/ai-favicon.ico?alt=media&token=192149a1-59c8-48d2-be99-5f751ab91e1a" />

      <meta name="google-site-verification" content="eBcP0RUizk4nbWiQlzGJKWaFZaPuYTm9Fzo2S954WJE" />
    </Head>
  )
}

export default HeadComponent;
