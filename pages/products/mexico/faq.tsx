import FAQSection from "@/components/Content/FAQSection";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import HeadComponent from "@/components/Head";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import MexicoSubNav from "@/components/SubNavBar/products/mexico";
import PATHCONSTANTS from "constants/sitemap";
import MexicoImg1 from "public/assets/images/products/mexico/mexico1.png";

const headContent = {
    title: "Mexico Tourist Auto Insurance Frequently Asked Questions",
    metaData:
        "Learn more about Mexico tourist auto insurance and how it can protect you while driving in Mexico by exploring our frequently asked questions.",
};
const verticalBannerContent = {
    title: {
        en: "Frequency Asked Questions About Mexico Tourist Auto Insurance",
        es: "Preguntas frecuentes sobre el seguro de auto turístico de México",
    },
    img: {
        src: MexicoImg1,
        alt: "Home",
    },
};

const contentSection1 = {
    title: {
        en: `Frequently Asked Mexico Tourist Auto Insurance Questions`,
        es: `Preguntas frecuentes sobre el seguro de auto turístico de México`,
    },
    subtitle: {
        en: `We're here to help you understand every aspect of mexico tourist auto insurance. If your question isn't
    answered below, don't hesitate to LINK: [contact us!](${PATHCONSTANTS.ABOUT.CONTACT})`,
        es: `Estamos aquí para ayudarlo a comprender todos los aspectos del seguro de auto turístico de México. Si su pregunta no está
    respondida a continuación, no dude en LINK: [contáctenos!](${PATHCONSTANTS.ABOUT.CONTACT})`,
    },
};

/*
Certainly! Here are 10 frequently asked questions (FAQs) about Mexican auto insurance along with their answers:

1. **What is Mexican auto insurance?**
   Mexican auto insurance is a type of insurance policy designed to provide coverage for drivers traveling in Mexico. It's essential because U.S. and Canadian auto insurance policies typically do not provide coverage beyond the border.

2. **Do I need Mexican auto insurance if I'm driving to Mexico from the United States or Canada?**
   Yes, Mexican law requires all drivers to have auto insurance from a Mexican insurance company. Without it, you could face legal and financial consequences if you're involved in an accident.

3. **What does Mexican auto insurance cover?**
   Mexican auto insurance typically covers liability for injuries or property damage you cause to others, legal assistance, medical payments for you and your passengers, and physical damage to your vehicle. Some policies also include roadside assistance and legal defense coverage.

4. **How long can I purchase Mexican auto insurance for?**
   Mexican auto insurance policies can vary in duration, ranging from one day to one year. You can purchase coverage for the specific duration of your trip.

5. **Can I purchase Mexican auto insurance online?**
   Yes, many insurance companies offer the option to purchase Mexican auto insurance online. This allows you to conveniently obtain coverage before your trip.

6. **Do I need a separate policy for each vehicle?**
   Yes, you'll need a separate insurance policy for each vehicle you plan to drive in Mexico. Make sure to provide details about each vehicle when purchasing insurance.

7. **Can I add additional drivers to my Mexican auto insurance policy?**
   Yes, many Mexican auto insurance policies allow you to add additional drivers to your coverage. Make sure to provide their information when purchasing the policy.

8. **Is roadside assistance included in Mexican auto insurance?**
   Some Mexican auto insurance policies include roadside assistance services such as towing, fuel delivery, and flat tire assistance. Be sure to check your policy for details on included services.

9. **What happens if I get into an accident in Mexico?**
   If you're involved in an accident in Mexico, prioritize your safety and the safety of others involved. Contact local authorities to report the accident and your insurance company to initiate the claims process. Make sure to exchange information with the other party and document the scene if possible.

10. **Is it possible to extend my Mexican auto insurance coverage while in Mexico?**
    Yes, some insurance companies allow you to extend your Mexican auto insurance coverage while you're in Mexico. However, it's essential to check with your insurer and make arrangements before your existing coverage expires to avoid gaps in coverage.
*/

