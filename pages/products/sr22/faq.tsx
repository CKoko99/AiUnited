import FAQSection from "@/components/Content/FAQSection";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import HeadComponent from "@/components/Head";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import SR22SubNav from "@/components/SubNavBar/products/sr22";
import PATHCONSTANTS from "constants/sitemap";
import AutoImg1 from "public/assets/images/products/auto/suv.png";

const headContent = {
    title: "SR-22 Insurance Frequently Asked Questions",
    metaData:
        "Learn more about SR-22 insurance and how it can protect you and your business. Get answers to frequently asked questions about SR-22 insurance.",
};
const verticalBannerContent = {
    title: {
        en: "Frequency Asked Questions About SR-22 Insurance",
        es: "Preguntas frecuentes sobre el seguro SR-22",
    },
    img: {
        src: AutoImg1,
        alt: "SUV",
    },
};

const contentSection1 = {
    title: {
        en: `Frequently Asked SR-22 Insurance Questions`,
        es: `Preguntas frecuentes sobre seguro SR-22`,
    },
    subtitle: {
        en: `We're here to help you understand every aspect of SR-22 insurance. If your question isn't 
    answered below, don't hesitate to LINK: [contact us!](${PATHCONSTANTS.ABOUT.CONTACT})`,
        es: `Estamos aquí para ayudarlo a comprender todos los aspectos del seguro de SR-22. Si su pregunta no está
    respondida a continuación, no dude en LINK: [contáctenos!](${PATHCONSTANTS.ABOUT.CONTACT})`,
    },
};

