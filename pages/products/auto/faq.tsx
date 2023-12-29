import FAQSection from "@/components/Content/FAQSection"
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner"
import TextSection from "@/components/Content/TextSection";
import HeadComponent from "@/components/Head";
import CTAPicWText from "@/components/PrefilledCTA/CTAPicWText";
import AutoSubNav from "@/components/SubNavBar/products/auto"
import PATHCONSTANTS from "constants/sitemap";
import AutoImg1 from "public/assets/images/products/auto/suv.png";


const verticalBannerContent = {
    title: {
        en: "Types of Auto Insurance Coverage Demystified",
        es: "Tipos de cobertura de seguro de auto desmitificados"
    },
    img: {
        src: AutoImg1,
        alt: "Van"
    }
}



const contentSection1 = {
    title: {
        en: `Frequently Asked Auto Insurance Questions`,
        es: `Preguntas frecuentes sobre seguro de auto`
    },
    subtitle: {
        en: `We're here to help you understand every aspect of auto insurance. If your question isn't 
    answered below, don't hesitate to LINK: [contact us!](${PATHCONSTANTS.ABOUT.CONTACT})`,
        es: `Estamos aquí para ayudarlo a comprender todos los aspectos del seguro de auto. Si su pregunta no está
    respondida a continuación, no dude en LINK: [contáctenos!](${PATHCONSTANTS.ABOUT.CONTACT})`
    },
}
const contentSection2 = {
    content: [
        {
            title: {
                en: `What factors influence my auto insurance premium?`,
                es: `¿Qué factores influyen en mi prima de seguro de auto?`
            }, body: {
                en: `Your premium is influenced by factors like your driving record, age, location, type of coverage, and the make/model of your vehicle.`,
                es: `Su prima se ve influenciada por factores como su historial de manejo, edad, ubicación, tipo de cobertura y marca / modelo de su vehículo.`
            },
        },

        {
            title: {
                en: `How much auto insurance do I need?`,
                es: `¿Cuánto seguro de auto necesito?`
            }, body: {
                en: `The amount of coverage you need depends on factors such as your assets, the value of your vehicle, and your risk tolerance. It's recommended to have coverage that exceeds state minimums.`,
                es: `La cantidad de cobertura que necesita depende de factores como sus activos, el valor de su vehículo y su tolerancia al riesgo. Se recomienda tener cobertura que exceda los mínimos estatales.`
            },
        },
        {
            title: {
                en: `What is liability insurance, and why is it important?`,
                es: `¿Qué es el seguro de responsabilidad civil y por qué es importante?`
            }, body: {
                en: `Liability insurance covers bodily injury and property damage you may cause in an accident. It's crucial because it fulfills legal requirements and protects you financially.`,
                es: `El seguro de responsabilidad civil cubre lesiones corporales y daños a la propiedad que pueda causar en un accidente. Es crucial porque cumple con los requisitos legales y lo protege financieramente.`
            },
        },
        {
            title: {
                en: `What is the difference between collision and comprehensive coverage?`,
                es: `¿Cuál es la diferencia entre la cobertura de colisión y la cobertura integral?`
            }, body: {
                en: `Collision covers damage to your vehicle in accidents, while comprehensive covers non-collision incidents like theft, vandalism, or natural disasters.`,
                es: `Collision cubre los daños a su vehículo en accidentes, mientras que la cobertura integral cubre incidentes que no sean de colisión como robo, vandalismo o desastres naturales.`
            },
        },
        {
            title: {
                en: `What is Personal Injury Protection (PIP)?`,
                es: `¿Qué es la protección contra lesiones personales (PIP)?`
            }, body: {
                en: `PIP covers medical expenses and lost wages for you and your passengers, regardless of fault. It is optional in some states and mandatory in others.`,
                es: `PIP cubre los gastos médicos y la pérdida de ingresos para usted y sus pasajeros, independientemente de la culpa. Es opcional en algunos estados y obligatorio en otros.`
            },
        },
        {
            title: {
                en: `Do I need uninsured/underinsured motorist coverage?`,
                es: `¿Necesito cobertura de conductor sin seguro / con seguro insuficiente?`
            }, body: {
                en: `Yes, it's recommended. This coverage protects you if you're in an accident with a driver who doesn't have insurance or has insufficient coverage.`,
                es: `Sí, se recomienda. Esta cobertura lo protege si tiene un accidente con un conductor que no tiene seguro o tiene una cobertura insuficiente.`
            },
        },
        {
            title: {
                en: `Are there discounts available for auto insurance?`,
                es: `¿Hay descuentos disponibles para el seguro de auto?`
            }, body: {
                en: `Yes, discounts are often available for safe driving, bundling policies, completing defensive driving courses, and more.`,
                es: `Sí, a menudo hay descuentos disponibles para una conducción segura, la agrupación de pólizas, la finalización de cursos de manejo defensivo y más.`
            },
        },
        {
            title: {
                en: `How can I lower my auto insurance premium?`,
                es: `¿Cómo puedo reducir mi prima de seguro de auto?`
            }, body: {
                en: `You can lower your premium by maintaining a clean driving record, bundling policies, raising your deductible, and taking advantage of available discounts.`,
                es: `Puede reducir su prima manteniendo un historial de manejo limpio, agrupando pólizas, aumentando su deducible y aprovechando los descuentos disponibles.`
            },
        },
        {
            title: {
                en: `Does my credit score affect my auto insurance premium?`,
                es: `¿Mi puntaje de crédito afecta mi prima de seguro de auto?`
            }, body: {
                en: `In some states, yes. Many insurance companies use credit scores as a factor in determining premiums.`,
                es: `En algunos estados, sí. Muchas compañías de seguros utilizan las calificaciones crediticias como factor para determinar las primas.`
            },
        },
        {
            title: {
                en: `What happens if I let my auto insurance lapse?`,
                es: `¿Qué sucede si dejo que mi seguro de auto caduque?`
            }, body: {
                en: `Letting your insurance lapse can lead to higher premiums, potential fines, and legal consequences. It's important to maintain continuous coverage.`,
                es: `Dejar que su seguro caduque puede resultar en primas más altas, posibles multas y consecuencias legales. Es importante mantener una cobertura continua.`
            },
        },
        {
            title: {
                en: `How does filing a claim affect my premium?`,
                es: `¿Cómo afecta el registro de un reclamo a mi prima?`
            }, body: {
                en: `Filing a claim can lead to an increase in your premium, especially for at-fault accidents. Some insurers offer accident forgiveness programs.`,
                es: `Registrar un reclamo puede provocar un aumento en su prima, especialmente para accidentes con culpa. Algunas aseguradoras ofrecen programas de perdón de accidentes.`
            },
        },
        {
            title: {
                en: `Do I need insurance for a leased or financed car?`,
                es: `¿Necesito seguro para un automóvil arrendado o financiado?`
            }, body: {
                en: `Yes, most lenders and leasing companies require comprehensive and collision coverage to protect their investment.`,
                es: `Sí, la mayoría de los prestamistas y compañías de arrendamiento requieren cobertura integral y de colisión para proteger su inversión.`
            },
        },
        {
            title: {
                en: `Can I add someone to my auto insurance policy temporarily?`,
                es: `¿Puedo agregar a alguien temporalmente a mi póliza de seguro de auto?`
            }, body: {
                en: `Yes, you can typically add someone temporarily, but they may need to be a resident of your household.`,
                es: `Sí, generalmente puede agregar a alguien temporalmente, pero es posible que deba ser residente de su hogar.`
            },
        },
        {
            title: {
                en: `Does auto insurance cover rental cars?`,
                es: `¿El seguro de auto cubre los autos de alquiler?`
            }, body: {
                en: `Your auto insurance may provide coverage for rental cars, but it's essential to check your policy and consider additional coverage offered by the rental agency.`,
                es: `Su seguro de auto puede proporcionar cobertura para autos de alquiler, pero es esencial verificar su póliza y considerar la cobertura adicional que ofrece la agencia de alquiler.`
            },
        },
        {
            title: {
                en: `What is gap insurance, and do I need it?`,
                es: `¿Qué es el seguro de brecha y lo necesito?`
            }, body: {
                en: `Gap insurance covers the difference between the actual cash value of your vehicle and the amount you owe on a lease or loan. It's recommended for new cars and significant loans.`,
                es: `El seguro de brecha cubre la diferencia entre el valor en efectivo real de su vehículo y la cantidad que debe en un arrendamiento o préstamo. Se recomienda para autos nuevos y préstamos importantes.`
            },
        },
        {
            title: {
                en: `Can I change my auto insurance coverage at any time?`,
                es: `¿Puedo cambiar mi cobertura de seguro de auto en cualquier momento?`
            }, body: {
                en: `In most cases, yes. However, it's advisable to review your policy at renewal to avoid potential penalties.`,
                es: `En la mayoría de los casos, sí. Sin embargo, se recomienda revisar su póliza al momento de la renovación para evitar posibles sanciones.`
            },
        },
        {
            title: {
                en: `Is my personal property inside the car covered by auto insurance?`,
                es: `¿Mi propiedad personal dentro del auto está cubierta por el seguro de auto?`
            }, body: {
                en: `No, personal property is usually not covered by auto insurance. It falls under renters or homeowners insurance.`,
                es: `No, la propiedad personal generalmente no está cubierta por el seguro de auto. Está bajo el seguro de inquilinos o propietarios.`
            },
        },
        {
            title: {
                en: `How does my deductible affect my premium?`,
                es: `¿Cómo afecta mi deducible a mi prima?`
            }, body: {
                en: `A higher deductible typically results in a lower premium, but it means you'll pay more out of pocket if you file a claim.`,
                es: `Un deducible más alto generalmente resulta en una prima más baja, pero significa que pagará más de su bolsillo si presenta un reclamo.`
            },
        },
        {
            title: {
                en: `Can I get auto insurance without a license?`,
                es: `¿Puedo obtener seguro de auto sin licencia?`
            }, body: {
                en: `It's challenging but not impossible. Some insurers offer coverage for unlicensed drivers, but premiums may be higher.`,
                es: `Es difícil pero no imposible. Algunas aseguradoras ofrecen cobertura para conductores sin licencia, pero las primas pueden ser más altas.`
            },
        },
        {
            title: {
                en: `Do I need insurance for a parked car?`,
                es: `¿Necesito seguro para un auto estacionado?`
            }, body: {
                en: `Yes, liability insurance is often required even if your car is parked, especially if it's on public property.`,
                es: `Sí, a menudo se requiere un seguro de responsabilidad civil incluso si su automóvil está estacionado, especialmente si está en propiedad pública.`
            },
        },
        {
            title: {
                en: `Does auto insurance cover aftermarket modifications?`,
                es: `¿El seguro de auto cubre las modificaciones de posventa?`
            }, body: {
                en: `Aftermarket modifications may not be automatically covered. You may need additional coverage for custom parts and equipment.`,
                es: `Las modificaciones de posventa pueden no estar cubiertas automáticamente. Es posible que necesite cobertura adicional para piezas y equipos personalizados.`
            },
        },
        {
            title: {
                en: `How long does an accident stay on my insurance record?`,
                es: `¿Cuánto tiempo permanece un accidente en mi registro de seguro?`
            }, body: {
                en: `Accidents typically stay on your record for three to five years, depending on the severity and state regulations.`,
                es: `Los accidentes generalmente permanecen en su registro durante tres a cinco años, según la gravedad y las regulaciones estatales.`
            },
        },
        {
            title: {
                en: `Can I get auto insurance if I have a bad driving record?`,
                es: `¿Puedo obtener seguro de auto si tengo un mal historial de manejo?`
            }, body: {
                en: `Yes, but your options may be limited, and premiums may be higher. Shopping around is crucial in this case.`,
                es: `Sí, pero sus opciones pueden ser limitadas y las primas pueden ser más altas. En este caso, es crucial comparar precios.`
            },
        },
        {
            title: {
                en: `What is a deductible, and how does it work?`,
                es: `¿Qué es un deducible y cómo funciona?`
            }, body: {
                en: `A deductible is the amount you pay out of pocket before your insurance kicks in. Higher deductibles often result in lower premiums.`,
                es: `Un deducible es la cantidad que paga de su bolsillo antes de que entre en vigencia su seguro. Los deducibles más altos a menudo resultan en primas más bajas.`
            },
        },
        {
            title: {
                en: `Does auto insurance cover a friend driving my car?`,
                es: `¿El seguro de auto cubre a un amigo que conduce mi auto?`
            }, body: {
                en: `Coverage varies, but generally, if your friend has your permission to drive, they may be covered by your insurance. It's essential to check your policy.`,
                es: `La cobertura varía, pero en general, si su amigo tiene su permiso para conducir, puede estar cubierto por su seguro. Es esencial verificar su póliza.`
            },
        },
        {
            title: {
                en: `What is the difference between an insurance broker and an agent?`,
                es: `¿Cuál es la diferencia entre un corredor de seguros y un agente?`
            }, body: {
                en: `An insurance broker works with multiple companies to find you the best coverage, while an agent represents one specific insurance company.`,
                es: `Un corredor de seguros trabaja con varias compañías para encontrarle la mejor cobertura, mientras que un agente representa a una compañía de seguros específica.`
            },
        },
        {
            title: {
                en: `Can I get auto insurance with a foreign driver's license?`,
                es: `¿Puedo obtener seguro de auto con una licencia de conducir extranjera?`
            }, body: {
                en: `Yes, many insurers accept foreign driver's licenses. It's crucial to inform them of your unique situation.`,
                es: `Sí, muchas aseguradoras aceptan licencias de conducir extranjeras. Es crucial informarles su situación única.`
            },
        },
        {
            title: {
                en: `What is non-owner car insurance, and do I need it?`,
                es: `¿Qué es el seguro de auto para no propietarios y lo necesito?`
            }, body: {
                en: `Non-owner insurance provides liability coverage for drivers who don't own a car but frequently rent or borrow. It's often a good option for those without a personal vehicle.`,
                es: `El seguro para no propietarios proporciona cobertura de responsabilidad para los conductores que no son propietarios de un automóvil pero que alquilan o prestan con frecuencia. A menudo es una buena opción para aquellos sin un vehículo personal.`
            },
        },
        {
            title: {
                en: `Do I need insurance for a classic or vintage car?`,
                es: `¿Necesito seguro para un automóvil clásico o vintage?`
            }, body: {
                en: `Yes, but classic car insurance may offer specialized coverage tailored to the unique needs of vintage vehicles.`,
                es: `Sí, pero el seguro de automóvil clásico puede ofrecer una cobertura especializada adaptada a las necesidades únicas de los vehículos antiguos.`
            },
        },
        {
            title: {
                en: `How often should I review my auto insurance policy?`,
                es: `¿Con qué frecuencia debo revisar mi póliza de seguro de auto?`
            }, body: {
                en: `It's advisable to review your policy annually or when significant life changes occur, such as moving, buying a new car, or getting married. Regular reviews help ensure your coverage aligns with your current needs.`,
                es: `Se recomienda revisar su póliza anualmente o cuando ocurran cambios importantes en la vida, como mudarse, comprar un automóvil nuevo o casarse. Las revisiones regulares ayudan a garantizar que su cobertura se alinee con sus necesidades actuales.`
            },
        },
    ]
}
export default function () {
    return <>
        <HeadComponent title={'Frequency Asked Questions About Auto Insurance'}
            metaData="We're here to help you understand every aspect of auto insurance. If your question isn't answered below, don't hesitate to contact us!" />
        <HorizontalBanner {...verticalBannerContent} />
        <AutoSubNav />
        <TextSection {...contentSection1} />
        <FAQSection {...contentSection2} />
        <CTAPicWText category="auto" />
    </>
}