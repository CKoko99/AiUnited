import Cards2 from "@/components/Content/Cards/Cards2";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import PictureWithList2 from "@/components/Content/PictureWithList2";
import TextSection from "@/components/Content/TextSection";
import AutoSubNav from "@/components/SubNavBar/products/auto";
import PATHCONSTANTS from "constants/sitemap";
import AutoImg1 from "public/assets/images/products/auto/suv.png";
import CustomersImg from "public/assets/images/products/customers.png";
import CardImg1 from "public/assets/images/products/quote.png";
import CardImg2 from "public/assets/images/products/auto/card1.png";
import CardImg3 from "public/assets/images/products/auto/card2.png";
import HeadComponent from "@/components/Head";

const verticalBannerContent = {
    title: {
        en: "Auto Insurance Essentials: A Comprehensive Guide",
        es: "Lo esencial del seguro de auto: una guía completa"
    },
    img: {
        src: AutoImg1,
        alt: "Van"
    }
}

const contentSection1 = {
    title: {
        en: "Find the Best Auto Coverage",
        es: "Encuentre la mejor cobertura de auto"
    },
    subtitle: {
        en: `Welcome to a journey towards secure and worry-free driving! Your safety on the road is our top priority, and we believe the right auto insurance is the key to a confident and protected driving experience.`,
        es: `¡Bienvenido a un viaje hacia una conducción segura y sin preocupaciones! Su seguridad en la carretera es nuestra principal prioridad, y creemos que el seguro de auto adecuado es la clave para una experiencia de conducción segura y protegida.`

    },
    alignSubtitle: "left",
}

const contentSection2 = {
    subtitle: {
        en: `Explore Your Options and Secure Your Journey with a Comprehensive Auto Insurance Plan Today!`,
        es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de auto integral hoy!`
    },
    noPadding: true,
    ctaButtons: [{
        text: {
            en: "Get a Quote",
            es: "Obtenga una cotización"
        },
        href: PATHCONSTANTS.QUOTES.AUTO.INDEX,
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
            },
            title: {
                en: 'Get A Free Auto Insurance Quote',
                es: 'Obtenga una cotización gratuita de seguro de auto',
            },
            body: {
                en: `Get a free quote today and see how much you can save.`,
                es: `Obtenga una cotización gratuita hoy y vea cuánto puede ahorrar.`
            },
            link: PATHCONSTANTS.QUOTES.AUTO.INDEX
        },
        {
            img: {
                src: CardImg2,
            },
            title: {
                en: "Explore Coverage Options",
                es: "Explore las opciones de cobertura",
            },
            body: {
                en: `Read more information to see what coverage is right for you.`,
                es: `Lea más información para ver qué cobertura es la adecuada para usted.`
            },
            link: PATHCONSTANTS.PRODUCTS.AUTO.COVERAGE
        },
        {
            img: {
                src: CardImg3,
            },
            title: {
                en: `Explore Affordable Auto Coverage`,
                es: `Explore la cobertura de auto asequible`,
            },
            body: {
                en: `See your options for finding affordable coverages.`,
                es: `Vea sus opciones para encontrar coberturas asequibles.`
            },
            link: PATHCONSTANTS.PRODUCTS.AUTO.AFFORDABLE
        }
    ]
}

export default function () {
    return <>
        <HeadComponent title={'Ai United Auto Insurance Guide'}
            metaData={'Ai United Insurance provides you with coverage options, benefits and discounts at a price you can afford.'} />

        <HorizontalBanner {...verticalBannerContent} />
        <AutoSubNav />
        <TextSection {...contentSection1} />
        <TextSection {...contentSection2} />
        <PictureWithList2 {...contentSection3} />
        <Cards2 {...contentSection4} />
    </>
}