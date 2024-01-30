import FAQSection from "@/components/Content/FAQSection";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import HeadComponent from "@/components/Head";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import HomeSubNav from "@/components/SubNavBar/products/home";
import SuretySubNav from "@/components/SubNavBar/products/surety";
import PATHCONSTANTS from "constants/sitemap";
import SuretyImg1 from "public/assets/images/products/surety/surety.png"

const headContent = {
    title: "Surety Bond Frequently Asked Questions",
    metaData: "Learn more about surety bond insurance and how it can protect you and your business. Get answers to frequently asked questions about surety bond insurance.",
}
const verticalBannerContent = {
    title: {
        en: "Frequency Asked Questions About Surety Bond Insurance",
        es: "Preguntas frecuentes sobre el seguro de fianza"
    },
    img: {
        src: SuretyImg1,
        alt: "Home"
    }
}


const contentSection1 = {
    title: {
        en: `Frequently Asked Surety Bond Questions`,
        es: `Preguntas frecuentes sobre fianzas`
    },
    subtitle: {
        en: `We're here to help you understand every aspect of surety bonds. If your question isn't 
    answered below, don't hesitate to LINK: [contact us!](${PATHCONSTANTS.ABOUT.CONTACT})`,
        es: `Estamos aquí para ayudarlo a comprender todos los aspectos de las fianzas. Si su pregunta no está
    respondido a continuación, no dude en LINK: [contáctenos!](${PATHCONSTANTS.ABOUT.CONTACT})`
    },
}


