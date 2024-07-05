import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import HeadComponent from "@/components/Head";
import PATHCONSTANTS from "constants/sitemap";
import MexicoImg1 from "public/assets/images/products/mexico/mexico1.png";
import MexicoImg2 from "public/assets/images/products/mexico/mexico2.png";
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg1 from "public/assets/images/products/quote.png";
import CardImg2 from "public/assets/images/products/home/livingroom.png";
import Cards2 from "@/components/Content/Cards/Cards2";
import MexicoSubNav from "@/components/SubNavBar/products/mexico";
import CTAText from "@/components/PrefilledCTA/CTAText";
import BorderBoxWithPicture from "@/components/Content/BorderBoxWithPicture";
import ThinkingImg from "public/assets/images/products/thinking.png";

const headContent = {
    title: "Ai United Mexico Insurance Coverage Guide",
    metaData: `Dive into the intricacies of Mexico tourist auto insurance coverage with our comprehensive overview.`,
};

const pageLinks = {
    definition: {
        link: `${PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE}#Definition`,
        id: "Definition",
    },
    liabilityCoverage: {
        link: `${PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE}#Liability-Coverage`,
        id: "Liability-Coverage",
    },
    medicalCoverage: {
        link: `${PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE}#Medical-Coverage`,
        id: "Medical-Coverage",
    },
};
const verticalBannerContent = {
    title: {
        en: "Explore Mexico with Confidence: Your Guide to Mexico Tourist Auto Insurance",
        es: "Explore México con confianza: su guía para el seguro de auto turístico de México",
    },
    img: {
        src: MexicoImg1,
        alt: "Home",
    },
};

const contentSection1 = {
    title: {
        en: "Mexico Tourist Auto Coverages Explained",
        es: "Coberturas de auto turístico de México explicadas",
    },
    subtitle: {
        en: `Welcome to Ai United, your trusted partner for a seamless and secure journey through Mexico. We understand the importance of worry-free travel, especially when it comes to exploring the diverse landscapes and rich culture of Mexico by car. Our Mexico Tourist Auto Insurance is your key to unlocking a safe and enjoyable adventure.`,
        es: `Bienvenido a Ai United, su socio de confianza para un viaje sin problemas y seguro por México. Entendemos la importancia de viajar sin preocupaciones, especialmente cuando se trata de explorar los diversos paisajes y la rica cultura de México en automóvil. Nuestro seguro de auto turístico de México es su clave para desbloquear una aventura segura y agradable.`,
    },
    alignSubtitle: "left",
};

const contentSection2 = {
    title: {
        en: "Different Types of Coverage",
        es: "Diferentes tipos de cobertura",
    },
    body: {
        en: [
            `1. LINK: [What is Mexico Tourist Auto Insurance?](${pageLinks.definition.link})`,
            `2. LINK: [Liability Coverage](${pageLinks.liabilityCoverage.link})`,
            `3. LINK: [Medical Coverage](${pageLinks.medicalCoverage.link})`,
        ],
        es: [
            `1. LINK: [¿Qué es el seguro de auto turístico de México?](${pageLinks.definition.link})`,
            `2. LINK: [Cobertura de responsabilidad](${pageLinks.liabilityCoverage.link})`,
            `3. LINK: [Cobertura médica](${pageLinks.medicalCoverage.link})`,
        ],
    },
    img: {
        src: MexicoImg2,
        alt: "Home Furniture",
    },
    alignBody: "left" as const,
};

