import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner"
import TextSection from "@/components/Content/TextSection"
import HeadComponent from "@/components/Head"
import PATHCONSTANTS from "constants/sitemap"
import HomeSubNav from "@/components/SubNavBar/products/home";
import AutoImg1 from "public/assets/images/products/auto/suv.png";
import AutoImg2 from "public/assets/images/products/auto/street.png";
import BorderBoxWithPicture from "@/components/Content/BorderBoxWithPicture";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import CenterImage from "@/components/Content/CenterImage";
import HomeImg3 from "public/assets/images/products/home/furniture1.png";
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg1 from "public/assets/images/products/quote.png";
import ThinkingImg from "public/assets/images/products/thinking.png";
import Cards2 from "@/components/Content/Cards/Cards2";
import SR22SubNav from "@/components/SubNavBar/products/sr22";
import CTAText from "@/components/PrefilledCTA/CTAText";

const headContent = {
    title: 'Ai United Home Insurance Coverage Guide',
    metaData: `Dive into the intricacies of home insurance coverage with our comprehensive overview. Explore detailed policies, including property, liability, and personal belongings coverage. Uncover the nuances of deductible options, policy limits, and additional endorsements to customize protection for your unique needs.`,
}

const pageLinks = {
    why: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Why-Do-I-Need-Home-Insurance`, id: "Why-Do-I-Need-Home-Insurance"
    },
    liability: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Liability`, id: "Liability"
    },
    nonOwner: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Non-Owner-Occupied-Home-Insurance`, id: "Non-Owner-Occupied-Home-Insurance"
    },
    fullCoverage: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#Full-Coverage-Home-Insurance`, id: "Full-Coverage-Home-Insurance"
    },
    highRisk: {
        link: `${PATHCONSTANTS.PRODUCTS.HOME.COVERAGE}#High-Risk-Home-Insurance`, id: "High-Risk-Home-Insurance"
    },

}
const verticalBannerContent = {
    title: {
        en: "Understanding SR-22 Auto Insurance Coverage",
        es: "Comprender la cobertura de seguro de automóvil SR-22",
    },
    img: {
        src: AutoImg1,
        alt: "SUV"
    }
}

const contentSection1 = {
    title: {
        en: `SR-22 Auto Coverages Explained`,
        es: `Coberturas de automóviles SR-22 explicadas`,
    },
    subtitle: {
        en: `SR-22 is not actually an insurance policy but rather a certificate of financial responsibility that proves you have the required amount of liability coverage mandated by your state. It’s often required for individuals who have been involved in serious traffic violations, such as DUI/DWI, driving without insurance, or multiple at-fault accidents.`,
        es: `SR-22 no es realmente una póliza de seguro, sino más bien un certificado de responsabilidad financiera que demuestra que tiene la cantidad requerida de cobertura de responsabilidad exigida por su estado. A menudo se requiere para personas que han estado involucradas en violaciones graves de tráfico, como DUI / DWI, conducir sin seguro o múltiples accidentes con culpa.`,
    },
    alignSubtitle: "left",
}

const contentSection2 = {
    title: { en: "Different Types of Coverage", es: "Diferentes tipos de cobertura" },
    body: {
        en: [
            `1. LINK: [Why Do You Need SR-22 Insurance](${pageLinks.why.link})`,
            `2. LINK: [Liability Coverage](${pageLinks.liability.link})`,
            `3. LINK: [Non-Owner SR-22](${pageLinks.nonOwner.link})`,
            `4. LINK: [Full Coverage](${pageLinks.fullCoverage.link})`,
            `5. LINK: [High-Risk SR-22](${pageLinks.highRisk.link})`,
        ],
        es: [
            `1. LINK: [¿Por qué necesita un seguro SR-22?](${pageLinks.why.link})`,
            `2. LINK: [Cobertura de responsabilidad](${pageLinks.liability.link})`,
            `3. LINK: [SR-22 para no propietarios](${pageLinks.nonOwner.link})`,
            `4. LINK: [Cobertura completa](${pageLinks.fullCoverage.link})`,
            `5. LINK: [SR-22 de alto riesgo](${pageLinks.highRisk.link})`,
        ]
    },
    img: {
        src: AutoImg2,
        alt: "Home Furniture"
    },
    alignBody: "left",
}

const contentSection3 = {
    title: {
        en: `Why Do You Need SR-22 Insurance`,
        es: `¿Por qué necesita un seguro SR-22?`,
    },
    id: pageLinks.why.id,
    subtitle: {
        en: `The need for SR-22 typically arises when you’ve had your driver’s license suspended or revoked due to certain violations. It serves as proof to the state that you have adequate insurance coverage, allowing you to regain your driving privileges.`,
        es: `La necesidad de SR-22 generalmente surge cuando ha tenido su licencia de conducir suspendida o revocada debido a ciertas violaciones. Sirve como prueba para el estado de que tiene una cobertura de seguro adecuada, lo que le permite recuperar sus privilegios de conducción.`,
    },
    alignSubtitle: "left",
    alignTitle: "left",
}

