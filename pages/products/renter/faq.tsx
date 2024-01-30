import FAQSection from "@/components/Content/FAQSection";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import HeadComponent from "@/components/Head";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import HomeSubNav from "@/components/SubNavBar/products/home";
import RenterSubNav from "@/components/SubNavBar/products/renter";
import PATHCONSTANTS from "constants/sitemap";
import HomeImg1 from "public/assets/images/products/home/home1.png"

const headContent = {
    title: "Home Insurance Frequently Asked Questions",
    metaData: "Learn more about home insurance and how it can protect your home and belongings. Get answers to frequently asked questions about home insurance.",
}
const verticalBannerContent = {
    title: {
        en: "Frequency Asked Questions About Renters Insurance",
        es: "Preguntas frecuentes sobre el seguro de inquilinos"
    },
    img: {
        src: HomeImg1,
        alt: "Home"
    }
}


const contentSection1 = {
    title: {
        en: `Frequently Asked Renters Insurance Questions`,
        es: `Preguntas frecuentes sobre el seguro de inquilinos`
    },
    subtitle: {
        en: `We're here to help you understand every aspect of renters insurance. If your question isn't 
    answered below, don't hesitate to LINK: [contact us!](${PATHCONSTANTS.ABOUT.CONTACT})`,
        es: `Estamos aquí para ayudarlo a comprender todos los aspectos del seguro de inquilinos. Si su pregunta no está
    respondida a continuación, no dude en LINK: [contáctenos!](${PATHCONSTANTS.ABOUT.CONTACT})`
    },
}

/*
Certainly! Here are 10 frequently asked questions (FAQs) about renters insurance along with their answers:

1. **What is renters insurance?**
   Renters insurance is a type of insurance policy designed to protect tenants who rent their homes. It provides coverage for personal belongings, liability, and additional living expenses in case of covered perils like fire, theft, or vandalism.

2. **Do I really need renters insurance?**
   While it's not legally required in most places, renters insurance is highly recommended for anyone renting a home or apartment. It provides financial protection for your belongings and liability coverage, which can be invaluable in case of unexpected events.

3. **What does renters insurance cover?**
   Renters insurance typically covers personal belongings (such as furniture, clothing, electronics), liability for injuries or property damage you're responsible for, and additional living expenses if your rental becomes uninhabitable due to a covered loss.

4. **How much renters insurance coverage do I need?**
   The amount of coverage you need depends on factors like the value of your belongings, the cost of replacing them, and your liability risks. It's wise to ensure your coverage is sufficient to replace all of your belongings and protect your assets against potential liability claims.

5. **What factors affect the cost of renters insurance?**
   The cost of renters insurance can be influenced by factors such as the location and size of your rental, your chosen coverage limits, your deductible amount, your claims history, and any additional coverage options you select.

6. **Does renters insurance cover my roommate's belongings?**
   Renters insurance typically covers only the belongings of the policyholder listed on the policy. If you have a roommate, they would need their own renters insurance policy to protect their belongings.

7. **Does renters insurance cover damage caused by natural disasters?**
   Renters insurance usually covers damage caused by common perils like fire, theft, and vandalism. Coverage for natural disasters such as earthquakes or floods may require additional endorsements or separate policies, so it's essential to check your policy for specific coverage details.

8. **Can I get renters insurance if I'm a college student living in a dorm?**
   Yes, many insurance companies offer renters insurance policies tailored to college students living in dormitories or off-campus housing. These policies provide coverage for personal belongings and liability, similar to standard renters insurance.

9. **How do I file a renters insurance claim?**
   If you need to file a renters insurance claim, contact your insurance company as soon as possible to report the incident. Be prepared to provide details about what happened and any documentation or evidence you have, such as receipts or photos of damaged items. Your insurer will guide you through the claims process.

10. **Can I cancel my renters insurance policy at any time?**
    Yes, you can typically cancel your renters insurance policy at any time. However, you may be subject to a cancellation fee depending on your insurer's policies. Keep in mind that going without renters insurance leaves you financially vulnerable, so it's important to have coverage in place before canceling a policy.
*/

