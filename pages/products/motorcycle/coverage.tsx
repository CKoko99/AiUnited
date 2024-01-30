import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner"
import TextSection from "@/components/Content/TextSection"
import HeadComponent from "@/components/Head"
import PATHCONSTANTS from "constants/sitemap"
import MotorcycleImg1 from "public/assets/images/products/motorcycle/motorcycle1.png"
import MotorcycleImg2 from "public/assets/images/products/motorcycle/motorcycle4.png"
import MotorcycleImg3 from "public/assets/images/products/motorcycle/motorcycle3.png"
import MexicoImg2 from "public/assets/images/products/mexico/mexico2.png"
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg1 from "public/assets/images/products/quote.png";
import CardImg2 from "public/assets/images/products/home/livingroom.png";
import Cards2 from "@/components/Content/Cards/Cards2";
import MexicoSubNav from "@/components/SubNavBar/products/mexico";
import CTAText from "@/components/PrefilledCTA/CTAText"
import BorderBoxWithPicture from "@/components/Content/BorderBoxWithPicture"
import ThinkingImg from "public/assets/images/products/thinking.png";
import MotorcycleSubNav from "@/components/SubNavBar/products/motorcycle"
import CenterImage from "@/components/Content/CenterImage"

const headContent = {
    title: 'Ai United Mexico Insurance Coverage Guide',
    metaData: `Dive into the intricacies of Mexico tourist auto insurance coverage with our comprehensive overview.`,
}

const pageLinks = {


    liabilityCoverage: {
        link: `${PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE}#Liability-Coverage`, id: "Liability-Coverage"
    },
    collisionCoverage: {
        link: `${PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE}#Collision-Coverage`, id: "Collision-Coverage"
    },
    ComprehensizeCoverage: {
        link: `${PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE}#Comprehensive-Coverage`, id: "Comprehensive-Coverage"
    },
    uiuimCoverage: {
        link: `${PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE}#UIUIM-Coverage`, id: "UIUIM-Coverage"
    },
    medicalCoverage: {
        link: `${PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE}#Medical-Coverage`, id: "Medical-Coverage"
    },
    additionalCoverage: {
        link: `${PATHCONSTANTS.PRODUCTS.MEXICO.COVERAGE}#Additional-Coverage`, id: "Additional-Coverage"
    },
}

const verticalBannerContent = {
    title: {
        en: "Motorcycle Insurance Essentials: A Comprehensive Guide",
        es: "Elementos esenciales del seguro de motocicleta: una guía completa"
    },
    img: {
        src: MotorcycleImg1,
        alt: "Motorcycle Rider"
    }
}

const contentSection1 = {
    title: {
        en: `Motorcycle Coverages Explained`,
        es: `Coberturas de motocicleta explicadas`
    },
    subtitle: {
        en: `Whether you’re a seasoned rider or a beginner, it’s crucial to have the right insurance to protect yourself and your bike. In this guide, we’ll break down the different aspects of motorcycle insurance, covering both exclusive elements tailored to motorcycles and those shared with typical auto insurance.`,
        es: `Ya sea que sea un motociclista experimentado o un principiante, es crucial tener el seguro adecuado para protegerse a usted y a su motocicleta. En esta guía, analizaremos los diferentes aspectos del seguro de motocicleta, cubriendo tanto los elementos exclusivos adaptados a las motocicletas como los compartidos con el seguro de automóvil típico.`
    },
    alignSubtitle: "left",
}


