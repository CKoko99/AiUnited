import FAQSection from "@/components/Content/FAQSection";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import HeadComponent from "@/components/Head";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import HomeSubNav from "@/components/SubNavBar/products/home";
import MotorcycleSubNav from "@/components/SubNavBar/products/motorcycle";
import PATHCONSTANTS from "constants/sitemap";
import MotorcycleImg1 from "public/assets/images/products/motorcycle/motorcycle1.png";

const headContent = {
    title: "Motorcycle Insurance Frequently Asked Questions",
    metaData:
        "Learn more about motorcycle insurance and get answers to frequently asked questions about coverage, requirements, and more.",
};
const verticalBannerContent = {
    title: {
        en: "Frequency Asked Questions About Motorcycle Insurance",
        es: "Preguntas frecuentes sobre el seguro de motocicleta",
    },
    img: {
        src: MotorcycleImg1,
        alt: "Motorcycle Rider",
    },
};

const contentSection1 = {
    title: {
        en: `Frequently Asked Motorcycle Insurance Questions`,
        es: `Preguntas frecuentes sobre el seguro de motocicleta`,
    },
    subtitle: {
        en: `We're here to help you understand every aspect of motorcycle insurance. If your question isn't 
    answered below, don't hesitate to LINK: [contact us!](${PATHCONSTANTS.ABOUT.CONTACT})`,
        es: `Estamos aquí para ayudarlo a comprender todos los aspectos del seguro de motocicleta. Si su pregunta no está
    respondida a continuación, no dude en LINK: [contáctenos!](${PATHCONSTANTS.ABOUT.CONTACT})`,
    },
};

