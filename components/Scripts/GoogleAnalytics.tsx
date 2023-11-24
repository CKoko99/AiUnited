import Script from 'next/script';



const GtagID = "G-PSJW7EDC3G"
export default function () {
    return <>
        <Script
            strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${GtagID}`}
        />
        <Script
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', '${GtagID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
        />
    </>
}