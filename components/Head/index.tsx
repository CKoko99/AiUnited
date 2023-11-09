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
      <link rel="icon" href="/favicon.ico" />
      <meta name="google-site-verification" content="eBcP0RUizk4nbWiQlzGJKWaFZaPuYTm9Fzo2S954WJE" />
    </Head>
  )
}

export default HeadComponent;
