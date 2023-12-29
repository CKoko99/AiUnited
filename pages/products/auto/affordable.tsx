import BorderBoxWithPicture from "@/components/Content/BorderBoxWithPicture";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import AutoSubNav from "@/components/SubNavBar/products/auto";
import PATHCONSTANTS from "constants/sitemap";
import AutoImg1 from "public/assets/images/products/auto/suv.png";
import CardImg1 from "public/assets/images/products/quote.png";
import CardImg2 from "public/assets/images/products/auto/card1.png";
import CardImg3 from "public/assets/images/products/auto/card2.png";
import Cards2 from "@/components/Content/Cards/Cards2";
import HeadComponent from "@/components/Head";

const pageLinks = {
    liability: {
        link: `${PATHCONSTANTS.PRODUCTS.AUTO.AFFORDABLE}#Minimum`,
        id: "Minimum"
    },
    optional: { id: "Optional", link: `${PATHCONSTANTS.PRODUCTS.AUTO.AFFORDABLE}#Optional` },
    penalties: { id: "Penalties", link: `${PATHCONSTANTS.PRODUCTS.AUTO.AFFORDABLE}#Penalties` },
}
const verticalBannerContent = {
    title: {
        en: "Affordable Auto Coverage That Fits Your Budget",
        es: "Cobertura de auto asequible que se adapta a su presupuesto"
    },
    img: {
        src: AutoImg1,
        alt: "Van"
    }
}
const contentSection1 = {
    title: {
        en: "Your Road to Affordable Auto Insurance",
        es: "Su camino hacia un seguro de auto asequible"
    },
    subtitle: {
        en: `At Ai United, we believe in empowering you with knowledge, and making your journey on the road smoother and safer. Our comprehensive guide breaks down the intricacies of auto insurance coverage, providing you with a roadmap to confidently choose the protection that suits your needs.`,
        es: `En Ai United, creemos en empoderarlo con conocimiento y hacer que su viaje en la carretera sea más fluido y seguro. Nuestra guía completa desglosa las complejidades de la cobertura de seguro de auto, brindándole una hoja de ruta para elegir con confianza la protección que se adapta a sus necesidades.`
    },
    alignSubtitle: "left",
}

const contentSection2 = {
    title: { en: "Different Types of Auto Insurance Coverage", es: "Diferentes tipos de cobertura de seguro de auto" },
    body: {
        en: [
            `1. LINK: [Miniumum Insurance Requirements](${pageLinks.liability.link})`,
            `2. LINK: [Optional Insurance Coverages](${pageLinks.optional.link})`,
            `3. LINK: [Penalties for Driving Without Insurance](${pageLinks.penalties.link})`,
        ],
        es: [
            `1. LINK: [Requisitos mínimos de seguro](${pageLinks.liability.link})`,
            `2. LINK: [Coberturas de seguro opcionales](${pageLinks.optional.link})`,
            `3. LINK: [Sanciones por conducir sin seguro](${pageLinks.penalties.link})`,
        ]
    },
    img: {
        src: AutoImg1,
        alt: "Woman driving"
    },
    alignBody: "left",
}
const contentSection3 = {
    title: { en: "Minimum Insurance Requirements", es: "Requisitos mínimos de seguro" },
    subtitle: {
        en: [
            `Understanding the minimum requirements for auto insurance is crucial. Most states have specific mandates for coverage, typically including liability insurance to cover bodily injury and property damage. `,
            `While these minimums vary, we ensure that our affordable plans meet or exceed these requirements, keeping you compliant with local regulations without stretching your budget.`
        ],
        es: [
            `Comprender los requisitos mínimos para el seguro de auto es crucial. La mayoría de los estados tienen mandatos específicos para la cobertura, generalmente incluyendo seguro de responsabilidad civil para cubrir lesiones corporales y daños a la propiedad.`,
            `Si bien estos mínimos varían, nos aseguramos de que nuestros planes asequibles cumplan o superen estos requisitos, lo que le permite cumplir con las regulaciones locales sin estirar su presupuesto.`
        ]
    },
    alignSubtitle: "left",
    alignTitle: "left",
}

const contentSection4 = {
    title: {
        en: "Optional Insurance Coverages",
        es: "Coberturas de seguro opcionales"
    },
    subtitle: {
        en: [
            `Consider adding Collision or Comprehensive insurance to your plan. Collision coverage steps in to handle repair or replacement costs for your vehicle after an accident. Comprehensive coverage provides protection against non-collision events like theft, vandalism, or natural disasters.`,
            `While these coverages are optional, they could save you money in the event of an accident.`
        ],
        es: [
            `Considere agregar seguro de colisión o seguro integral a su plan. La cobertura de colisión interviene para manejar los costos de reparación o reemplazo de su vehículo después de un accidente. La cobertura integral brinda protección contra eventos que no sean de colisión, como robo, vandalismo o desastres naturales.`,
            `Si bien estas coberturas son opcionales, podrían ahorrarle dinero en caso de un accidente.`
        ]
    },
    alignSubtitle: "left", alignTitle: "left",
}
const contentSection5 = {
    alignSubtitle: "left", alignTitle: "left",
    title: {
        en: "Penalties for Driving Without Insurance",
        es: "Sanciones por conducir sin seguro"
    },
    subtitle: {
        en: [
            `Driving without insurance can lead to serious consequences, including fines, license suspension, and legal complications. At Ai United, we emphasize the importance of being covered on the road. `,
            `Our affordable plans keep you within the legal requirements and protect you from potential penalties associated with driving without insurance. It’s our way of ensuring that you’re udget-conscious and law-abiding.`
        ],
        es: [
            `Conducir sin seguro puede tener consecuencias graves, incluidas multas, suspensión de la licencia y complicaciones legales. En Ai United, enfatizamos la importancia de estar cubierto en la carretera.`,
            `Nuestros planes asequibles lo mantienen dentro de los requisitos legales y lo protegen de posibles sanciones asociadas con la conducción sin seguro. Es nuestra forma de asegurarnos de que sea consciente de su presupuesto y respetuoso de la ley.`
        ]
    }
}

const contentSection6 = {
    title: {
        en: `Drive Confidently with Complete Coverage`,
        es: `Conduzca con confianza con una cobertura completa`
    },
    subtitle: {
        en: `Explore Your Options and Secure Your Journey with a Comprehensive Auto Insurance Plan Today!`,
        es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de auto integral hoy!`
    },
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


const contentSection7 = {
    content: [
        {
            img: {
                src: CardImg1,
            },
            title: {
                en: 'Get A Free Auto Insurance Quote',
                es: 'Obtenga una cotización gratuita de seguro de auto'
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
                es: "Explore las opciones de cobertura"
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
                es: `Explore la cobertura de auto asequible`
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
        <HeadComponent title="Affordable Auto Coverage With Ai United Insurance"
            metaData="Ai United Insurance provides you with coverage options, benefits and discounts at a price you can afford." />
        <HorizontalBanner {...verticalBannerContent} />
        <AutoSubNav />
        <TextSection {...contentSection1} />
        <BorderBoxWithPicture {...contentSection2} />
        <TextSection {...contentSection3} />
        <CTAPicWText category="auto" />
        <TextSection {...contentSection4} />
        <TextSection {...contentSection5} />
        <TextSection {...contentSection6} />
        <Cards2 {...contentSection7} />
    </>;
}