const contentSection2 = {
    title: { en: "Different Types of Coverage", es: "Diferentes tipos de cobertura" },
    body: {
        en: [
            `1. LINK: [Liability Coverage](${pageLinks.liabilityCoverage.link})`,
            `2. LINK: [Collision Coverage](${pageLinks.collisionCoverage.link})`,
            `3. LINK: [Comprehensive Coverage](${pageLinks.ComprehensizeCoverage.link})`,
            `4. LINK: [Uninsured/Underinsured Motorist Coverage](${pageLinks.uiuimCoverage.link})`,
            `5. LINK: [Medical Coverage](${pageLinks.medicalCoverage.link})`,
            `6. LINK: [Additional Coverage](${pageLinks.additionalCoverage.link})`,
        ],
        es: [
            `1. LINK: [Cobertura de responsabilidad](${pageLinks.liabilityCoverage.link})`,
            `2. LINK: [Cobertura de colisión](${pageLinks.collisionCoverage.link})`,
            `3. LINK: [Cobertura integral](${pageLinks.ComprehensizeCoverage.link})`,
            `4. LINK: [Cobertura de conductor sin seguro / con seguro insuficiente](${pageLinks.uiuimCoverage.link})`,
            `5. LINK: [Cobertura médica](${pageLinks.medicalCoverage.link})`,
            `6. LINK: [Cobertura adicional](${pageLinks.additionalCoverage.link})`,
        ]
    },
    img: {
        src: MotorcycleImg2,
        alt: "Home Furniture"
    },
    alignBody: "left",
}

const contentSection3 = {
    title: {
        en: "Liability Coverage",
        es: "Cobertura de responsabilidad"
    },
    id: pageLinks.liabilityCoverage.id,
    subtitle: {
        en: [
            `Liability coverage is fundamental, providing financial protection if you’re at fault in an accident, covering the other party’s expenses. It’s a legal requirement and ensures you’re financially responsible on the road.`
        ],
        es: [
            `La cobertura de responsabilidad es fundamental, brindando protección financiera si usted es culpable de un accidente, cubriendo los gastos de la otra parte. Es un requisito legal y garantiza que usted sea financieramente responsable en la carretera.`
        ]
    },
    alignTitle: "left",
    alignSubtitle: "left",
}

const contentSection4 = {
    title: {
        en: "Collision Coverage",
        es: "Cobertura de colisión"
    },
    id: pageLinks.collisionCoverage.id,
    subtitle: {
        en: [
            `Covering repair or replacement costs in case of a collision, this component ensures your motorcycle is protected from damage caused by accidents with other vehicles or objects.`
        ],
        es: [
            `Cubriendo los costos de reparación o reemplazo en caso de colisión, este componente garantiza que su motocicleta esté protegida contra daños causados ​​por accidentes con otros vehículos u objetos.`
        ]
    },
    alignTitle: "left",
    alignSubtitle: "left",
}

const contentSection5 = {
    title: {
        en: `Comprenhensive Coverage`,
        es: `Cobertura integral`
    },
    id: pageLinks.ComprehensizeCoverage.id,
    subtitle: {
        en: [
            `Beyond collisions, comprehensive coverage safeguards your bike from non-collision events like theft, vandalism, fire, and natural disasters, offering comprehensive protection.`
        ],
        es: [
            `Además de las colisiones, la cobertura integral protege su motocicleta de eventos que no sean de colisión, como robo, vandalismo, incendio y desastres naturales, ofreciendo una protección integral.`
        ]
    },
    alignTitle: "left",
    alignSubtitle: "left",
}

const contentSection6 = {
    title: {
        en: `Uninsured/Underinsured Motorist Coverage`,
        es: `Cobertura de conductor sin seguro / con seguro insuficiente`
    },
    id: pageLinks.uiuimCoverage.id,
    subtitle: {
        en: [
            `Critical for riders, this coverage steps in if you’re in an accident with a driver who lacks insurance or has insufficient coverage, ensuring you’re not left with the bills.`
        ],
        es: [
            `Crítico para los motociclistas, esta cobertura interviene si tiene un accidente con un conductor que no tiene seguro o tiene una cobertura insuficiente, asegurando que no se quede con las facturas.`
        ]
    },
    alignTitle: "left",
    alignSubtitle: "left",
}

const centerImage1 = {
    img: { src: MotorcycleImg3, alt: "Motorcycle Riders" },
    subtitle: {
        en: `Choosing the right motorcycle insurance is crucial for a safe and enjoyable riding experience. Evaluate your needs, considering the unique aspects of motorcycle insurance, and ensure you have comprehensive coverage that suits your lifestyle. Ride safely!`,
        es: `Elegir el seguro de motocicleta adecuado es crucial para una experiencia de conducción segura y agradable. Evalúe sus necesidades, considere los aspectos únicos del seguro de motocicleta y asegúrese de tener una cobertura integral que se adapte a su estilo de vida. ¡Conduce con seguridad!`
    },

}

