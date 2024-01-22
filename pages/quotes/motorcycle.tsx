import PATHCONSTANTS from '../../constants/sitemap';
import MainGrid from '../../components/Content/Grids/MainGrid';
import TwoColumn from '../../components/Content/Grids/TwoColumn';
import VerticalBanner from '../../components/Content/Hero/VerticalBanner';
import MotoImg1 from '../../public/assets/images/quotes/motorcycle/motorcycle1.png';
import MotoImg2 from '../../public/assets/images/quotes/motorcycle/helmet2.png';
import MotoImg3 from '../../public/assets/images/quotes/motorcycle/motorcycle3.png';
import ContactAndShop from '../../components/Content/FlexDigrams/Combo/ContactAndShop';
import HeadComponent from '../../components/Head';
import SimpleForm from 'components/Forms/Simple/Simple';

const bannerContent = {
    title: {
        en: "Get Motorcycle Insurance Today",
        es: "Obtenga Seguro De Motocicleta Hoy"
    },
    subtitle: {
        en: `Secure both yourself and your valuables with affordable motorcycle insurance, providing coverage in case of an accident.`,
        es: `Protéjase a sí mismo y a sus objetos de valor obteniendo un seguro de motocicleta de bajo costo que lo cubrirá en caso de un accidente.`
    },
    img: {
        src: MotoImg1,
        alt: "motorcycle",
    },
    CTA: {
        text: {
            en: "Get a Quote",
            es: "Obtenga una Cotización"
        },
        link: `${PATHCONSTANTS.QUOTES.MOTORCYCLE.FORM}`,
    },
    audience: "Motorcycle"
}
const contentSection2 = {
    largeHorizontalCard: {
        title: {
            en: "Protecting Your Passion and Your Pocket",
            es: "Protegiendo su Pasión y Su Bolsillo"
        },
        body: {
            en: [`Whether you're a seasoned rider or a beginner, having the right insurance coverage is not just a 
            legal requirement in many places. It's also a great decision to protect your investment 
            and your well-being.
            `,],
            es: [`Ya sea que sea un motociclista experimentado o un principiante, tener la cobertura de seguro adecuada no es solo un requisito legal en muchos lugares,
                sino que también es una decisión inteligente para proteger su inversión y su bienestar.`,]
        }
    },
    largeVerticalCard: {
        body: {
            en: ['Join the thousands of people who have saved money by getting a free motorcycle insurance quote from us.'],
            es: ['Únase a las miles de personas que han ahorrado dinero obteniendo una cotización gratuita de seguro de motocicleta con nosotros.']
        },
        img: {
            src: MotoImg2,
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
            es: ["Obtenga una cotización gratuita hoy desde la comodidad de su hogar."]
        },
        CTA: {
            text: {
                en: "Get a Quote",
                es: "Obtenga una cotización"
            },
            link: `${PATHCONSTANTS.QUOTES.MOTORCYCLE.FORM}`,
            type: "primary"
        }
    }
}
const contentSection3 = {
    title: {
        en: "Covering Every Curve: Motorcycle Insurance Options",
        es: "Cubriendo Cada Curva: Opciones de Seguro de Motocicleta"
    },
    body: {
        en: [
            `At Ai United, we understand that every driver is unique. That's why we offer a variety of motorcycle insurance coverages to match your needs.`,
            `• Liability Insurance`,
            `• Collision Coverage`, `• Comprehensive Coverage`, `• And More`
        ],
        es: [
            `En Ai United, entendemos que cada conductor es único. Es por eso que ofrecemos una variedad de coberturas de seguro de motocicleta para satisfacer sus necesidades.`,
            `• Seguro de Responsabilidad`, `• Cobertura de Colisión`, `• Seguro a Todo Riesgo`,
            `• Y Más`
        ]
    },
    img: {
        src: MotoImg3,
        alt: "Motorcycle",
    }
}
const formContent = {
    id: "Motorcycle-quote",
    conversion: "Motorcycle",
    title: { en: "Motorcycle Insurance Quote", es: "Cotización de Seguro de Motocicleta" },
    subtitle: { en: "Start a free motorcycle insurance quote to see the savings.", es: `Comience una cotización gratuita de seguro de motocicleta para ver los ahorros` },
    questions: [
        {
            subGroup: { en: "Personal Information", es: "Información personal" },
            title: { en: "First Name", es: "Nombre" },
            type: "input",
            required: true
        },
        {
            title: { en: "Last Name", es: "Apellido" },
            type: "input",
            required: true,
        },
        {
            title: {
                en: "Phone Number",
                es: "Número de teléfono",
            },
            validation: "phone",
            type: "input",
            required: true,
        },
        {
            title: {
                en: "Email",
                es: "Correo electrónico",
            },
            validation: "email",
            type: "input",
            required: true,
        },
        {
            subGroup: { en: "Address", es: "Dirección" },
            title: {
                en: "Street Address",
                es: "Dirección",
            },
            type: "input",
            required: true,
            fullWidth: true,
        },
        {
            title: {
                en: "Street Address 2",
                es: "Dirección 2",
            },
            //fullWidth: true,
            type: "input",
        },
        {
            title: {
                en: "City",
                es: "Ciudad",
            },
            type: "input",
            required: true,
        },
        {
            title: {
                en: "State/ Province",
                es: "Estado / Provincia",
            },
            type: "input",
            required: true,
        },
        {
            title: {
                en: "Zip Code",
                es: "Código postal",
            },
            type: "input",
            required: true,
            validation: "zip",
        },
        {
            title: {
                en: "Do you currently have motorcycle insurance?",
                es: "¿Actualmente tiene seguro de motocicleta?",
            },
            type: "radio",
            required: true,
            fullWidth: true,
            answers: [
                { en: "Yes", es: "Sí" },
                { en: "No", es: "No" },
            ],
        },
        {
            title: {
                en: "Vehicle Identification Number (VIN)",
                es: "Número de identificación del vehículo (VIN)",
            },
            type: "input",
            required: true,
            outsideLabel: true,
            label: {
                en: "Input VIN",
                es: "Ingrese VIN",
            }
        },
        {
            title: {
                en: "Gender",
                es: "Género",
            },
            type: "radio",
            required: true,
            fullWidth: true,
            answers: [
                { en: "Male", es: "Masculino" },
                { en: "Female", es: "Femenino" },
            ]
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
            title: {
                en: "Date of Birth",
                es: "Fecha de nacimiento",
            },
            type: "date",
            fullWidth: true,
            required: true,
        },
        {
            title: {
                en: "Any accidents or violations in the past 3 years?",
                es: "¿Ha tenido algún  accidente o violación en los últimos 3 años?",
            },
            type: "radio",
            fullWidth: true,
            required: true,
            answers: [
                { en: "Yes", es: "Sí" },
                { en: "No", es: "No" },
            ]
        }
    ]
}
export default function () {
    return <>
        <HeadComponent title={'Motorcycle Insurance | Get a Free Motorcycle Insurance Quote'}
            metaData={'Get a Free Motorcycle Insurance Quote with Ai United Insurance Today'} />
        <VerticalBanner {...bannerContent} />
        <MainGrid {...contentSection2} />
        <TwoColumn {...contentSection3} />
        <ContactAndShop quoteLink={PATHCONSTANTS.QUOTES.MOTORCYCLE.FORM} />
        <SimpleForm {...formContent} />
    </>
}