const contentSection2 = {
    content: [
        {
            title: {
                en: `What is Mexican auto insurance?`,
                es: `¿Qué es el seguro de auto mexicano?`,
            },
            body: {
                en: `Mexican auto insurance is a type of insurance policy designed to provide coverage for drivers traveling in Mexico. It's essential because U.S. and Canadian auto insurance policies typically do not provide coverage beyond the border.`,
                es: `El seguro de auto mexicano es un tipo de póliza de seguro diseñada para brindar cobertura a los conductores que viajan a México. Es esencial porque las pólizas de seguro de auto de EE. UU. Y Canadá generalmente no brindan cobertura más allá de la frontera.`,
            },
        },
        {
            title: {
                en: `Do I need Mexican auto insurance if I'm driving to Mexico from the United States or Canada?`,
                es: `¿Necesito seguro de auto mexicano si voy a conducir a México desde Estados Unidos o Canadá?`,
            },
            body: {
                en: `Yes, Mexican law requires all drivers to have auto insurance from a Mexican insurance company. Without it, you could face legal and financial consequences if you're involved in an accident.`,
                es: `Sí, la ley mexicana requiere que todos los conductores tengan un seguro de auto de una compañía de seguros mexicana. Sin él, podría enfrentar consecuencias legales y financieras si se ve involucrado en un accidente.`,
            },
        },
        {
            title: {
                en: `What does Mexican auto insurance cover?`,
                es: `¿Qué cubre el seguro de auto mexicano?`,
            },
            body: {
                en: `Mexican auto insurance typically covers liability for injuries or property damage you cause to others, legal assistance, medical payments for you and your passengers, and physical damage to your vehicle. Some policies also include roadside assistance and legal defense coverage.`,
                es: `El seguro de auto mexicano generalmente cubre la responsabilidad por lesiones o daños a la propiedad que cause a otros, asistencia legal, pagos médicos para usted y sus pasajeros, y daños físicos a su vehículo. Algunas pólizas también incluyen asistencia en carretera y cobertura de defensa legal.`,
            },
        },
        {
            title: {
                en: `How long can I purchase Mexican auto insurance for?`,
                es: `¿Por cuánto tiempo puedo comprar un seguro de auto mexicano?`,
            },
            body: {
                en: `Mexican auto insurance policies can vary in duration, ranging from one day to one year. You can purchase coverage for the specific duration of your trip.`,
                es: `Las pólizas de seguro de auto mexicanas pueden variar en duración, desde un día hasta un año. Puede comprar cobertura por la duración específica de su viaje.`,
            },
        },
        {
            title: {
                en: `Can I purchase Mexican auto insurance online?`,
                es: `¿Puedo comprar seguro de auto mexicano en línea?`,
            },
            body: {
                en: `Yes, many insurance companies offer the option to purchase Mexican auto insurance online. This allows you to conveniently obtain coverage before your trip.`,
                es: `Sí, muchas compañías de seguros ofrecen la opción de comprar seguro de auto mexicano en línea. Esto le permite obtener cobertura de manera conveniente antes de su viaje.`,
            },
        },
        {
            title: {
                en: `Do I need a separate policy for each vehicle?`,
                es: `¿Necesito una póliza separada para cada vehículo?`,
            },
            body: {
                en: `Yes, you'll need a separate insurance policy for each vehicle you plan to drive in Mexico. Make sure to provide details about each vehicle when purchasing insurance.`,
                es: `Sí, necesitará una póliza de seguro separada para cada vehículo que planee conducir en México. Asegúrese de proporcionar detalles sobre cada vehículo al comprar seguro.`,
            },
        },
        {
            title: {
                en: `Can I add additional drivers to my Mexican auto insurance policy?`,
                es: `¿Puedo agregar conductores adicionales a mi póliza de seguro de auto mexicano?`,
            },
            body: {
                en: `Yes, many Mexican auto insurance policies allow you to add additional drivers to your coverage. Make sure to provide their information when purchasing the policy.`,
                es: `Sí, muchas pólizas de seguro de auto mexicanas le permiten agregar conductores adicionales a su cobertura. Asegúrese de proporcionar su información al comprar la póliza.`,
            },
        },
        {
            title: {
                en: `Is roadside assistance included in Mexican auto insurance?`,
                es: `¿La asistencia en carretera está incluida en el seguro de auto mexicano?`,
            },
            body: {
                en: `Some Mexican auto insurance policies include roadside assistance services such as towing, fuel delivery, and flat tire assistance. Be sure to check your policy for details on included services.`,
                es: `Algunas pólizas de seguro de auto mexicanas incluyen servicios de asistencia en carretera como remolque, entrega de combustible y asistencia para neumáticos desinflados. Asegúrese de verificar su póliza para obtener detalles sobre los servicios incluidos.`,
            },
        },
        {
            title: {
                en: `What happens if I get into an accident in Mexico?`,
                es: `¿Qué pasa si tengo un accidente en México?`,
            },
            body: {
                en: `If you're involved in an accident in Mexico, prioritize your safety and the safety of others involved. Contact local authorities to report the accident and your insurance company to initiate the claims process. Make sure to exchange information with the other party and document the scene if possible.`,
                es: `Si está involucrado en un accidente en México, priorice su seguridad y la seguridad de las demás personas involucradas. Comuníquese con las autoridades locales para informar el accidente y con su compañía de seguros para iniciar el proceso de reclamo. Asegúrese de intercambiar información con la otra parte y documentar la escena si es posible.`,
            },
        },
        {
            title: {
                en: `Is it possible to extend my Mexican auto insurance coverage while in Mexico?`,
                es: `¿Es posible extender mi cobertura de seguro de auto mexicano mientras estoy en México?`,
            },
            body: {
                en: `Yes, some insurance companies allow you to extend your Mexican auto insurance coverage while you're in Mexico. However, it's essential to check with your insurer and make arrangements before your existing coverage expires to avoid gaps in coverage.`,
                es: `Sí, algunas compañías de seguros le permiten extender su cobertura de seguro de auto mexicano mientras está en México. Sin embargo, es esencial verificar con su aseguradora y hacer los arreglos antes de que venza su cobertura existente para evitar lagunas en la cobertura.`,
            },
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
            <FAQSection {...contentSection2} />
            <CTAPicWText category="mexico" />
        </>
    );
}
