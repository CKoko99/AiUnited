import JotFormEmbed from 'react-jotform-embed';
import AutoQuoteHero from '../../components/Content/Hero/AutoQuoteHero';
import HeroImg from "../../public/assets/images/quotes/auto/Hero.png";
import NumbersSection from '../../components/Content/FlexDigrams/NumbersSection';
import americaImg from '../../public/assets/images/quotes/auto/america.png'
import PATHCONSTANTS from '../../constants/sitemap';
import MainGrid from '../../components/Content/Grids/MainGrid';
import CarImg1 from "../../public/assets/images/quotes/auto/car1.png";
const heroContent = {
    title: "Auto Insurance",
    subtitle: "We’ve partnered with Alinsko to provide quick and easy Auto Insurance coverage",
    image: { src: HeroImg, },
    validation: "zipcode",
    cta: {
        type: "input",
        validation: "numbers",
        placeholder: "Zip Code",
        button: "Get A Quote",
    }
}
const slideData = {
    cardType: "counter",
    contrast: true,
    menuContent: [{
        img: {
            src: americaImg,
            alt: "America"
        },
        number: 30,
        afterNumber: "k+",
        body: "Americans Insured",

    },
    {
        img: {
            src: americaImg,
            alt: "America"
        },
        number: 30,
        afterNumber: "k+",
        body: "Americans Insured",

    },
    {
        img: {
            src: americaImg,
            alt: "America"
        },
        number: 30,
        afterNumber: "k+",
        body: "Americans Insured",
    },]
}
const contentSection2 = {
    largeHorizontalCard: {
        title: {
            en: "Protecting What Matters Most",
            es: "Protegiendo Lo Que Más Importa"
        },
        body: {
            en: [`In today's fast paced world, auto insurance is a crucial safeguard for you, and your financial well being`,
                `The right auto insurance policy ensures that you're prepared to face the unexpected`
            ],
            es: [`En el mundo de hoy, el seguro de auto es una protección crucial para usted y su bienestar financiero`,
                `La póliza de seguro de auto adecuada asegura que esté preparado para enfrentar lo inesperado`],
        },
    },
    largeVerticalCard: {
        body: {
            en: [`Whether you drive a brand-new car or an older model, auto insurance protects your investment`],
            es: [`Ya sea que conduzca un automóvil nuevo o un modelo más antiguo, el seguro de automóvil protege su inversión`]
        },
        img: { src: CarImg1, alt: "car" }
    },
    smallCard1: {
        body: {
            en: [`See what our customers have to say about Ai United`],
            es: [`Vea lo que nuestros clientes tienen que decir sobre Ai United`]
        },
        CTA: {
            type: "secondary",
            text: { en: "Read Reviews", es: "Leer Reseñas" },
            link: PATHCONSTANTS.ABOUT.REVIEWS
        },
    },
    smallCard2: {
        body: {
            en: ['Get a free quote today from the comfort of your home'],
            es: ['Obtenga una cotización gratuita hoy desde la comodidad de su hogar']
        },
        CTA: {
            type: "primary",
            text: { en: "Get A Quote", es: "Obtener Una Cotización" },
            link: `${PATHCONSTANTS.QUOTES.AUTO}#auto-quote`
        },
    }
}
export default function () {
    return <>
        <AutoQuoteHero {...heroContent} />
        <NumbersSection {...slideData} menuContent={slideData.menuContent} />
        <MainGrid {...contentSection2} />
    </>
}