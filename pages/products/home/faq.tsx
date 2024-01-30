import FAQSection from "@/components/Content/FAQSection";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import TextSection from "@/components/Content/TextSection";
import HeadComponent from "@/components/Head";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import HomeSubNav from "@/components/SubNavBar/products/home";
import PATHCONSTANTS from "constants/sitemap";
import HomeImg1 from "public/assets/images/products/home/home1.png"

const headContent = {
    title: "Home Insurance Frequently Asked Questions",
    metaData: "Learn more about home insurance and how it can protect your home and belongings. Get answers to frequently asked questions about home insurance.",
}
const verticalBannerContent = {
    title: {
        en: "Frequency Asked Questions About Home Insurance",
        es: "Preguntas frecuentes sobre el seguro de hogar"
    },
    img: {
        src: HomeImg1,
        alt: "Home"
    }
}


const contentSection1 = {
    title: {
        en: `Frequently Asked Home Insurance Questions`,
        es: `Preguntas frecuentes sobre seguro de casa`
    },
    subtitle: {
        en: `We're here to help you understand every aspect of home insurance. If your question isn't 
    answered below, don't hesitate to LINK: [contact us!](${PATHCONSTANTS.ABOUT.CONTACT})`,
        es: `Estamos aquí para ayudarlo a comprender todos los aspectos del seguro de casa. Si su pregunta no está
    respondida a continuación, no dude en LINK: [contáctenos!](${PATHCONSTANTS.ABOUT.CONTACT})`
    },
}