const contentSection2 = {
    content: [
        {
            title: {
                en: `What is SR-22 insurance?`,
                es: `¿Qué es el seguro SR-22?`,
            },
            body: {
                en: `SR-22 insurance is not actually insurance itself but rather a certificate of financial responsibility required by some states for certain high-risk drivers. It's often required after a driver has been convicted of a serious driving offense, such as DUI/DWI, reckless driving, or driving without insurance.`,
                es: `El seguro SR-22 no es en realidad un seguro en sí, sino más bien un certificado de responsabilidad financiera requerido por algunos estados para ciertos conductores de alto riesgo. A menudo se requiere después de que un conductor ha sido condenado por un delito grave de tránsito, como DUI / DWI, conducción imprudente o conducción sin seguro.`,
            },
        },
        {
            title: {
                en: `Why is SR-22 insurance required?`,
                es: `¿Por qué se requiere el seguro SR-22?`,
            },
            body: {
                en: `SR-22 insurance is required by state authorities as a way to verify that a driver has the minimum liability insurance required to operate a vehicle legally. It's typically mandated for drivers who have had serious driving infractions or license suspensions.`,
                es: `Las autoridades estatales requieren el seguro SR-22 como una forma de verificar que un conductor tenga el seguro de responsabilidad civil mínimo requerido para operar un vehículo legalmente. Por lo general, se requiere para conductores que han tenido infracciones graves de tránsito o suspensiones de licencia.`,
            },
        },
        {
            title: {
                en: `Who needs SR-22 insurance?`,
                es: `¿Quién necesita seguro SR-22?`,
            },
            body: {
                en: `Drivers who have been convicted of serious traffic offenses, such as DUI/DWI, multiple traffic violations within a short period, driving without insurance, or being involved in an at-fault accident without insurance, may be required to file an SR-22 form with their state's Department of Motor Vehicles (DMV).`,
                es: `Los conductores que han sido condenados por delitos graves de tránsito, como DUI / DWI, múltiples infracciones de tránsito en un corto período, conducción sin seguro o estar involucrados en un accidente sin seguro, pueden estar obligados a presentar un formulario SR-22 con el Departamento de Vehículos Motorizados (DMV) de su estado.`,
            },
        },
        {
            title: {
                en: `How long do I need to maintain SR-22 insurance?`,
                es: `¿Cuánto tiempo debo mantener el seguro SR-22?`,
            },
            body: {
                en: `The length of time you're required to maintain SR-22 insurance varies depending on state laws and the reason for which it was required. Typically, you must maintain SR-22 insurance for a minimum of three years, but it can be longer in some cases.`,
                es: `La duración del tiempo que debe mantener el seguro SR-22 varía según las leyes estatales y la razón por la que se requirió. Por lo general, debe mantener el seguro SR-22 durante un mínimo de tres años, pero en algunos casos puede ser más largo.`,
            },
        },
        {
            title: {
                en: `Can I get SR-22 insurance if I don't own a vehicle?`,
                es: `¿Puedo obtener un seguro SR-22 si no tengo un vehículo?`,
            },
            body: {
                en: `Yes, even if you don't own a vehicle, you can still obtain non-owner SR-22 insurance. This type of policy provides liability coverage when you drive a vehicle that you don't own, such as a rental car or a friend's car.`,
                es: `Sí, incluso si no tiene un vehículo, aún puede obtener un seguro SR-22 para no propietarios. Este tipo de póliza proporciona cobertura de responsabilidad cuando conduce un vehículo que no es de su propiedad, como un automóvil de alquiler o el automóvil de un amigo.`,
            },
        },
        {
            title: {
                en: `How much does SR-22 insurance cost?`,
                es: `¿Cuánto cuesta el seguro SR-22?`,
            },
            body: {
                en: `The cost of SR-22 insurance varies depending on factors such as your driving record, the reason for needing SR-22, your age, location, and the insurance company you choose. Typically, SR-22 filing fees range from $15 to $50, but the impact on your insurance premiums can vary widely.`,
                es: `El costo del seguro SR-22 varía según factores como su historial de manejo, la razón por la que necesita el seguro SR-22, su edad, ubicación y la compañía de seguros que elija. Por lo general, las tarifas de presentación de SR-22 oscilan entre $ 15 y $ 50, pero el impacto en sus primas de seguro puede variar ampliamente.`,
            },
        },
        {
            title: {
                en: `Do all insurance companies offer SR-22 insurance?`,
                es: `¿Todas las compañías de seguros ofrecen seguro SR-22?`,
            },
            body: {
                en: `Not all insurance companies offer SR-22 insurance, but many do. It's important to shop around and compare quotes from multiple insurers to find the most affordable option for your situation.`,
                es: `No todas las compañías de seguros ofrecen seguro SR-22, pero muchas lo hacen. Es importante comparar y comparar cotizaciones de varios aseguradores para encontrar la opción más económica para su situación.`,
            },
        },
        {
            title: {
                en: `Can I cancel my SR-22 insurance once it's no longer required?`,
                es: `¿Puedo cancelar mi seguro SR-22 una vez que ya no sea necesario?`,
            },
            body: {
                en: `Yes, once you're no longer required to maintain SR-22 insurance, you can cancel the policy. However, it's crucial to wait until you receive confirmation from your state's DMV that the SR-22 requirement has been lifted before canceling your coverage.`,
                es: `Sí, una vez que ya no se le exige mantener el seguro SR-22, puede cancelar la póliza. Sin embargo, es crucial esperar hasta que reciba la confirmación del DMV de su estado de que se ha levantado el requisito de SR-22 antes de cancelar su cobertura.`,
            },
        },
        {
            title: {
                en: `What happens if I let my SR-22 insurance lapse?`,
                es: `¿Qué pasa si dejo que mi seguro SR-22 caduque?`,
            },
            body: {
                en: `Allowing your SR-22 insurance to lapse, either by failing to renew it or canceling it prematurely, can result in serious consequences, including the suspension of your driver's license and potential fines. It's essential to maintain continuous SR-22 coverage for the duration required by your state.`,
                es: `Permitir que su seguro SR-22 caduque, ya sea por no renovarlo o cancelarlo prematuramente, puede tener consecuencias graves, incluida la suspensión de su licencia de conducir y multas potencia les. Es esencial mantener una cobertura continua de SR-22 durante el tiempo requerido por su estado.`,
            },
        },
        {
            title: {
                en: `Can I switch insurance companies while I have SR-22 insurance?`,
                es: `¿Puedo cambiar de compañía de seguros mientras tengo seguro SR-22?`,
            },
            body: {
                en: `Yes, you can switch insurance companies while you have SR-22 insurance. However, you must ensure that your new insurer is willing to file an SR-22 form on your behalf and that there is no gap in coverage to avoid penalties from the DMV. It's recommended to coordinate the switch to ensure a smooth transition.`,
                es: `Sí, puede cambiar de compañía de seguros mientras tiene seguro SR-22. Sin embargo, debe asegurarse de que su nuevo asegurador esté dispuesto a presentar un formulario SR-22 en su nombre y que no haya una brecha en la cobertura para evitar sanciones del DMV. Se recomienda coordinar el cambio para garantizar una transición sin problemas.`,
            },
        },
    ],
};

export default function () {
    return (
        <>
            <HeadComponent {...headContent} />
            <HorizontalBanner {...verticalBannerContent} />
            <SR22SubNav />
            <TextSection {...contentSection1} />
            <FAQSection {...contentSection2} />
            <CTAPicWText category="sr22" />
        </>
    );
}
