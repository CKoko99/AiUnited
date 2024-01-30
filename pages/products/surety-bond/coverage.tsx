import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner"
import TextSection from "@/components/Content/TextSection"
import HeadComponent from "@/components/Head"
import PATHCONSTANTS from "constants/sitemap"
import HomeSubNav from "@/components/SubNavBar/products/home";
import HomeImg1 from "public/assets/images/products/home/home1.png"
import HomeImg2 from "public/assets/images/products/home/home2.png"
import BorderBoxWithPicture from "@/components/Content/BorderBoxWithPicture";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import CenterImage from "@/components/Content/CenterImage";
import HomeImg3 from "public/assets/images/products/home/furniture1.png";
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg1 from "public/assets/images/products/quote.png";
import Cards2 from "@/components/Content/Cards/Cards2";
import SuretyImg1 from "public/assets/images/products/surety/surety.png"
import SuretyImg2 from "public/assets/images/products/surety/surety2.png"
import SuretySubNav from "@/components/SubNavBar/products/surety";
import ThinkingImg from "public/assets/images/products/thinking.png";
const headContent = {
    title: 'Ai United Home Insurance Coverage Guide',
    metaData: `Dive into the intricacies of home insurance coverage with our comprehensive overview. Explore detailed policies, including property, liability, and personal belongings coverage. Uncover the nuances of deductible options, policy limits, and additional endorsements to customize protection for your unique needs.`,
}

const pageLinks = {
    contract: {
        link: `${PATHCONSTANTS.PRODUCTS.SURETY.COVERAGE}#Contract`, id: "Contract"
    },
    commercial: {
        link: `${PATHCONSTANTS.PRODUCTS.SURETY.COVERAGE}#Commercial`, id: "Commercial"
    },
    court: {
        link: `${PATHCONSTANTS.PRODUCTS.SURETY.COVERAGE}#Court`, id: "Court"
    },
}
const verticalBannerContent = {
    title: {
        en: `Bonds Unveiled: Navigating the World of Surety with Confidence`,
        es: "Fianzas reveladas: navegando por el mundo de la fianza con confianza",
    },
    img: {
        src: SuretyImg1,
        alt: "Home"
    }
}

const contentSection1 = {
    title: { en: "Surety Bonds Explained", es: "Fianzas explicadas" },
    subtitle: {
        en: `Surety bonds are a crucial component of the insurance industry, providing a financial guarantee that specific obligations will be met. Whether you’re a business owner, contractor, or individual seeking protection, understanding the various aspects of surety bonds is essential.`,
        es: `Las fianzas son un componente crucial de la industria del seguro, que proporciona una garantía financiera de que se cumplirán obligaciones específicas. Ya sea que sea propietario de un negocio, contratista o individuo que busca protección, es esencial comprender los diversos aspectos de las fianzas.`
    },
    alignSubtitle: "left",
}

const contentSection2 = {
    title: { en: "Different Types of Bonds", es: "Diferentes tipos de fianzas" },
    body: {
        en: [
            `1. LINK: [Contract Surety Bonds](${pageLinks.contract.link})`,
            `2. LINK: [Commercial Surety Bonds](${pageLinks.commercial.link})`,
            `3. LINK: [Court Surety Bonds](${pageLinks.court.link})`,
        ],
        es: [
            `1. LINK: [Fianzas de garantía de contrato](${pageLinks.contract.link})`,
            `2. LINK: [Fianzas de garantía comercial](${pageLinks.commercial.link})`,
            `3. LINK: [Fianzas de garantía judicial](${pageLinks.court.link})`,
        ],
    },
    img: {
        src: SuretyImg2,
        alt: "Bond"
    },
    alignBody: "left",
}

const contentSection3 = {
    title: {
        en: "Contract Surety Bonds",
        es: "Fianzas de garantía de contrato"
    },
    id: pageLinks.contract.id,
    subtitle: {
        en: [
            `Contract surety bonds are commonly utilized in the construction industry. These bonds ensure that contractors fulfill their contractual obligations as outlined in construction projects. `,
            `They provide financial protection to project owners (obligees) in case the contractor (principal) fails to complete the project or meet contract specifications.`
        ],
        es: [
            `Las fianzas de garantía de contrato se utilizan comúnmente en la industria de la construcción. Estas fianzas garantizan que los contratistas cumplan con sus obligaciones contractuales según lo establecido en los proyectos de construcción.`,
            `Brindan protección financiera a los propietarios de proyectos (obligados) en caso de que el contratista (principal) no complete el proyecto o cumpla con las especificaciones del contrato.`
        ]
    },
    alignSubtitle: "left",
    alignTitle: "left",
}

const contentSection4 = {
    title: {
        en: "Commercial Surety Bonds",
        es: "Fianzas de garantía comercial"
    },
    id: pageLinks.commercial.id,
    subtitle: {
        en: [
            `Commercial surety bonds encompass a diverse range of obligations outside of construction. Examples include license and permit bonds, which guarantee that businesses adhere to regulations, and fidelity bonds, which protect against employee dishonesty. `,
            `These bonds are essential for demonstrating financial responsibility and compliance in various industries.`
        ],
        es: [
            `Las fianzas de garantía comercial abarcan una amplia gama de obligaciones fuera de la construcción. Los ejemplos incluyen fianzas de licencia y permiso, que garantizan que las empresas cumplan con las regulaciones, y fianzas de fidelidad, que protegen contra la deshonestidad de los empleados.`,
            `Estas fianzas son esenciales para demostrar responsabilidad financiera y cumplimiento en diversas industrias.`
        ]
    },
    alignSubtitle: "left",
    alignTitle: "left",
}

const contentSection5 = {
    title: {
        en: "Court Surety Bonds",
        es: "Fianzas de garantía judicial"
    },
    id: pageLinks.court.id,
    subtitle: {
        en: [
            `Court surety bonds are required in legal proceedings to secure financial interests and ensure compliance with court decisions. They include appeal bonds, which allow a party to delay payment of a judgment during the appeals process. `,
            `These bonds provide a financial guarantee to the court (obligee) that the losing party (principal) will fulfill its legal obligations.`
        ],
        es: [
            `Las fianzas de garantía judicial son necesarias en los procedimientos legales para asegurar los intereses financieros y garantizar el cumplimiento de las decisiones judiciales. Incluyen fianzas de apelación, que permiten a una parte retrasar el pago de un fallo durante el proceso de apelación.`,
            `Estas fianzas brindan una garantía financiera al tribunal (obligado) de que la parte perdedora (principal) cumplirá con sus obligaciones legales.`
        ]
    },
    alignSubtitle: "left",
    alignTitle: "left",
}
const endCardsContent = {
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
        <BorderBoxWithPicture {...contentSection2} />
        <TextSection {...contentSection3} />
        <TextSection {...contentSection4} />
        <TextSection {...contentSection5} />
        <CTAPicWText category="surety" />
        <Cards2 {...endCardsContent} />
    </>
}