import ContactAndShop from '../../components/Content/FlexDigrams/Combo/ContactAndShop';
import MainGrid from '../../components/Content/Grids/MainGrid';
import TwoColumn from '../../components/Content/Grids/TwoColumn';
import VerticalBanner from '../../components/Content/Hero/VerticalBanner';
import PATHCONSTANTS from '../../constants/sitemap';
import Sr22Img1 from "../../public/assets/images/quotes/sr22/sr1.png";
import Sr22Img2 from "../../public/assets/images/quotes/sr22/sr2.png";
import Sr22Img3 from "../../public/assets/images/quotes/home/home2.png";
import HeadComponent from '../../components/Head';

import dynamic from 'next/dynamic';
const SimpleForm = dynamic(() => import('../../components/Forms/Simple/Simple'), { ssr: false });

const bannerContent = {
    title: {
        en: "Get SR-22 Insurance Today",
        es: "Obtenga Seguro SR-22 Hoy"
    },
    subtitle: {
        en: `It's essential to understand why you might need SR-22 insurance and how it can help you get back on the road.`,
        es: `Es esencial comprender por qué puede necesitar un seguro SR-22 y cómo puede ayudarlo a volver a la carretera.`
    },
    CTA: {
        color: "secondary",
        text: {
            en: "Get a Quote",
            es: "Obtener una cotización"
        },
        link: PATHCONSTANTS.QUOTES.SR22.FORM
    },
    img: {
        src: Sr22Img1,
        alt: "renters"
    },
    audience: "SR22"
}

