import BorderBoxWithPicture from "@/components/Content/BorderBoxWithPicture";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import AutoSubNav from "@/components/SubNavBar/products/auto";
import PATHCONSTANTS from "constants/sitemap";
import AutoImg1 from "public/assets/images/products/auto/suv.png";
import AutoImg2 from "public/assets/images/products/auto/street.png";
import CardImg1 from "public/assets/images/products/quote.png";
import CardImg2 from "public/assets/images/products/auto/card1.png";
import CardImg3 from "public/assets/images/products/auto/card2.png";
import Cards2 from "@/components/Content/Cards/Cards2";
import InjuryImg from "public/assets/images/products/auto/bodyinjury.png";
import CarCrashImg from "public/assets/images/products/auto/crash.png";
import BorderBoxContent from "@/components/Content/BorderBoxContent";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import HeadComponent from "@/components/Head";
import ArticleImg from "public/assets/images/products/article1.png";

const pageLinks = {
    liability: {
        link: `${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGE}#Liability-Insurance`,
        id: "Liability-Insurance"
    },
    collision: { id: "Collision-Coverage", link: `${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGE}#Collision-Coverage` },
    comprehensive: { id: "Comprehensive-Coverage", link: `${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGE}#Comprehensive-Coverage` },
    pip: { id: "Personal-Injury-Protection", link: `${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGE}#Personal-Injury-Protection` },
    umuim: { id: "Uninsured-UnderInsured-Coverage", link: `${PATHCONSTANTS.PRODUCTS.AUTO.COVERAGE}#Uninsured-UnderInsured-Coverage` },
}
const verticalBannerContent = {
    title: {
        en: "Types of Auto Insurance Coverage Demystified",
        es: "Tipos de cobertura de seguro de auto desmitificados"
    },
    img: {
        src: AutoImg1,
        alt: "Van"
    }
}

const contentSection1 = {
    title: {
        en: "Auto Coverages Explained",
        es: "Coberturas de auto explicadas"
    },
    subtitle: {
        en: `At Ai United, we believe in empowering our customers with the knowledge, making your journey on the road
        smoother and safer. Our comprehensive guide breaks down the intricacies of auto insurance coverage, providing 
        you with a roadmap to confidently choose the protection that suits your needs.`,
        es: `En Ai United, creemos en empoderar a nuestros clientes con el conocimiento, haciendo que su viaje en la
        carretera sea más fácil y seguro. Nuestra guía completa desglosa las complejidades de la cobertura del seguro
        de auto, brindándole una hoja de ruta para elegir con confianza la protección que se adapte a sus necesidades.`
    },
    alignSubtitle: "left",
}

const contentSection2 = {
    title: { en: "Different Types of Auto Insurance Coverage", es: "Diferentes tipos de cobertura de seguro de auto" },
    body: {
        en: [
            `1. LINK: [Liability Insurance](${pageLinks.liability.link})`,
            `2. LINK: [Collision Coverage](${pageLinks.collision.link})`,
            `3. LINK: [Comprehensive Coverage](${pageLinks.comprehensive.link})`,
            `4. LINK: [Personal Injury Protection](${pageLinks.pip.link})`,
            `4. LINK: [Uninsured/ Underinsured Motorist Coverage](${pageLinks.umuim.link})`,
        ],
        es: [
            `1. LINK: [Seguro de responsabilidad civil](${pageLinks.liability.link})`,
            `2. LINK: [Cobertura de colisión](${pageLinks.collision.link})`,
            `3. LINK: [Cobertura integral](${pageLinks.comprehensive.link})`,
            `4. LINK: [Protección contra lesiones personales](${pageLinks.pip.link})`,
            `4. LINK: [Cobertura de motorista sin seguro / con seguro insuficiente](${pageLinks.umuim.link})`,
        ]
    },
    img: {
        src: AutoImg2,
        alt: "Woman driving"
    },
    alignBody: "left",
}
const contentSection3 = {
    id: pageLinks.liability.id,
    title: {
        en: "Liability Insurance",
        es: "Seguro de responsabilidad civil"
    },
    subtitle: {
        en: `Liability coverage is akin to good karma on the road. If you unintentionally cause injuries to someone else or damage their property, this coverage steps in to manage the associated bills.`,
        es: `La cobertura de responsabilidad es similar al buen karma en la carretera. Si causa lesiones a alguien más o daña su propiedad sin intención, esta cobertura interviene para administrar las facturas asociadas.`
    },
    alignTitle: "left",
    alignSubtitle: "left",
}
const contentSection4 = {
    content: [
        {
            img: {
                src: InjuryImg,
                alt: "Injury"
            },
            title: {
                en: `Bodily Injury Liability`,
                es: "Responsabilidad por lesiones corporales"
            },
            body: {
                en: `Imagine you’re in an accident, and someone else is injured. This coverage steps in to help with their medical expenses and lost wages.`,
                es: `Imagínese que está en un accidente y otra persona resulta herida. Esta cobertura interviene para ayudar con sus gastos médicos y salarios perdidos.`
            }
        },
        {
            img: {
                src: CarCrashImg,
                alt: "Car Crash"
            },
            title: {
                en: `Property Damage Liability`,
                es: "Responsabilidad por daños a la propiedad"
            },
            body: {
                en: `Accidents happen, and this coverage ensures that if you damage someone else’s property, whether it’s a car or a fence, those costs are covered.`,
                es: `Los accidentes ocurren, y esta cobertura garantiza que si daña la propiedad de otra persona, ya sea un automóvil o una cerca, esos costos están cubiertos.`
            }
        },
    ]
}