const contentSection7 = {
    title: {
        en: `Medical Coverage`,
        es: `Cobertura médica`
    },
    subtitle: {
        en: [`Medical coverage is crucial, providing financial assistance for your own medical expenses resulting from an accident, helping cover costs like hospital bills and rehabilitation.`],
        es: [`La cobertura médica es crucial, brindando asistencia financiera para sus propios gastos médicos resultantes de un accidente, ayudando a cubrir costos como facturas de hospitalización y rehabilitación.`]
    },
    alignTitle: "left",
    alignSubtitle: "left",
}


const contentSection8 = {
    title: {
        en: `Additional Motorcycle Coverages`,
        es: `Coberturas adicionales de motocicleta`
    },
    subtitle: {
        en: [
            `Protect personal belongings on your bike with Carried Contents coverage, encompassing items like phones, camping gear, and hunting equipment in the event of damage due to a covered loss.`,
            `Accessories and Custom Parts/Equipment (CPE) coverage ensures your bike’s accessories and custom parts/equipment are protected, including modifications that enhance your motorcycle, offering comprehensive coverage for your unique setup.`,
            `Providing peace of mind, Roadside Assistance and Trip Interruption coverage includes roadside assistance and trip interruption, compensating for lodging, transportation, and meals if your motorcycle breaks down during a trip.`
        ],
        es: [
            `Proteja los artículos personales de su motocicleta con la cobertura de contenido transportado, que abarca artículos como teléfonos, equipo de campamento y equipo de caza en caso de daños debido a una pérdida cubierta.`,
            `La cobertura de accesorios y piezas / equipos personalizados (CPE) garantiza que los accesorios de su motocicleta y las piezas / equipos personalizados estén protegidos, incluidas las modificaciones que mejoran su motocicleta, ofreciendo una cobertura integral para su configuración única.`,
            `Brindando tranquilidad, la cobertura de asistencia en carretera e interrupción de viaje incluye asistencia en carretera e interrupción de viaje, compensando el alojamiento, el transporte y las comidas si su motocicleta se descompone durante un viaje.`
        ]
    },
    alignTitle: "left",
    alignSubtitle: "left",
}
const endCardsContent = {
    content: [
        {
            img: {
                src: CardImg1,
                alt: "Computer"
            },
            title: {
                en: 'Get A Free Motorcycle Insurance Quote',
                es: 'Obtenga una cotización gratuita de seguro de motocicleta'
            },
            body: {
                en: `Get a free quote today and see how much you can save.`,
                es: `Obtenga una cotización gratuita hoy y vea cuánto puede ahorrar.`
            },
            link: PATHCONSTANTS.QUOTES.MOTORCYCLE.FORM
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
            link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.FAQ
        },
        {
            img: {
                src: ArticlesImg,
                alt: "Blog Articles"
            },
            title: {
                en: "Explore Motorcycle Insurance Articles",
                es: "Explore artículos de seguro de motocicleta"
            },
            body: {
                en: `Learn more about motorcycle insurance and how to protect yourself.`,
                es: `Aprenda más sobre el seguro de motocicleta y cómo protegerse.`
            },
            link: PATHCONSTANTS.ARTICLES.INDEX
        },
    ]
}
export default function () {
    return <>
        <HeadComponent {...headContent} />
        <HorizontalBanner {...verticalBannerContent} />
        <MotorcycleSubNav />
        <TextSection {...contentSection1} />
        <BorderBoxWithPicture {...contentSection2} />
        <TextSection {...contentSection3} />
        <TextSection {...contentSection4} />
        <TextSection {...contentSection5} />
        <TextSection {...contentSection6} />
        <CenterImage {...centerImage1} />
        <TextSection {...contentSection7} />
        <TextSection {...contentSection8} />
        <CTAText contained category="motorcycle" />
        <Cards2 {...endCardsContent} />
    </>
}