const contentSection2 = {
    content: [
        {
            title: {
                en: `What does home insurance cover?`,
                es: `¿Qué cubre el seguro de hogar?`
            }, body: {
                en: `Home insurance typically covers damage or loss to your home and personal belongings caused by perils such as fire, theft, vandalism, and certain natural disasters. It may also include liability coverage for accidents that occur on your property.`,
                es: `El seguro de hogar generalmente cubre daños o pérdidas en su hogar y pertenencias personales causados ​​por peligros como incendios, robos, vandalismo y ciertos desastres naturales. También puede incluir cobertura de responsabilidad por accidentes que ocurran en su propiedad.`
            },
        },
        {
            title: {
                en: `Do I need home insurance if I own my home outright?`,
                es: `¿Necesito un seguro de hogar si soy dueño de mi casa?`
            }, body: {
                en: `While it's not legally required, it's highly recommended to have home insurance even if you own your home outright. It protects your investment in case of unexpected events like fires, storms, or liability claims.`,
                es: `Si bien no es legalmente obligatorio, se recomienda encarecidamente tener un seguro de hogar incluso si es dueño de su casa. Protege su inversión en caso de eventos inesperados como incendios, tormentas o reclamos de responsabilidad.`
            },
        },
        {
            title: {
                en: `How much home insurance coverage do I need?`,
                es: `¿Cuánta cobertura de seguro de hogar necesito?`
            }, body: {
                en: `The amount of coverage you need depends on factors like the value of your home, the cost to rebuild, the value of your belongings, and your liability risks. It's wise to ensure your coverage is sufficient to rebuild your home and replace your belongings in case of a total loss.`,
                es: `La cantidad de cobertura que necesita depende de factores como el valor de su hogar, el costo de reconstrucción, el valor de sus pertenencias y los riesgos de responsabilidad. Es prudente asegurarse de que su cobertura sea suficiente para reconstruir su hogar y reemplazar sus pertenencias en caso de pérdida total.`
            },
        },
        {
            title: {
                en: `What factors affect the cost of home insurance?`,
                es: `¿Qué factores afectan el costo del seguro de hogar?`
            }, body: {
                en: `Several factors can influence the cost of home insurance, including the location of your home, its age and construction, your claims history, the coverage limits you choose, and any additional endorsements or riders you add to your policy.`,
                es: `Varios factores pueden influir en el costo del seguro de hogar, incluida la ubicación de su hogar, su edad y construcción, su historial de reclamos, los límites de cobertura que elija y cualquier endoso o cláusula adicional que agregue a su póliza.`
            },
        },
        {
            title: {
                en: `Does home insurance cover flooding?`,
                es: `¿El seguro de hogar cubre las inundaciones?`
            }, body: {
                en: `Standard home insurance policies typically do not cover damage from floods. You'll need a separate flood insurance policy, which is often provided by the National Flood Insurance Program (NFIP) or through private insurers.`,
                es: `Las pólizas de seguro de hogar estándar generalmente no cubren los daños causados ​​por las inundaciones. Necesitará una póliza de seguro contra inundaciones por separado, que a menudo es proporcionada por el Programa Nacional de Seguro contra Inundaciones (NFIP) o a través de aseguradoras privadas.`
            },
        },
        {
            title: {
                en: `Can I lower my home insurance premiums?`,
                es: `¿Puedo reducir las primas de mi seguro de hogar?`
            }, body: {
                en: `Yes, there are several ways to potentially lower your home insurance premiums. These include raising your deductible, bundling your home and auto insurance policies, improving home security measures, maintaining a good credit score, and periodically shopping around for better rates.`,
                es: `Sí, hay varias formas de reducir potencialmente las primas de su seguro de hogar. Estos incluyen aumentar su deducible, combinar sus pólizas de seguro de hogar y automóvil, mejorar las medidas de seguridad del hogar, mantener un buen puntaje crediticio y comprar periódicamente mejores tarifas.`
            },
        },
        {
            title: {
                en: `What is a deductible?`,
                es: `¿Qué es un deducible?`
            }, body: {
                en: `A deductible is the amount you're responsible for paying out of pocket before your insurance coverage kicks in. For example, if you have a $1,000 deductible and a covered claim results in $5,000 of damage, you would pay the first $1,000 and your insurance would cover the remaining $4,000.`,
                es: `Un deducible es la cantidad de dinero que debe pagar de su bolsillo antes de que entre en vigencia su cobertura de seguro. Por ejemplo, si tiene un deducible de $ 1,000 y un reclamo cubierto resulta en $ 5,000 de daños, pagaría los primeros $ 1,000 y su seguro cubriría los $ 4,000 restantes.`
            },
        },
        {
            title: {
                en: `Does home insurance cover home-based businesses?`,
                es: `¿El seguro de hogar cubre las empresas con sede en el hogar?`
            }, body: {
                en: `Standard home insurance policies usually provide limited coverage for business property and liability related to home-based businesses. If you operate a business from home, you may need additional coverage such as a business owners policy (BOP) or an endorsement to your home insurance policy.`,
                es: `Las pólizas de seguro de hogar estándar generalmente brindan una cobertura limitada para la propiedad comercial y la responsabilidad relacionada con las empresas con sede en el hogar. Si opera un negocio desde su hogar, es posible que necesite cobertura adicional, como una póliza de propietarios de negocios (BOP) o un endoso a su póliza de seguro de hogar.`
            },
        },
        {
            title: {
                en: `What should I do if I need to make a claim?`,
                es: `¿Qué debo hacer si necesito presentar un reclamo?`
            }, body: {
                en: `If you need to make a claim, contact your insurance company as soon as possible to report the incident. Be prepared to provide details about what happened and any documentation or evidence you have. Your insurer will guide you through the claims process.`,
                es: `Si necesita presentar un reclamo, comuníquese con su compañía de seguros lo antes posible para informar el incidente. Esté preparado para proporcionar detalles sobre lo que sucedió y cualquier documentación o evidencia que tenga. Su aseguradora lo guiará a través del proceso de reclamos.`
            },
        },
        {
            title: {
                en: `Can I cancel my home insurance policy at any time?`,
                es: `¿Puedo cancelar mi póliza de seguro de hogar en cualquier momento?`
            }, body: {
                en: `Yes, you can typically cancel your home insurance policy at any time, but you may be subject to a cancellation fee depending on your insurer's policies. Keep in mind that going without home insurance leaves you financially vulnerable, so it's important to have coverage in place before canceling a policy.`,
                es: `Sí, generalmente puede cancelar su póliza de seguro de hogar en cualquier momento, pero es posible que deba pagar una tarifa de cancelación según las políticas de su aseguradora. Tenga en cuenta que no tener seguro de hogar lo deja financieramente vulnerable, por lo que es importante tener cobertura antes de cancelar una póliza.`
            },
        },
    ]
}
export default function () {
    return <>
        <HeadComponent {...headContent} />
        <HorizontalBanner  {...verticalBannerContent} />
        <HomeSubNav />
        <TextSection {...contentSection1} />
        <FAQSection {...contentSection2} />
        <CTAPicWText category="home" />
    </>
}