const contentSection5 = {
    id: pageLinks.collision.id,
    title: {
        en: "Collision Coverage",
        es: "Cobertura de colisión"
    },
    subtitle: {
        en: `Collision coverage is the guardian of your vehicle in case of accidents. Whether it’s a minor fender bender or a major collision, this coverage steps in to handle the repair or replacement costs for your car. It provides a sense of security, knowing that your mode of transportation is protected, regardless of the circumstances surrounding the accident.`,
        es: `La cobertura de colisión es el guardián de su vehículo en caso de accidentes. Ya sea un pequeño choque o una colisión importante, esta cobertura interviene para manejar los costos de reparación o reemplazo de su automóvil. Proporciona una sensación de seguridad, sabiendo que su medio de transporte está protegido, independientemente de las circunstancias que rodean el accidente.`
    },
    alignSubtitle: "left",
    alignTitle: "left",
}

const contentSection6 = {
    id: pageLinks.comprehensive.id,
    title: {
        en: "Comprehensive Coverage",
        es: "Cobertura integral"
    },
    subtitle: {
        en: `Comprehensive coverage goes beyond accidents, addressing a broader range of potential risks. It acts as a shield against non-collision events like theft, vandalism, natural disasters, or even encounters with wildlife. With comprehensive coverage, you can navigate the uncertainties of daily life, confident that your vehicle is safeguarded from a variety of unexpected challenges.`,
        es: `La cobertura integral va más allá de los accidentes, abordando una gama más amplia de riesgos potenciales. Actúa como un escudo contra eventos sin colisión como robos, vandalismo, desastres naturales o incluso encuentros con la vida silvestre. Con la cobertura integral, puede navegar por las incertidumbres de la vida diaria, seguro de que su vehículo está protegido de una variedad de desafíos inesperados.`
    },
    alignSubtitle: "left", alignTitle: "left",
}
const contentSection7 = {}
const contentSection8 = {
    id: pageLinks.pip.id,
    title: {
        en: "Personal Injury Protection (PIP)",
        es: "Protección contra lesiones personales (PIP)"
    },
    subtitle: {
        en: [
            `Personal Injury Protection (PIP) goes a step further, extending coverage to medical expenses, lost wages and rehabilitation costs. It’s a comprehensive solution that aims to minimize the impact of an accident on your life beyond just immediate medical needs.`,
            `PIP reflects a commitment to supporting your recovery journey, acknowledging that accidents can have broader implications.`
        ],
        es: [
            `La protección contra lesiones personales (PIP) va un paso más allá, extendiendo la cobertura a los gastos médicos, salarios perdidos y costos de rehabilitación. Es una solución integral que tiene como objetivo minimizar el impacto de un accidente en su vida más allá de las necesidades médicas inmediatas.`,
            `PIP refleja un compromiso de apoyar su proceso de recuperación, reconociendo que los accidentes pueden tener implicaciones más amplias.`
        ]
    },
    alignSubtitle: "left", alignTitle: "left",
}
const contentSection9 = {
    id: pageLinks.umuim.id,
    title: {
        en: "Uninsured/ Underinsured Motorist Coverage",
        es: "Cobertura de motorista sin seguro / con seguro insuficiente"
    },
    subtitle: {
        en: [
            `This coverage ensures that you’re not left in the lurch when the other party involved in an accident lacks sufficient insurance coverage. Uninsured/Underinsured Motorist Coverage steps up to cover your medical expenses and property damage if the at-fault party is unable to do so.`,
            `It provides an added layer of protection, especially in scenarios where not everyone on the road is adequately insured.`,
        ],
        es: [
            `Esta cobertura garantiza que no se quede en la estacada cuando la otra parte involucrada en un accidente carece de cobertura de seguro suficiente. La cobertura de motorista sin seguro / con seguro insuficiente se encarga de cubrir sus gastos médicos y daños a la propiedad si la parte culpable no puede hacerlo.`,
            `Proporciona una capa adicional de protección, especialmente en escenarios donde no todos en la carretera están adecuadamente asegurados.`
        ]
    },
    alignSubtitle: "left", alignTitle: "left",

}
const contentSection10 = {
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

const contentSection11 = {
    content: [
        {
            img: {
                src: CardImg1,
                alt: "Computer"
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
                src: CardImg3,
                alt: "Discounts"
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
        },
        {
            img: {
                src: ArticleImg,
                alt: "Car Crash"
            },
            title: {
                en: "Explore Auto Insurance Articles",
                es: "Explore artículos de seguro de auto"
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
        <HeadComponent title={'Types of Auto Insurance Coverage'}
            metaData={'Our comprehensive guide breaks down the details of auto insurance coverage, providing you with a roadmap to confidently choose the protection that suits you.'}
        />
        <HorizontalBanner {...verticalBannerContent} />
        <AutoSubNav />
        <TextSection {...contentSection1} />
        <BorderBoxWithPicture {...contentSection2} />
        <TextSection {...contentSection3} />
        <BorderBoxContent {...contentSection4} />
        <TextSection {...contentSection5} />
        <TextSection {...contentSection6} />
        <CTAPicWText category="auto" />
        <TextSection {...contentSection8} />
        <TextSection {...contentSection9} />
        <TextSection {...contentSection10} />
        <Cards2 {...contentSection11} />
    </>
}
