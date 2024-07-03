import PATHCONSTANTS from "constants/sitemap";
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg1 from "public/assets/images/products/discount.png";
import CardImg2 from "public/assets/images/products/home/livingroom.png";
import Cards2 from "@/components/Content/Cards/Cards2";
import HomeImg1 from "public/assets/images/products/home/home1.png";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import HomeSubNav from "@/components/SubNavBar/products/home";
import TextSection from "@/components/Content/TextSection";
import HeadComponent from "@/components/Head";
import BorderBoxWithPicture from "@/components/Content/BorderBoxWithPicture";
import HomeImg2 from "public/assets/images/products/home/home2.png";
import HomeImg3 from "public/assets/images/products/home/security.png";
import CenterImage from "@/components/Content/CenterImage";
const headContent = {
    title: "Ai United Affordable Home Insurance",
    metaData:
        "Ai United Insurance provides you with coverage options, benefits and discounts at a price you can afford.",
};

const pageLinks = {
    factors: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Factors`,
        id: "Factors",
    },
    improving: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Improving`,
        id: "Improving",
    },
    discounts: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Discounts`,
        id: "Discounts",
    },
};

const verticalBannerContent = {
    title: {
        en: "Your Guide to Afforbable Auto Insurance",
        es: "Su guía para el seguro de auto asequible",
    },
    img: {
        src: HomeImg1,
        alt: "Home",
    },
};
const contentSection1 = {
    title: {
        en: `Affordable Home Insurance and Discounts`,
        es: `Seguro de hogar asequible y descuentos`,
    },
    subtitle: {
        en: `In the realm of home insurance, comprehending the details of costs is crucial to making informed decisions about protecting your home. Our mission at Ai United is to guide you through this financial landscape, ensuring you secure optimal coverage without straining your budget.`,
        es: `En el ámbito del seguro de hogar, comprender los detalles de los costos es crucial para tomar decisiones informadas sobre la protección de su hogar. Nuestra misión en Ai United es guiarlo a través de este panorama financiero, asegurándose de obtener la cobertura óptima sin tensar su presupuesto.`,
    },
    alignSubtitle: "left",
};
const contentSection2 = {
    title: {
        en: "Affordable Home Insurance coverage",
        es: "Cobertura de seguro de hogar asequible",
    },
    body: {
        en: [
            `1. LINK: [Factors Influencing Home Insurance Premiums](${pageLinks.factors.link})`,
            `2. LINK: [Improving Your Home Insurance Rates](${pageLinks.improving.link})`,
            `3. LINK: [Home Insurance Discounts](${pageLinks.discounts.link})`,
        ],
        es: [
            `1. LINK: [Factores que influyen en las primas del seguro de hogar](${pageLinks.factors.link})`,
            `2. LINK: [Mejorar sus tarifas de seguro de hogar](${pageLinks.improving.link})`,
            `3. LINK: [Descuentos en el seguro de hogar](${pageLinks.discounts.link})`,
        ],
    },
    img: {
        src: HomeImg2,
        alt: "Home",
    },
    alignBody: "left" as const,
};
const contentSection3 = {
    title: {
        en: "Factors Influencing Home Insurance Premiums",
        es: "Factores que influyen en las primas del seguro de hogar",
    },
    id: pageLinks.factors.id,
    subtitle: {
        en: [
            `The geographical location of your home plays a significant role in determining insurance costs. Areas prone to natural disasters or with high crime rates may have higher premiums. Conversely, homes in safer neighborhoods may enjoy more affordable rates.`,
            `The construction and materials used in your home impact insurance costs. Older homes or those made with high-risk materials might result in higher premiums. Understanding these structural factors helps us customize your coverage to meet your specific needs.`,
            `Homes located near fire hydrants, fire stations, and other safety measures often benefit from lower insurance costs. These factors contribute to a quicker emergency response, reducing the risk and potential damage.`,
        ],
        es: [
            `La ubicación geográfica de su hogar juega un papel importante en la determinación de los costos del seguro. Las áreas propensas a desastres naturales o con altas tasas de delincuencia pueden tener primas más altas. Por el contrario, las casas en vecindarios más seguros pueden disfrutar de tarifas más asequibles.`,
            `La construcción y los materiales utilizados en su hogar afectan los costos del seguro. Las casas más antiguas o aquellas hechas con materiales de alto riesgo pueden resultar en primas más altas. Comprender estos factores estructurales nos ayuda a personalizar su cobertura para satisfacer sus necesidades específicas.`,
            `Las casas ubicadas cerca de hidrantes, estaciones de bomberos y otras medidas de seguridad a menudo se benefician de costos de seguro más bajos. Estos factores contribuyen a una respuesta de emergencia más rápida, reduciendo el riesgo y el daño potencial.`,
        ],
    },
    alignSubtitle: "left",
    alignTitle: "left",
};
const contentSection4 = {
    title: {
        en: "Improving Your Home Insurance Rates",
        es: "Mejorar sus tarifas de seguro de hogar",
    },
    id: pageLinks.improving.id,
    subtitle: {
        en: [
            `Investing in home renovations, such as updating the roof, electrical systems, or plumbing, can positively impact your insurance rates. Upgraded homes are perceived as lower risks, leading to potential premium reductions.`,
            `Enhance your home’s security by installing burglar alarms, surveillance systems, and reinforced doors. These measures not only provide peace of mind but also demonstrate to insurers that you’re taking proactive steps to mitigate risks.`,
        ],
        es: [
            `Invertir en renovaciones del hogar, como actualizar el techo, los sistemas eléctricos o la plomería, puede tener un impacto positivo en sus tarifas de seguro. Las casas mejoradas se perciben como riesgos más bajos, lo que lleva a posibles reducciones de primas.`,
            `Mejore la seguridad de su hogar instalando alarmas antirrobo, sistemas de vigilancia y puertas reforzadas. Estas medidas no solo brindan tranquilidad, sino que también demuestran a las aseguradoras que está tomando medidas proactivas para mitigar los riesgos.`,
        ],
    },
    alignSubtitle: "left" as const,
    alignTitle: "left" as const,
};
const centerImage1 = {
    img: {
        src: HomeImg3,
        alt: "Home Security",
    },
    subtitle: {
        en: "Installing a home security system is a great way to protect your home and decrease your rates.",
        es: "Instalar un sistema de seguridad para el hogar es una excelente manera de proteger su hogar y disminuir sus tarifas.",
    },
};
const contentSection5 = {
    subtitle: {
        en: [
            `Implementing measures to protect your home from natural disasters, such as reinforcing windows and doors or installing storm shutters, can lead to insurance discounts. Proactively safeguarding your property can result in reduced premiums.`,
            `Regularly reviewing and updating your insurance policy ensures that it accurately reflects your home’s current status. Changes such as home improvements or security upgrades may qualify you for discounts, helping you optimize your coverage and rates.`,
        ],
        es: [
            `Implementar medidas para proteger su hogar de desastres naturales, como reforzar ventanas y puertas o instalar persianas contra tormentas, puede conducir a descuentos en el seguro. Salvaguardar proactivamente su propiedad puede resultar en primas reducidas.`,
            `Revisar y actualizar regularmente su póliza de seguro garantiza que refleje con precisión el estado actual de su hogar. Los cambios, como las mejoras en el hogar o las actualizaciones de seguridad, pueden calificarlo para descuentos, lo que lo ayuda a optimizar su cobertura y tarifas.`,
        ],
    },
    alignSubtitle: "left",
    alignTitle: "left",
};
const contentSection6 = {
    title: {
        en: "Bundle Discounts for Maximum Savings",
        es: "Descuentos de paquetes para ahorros máximos",
    },
    id: pageLinks.discounts.id,
    subtitle: {
        en: [
            `At Ai United, we believe in offering not only the best coverage but also the most cost-effective solutions. Take advantage of our exclusive bundle discounts by combining your home insurance with other policies such as auto or renters insurance. Bundling not only simplifies your insurance management but also unlocks significant savings, ensuring that you get the most value for your money.`,
        ],
        es: [
            `En Ai United, creemos en ofrecer no solo la mejor cobertura sino también las soluciones más rentables. Aproveche nuestros exclusivos descuentos de paquetes combinando su seguro de hogar con otras pólizas como seguro de automóvil o de inquilinos. La agrupación no solo simplifica la administración de su seguro, sino que también desbloquea ahorros significativos, asegurando que obtenga el máximo valor por su dinero.`,
        ],
    },
    alignSubtitle: "left",
    alignTitle: "left",
};

const contentSection7 = {
    subtitle: {
        en: `Explore Your Options and Secure Your Journey with a Comprehensive Home Insurance Plan Today!`,
        es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de auto integral hoy!`,
    },
    ctaButtons: [
        {
            text: {
                en: "Get a Quote",
                es: "Obtenga una cotización",
            },
            href: PATHCONSTANTS.QUOTES.HOME.INDEX,
            color: "primary" as const,
            variant: "contained" as const,
        },
        {
            text: {
                en: "Contact Us",
                es: "Contáctenos",
            },
            href: PATHCONSTANTS.ABOUT.CONTACT,
            color: "secondary" as const,
            variant: "outlined" as const,
        },
    ],
};
const endCardsContent = {
    content: [
        {
            img: {
                src: CardImg1,
                alt: "Living Room",
            },
            title: {
                en: "Get A Free Home Insurance Quote",
                es: "Obtenga una cotización gratuita de seguro de casa",
            },
            body: {
                en: `Get a free quote today and see how much you can save.`,
                es: `Obtenga una cotización gratuita hoy y vea cuánto puede ahorrar.`,
            },
            link: PATHCONSTANTS.QUOTES.HOME.FORM,
        },
        {
            img: {
                src: CardImg2,
                alt: "Car Crash",
            },
            title: {
                en: "Explore Coverage Options",
                es: "Explore las opciones de cobertura",
            },
            body: {
                en: `Read more information to see what coverage is right for you.`,
                es: `Lea más información para ver qué cobertura es la adecuada para usted.`,
            },
            link: PATHCONSTANTS.PRODUCTS.AUTO.COVERAGE,
        },
        {
            img: {
                src: ArticlesImg,
                alt: "Blog Articles",
            },
            title: {
                en: "Explore Home Insurance Articles",
                es: "Explore artículos de seguro de hogar",
            },
            body: {
                en: `Learn more about home insurance and how to protect yourself.`,
                es: `Aprenda más sobre el seguro de hogar y cómo protegerse.`,
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
            <HomeSubNav />
            <TextSection {...contentSection1} />
            <BorderBoxWithPicture {...contentSection2} />
            <TextSection {...contentSection3} />
            <TextSection {...contentSection4} />
            <CenterImage {...centerImage1} />
            <TextSection {...contentSection5} />
            <TextSection {...contentSection6} />
            <TextSection {...contentSection7} />
            <Cards2 {...endCardsContent} />
        </>
    );
}
