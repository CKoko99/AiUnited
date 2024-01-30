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
import CardImg1 from "public/assets/images/products/discount.png";
import MexicoSubNav from "@/components/SubNavBar/products/mexico";
import ThinkingImg from "public/assets/images/products/thinking.png";
const headContent = {
    title: 'Ai United Mexico Tourism Insurance Guide',
    metaData: `Learn more about Mexico Auto Tourist Insurance and how it can protect you and your family.`
}

const verticalBannerContent = {
    title: {
        en: "Explore Mexico Safely with Our Tourist Auto Insurance",
        es: "Explore México con seguridad con nuestro seguro de auto para turistas"
    },
    img: {
        src: MexicoImg1,
        alt: "House"
    }
}

const contentSection1 = {
    title: {
        en: "Find the Best Tourist Auto Insurance",
        es: "Encuentre el mejor seguro de auto para turistas"
    },
    subtitle: {
        en: `Welcome to your gateway to worry-free travel in Mexico! At Ai United, we understand the excitement of exploring this beautiful country by car. Whether you’re headed to the stunning beaches, vibrant cities, or historical landmarks, we’ve got your journey covered.`,
        es: `¡Bienvenido a su puerta de entrada a viajes sin preocupaciones en México! En Ai United, entendemos la emoción de explorar este hermoso país en automóvil. Ya sea que se dirija a las impresionantes playas, las vibrantes ciudades o los lugares históricos, tenemos cubierta su viaje.`
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
        href: PATHCONSTANTS.QUOTES.MEXICO.INDEX,
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
            link: PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE
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
            link: PATHCONSTANTS.PRODUCTS.MEXICO.FAQ
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
        <MexicoSubNav />
        <TextSection {...contentSection1} />
        <TextSection {...contentSection2} />
        <PictureWithList2 {...contentSection3} />
        <Cards2 {...contentSection4} />
    </>
}