import PATHCONSTANTS from '../../constants/sitemap';
import MainGrid from '../../components/Content/Grids/MainGrid';
import TwoColumn from '../../components/Content/Grids/TwoColumn';
import VerticalBanner from '../../components/Content/Hero/VerticalBanner';
import HomeImg1 from '../../public/assets/images/quotes/home/home1.png';
import HomeImg2 from '../../public/assets/images/quotes/home/home2.png';
import HomeImg3 from '../../public/assets/images/quotes/home/home3.png';
import ContactAndShop from '../../components/Content/FlexDigrams/Combo/ContactAndShop';
import HeadComponent from '../../components/Head';
import dynamic from 'next/dynamic';
const SimpleForm = dynamic(() => import('../../components/Forms/Simple/Simple'), { ssr: false });

const bannerContent = {
    title: {
        en: "Get Home Insurance Today",
        es: "Obtenga Seguro De Casa Hoy"
    },
    subtitle: {
        en: `Home insurance is a crucial safeguard for your most significant investment - your home.
         It provides financial protection against unforeseen events and disasters.`,
        es: `El seguro de casa es una protección crucial para su inversión más importante: su casa.
            Proporciona protección financiera contra eventos imprevistos y desastres.`
    },
    img: {
        src: HomeImg1,
        alt: "Home",
    },
    CTA: {
        text: {
            en: "Get a Quote",
            es: "Obtenga una cotización"
        },
        link: `${PATHCONSTANTS.QUOTES.HOME.FORM}`,
    },
    audience: "Home"
}
const contentSection2 = {
    largeHorizontalCard: {
        title: {
            en: "Why Home Insurance is Your Shield Against the Unexpected",
            es: "El Seguro de Casa es su Escudo Contra lo Inesperado"
        },
        body: {
            en: [`Home insurance covers your dwelling and personal belongings in case of damage or theft. This means your home 
            and the things you value are protected.`,
                `Having home insurance offers peace of mind. You can rest easy knowing that your home and belongings are secure, and you won't
        face a financial crisis if disaster strikes.`
            ],
            es: [`El seguro de casa cubre su vivienda y sus pertenencias personales en caso de daños o robos. Esto significa que su casa
            y sus cosas de valor están protegidas.`,
                `Tener un seguro de casa ofrece tranquilidad. Puede descansar tranquilo sabiendo que su casa y sus pertenencias están seguros, y usted no
        enfrentar una crisis financiera si ocurre un desastre.`
            ]
        },
        img: {
            src: HomeImg2,
            alt: "family"
        }
    },
    largeVerticalCard: {
        body: {
            en: ['Join the thousands of people who switched to Ai United Insurance'],
            es: ['Únase a los miles de personas que cambiaron a Ai United Insurance']
        },
        img: {
            src: HomeImg2,
            alt: "helmet"
        }
    },
    smallCard1: {
        body: {
            en: ["Visit one of our offices located all across the country."],
            es: ["Visite una de nuestras oficinas ubicadas en todo el país."]
        },
        CTA: {
            text: {
                en: "Find a Store",
                es: "Encuentra una ubicación"
            },
            link: PATHCONSTANTS.LOCATIONS.INDEX,
            type: "secondary"
        }
    },
    smallCard2: {
        body: {
            en: ["Get a free quote today from the comfort of your home."],
            es: ["Obtenga una cotización gratuita hoy desde la comodidad de su casa."]
        },
        CTA: {
            text: {
                en: "Get a Quote",
                es: "Obtenga una cotización"
            },
            link: PATHCONSTANTS.QUOTES.HOME.FORM,
            type: "primary"
        }
    }
}
const contentSection3 = {
    title: {
        en: "Exploring Home Insurance Coverage Options",
        es: "Explorando las Opciones de Cobertura de Seguro de Casa"
    },
    body: {
        en: [`Your home represents your greatest financial asset, and at Ai United Insurance we are committed to assisting you in
        insuring it.
        `,
            `That's why we offer a variety of home insurance coverages to match your needs.`,
            ``,
            `• Liability Insurance`,
            `• Dwelling Coverage`, `• Other Structures Coverage`, `• Personal Property Coverage`,
            `• Loss of Use Coverage`,],

        es: [`Su hogar representasu principal recurso financiero, y en Ai United Insurance estamos comprometidos en 
        asistirle para asegurarlo.`,
            `Es por eso que ofrecemos una variedad de coberturas de seguro de casa para satisfacer sus necesidades.`,
            ``,
            `• Cobertura de vivienda`, `• Cobertura de otras estructuras`, `• Cobertura de propiedad personal`,
            `• Cobertura de pérdida de uso`,
            `• Seguro de responsabilidad`,
        ]
    },
    img: {
        src: HomeImg3,
        alt: "Motorcycle",
    }
}
const formContent = {
    id: "Home-quote",
    conversion: "Home",
    title: {
        en: "Home Insurance Quote", es: "Cotización de Seguro de Casa"
    },
    subtitle: { en: "Start a free home insurance quote to see the savings", es: `Comience una cotización gratuita de seguro de casa para ver los ahorros` },
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
            title: { en: "Date of Birth", es: "Fecha de nacimiento" },
            type: "date",
            required: true,
            fullWidth: true,
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
            subGroup: { en: "Home Information", es: "Información de la casa" },
            title: { en: "Do you own or rent this property?", es: "¿Es propietario o alquila esta propiedad?" },
            type: "radio",
            required: true,
            answers: [
                { en: "Own", es: "Propio" },
                { en: "Rent", es: "Alquilar" },
            ],
            fullWidth: true,
        },
        {
            title: { en: "Property Type", es: "Tipo de propiedad" },
            type: "select",
            required: true,
            answers: [
                { en: "Single Family Home", es: "Casa Unifamiliar" },
                { en: "Apartment", es: "Apartamento" },
                { en: "Duplex", es: "Duplex" },
                { en: "Condominium", es: "Condominio" },
                { en: "Mobile Home", es: "Casa Móvil" },
                { en: "Town Home", es: "Casa Adosada" },
            ],
            fullWidth: true,

        },
        {
            title: { en: "Approximate year built", es: "Año de construcción aproximado" },
            outsideLabel: true,
            type: "input",
            required: true,
            validation: "number",
            label: { en: "Year", es: "Año" }
        },
        {
            title: { en: "Approximate square footage", es: "Pies cuadrados aproximados" },
            outsideLabel: true,
            label: { en: "Square Footage", es: "Pies cuadrados" },
            type: "input",
            required: true,
            validation: "number",
        },
        {
            title: { en: "Number of stories", es: "Número de pisos" },
            type: "select",
            required: true,
            answers: [
                { en: "1", es: "1" },
                { en: "2", es: "2" },
                { en: "3", es: "3" },
            ],
            fullWidth: true,

        },
        {
            title: { en: "Have you reported any claims or losses within the past 3 years?", es: "¿Ha reportado algún reclamo o pérdida en los últimos 3 años?" },
            type: "radio",
            required: true,
            answers: [
                { en: "Yes", es: "Sí" },
                { en: "No", es: "No" },
            ],
            fullWidth: true,

        },

    ]
}
export default function () {
    return <>
        <HeadComponent title={'Home Insurance | Get a Free Home Insurance Quote'}
            metaData={'Get a Free Home Insurance Quote with Ai United Insurnace Today'} />
        <VerticalBanner {...bannerContent} />
        <MainGrid {...contentSection2} />
        <TwoColumn {...contentSection3} />
        <ContactAndShop quoteLink={PATHCONSTANTS.QUOTES.HOME.FORM} />
        <SimpleForm {...formContent} />
    </>
}