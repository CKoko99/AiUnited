import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import HeadComponent from "@/components/Head";
import PATHCONSTANTS from "constants/sitemap";
import HomeSubNav from "@/components/SubNavBar/products/home";
import RenterImg1 from "public/assets/images/products/renters/renters1.png";
import RenterImg2 from "public/assets/images/products/home/home2.png";
import BorderBoxWithPicture from "@/components/Content/BorderBoxWithPicture";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import CenterImage from "@/components/Content/CenterImage";
import HomeImg3 from "public/assets/images/products/home/furniture1.png";
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg1 from "public/assets/images/products/discount.png";
import CardImg2 from "public/assets/images/products/home/livingroom.png";
import Cards2 from "@/components/Content/Cards/Cards2";
import RenterSubNav from "@/components/SubNavBar/products/renter";
import ThinkingImg from "public/assets/images/products/thinking.png";
const headContent = {
    title: "Ai United Renters Insurance Coverage",
    metaData: `Dive into the details of renters insurance coverage with our guide. Explore detailed policies, including property, liability, and personal belongings coverage.`,
};

const pageLinks = {
    personalProperty: {
        link: `${PATHCONSTANTS.PRODUCTS.RENTER.COVERAGE}#Personal-Property`,
        id: "Personal-Property",
    },
    liability: {
        link: `${PATHCONSTANTS.PRODUCTS.RENTER.COVERAGE}#Liability`,
        id: "Liability",
    },
    lossOfUse: {
        link: `${PATHCONSTANTS.PRODUCTS.RENTER.COVERAGE}#Loss-of-Use`,
        id: "Loss-of-Use",
    },
};
const verticalBannerContent = {
    title: {
        en: "Types of Renters  Insurance Coverage Demystified",
        es: "Tipos de cobertura de seguro de inquilinos desmitificados",
    },
    img: {
        src: RenterImg1,
        alt: "Home",
    },
};
const contentSection1 = {
    title: {
        en: `Renters Coverages Explained`,
        es: `Coberturas de inquilinos explicadas`,
    },
    subtitle: {
        en: `Welcome to our comprehensive guide on renters insurance coverage! Renters insurance is a crucial financial tool that provides protection and peace of mind for tenants. Whether you’re renting an apartment, house, or condo, understanding the various aspects of renters insurance is essential for safeguarding your belongings and personal liability.`,
        es: `¡Bienvenido a nuestra guía completa sobre la cobertura de seguro de inquilinos! El seguro de inquilinos es una herramienta financiera crucial que brinda protección y tranquilidad a los inquilinos. Ya sea que esté alquilando un apartamento, una casa o un condominio, comprender los diversos aspectos del seguro de inquilinos es esencial para proteger sus pertenencias y su responsabilidad personal.`,
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
            `1. LINK: [Personal Property Coverage](${pageLinks.personalProperty.link})`,
            `2. LINK: [Liability Coverage](${pageLinks.liability.link})`,
            `3. LINK: [Loss of Use Coverage](${pageLinks.lossOfUse.link})`,
        ],
        es: [
            `1. LINK: [Propiedad personal](${pageLinks.personalProperty.link})`,
            `2. LINK: [Responsabilidad](${pageLinks.liability.link})`,
            `3. LINK: [Pérdida de uso](${pageLinks.lossOfUse.link})`,
        ],
    },
    img: {
        src: RenterImg2,
        alt: "Home Furniture",
    },
    alignBody: "left" as const,
};

const contentSection3 = {
    title: {
        en: `Personal Property Coverage`,
        es: `Cobertura de propiedad personal`,
    },
    id: pageLinks.personalProperty.id,
    subtitle: {
        en: [
            `Renters insurance typically includes coverage for your personal belongings, such as furniture, electronics, clothing, and more. This protection extends to incidents like theft, fire, vandalism, and certain natural disasters. `,
            `It’s important to create an inventory of your possessions to determine the appropriate coverage limit.`,
        ],
        es: [
            `El seguro de inquilinos generalmente incluye cobertura para sus pertenencias personales, como muebles, electrónica, ropa y más. Esta protección se extiende a incidentes como robo, incendio, vandalismo y ciertos desastres naturales.`,
            `Es importante crear un inventario de sus posesiones para determinar el límite de cobertura adecuado.`,
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
    id: pageLinks.liability.id,
    subtitle: {
        en: `In addition to protecting your belongings, renters insurance often includes liability coverage. This can help cover legal and medical expenses if someone is injured in your rented space, and you are found responsible. It’s a crucial component that adds an extra layer of financial security.`,
        es: `Además de proteger sus pertenencias, el seguro de inquilinos a menudo incluye cobertura de responsabilidad. Esto puede ayudar a cubrir los gastos legales y médicos si alguien resulta herido en su espacio alquilado y usted es considerado responsable. Es un componente crucial que agrega una capa adicional de seguridad financiera.`,
    },
    alignTitle: "left",
    alignSubtitle: "left",
};

const contentSection5 = {
    title: {
        en: `Loss of Use Coverage`,
        es: `Cobertura de pérdida de uso`,
    },
    id: pageLinks.lossOfUse.id,
    subtitle: {
        en: [
            `If your rented property becomes uninhabitable due to a covered event, renters insurance may cover additional living expenses. This can include costs for temporary accommodation, meals, and other necessary expenses while your home is being repaired or rebuilt.`,
            `This is also known as Additional Living Expenses (ALE).`,
        ],
        es: [
            `Si su propiedad alquilada se vuelve inhabitable debido a un evento cubierto, el seguro de inquilinos puede cubrir gastos de vida adicionales. Esto puede incluir costos de alojamiento temporal, comidas y otros gastos necesarios mientras su hogar está siendo reparado o reconstruido.`,
            `También se conoce como Gastos de vida adicionales (ALE).`,
        ],
    },
    alignTitle: "left",
    alignSubtitle: "left",
};

const endCardsContent = {
    content: [
        {
            img: {
                src: CardImg2,
                alt: "Living Room",
            },
            title: {
                en: "Get A Free Renters Insurance Quote",
                es: "Obtenga una cotización gratuita de seguro de inquilinos",
            },
            body: {
                en: `Get a free quote today and see how much you can save.`,
                es: `Obtenga una cotización gratuita hoy y vea cuánto puede ahorrar.`,
            },
            link: PATHCONSTANTS.QUOTES.RENTER.FORM,
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
            link: PATHCONSTANTS.PRODUCTS.RENTER.FAQ,
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
            <RenterSubNav />
            <TextSection {...contentSection1} />
            <BorderBoxWithPicture {...contentSection2} />
            <TextSection {...contentSection3} />
            <TextSection {...contentSection4} />
            <CTAPicWText category="renters" />
            <TextSection {...contentSection5} />
            <Cards2 {...endCardsContent} />
        </>
    );
}