const contentSection4 = {
    title: {
        en: "Liability Coverage",
        es: "Cobertura de responsabilidad",
    },
    id: pageLinks.liability.id,
    subtitle: {
        en: `Liability coverage is the minimum requirement for SR-22 filings. It helps cover the costs associated with injuries or property damage you may cause in an accident. State-specific minimums vary, so it’s crucial to meet or exceed these requirements.`,
        es: `La cobertura de responsabilidad es el requisito mínimo para los archivos SR-22. Ayuda a cubrir los costos asociados con lesiones o daños a la propiedad que pueda causar en un accidente. Los mínimos específicos del estado varían, por lo que es crucial cumplir o superar estos requisitos.`,
    },
    alignSubtitle: "left",
    alignTitle: "left",
}

const contentSection5 = {
    title: {
        en: `Non-Owner SR-22`,
        es: `SR-22 para no propietarios`,
    },
    id: pageLinks.nonOwner.id,
    subtitle: {
        en: `Non-Owner SR-22 insurance is designed for individuals who do not own a vehicle but still need to meet SR-22 requirements. This policy provides liability coverage when driving a borrowed or rented car. It ensures that the driver has the necessary financial responsibility in the event of an accident, even if they don’t own a vehicle themselves.`,
        es: `El seguro SR-22 para no propietarios está diseñado para personas que no son propietarias de un vehículo pero que aún necesitan cumplir con los requisitos de SR-22. Esta póliza proporciona cobertura de responsabilidad cuando conduce un automóvil prestado o alquilado. Asegura que el conductor tenga la responsabilidad financiera necesaria en caso de un accidente, incluso si no son propietarios de un vehículo.`,
    },
    alignSubtitle: "left",
    alignTitle: "left",
}

const contentSection6 = {
    title: {
        en: `Full Coverage`,
        es: `Cobertura completa`,
    },
    id: pageLinks.fullCoverage.id,
    subtitle: {
        en: `Full coverage is a comprehensive auto insurance policy that includes both liability and physical damage coverage. In addition to covering damages to others, it protects your own vehicle against theft, vandalism, or accidents. Full coverage typically includes collision and comprehensive coverage, providing a higher level of financial protection for the policyholder.`,
        es: `La cobertura total es una póliza de seguro de automóvil integral que incluye cobertura de responsabilidad y daños físicos. Además de cubrir los daños a terceros, protege su propio vehículo contra robos, vandalismo o accidentes. La cobertura total generalmente incluye cobertura de colisión y cobertura integral, proporcionando un nivel más alto de protección financiera para el titular de la póliza.`,
    },
    alignSubtitle: "left",
    alignTitle: "left",
}

const contentSection7 = {
    title: {
        en: `High-Risk SR-22`,
        es: `SR-22 de alto riesgo`,
    },
    id: pageLinks.highRisk.id,
    subtitle: {
        en: `High-risk SR-22 insurance is tailored for individuals considered high-risk by insurance companies due to factors like a history of DUI/DWI, multiple traffic violations, or lapses in coverage. This specialized SR-22 policy provides the necessary liability coverage mandated by the state, allowing high-risk drivers to meet legal requirements and reinstate their driving privileges. Premiums for high-risk SR-22 coverage are often higher due to the increased risk associated with the driver’s history.`,
        es: `El seguro SR-22 de alto riesgo está diseñado para personas consideradas de alto riesgo por las compañías de seguros debido a factores como un historial de DUI / DWI, múltiples violaciones de tráfico o lapsos en la cobertura. Esta póliza SR-22 especializada proporciona la cobertura de responsabilidad necesaria exigida por el estado, lo que permite a los conductores de alto riesgo cumplir con los requisitos legales y restablecer sus privilegios de conducción. Las primas para la cobertura SR-22 de alto riesgo suelen ser más altas debido al mayor riesgo asociado con el historial del conductor.`,
    },
    alignSubtitle: "left",
    alignTitle: "left",
}

const endCardsContent = {
    content: [
        {
            img: {
                src: CardImg1,
                alt: "Computer"
            },
            title: {
                en: 'Get A Free SR-22 Insurance Quote',
                es: 'Obtenga una cotización gratuita de seguro SR-22'
            },
            body: {
                en: `Get a free quote today and see how much you can save.`,
                es: `Obtenga una cotización gratuita hoy y vea cuánto puede ahorrar.`
            },
            link: PATHCONSTANTS.QUOTES.SR22.FORM
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
                en: `Find answers to your questions about Motorcycle Insurance.`,
                es: `Encuentre respuestas a sus preguntas sobre el seguro de motocicleta.`
            },
            link: PATHCONSTANTS.PRODUCTS.SR22.FAQ
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
        <SR22SubNav />
        <TextSection {...contentSection1} />
        <BorderBoxWithPicture {...contentSection2} />
        <TextSection {...contentSection3} />
        <CTAPicWText category="sr22" />
        <TextSection {...contentSection4} />
        <TextSection {...contentSection5} />
        <TextSection {...contentSection6} />
        <CTAText contained category="sr22" />
        <Cards2 {...endCardsContent} />
    </>
}