const contentSection2 = {
    content: [
        {
            title: {
                en: `What does motorcycle insurance cover?`,
                es: `¿Qué cubre el seguro de motocicleta?`,
            },
            body: {
                en: `Motorcycle insurance typically covers damage or loss to your bike caused by accidents, theft, vandalism, and certain natural disasters. It may also include liability coverage for injuries or property damage you cause to others while riding.`,
                es: `El seguro de motocicleta generalmente cubre el daño o la pérdida de su motocicleta causado por accidentes, robos, vandalismo y ciertos desastres naturales. También puede incluir cobertura de responsabilidad por lesiones o daños a la propiedad que cause a otros mientras conduce.`,
            },
        },
        {
            title: {
                en: `Do I need motorcycle insurance?`,
                es: `¿Necesito seguro de motocicleta?`,
            },
            body: {
                en: `Yes, motorcycle insurance is usually required by law in most states. Even if it's not mandated, having insurance protects you financially in case of accidents, theft, or other unexpected events.`,
                es: `Sí, generalmente se requiere seguro de motocicleta por ley en la mayoría de los estados. Incluso si no está obligado, tener un seguro lo protege financieramente en caso de accidentes, robos u otros eventos inesperados.`,
            },
        },
        {
            title: {
                en: `How much motorcycle insurance coverage do I need?`,
                es: `¿Cuánta cobertura de seguro de motocicleta necesito?`,
            },
            body: {
                en: `The amount of coverage you need depends on factors like the value of your motorcycle, your riding habits, and your state's minimum insurance requirements. It's essential to have sufficient coverage to protect yourself and your assets.`,
                es: `La cantidad de cobertura que necesita depende de factores como el valor de su motocicleta, sus hábitos de conducción y los requisitos mínimos de seguro de su estado. Es esencial tener una cobertura suficiente para protegerse a sí mismo y a sus activos.`,
            },
        },
        {
            title: {
                en: `What factors affect the cost of motorcycle insurance?`,
                es: `¿Qué factores afectan el costo del seguro de motocicleta?`,
            },
            body: {
                en: `Similar to car insurance, the cost of motorcycle insurance is influenced by factors such as your age, riding experience, the type of bike you own, where you live, your driving record, and the coverage options you choose.`,
                es: `Al igual que el seguro de automóvil, el costo del seguro de motocicleta está influenciado por factores como su edad, experiencia de conducción, el tipo de motocicleta que posee, dónde vive, su historial de manejo y las opciones de cobertura que elija.`,
            },
        },
        {
            title: {
                en: `Does motorcycle insurance cover passengers?`,
                es: `¿El seguro de motocicleta cubre a los pasajeros?`,
            },
            body: {
                en: `Yes, most motorcycle insurance policies include coverage for passengers. However, the extent of coverage may vary depending on the policy and insurer.`,
                es: `Sí, la mayoría de las pólizas de seguro de motocicleta incluyen cobertura para pasajeros. Sin embargo, el alcance de la cobertura puede variar según la póliza y el asegurador.`,
            },
        },
        {
            title: {
                en: `Are there discounts available for motorcycle insurance?`,
                es: `¿Hay descuentos disponibles para el seguro de motocicleta?`,
            },
            body: {
                en: `Yes, many insurers offer discounts for factors like completing a motorcycle safety course, having a clean driving record, bundling multiple policies, belonging to certain organizations, or installing anti-theft devices on your bike.`,
                es: `Sí, muchos aseguradores ofrecen descuentos por factores como completar un curso de seguridad en motocicleta, tener un historial de manejo limpio, agrupar varias pólizas, pertenecer a ciertas organizaciones o instalar dispositivos antirrobo en su motocicleta.`,
            },
        },
        {
            title: {
                en: `Does motorcycle insurance cover customizations or accessories?`,
                es: `¿El seguro de motocicleta cubre personalizaciones o accesorios?`,
            },
            body: {
                en: `Some motorcycle insurance policies offer coverage for custom parts, accessories, and modifications. However, you may need to purchase additional coverage or add endorsements to your policy to fully protect these items.`,
                es: `Algunas pólizas de seguro de motocicleta ofrecen cobertura para piezas personalizadas, accesorios y modificaciones. Sin embargo, es posible que deba comprar cobertura adicional o agregar avales a su póliza para proteger completamente estos artículos.`,
            },
        },
        {
            title: {
                en: `Can I insure multiple motorcycles on the same policy?`,
                es: `¿Puedo asegurar varias motocicletas en la misma póliza?`,
            },
            body: {
                en: `Yes, many insurance companies allow you to insure multiple motorcycles under the same policy, which can often result in savings compared to insuring each bike separately.`,
                es: `Sí, muchas compañías de seguros le permiten asegurar varias motocicletas bajo la misma póliza, lo que a menudo puede resultar en ahorros en comparación con asegurar cada motocicleta por separado.`,
            },
        },
        {
            title: {
                en: `Does motorcycle insurance cover off-road or recreational vehicles?`,
                es: `¿El seguro de motocicleta cubre vehículos todo terreno o recreativos?`,
            },
            body: {
                en: `Motorcycle insurance typically covers motorcycles designed for on-road use. Coverage for off-road or recreational vehicles like dirt bikes, ATVs, or snowmobiles may require a separate insurance policy.`,
                es: `El seguro de motocicleta generalmente cubre motocicletas diseñadas para uso en carretera. La cobertura para vehículos todo terreno o recreativos como motocicletas de cross, vehículos todo terreno o motos de nieve puede requerir una póliza de seguro por separado.`,
            },
        },
        {
            title: {
                en: `What should I do if I'm involved in a motorcycle accident?`,
                es: `¿Qué debo hacer si estoy involucrado en un accidente de motocicleta?`,
            },
            body: {
                en: `If you're involved in a motorcycle accident, prioritize your safety and the safety of others involved. Then, exchange information with any other parties, document the scene, and contact your insurance company as soon as possible to report the accident and initiate the claims process.`,
                es: `Si está involucrado en un accidente de motocicleta, priorice su seguridad y la seguridad de las demás personas involucradas. Luego, intercambie información con cualquier otra parte, documente la escena y comuníquese con su compañía de seguros lo antes posible para informar el accidente e iniciar el proceso de reclamo.`,
            },
        },
    ],
};
export default function () {
    return (
        <>
            <HeadComponent {...headContent} />
            <HorizontalBanner {...verticalBannerContent} />
            <MotorcycleSubNav />
            <TextSection {...contentSection1} />
            <FAQSection {...contentSection2} />
            <CTAPicWText category="home" />
        </>
    );
}
