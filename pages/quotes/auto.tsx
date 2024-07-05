import AutoQuoteHero from "../../components/Content/Hero/AutoQuoteHero";
import HeroImg2 from "../../public/assets/images/quotes/auto/Hero2.png";
import NumbersSection from "../../components/Content/FlexDigrams/NumbersSection";
import americaImg from "../../public/assets/images/quotes/auto/america.png";
import moneyImg from "../../public/assets/images/quotes/auto/money.png";
import hourglassImg from "../../public/assets/images/quotes/auto/hourglass.png";
import PATHCONSTANTS from "../../constants/sitemap";
import MainGrid from "../../components/Content/Grids/MainGrid";
import CarImg1 from "../../public/assets/images/quotes/auto/car1.png";
import CarImg2 from "../../public/assets/images/quotes/auto/car2.png";
import TwoColumn from "../../components/Content/Grids/TwoColumn";
import ContactAndShop from "../../components/Content/FlexDigrams/Combo/ContactAndShop";
import HeadComponent from "../../components/Head";
import VerticalAutoBanner from "@/components/Content/Hero/VerticalAutoBanner";
import BannerImage from "@/public/assets/images/quotes/auto/Banner.png";
const heroContent = {
    title: {
        en: "Get Auto Insurance Today",
        es: "Obtenga Seguro De Auto Hoy",
    },
    subtitle: {
        en: "Enter your zip code to get started with a free auto quote.",
        es: "Ingrese su código postal para comenzar una cotización de seguro de auto gratuita.",
    },
    img: {
        src: BannerImage,
        alt: "car",
    },
    validation: "zipcode",
    cta: {
        type: "input",
        validation: "numbers",
        placeholder: { en: "Zip Code", es: "Código Postal" },
        buttonText: {
            en: "Get A Quote",
            es: "Obtener Una Cotización",
        },
    },
};
const slideData = {
    cardType: "counter",
    contrast: true,
    menuContent: [
        {
            img: {
                src: americaImg,
                alt: "America",
            },
            number: 30,
            afterNumber: "k+",
            body: {
                en: "Americans Insured",
                es: "Estadounidenses Asegurados",
            },
        },
        {
            img: {
                src: moneyImg,
                alt: "money",
            },
            beforeNumber: "$",
            number: 247,
            body: {
                en: "Saved on Average",
                es: "Ahorro Promedio",
            },
        },
        {
            img: {
                src: hourglassImg,
                alt: "hourglass",
            },
            number: 6,
            afterNumberGap: true,
            afterNumber: "minutes",
            body: {
                en: "Quoting Process",
                es: "Proceso de Cotización",
            },
        },
    ],
};
const contentSection2 = {
    largeHorizontalCard: {
        title: {
            en: "Protecting What Matters Most",
            es: "Protegiendo lo Que Más Importa",
        },
        body: {
            en: [
                `In today's fast-paced world, auto insurance is a crucial safeguard for you and your financial well-being.`,
                `The right auto insurance policy ensures you're prepared to face the unexpected.`,
            ],
            es: [
                `En el mundo de hoy, el seguro de auto es una protección crucial para usted y su bienestar financiero`,
                `La póliza de seguro de auto adecuada asegura que esté preparado para enfrentar lo inesperado`,
            ],
        },
    },
    largeVerticalCard: {
        body: {
            en: [
                `Whether you drive a brand-new car or an older model, auto insurance protects your investment.`,
            ],
            es: [
                `Ya sea que conduzca un automóvil nuevo o un modelo más antiguo, el seguro de automóvil protege su inversión`,
            ],
        },
        img: { src: CarImg1, alt: "car" },
    },
    smallCard1: {
        body: {
            en: [`See what our customers have to say about Ai United.`],
            es: [
                `Vea lo que nuestros clientes tienen que decir sobre Ai United`,
            ],
        },
        CTA: {
            type: "secondary",
            text: { en: "Read Reviews", es: "Leer Reseñas" },
            link: PATHCONSTANTS.ABOUT.REVIEWS,
        },
    },
    smallCard2: {
        body: {
            en: ["Get a free quote today from the comfort of your home."],
            es: [
                "Obtenga una cotización gratuita hoy desde la comodidad de su hogar",
            ],
        },
        CTA: {
            type: "primary",
            text: { en: "Get A Quote", es: "Obtener Una Cotización" },
            link: `${PATHCONSTANTS.QUOTES.AUTO.FORM}`,
        },
    },
};
const contentSection3 = {
    title: {
        en: "Tailored Coverage to Meet Your Needs",
        es: "Cobertura Personalizada Para Satisfacer Sus Necesidades",
    },
    body: {
        en: [
            `At Ai United, we understand that every driver is unique. That's why we offer a variety of auto insurance coverages to match your needs.`,
            `• Liability Insurance`,
            `• Collision Insurance`,
            `• Comprehensive Insurance`,
            `• And More`,
        ],
        es: [
            `En Ai United, entendemos que cada conductor es único. Es por eso que ofrecemos una variedad de coberturas de seguro de auto para satisfacer sus necesidades.`,
            `• Seguro de Responsabilidad Civil`,
            `• Seguro de Colisión`,
            `• Seguro a Todo Riesgo`,
            `• Y Más`,
        ],
    },
    img: { src: CarImg2, alt: "car" },
};

export default function () {
    return (
        <>
            <HeadComponent
                title={"Car Insurance | Get a Free Auto Insurance Quote"}
                metaData={
                    "Secure your ride with a free car insurance quote from Ai United Insurance today. Drive confidently with tailored coverage."
                }
            />
            <VerticalAutoBanner {...heroContent} />
            <NumbersSection
                {...slideData}
                menuContent={slideData.menuContent}
            />
            <MainGrid {...contentSection2} />
            <TwoColumn {...contentSection3} />
            <ContactAndShop quoteLink={PATHCONSTANTS.GETAQUOTE.AUTO} />
        </>
    );
}