const contentSection3 = {
    title: {
        en: `What is Mexico Tourist Auto Insurance?`,
        es: `¿Qué es el seguro de auto turístico de México?`,
    },
    id: pageLinks.definition.id,
    subtitle: {
        en: [
            `Mexico Tourist Auto Insurance is your essential companion for a smooth and protected road trip. Tailored for visitors, this insurance goes beyond conventional policies, ensuring you have the coverage you need while complying with Mexican regulations. Let’s dive into the key aspects of our comprehensive coverage:`,
        ],
        es: [
            `El seguro de auto turístico de México es su compañero esencial para un viaje por carretera sin problemas y protegido. Adaptado para visitantes, este seguro va más allá de las pólizas convencionales, asegurando que tenga la cobertura que necesita mientras cumple con las regulaciones mexicanas. Veamos los aspectos clave de nuestra cobertura integral:`,
        ],
    },
    alignTitle: "left",
    alignSubtitle: "left",
};

const contentSection4 = {
    title: {
        en: `Liability Coverage`,
        es: `Cobertura de responsabilidad`,
    },
    id: pageLinks.liabilityCoverage.id,
    subtitle: {
        en: [
            `Drive with confidence knowing you’re covered for bodily injury and property damage. Our liability coverage meets Mexican legal requirements, providing financial protection in the event of an accident.`,
        ],
        es: [
            `Conduzca con confianza sabiendo que está cubierto por lesiones corporales y daños a la propiedad. Nuestra cobertura de responsabilidad cumple con los requisitos legales mexicanos, brindando protección financiera en caso de un accidente.`,
        ],
    },
    alignTitle: "left",
    alignSubtitle: "left",
};

const contentSection5 = {
    title: {
        en: `Medical Expenses Coverage`,
        es: `Cobertura de gastos médicos`,
    },
    id: pageLinks.medicalCoverage.id,
    subtitle: {
        en: [
            `Your well-being is our priority. Our insurance includes coverage for medical expenses resulting from an accident. Travel with peace of mind, knowing you have support in case of unforeseen medical costs.`,
        ],
        es: [
            `Su bienestar es nuestra prioridad. Nuestro seguro incluye cobertura de gastos médicos derivados de un accidente. Viaje con tranquilidad, sabiendo que cuenta con el respaldo en caso de gastos médicos imprevistos.`,
        ],
    },
    alignTitle: "left",
    alignSubtitle: "left",
};

const endCardsContent = {
    content: [
        {
            img: {
                src: CardImg1,
                alt: "Living Room",
            },
            title: {
                en: "Get A Free Mexico Tourist Auto Insurance Quote",
                es: "Obtenga una cotización gratuita de seguro de auto turístico de México",
            },
            body: {
                en: `Get a free quote today and see how much you can save.`,
                es: `Obtenga una cotización gratuita hoy y vea cuánto puede ahorrar.`,
            },
            link: PATHCONSTANTS.QUOTES.HOME.FORM,
        },
        {
            img: {
                src: ThinkingImg,
                alt: "Discounts",
            },
            title: {
                en: "Explore Frequently Asked Questions",
                es: "Explore las preguntas frecuentes",
            },
            body: {
                en: `Find answers to your questions about Motorcycle Insurance.`,
                es: `Encuentre respuestas a sus preguntas sobre el seguro de motocicleta.`,
            },
            link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.FAQ,
        },
        {
            img: {
                src: ArticlesImg,
                alt: "Blog Articles",
            },
            title: {
                en: "Explore Auto Insurance Articles",
                es: "Explore artículos de seguro de auto",
            },
            body: {
                en: `Learn more about auto insurance and how to protect yourself.`,
                es: `Aprenda más sobre el seguro de auto y cómo protegerse.`,
            },
            link: PATHCONSTANTS.ARTICLES.INDEX,
        },
    ],
};
export default function () {
    return (
        <>
            <HeadComponent {...headContent} />
            <HorizontalBanner {...verticalBannerContent} />
            <MexicoSubNav />
            <TextSection {...contentSection1} />
            <BorderBoxWithPicture {...contentSection2} />
            <TextSection {...contentSection3} />
            <TextSection {...contentSection4} />
            <TextSection {...contentSection5} />
            <CTAText contained category="mexico" />
            <Cards2 {...endCardsContent} />
        </>
    );
}