const contentSection2 = {
    title: {
        en: "Why You May Need SR-22 Insurance",
        es: `¿Por Qué Puede Necesitar un Seguro SR-22?`
    },
    body: {
        en: [`• **DUI/DWI Convictions:** If you've been convicted of a DUI or DWI, you'll likely need SR-22 insurance to 
            reinstate your driver's license`,
            `• **Multiple Traffic Violations:** If you've received multiple traffic violations in a short period, you might need SR-22 insurance`,
            `• **Uninsured Accidents:** If you've been involved in an accident while uninsured, you might require SR-22 insurance to demonstrate
             your commitment to financial responsibility and compliance with the law`
        ],
        es: [`• **Condenas por DUI / DWI:** si ha sido condenado por un DUI o DWI, es probable que necesite un seguro SR-22 para
            reactivar su licencia de conducir`,
            `• **Múltiples violaciones de tráfico:** si ha recibido múltiples violaciones de tráfico en un corto período, es posible que necesite un seguro SR-22`,
            `• **Accidentes sin seguro:** si ha estado involucrado en un accidente sin seguro, es posible que necesite un seguro SR-22 para demostrar
            su compromiso con la responsabilidad financiera y el cumplimiento de la ley`
        ],
    },
    img: { src: Sr22Img2, alt: "apartment" }


}
const contentSection3 = {
    largeHorizontalCard: {
        title: {
            en: "Different Types of SR-22 Insurance",
            es: `Diferentes Tipos de Seguro SR-22`
        },
        body: {
            en: [`When it comes to SR-22 insurance, you have some flexibility in choosing coverage options
             that suit your situation. Here are some of the most common types of SR-22 insurance:`,
                `• Liability Coverage`,
                `• Non-Owner SR-22`,
                `• Full Coverage`,
                `• High-Risk SR-22`
            ],
            es: [`Cuando se trata de seguro SR-22, tiene cierta flexibilidad para elegir opciones de cobertura
            que se adapte a su situación. Estos son algunos de los tipos más comunes de seguro SR-22:`,
                `• Cobertura de Responsabilidad`,
                `• SR-22 Sin Propietario`,
                `• Cobertura Completa`,
                `• SR-22 de Alto Riesgo`
            ]
        },
    },
    largeVerticalCard: {
        body: {
            en: [`Join the thousands of Texans who switch to Ai United Insurance.`],
            es: [`Únase a los miles de tejanos que cambian a Ai United Insurance`]
        },
        img: { src: Sr22Img3, alt: "apartment" }
    },
    smallCard1: {
        body: {
            en: [`Visit one of our offices located throughout Texas.`],
            es: [`Visite una de nuestras oficinas ubicadas en todo Texas`]
        },
        CTA: {
            type: "secondary",
            text: { en: "Find a Store", es: "Encuentra una tienda" },
            link: PATHCONSTANTS.LOCATIONS.INDEX
        },
    },
    smallCard2: {
        body: {
            en: ['Get a free quote today from the comfort of your home.'],
            es: ['Obtenga una cotización gratuita hoy desde la comodidad de su hogar']
        },
        CTA: {
            type: "primary",
            text: { en: "Get A Quote", es: "Obtener Una Cotización" },
            link: PATHCONSTANTS.QUOTES.SR22.FORM
        },
    }
}
const formContent = {
    id: "SR22-quote",
    conversion: "SR22",
    title: {
        en: "SR-22 Insurance Quote", es: "Cotización de Seguro de SR-22"
    },
    subtitle: { en: "Start a free SR-22 insurance quote to see the savings.", es: `Comience una cotización gratuita de seguro SR-22 para ver los ahorros` },
    questions: [
        {
            subGroup: { en: "Personal Information", es: "Información personal" },
            title: { en: "First Name", es: "Nombre" },
            type: "input",
            required: true,
        },
        {
            title: { en: "Last Name", es: "Apellido" },
            type: "input",
            required: true,
        },
        {
            title: { en: "Email", es: "Correo electrónico" },
            type: "input",
            required: true,
            validation: "email",
        },
        {
            title: { en: "Phone Number", es: "Número de teléfono" },
            type: "input",
            required: true,
            validation: "phone",
        },

        {
            subGroup: { en: "Address", es: "Dirección" },
            title: { en: "Street Address", es: "Dirección" },
            type: "input",
            required: true,
            fullWidth: true,
        },
        {
            title: { en: "Street Address 2", es: "Dirección 2" },
            type: "input",
        },
        {
            title: { en: "City", es: "Ciudad" },
            type: "input",
            required: true,
        },
        {
            title: { en: "State / Province", es: "Estado / Provincia" },
            type: "input",
            required: true,
        },
        {
            title: { en: "Zip Code", es: "Código postal" },
            type: "input",
            required: true,
            validation: "zip",
        },
        {
            title: { en: "Do you currently have insurance?", es: "¿Tiene actualmente seguro?" },
            type: "radio",
            required: true,
            fullWidth: true,
            answers: [
                { en: "Yes", es: "Sí" },
                { en: "No", es: "No" },
            ],
        },
        {
            title: { en: "Vehicle Identification Number (VIN)", es: "Número de identificación del vehículo (VIN)" },
            type: "input",
            required: true,
            outsideLabel: true,
            label: { en: "Input VIN", es: "Introducir VIN" },
        },
        {
            title: { en: "Gender", es: "Género" },
            type: "radio",
            required: true,
            answers: [
                { en: "Male", es: "Masculino" },
                { en: "Female", es: "Femenino" },
            ],
            fullWidth: true,

        },
        {
            title: {
                en: "Marital Status",
                es: "Estado civil",
            },
            type: "select",
            fullWidth: true,
            required: true,
            answers: [
                { en: "Single", es: "Soltero" },
                { en: "Married", es: "Casado" },
                { en: "Divorced", es: "Divorciado" },
                { en: "Widowed", es: "Viudo" },
                { en: "Separated", es: "Separado" },
            ]
        },
        {
            title: { en: "Date of Birth", es: "Fecha de nacimiento" },
            type: "date",
            required: true,
            fullWidth: true,
        },
        {
            title: { en: "Any accidents or violations in the past 3 years?", es: "¿Ha tenido algún accidente o violación en los últimos 3 años?" },
            type: "radio",
            required: true,
            fullWidth: true,
            answers: [
                { en: "Yes", es: "Sí" },
                { en: "No", es: "No" },
            ],
        }
    ]
}
export default function () {
    return <>
        <HeadComponent title={'SR-22 Insurance | Get a Free SR-22 Insurance Quote'}
            metaData={'Get a Free SR-22 Insurance Quote with Ai United Insurance Today'} />
        <VerticalBanner {...bannerContent} />
        <MainGrid {...contentSection3} />
        <TwoColumn {...contentSection2} />
        <ContactAndShop quoteLink={PATHCONSTANTS.QUOTES.SR22.FORM} />

        <SimpleForm {...formContent} />
    </>
}