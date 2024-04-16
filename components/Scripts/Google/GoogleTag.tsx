import Script from "next/script"

const GtagID = process.env.NODE_ENV === "development" ? "" : "GTM-KMN44RTR"
export function GTMHead() {
    return <Script async
        strategy='lazyOnload'
        dangerouslySetInnerHTML={{
            __html: `  
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GtagID}');</script>
    <!-- End Google Tag Manager -->
    `}}
    />
}
export function GTMBody() {
    return <Script async
        strategy='lazyOnload'
        dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GtagID}');
            `,
        }}
    />

}
declare global {
    interface Window {
        gtag: Function;
    }
}

export function GTMEventHandler(action: string, params: any) {
    window.gtag('event', action, params);
}

const GTMEVENTS = {
    audience: "Audience",
    conversion: "Conversion",
};
export { GTMEVENTS }