const contentSection2 = {
    content: [
        {
            title: {
                en: `What is renters insurance?`,
                es: `¿Qué es el seguro de inquilinos?`
            }, body: {
                en: `Renters insurance is a type of insurance policy designed to protect tenants who rent their homes. It provides coverage for personal belongings, liability, and additional living expenses in case of covered perils like fire, theft, or vandalism.`,
                es: `El seguro de inquilinos es un tipo de póliza de seguro diseñada para proteger a los inquilinos que alquilan sus hogares. Proporciona cobertura para pertenencias personales, responsabilidad y gastos de vida adicionales en caso de peligros cubiertos como incendios, robos o vandalismo.`
            },
        },
        {
            title: {
                en: `Do I really need renters insurance?`,
                es: `¿Realmente necesito seguro de inquilinos?`
            }, body: {
                en: `While it's not legally required in most places, renters insurance is highly recommended for anyone renting a home or apartment. It provides financial protection for your belongings and liability coverage, which can be invaluable in case of unexpected events.`,
                es: `Si bien no es legalmente obligatorio en la mayoría de los lugares, se recomienda encarecidamente el seguro de inquilinos para cualquier persona que alquile una casa o apartamento. Proporciona protección financiera para sus pertenencias y cobertura de responsabilidad, que puede ser invaluable en caso de eventos inesperados.`
            },
        },
        {
            title: {
                en: `What does renters insurance cover?`,
                es: `¿Qué cubre el seguro de inquilinos?`
            }, body: {
                en: `Renters insurance typically covers personal belongings (such as furniture, clothing, electronics), liability for injuries or property damage you're responsible for, and additional living expenses if your rental becomes uninhabitable due to a covered loss.`,
                es: `El seguro de inquilinos generalmente cubre pertenencias personales (como muebles, ropa, electrónica), responsabilidad por lesiones o daños a la propiedad de los que es responsable y gastos de vida adicionales si su alquiler se vuelve inhabitable debido a una pérdida cubierta.`
            },
        },
        {
            title: {
                en: `How much renters insurance coverage do I need?`,
                es: `¿Cuánta cobertura de seguro de inquilinos necesito?`
            }, body: {
                en: `The amount of coverage you need depends on factors like the value of your belongings, the cost of replacing them, and your liability risks. It's wise to ensure your coverage is sufficient to replace all of your belongings and protect your assets against potential liability claims.`,
                es: `La cantidad de cobertura que necesita depende de factores como el valor de sus pertenencias, el costo de reemplazarlas y los riesgos de responsabilidad. Es aconsejable asegurarse de que su cobertura sea suficiente para reemplazar todas sus perten encias y proteger sus activos contra posibles reclamos de responsabilidad.`
            },
        },
        {
            title: {
                en: `What factors affect the cost of renters insurance?`,
                es: `¿Qué factores afectan el costo del seguro de inquilinos?`
            }, body: {
                en: `The cost of renters insurance can be influenced by factors such as the location and size of your rental, your chosen coverage limits, your deductible amount, your claims history, and any additional coverage options you select.`,
                es: `El costo del seguro de inquilinos puede verse influenciado por factores como la ubicación y el tamaño de su alquiler, los límites de cobertura que elija, el monto de su deducible, su historial de reclamos y cualquier opción de cobertura adicional que seleccione.`
            },
        },
        {
            title: {
                en: `Does renters insurance cover my roommate's belongings?`,
                es: `¿El seguro de inquilinos cubre las pertenencias de mi compañero de cuarto?`
            }, body: {
                en: `Renters insurance typically covers only the belongings of the policyholder listed on the policy. If you have a roommate, they would need their own renters insurance policy to protect their belongings.`,
                es: `El seguro de inquilinos generalmente cubre solo las pertenencias del titular de la póliza que figuran en la póliza. Si tiene un compañero de cuarto, necesitarían su propia póliza de seguro de inquilinos para proteger sus pertenencias.`
            },
        },
        {
            title: {
                en: `Does renters insurance cover damage caused by natural disasters?`,
                es: `¿El seguro de inquilinos cubre los daños causados por desastres naturales?`
            }, body: {
                en: `Renters insurance usually covers damage caused by common perils like fire, theft, and vandalism. Coverage for natural disasters such as earthquakes or floods may require additional endorsements or separate policies, so it's essential to check your policy for specific coverage details.`,
                es: `El seguro de inquilinos generalmente cubre los daños causados por peligros comunes como incendios, robos y vandalismo. La cobertura para desastres naturales como terremotos o inundaciones puede requerir endosos adicionales o pólizas separadas, por lo que es esencial verificar su póliza para conocer los detalles de cobertura específicos.`
            },
        },
        {
            title: {
                en: `Can I get renters insurance if I'm a college student living in a dorm?`,
                es: `¿Puedo obtener un seguro de inquilinos si soy un estudiante universitario que vive en un dormitorio?`
            }, body: {
                en: `Yes, many insurance companies offer renters insurance policies tailored to college students living in dormitories or off-campus housing. These policies provide coverage for personal belongings and liability, similar to standard renters insurance.`,
                es: `Sí, muchas compañías de seguros ofrecen pólizas de seguro de inquilinos adaptadas a estudiantes universitarios que viven en dormitorios o viviendas fuera del campus. Estas pólizas brindan cobertura para pertenencias personales y responsabilidad, similar al seguro de inquilinos estándar.`
            },
        },
        {
            title: {
                en: `How do I file a renters insurance claim?`,
                es: `¿Cómo presento un reclamo de seguro de inquilinos?`
            }, body: {
                en: `If you need to file a renters insurance claim, contact your insurance company as soon as possible to report the incident. Be prepared to provide details about what happened and any documentation or evidence you have, such as receipts or photos of damaged items. Your insurer will guide you through the claims process.`,
                es: `Si necesita presentar un reclamo de seguro de inquilinos, comuníquese con su compañía de seguros lo antes posible para informar el incidente. Esté preparado para proporcionar detalles sobre lo que sucedió y cualquier documentación o evidencia que tenga, como recibos o fotos de artículos dañados. Su aseguradora lo guiará a través del proceso de reclamos.`
            },
        },
        {
            title: {
                en: `Can I cancel my renters insurance policy at any time?`,
                es: `¿Puedo cancelar mi póliza de seguro de inquilinos en cualquier momento?`
            }, body: {
                en: `Yes, you can typically cancel your renters insurance policy at any time. However, you may be subject to a cancellation fee depending on your insurer's policies. Keep in mind that going without renters insurance leaves you financially vulnerable, so it's important to have coverage in place before canceling a policy.`,
                es: `Sí, generalmente puede cancelar su póliza de seguro de inquilinos en cualquier momento. Sin embargo, es posible que esté sujeto a una tarifa de cancelación según las políticas de su aseguradora. Tenga en cuenta que no tener seguro de inquilinos lo deja financieramente vulnerable, por lo que es importante tener cobertura antes de cancelar una póliza.`
            },
        },
    ]
}


export default function () {
    return <>
        <HeadComponent {...headContent} />
        <HorizontalBanner  {...verticalBannerContent} />
        <RenterSubNav />
        <TextSection {...contentSection1} />
        <FAQSection {...contentSection2} />
        <CTAPicWText category="renters" />
    </>
}