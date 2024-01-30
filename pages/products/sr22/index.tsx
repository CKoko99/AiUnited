import Cards2 from "@/components/Content/Cards/Cards2";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import PictureWithList2 from "@/components/Content/PictureWithList2";
import TextSection from "@/components/Content/TextSection";
import PATHCONSTANTS from "constants/sitemap";
import HeadComponent from "@/components/Head";
import AutoImg1 from "public/assets/images/products/auto/suv.png";
import CustomersImg from "public/assets/images/products/customers.png";
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg2 from "public/assets/images/products/auto/card1.png";
import ThinkingImg from "public/assets/images/products/thinking.png";
import SR22SubNav from "@/components/SubNavBar/products/sr22";

const headContent = {
    title: 'Ai United SR22 Insurance Guide',
    metaData: `Learn more about SR22 Insurance and how it can get you back on the road.`
}

const verticalBannerContent = {
    title: {
        en: "SR-22 Insurance: Get Back on the Road Fast!",
        es: "Seguro SR-22: ¡Vuelva a la carretera rápidamente!"
    },
    img: {
        src: AutoImg1,
        alt: "House"
    }
}

const contentSection1 = {
    title: {
        en: "Find the Best SR-22 Coverage",
        es: "Encuentre la mejor cobertura SR-22"
    },
    subtitle: {
        en: `If you’re in need of SR-22 insurance, we’ve got you covered. Our hassle-free process makes it easy to get the coverage you need to regain your driving privileges quickly and affordably.`,
        es: `Si necesita un seguro SR-22, lo tenemos cubierto. Nuestro proceso sin complicaciones facilita la obtención de la cobertura que necesita para recuperar sus privilegios de conducción de manera rápida y económica.`
    },
    alignSubtitle: "left",
}

const contentSection2 = {
    subtitle: {
        en: `Explore Your Options and Secure Your Journey with a Comprehensive SR-22 Insurance Plan Today!`,
        es: `¡Explore sus opciones y asegure su viaje con un plan de seguro SR-22 integral hoy mismo!`
    },
    noPadding: true,
    ctaButtons: [{
        text: {
            en: "Get a Quote",
            es: "Obtenga una cotización"
        },
        href: PATHCONSTANTS.QUOTES.SR22.INDEX,
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
                src: CardImg2,
                alt: "Living Room"
            },
            title: {
                en: "Explore Coverage Options",
                es: "Explore las opciones de cobertura",
            },
            body: {
                en: `Read more information to see what coverage is right for you.`,
                es: `Lea más información para ver qué cobertura es la adecuada para usted.`
            },
            link: PATHCONSTANTS.PRODUCTS.SR22.COVERAGE
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
            link: PATHCONSTANTS.PRODUCTS.SR22.FAQ
        },
        {
            img: {
                src: ArticlesImg,
                alt: "Blog Articles"
            },
            title: {
                en: "Explore Auto Insurance Articles",
                es: "Explore los artículos de seguro de auto",
            },
            body: {
                en: `Learn more about auto insurance and how to protect yourself.`,
                es: `Aprenda más sobre el seguro de auto y cómo protegerse.`
            },
            link: PATHCONSTANTS.ARTICLES.INDEX
        },
    ]
}

export default function () {
    return <>
        <HeadComponent {...headContent} />
        <HorizontalBanner {...verticalBannerContent} />
        <SR22SubNav />
        <TextSection {...contentSection1} />
        <TextSection {...contentSection2} />
        <PictureWithList2 {...contentSection3} />
        <Cards2 {...contentSection4} />
    </>
}