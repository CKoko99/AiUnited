import Cards2 from "@/components/Content/Cards/Cards2";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import PictureWithList2 from "@/components/Content/PictureWithList2";
import TextSection from "@/components/Content/TextSection";
import PATHCONSTANTS from "constants/sitemap";
import HeadComponent from "@/components/Head";
import MexicoImg1 from "public/assets/images/products/mexico/mexico1.png";
import CustomersImg from "public/assets/images/products/customers.png";
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg2 from "public/assets/images/products/home/livingroom.png";
import CardImg1 from "public/assets/images/products/quote.png";
import ThinkingImg from "public/assets/images/products/thinking.png";
import SuretySubNav from "@/components/SubNavBar/products/surety";
import SuretyImg1 from "public/assets/images/products/surety/surety.png"

const headContent = {
    title: 'Ai United Surety Bond Insurance Guide',
    metaData: `Discover Surety Bond Insurance's protection for you and your business. Learn more to safeguard your assets and operations.`,
}

const verticalBannerContent = {
    title: {
        en: "Surety Bonds 101: A Comprehensive Guide to Financial Assurance",
        es: "Fianzas 101: una guía completa de garantía financiera"
    },
    img: {
        src: SuretyImg1,
        alt: "House"
    }
}

const contentSection1 = {
    title: {
        en: "Find the Best Surety Bonds",
        es: "Encuentre las mejores fianzas"
    },
    subtitle: {
        en: `Surety bonds are a three-party agreement where the surety (insurance company) guarantees the obligee (the party requiring the bond) that the principal (the party obtaining the bond) will fulfill certain obligations.`,
        es: `Las fianzas son un acuerdo de tres partes en el que la fianza (compañía de seguros) garantiza al obligado (la parte que requiere la fianza) que el principal (la parte que obtiene la fianza) cumplirá ciertas obligaciones.`
    },
    alignSubtitle: "left",
}

const contentSection2 = {
    subtitle: {
        en: `Explore Your Options and Secure Your Journey with a Comprehensive Mexico Tourist Insurance Plan Today!`,
        es: `¡Explore sus opciones y asegure su viaje con un plan integral de seguro de turista en México hoy!`
    },
    noPadding: true,
    ctaButtons: [{
        text: {
            en: "Get a Quote",
            es: "Obtenga una cotización"
        },
        href: PATHCONSTANTS.QUOTES.SURETY.INDEX,
        color: "primary",
        variant: "contained"
    },
    {
        text: {
            en: "Contact Us",
            es: "Contáctenos"
        },
        href: PATHCONSTANTS.ABOUT.CONTACT,
        color: "secondary",
        variant: "outlined"
    }
    ]
}


const contentSection3 = {
    title: {
        en: "Why Our Customers Love Us",
        es: "Por qué nuestros clientes nos aman"
    },
    img: {
        src: CustomersImg,
        alt: "Customers"
    },
    content: [
        {
            title: {
                en: `Competitive Rates`,
                es: `Tarifas competitivas`
            },
            body: {
                en: `Explore cost-effective coverage choices. We are dedicated to offering competitive rates that align with your financial needs.`,
                es: `Explore opciones de cobertura rentables. Nos dedicamos a ofrecer tarifas competitivas que se alineen con sus necesidades financieras.`
            }
        },
        {
            title: {
                en: `Exceptional Customer Service`,
                es: `Servicio al cliente excepcional`
            },
            body: {
                en: `We provide excellent customer service, including responsive support, fast communication, and problem resolution.`,
                es: `Brindamos un excelente servicio al cliente, que incluye soporte receptivo, comunicación rápida y resolución de problemas.`
            }
        },
        {
            title: {
                en: `Wide Coverage Ranges`,
                es: `Amplios rangos de cobertura`
            },
            body: {
                en: `We take pride in providing extensive coverage options that cater to a diverse range of needs.`,
                es: `Nos enorgullecemos de brindar amplias opciones de cobertura que atienden una amplia gama de necesidades.`
            }
        }
    ]
}
const contentSection4 = {
    content: [
        {
            img: {
                src: CardImg1,
                alt: "Living Room"
            },
            title: {
                en: "Get A Free Surety Bond Quote",
                es: "Obtenga una cotización gratuita de fianza"
            },
            body: {
                en: `Get a free quote today and see how much you can save.`,
                es: `Obtenga una cotización gratuita hoy y vea cuánto puede ahorrar.`
            },
            link: PATHCONSTANTS.QUOTES.SURETY.FORM
        },
        {
            img: {
                src: ThinkingImg,
                alt: "Discounts"
            },
            title: {
                en: 'Explore Frequently Asked Questions',
                es: 'Explore las preguntas frecuentes',
            },
            body: {
                en: `Find answers to your questions about Mexico Auto Insurance.`,
                es: `Encuentre respuestas a sus preguntas sobre el seguro de auto de México.`
            },
            link: PATHCONSTANTS.PRODUCTS.SURETY.FAQ
        },
        {
            img: {
                src: ArticlesImg,
                alt: "Blog Articles"
            },
            title: {
                en: "Explore Insurance Articles",
                es: "Explore artículos de seguro"
            },
            body: {
                en: `Learn more about insurance and how to protect yourself.`,
                es: `Aprenda más sobre el seguro y cómo protegerse.`
            },
            link: PATHCONSTANTS.ARTICLES.INDEX
        },
    ]
}

export default function () {
    return <>
        <HeadComponent {...headContent} />
        <HorizontalBanner {...verticalBannerContent} />
        <SuretySubNav />
        <TextSection {...contentSection1} />
        <TextSection {...contentSection2} />
        <PictureWithList2 {...contentSection3} />
        <Cards2 {...contentSection4} />
    </>
}