import Script from 'next/script';



const MeasurementID = process.env.NODE_ENV === "development" ? "" : "G-PSJW7EDC3G"
export default function () {
    return <>
        <Script
            strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${MeasurementID}`}
        />
        <Script
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', '${MeasurementID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
        />
    </>
}