const contentSection2 = {
    content: [
        {
            title: {
                en: `What is a surety bond?`,
                es: `¿Qué es una fianza?`
            }, body: {
                en: `A surety bond is a legally binding contract among three parties: the principal (the party required to obtain the bond), the obligee (the party requiring the bond), and the surety (the entity providing financial assurance that the principal will fulfill their obligations).`,
                es: `Una fianza es un contrato legalmente vinculante entre tres partes: el principal (la parte que debe obtener la fianza), el obligado (la parte que requiere la fianza) y el fiador (la entidad que proporciona garantía financiera de que el principal cumplirá con sus obligaciones).`
            }
        },
        {
            title: {
                en: `Why are surety bonds required?`,
                es: `¿Por qué se requieren las fianzas?`
            }, body: {
                en: `Surety bonds are required to ensure that the principal fulfills their obligations or duties as outlined in a contract or required by law. They provide financial protection to the obligee in case the principal fails to fulfill their commitments.`,
                es: `Las fianzas son necesarias para garantizar que el principal cumpla con sus obligaciones o deberes según lo establecido en un contrato o requerido por la ley. Brindan protección financiera al obligado en caso de que el principal no cumpla con sus compromisos.`
            }
        },
        {
            title: {
                en: `Who needs a surety bond?`,
                es: `¿Quién necesita una fianza?`
            }, body: {
                en: `Various individuals and businesses may need to obtain surety bonds, including contractors, construction companies, mortgage brokers, auto dealers, notaries, and many others. Government agencies often require certain businesses to obtain bonds as part of the licensing or permit process.`,
                es: `Varias personas y empresas pueden necesitar obtener fianzas, incluidos contratistas, empresas de construcción, corredores de hipotecas, concesionarios de automóviles, notarios y muchos otros. Las agencias gubernamentales a menudo requieren que ciertas empresas obtengan fianzas como parte del proceso de licencia o permiso.`
            }
        },
        {
            title: {
                en: `What are the different types of surety bonds?`,
                es: `¿Cuáles son los diferentes tipos de fianzas?`
            }, body: {
                en: `Surety bonds come in many forms, including contract bonds (such as bid bonds, performance bonds, and payment bonds), license and permit bonds, court bonds, public official bonds, and fidelity bonds (also known as employee dishonesty bonds).`,
                es: `Las fianzas vienen en muchas formas, incluidas las fianzas de contrato (como las fianzas de oferta, las fianzas de cumplimiento y las fianzas de pago), las fianzas de licencia y permiso, las fianzas judiciales, las fianzas de funcionarios públicos y las fianzas de fidel (también conocidas como fianzas de deshonestidad de empleados).`
            }
        },
        {
            title: {
                en: `How much does a surety bond cost?`,
                es: `¿Cuánto cuesta una fianza?`
            }, body: {
                en: `The cost of a surety bond, known as the premium, is typically a percentage of the bond amount. The premium percentage can vary based on factors such as the type of bond, the applicant's credit history, the risk involved, and the bonding company's rates.`,
                es: `El costo de una fianza, conocido como prima, suele ser un porcentaje del monto de la fianza. El porcentaje de prima puede variar según factores como el tipo de fianza, el historial crediticio del solicitante, el riesgo involucrado y las tarifas de la compañía de fianzas.`
            }
        },
        {
            title: {
                en: `Do I need good credit to obtain a surety bond?`,
                es: `¿Necesito un buen crédito para obtener una fianza?`
            }, body: {
                en: `While having good credit can make it easier to obtain a surety bond and may result in lower premiums, it's not always a requirement. Some surety bond companies offer options for individuals with less-than-perfect credit or provide alternative forms of collateral.`,
                es: `Si bien tener un buen crédito puede facilitar la obtención de una fianza y puede resultar en primas más bajas, no siempre es un requisito. Algunas compañías de fianzas ofrecen opciones para personas con crédito menos que perfecto o brindan formas alternativas de garantía.`
            }
        },
        {
            title: {
                en: `How do I obtain a surety bond?`,
                es: `¿Cómo obtengo una fianza?`
            }, body: {
                en: `To obtain a surety bond, you'll typically need to complete an application and provide any required documentation, such as financial statements or a credit check. Once approved, you'll pay the premium and receive the bond, which you can then submit to the obligee.`,
                es: `Para obtener una fianza, generalmente deberá completar una solicitud y proporcionar cualquier documentación requerida, como estados financieros o una verificación de crédito. Una vez aprobado, pagará la prima y recibirá la fianza, que luego puede enviar al obligado.`
            }
        },
        {
            title: {
                en: `What happens if a claim is made against my surety bond?`,
                es: `¿Qué sucede si se presenta un reclamo contra mi fianza?`
            }, body: {
                en: `If a claim is made against your surety bond, the surety will investigate the claim to determine its validity. If the claim is found to be legitimate and the principal fails to fulfill their obligations, the surety will compensate the obligee up to the bond amount. The principal is then responsible for reimbursing the surety for any losses incurred.`,
                es: `Si se presenta un reclamo contra su fianza, el fiador investigará el reclamo para determinar su validez. Si se determina que el reclamo es legítimo y el principal no cumple con sus obligaciones, el fiador compensará al obligado hasta el monto de la fianza. El principal es entonces responsable de reembolsar al fiador por cualquier pérdida incurrida.`
            }
        },
        {
            title: {
                en: `Can I cancel my surety bond?`,
                es: `¿Puedo cancelar mi fianza?`
            }, body: {
                en: `Surety bonds are typically issued for a specific term, often one year, and cannot be canceled midterm. However, if you no longer need the bond or wish to switch to a different bonding company, you can usually choose not to renew it at the end of the term.`,
                es: `Las fianzas generalmente se emiten por un período específico, a menudo un año, y no se pueden cancelar a medio plazo. Sin embargo, si ya no necesita la fianza o desea cambiar a una compañía de fianzas diferente, generalmente puede optar por no renovarla al final del período.`
            }
        },
        {
            title: {
                en: `What happens if I fail to obtain a required surety bond?`,
                es: `¿Qué sucede si no obtengo una fianza requerida?`
            }, body: {
                en: `Failing to obtain a required surety bond can result in various consequences, depending on the circumstances and the entity requiring the bond. These consequences may include being unable to obtain or maintain a license, losing a contract opportunity, facing legal penalties, or being unable to operate legally in certain industries. It's essential to comply with bonding requirements to avoid such issues.`,
                es: `No obtener una fianza requerida puede resultar en varias consecuencias, según las circunstancias y la entidad que requiera la fianza. Estas consecuencias pueden incluir la incapacidad para obtener o mantener una licencia, perder una oportunidad de contrato, enfrentar sanciones legales o no poder operar legalmente en ciertas industrias. Es esencial cumplir con los requisitos de garantía para evitar tales problemas.`
            }
        },
    ]
}
export default function () {
    return <>
        <HeadComponent {...headContent} />
        <HorizontalBanner  {...verticalBannerContent} />
        <SuretySubNav />
        <TextSection {...contentSection1} />
        <FAQSection {...contentSection2} />
        <CTAPicWText category="surety" />
    </>
}