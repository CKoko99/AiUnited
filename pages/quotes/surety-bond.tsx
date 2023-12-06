//import SimpleForm from '../../components/Forms/Simple/Simple';
import VerticalBanner from '../../components/Content/Hero/VerticalBanner';
import PATHCONSTANTS from '../../constants/sitemap';
import SuretyImg1 from '../../public/assets/images/quotes/surety/surety1.png';
import SuretyImg2 from '../../public/assets/images/quotes/surety/surety2.png';
import SuretyImg3 from '../../public/assets/images/quotes/surety/surety3.png';
import MainGrid from '../../components/Content/Grids/MainGrid';
import ContactAndShop from '../../components/Content/FlexDigrams/Combo/ContactAndShop';
import TwoColumn from '../../components/Content/Grids/TwoColumn';
import HeadComponent from '../../components/Head';
import dynamic from 'next/dynamic';
const SimpleForm = dynamic(() => import('../../components/Forms/Simple/Simple'), { ssr: false });
const bannerContent = {
    title: {
        en: "Get a Surety Bond Today",
        es: "Obtenga un Seguro de Fianza Hoy"
    },
    subtitle: {
        en: `Ai United is dedicated to simplifying the world of Surety Bonds, ensuring you have the coverage you 
        need, precisely when you need it.`,
        es: `Ai United se dedica a simplificar el mundo de los bonos de garantía, asegurando que tenga la cobertura que
        necesitas, precisamente cuando lo necesitas.`
    },
    CTA: {
        text: {
            en: "Get a Quote",
            es: "Obtenga Una Cotización"
        },
        link: PATHCONSTANTS.QUOTES.SURETY.FORM
    },
    img: {
        src: SuretyImg1,
        alt: "Tourist"
    },
    audience: "Surety"
}
const contentSection1 = {
    largeHorizontalCard: {
        title: {
            en: "Why Surety Bond Insurance Matters",
            es: "¿Por qué es importante tener seguro de fianza?"
        },
        body: {
            en: [`Surety Bond insurance is an essential safeguard that provides financial security and peace of mind. It 
            acts as a three-way agreement between you (the principal), the entity requiring the bond (the obligee) and 
            the surety company.`,
                `Whether you're a construction professional, a business owner, or an individual seeking the protection and assurance 
            of Surety Bond insurance, we're here to be your unwavering partner.`
            ],
            es: [`El seguro de fianza es una salvaguarda esencial que brinda seguridad financiera y tranquilidad. Éste seguro
            actúa como un acuerdo de tres vías entre usted (el principal), la entidad que requiere el bono (el obligado) y
            la compañía de fianzas.`,
                `Ya sea un profesional de la construcción, propietario de un negocio o una persona que busca la protección y seguridad
            del seguro de fianza, estamos aquí para ser su socio inquebrantable.`
            ],
        },
    },
    largeVerticalCard: {
        body: {
            en: [`Join the thousands of Texans who switch to Ai United Insurance`],
            es: [`Únase a los miles de tejanos que cambian a Ai United Insurance`]
        },
        img: { src: SuretyImg2, alt: "car" }
    },
    smallCard1: {
        body: {
            en: [`See what our customers have to say about Ai United`],
            es: [`Vea lo que nuestros clientes tienen que decir sobre Ai United`]
        },
        CTA: {
            type: "secondary",
            text: { en: "Read Reviews", es: "Leer Reseñas" },
            link: PATHCONSTANTS.ABOUT.REVIEWS
        },
    },
    smallCard2: {
        body: {
            en: ['Get a free quote today from the comfort of your home'],
            es: ['Obtenga una cotización gratuita hoy desde la comodidad de su hogar']
        },
        CTA: {
            type: "primary",
            text: { en: "Get A Quote", es: "Obtener Una Cotización" },
            link: PATHCONSTANTS.QUOTES.SURETY.FORM
        },
    }
}
const contentSection2 = {
    title: {
        en: "Exploring Surety Bonds Coverage Options",
        es: "Explorando las Opciones de Cobertura de Seguro de Fianza"
    },
    body: {
        en: [
            `Surety bonds come in various forms to suit different needs:`,
            `• Contract Surety Bonds`,
            `• Commercial Surety Bonds`,
            `• Fidelity Surety Bonds`,
            `• Judicial Surety Bonds`,
            `• And More`
        ],
        es: [
            `Los bonos de garantía vienen en varias formas para adaptarse a diferentes necesidades:`,
            `• Seguro de Fianza de Contrato`,
            `• Seguro de Fianza Comercial`,
            `• Seguro de Fianza de Fidelidad`,
            `• Seguro de Fianza Judicial`,
            `• Y Más`
        ]
    },
    img: { src: SuretyImg3, alt: "car" },
}
const formContent = {
    id: "Surety-quote",
    conversion: "Surety",
    title: {
        en: "Surety Bond Quote", es: "Cotización de Seguro de Fianza"
    },
    subtitle: { en: "Start a free surety bond quote to see the savings", es: `Comience una cotización gratuita de seguro de fianza para ver los ahorros` },
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
            title: { en: "Type of Organization", es: "Tipo de organización" },
            type: "select",
            required: true,
            answers: [
                { en: "Individual", es: "Individual" },
                { en: "Partnership", es: "Asociación" },
                { en: "Corporation", es: "Corporación" },
                { en: "LLC", es: "LLC" },
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
            title: { en: "Years of experience in the field", es: "Años de experiencia en el campo" },
            type: "input",
            validation: "number",
            required: true,
        },
        {
            title: { en: "How many additional owners are there?", es: "¿Cuántos propietarios adicionales hay?" },
            type: "input",
            validation: "number",
            required: true,
        },
        {
            title: { en: "How many years have you been in business?", es: "¿Cuántos años lleva en el negocio?" },
            type: "input",
            validation: "number",
            required: true,
        },
        {
            title: { en: "What is the amount of the bond you need?", es: "¿Cuál es la cantidad del bono que necesita?" },
            type: "input",
            validation: "number",
            required: true,
        },
    ]
}
export default function () {
    return <>
        <HeadComponent title={'Surety Bond | Get a Free Surety Bond Quote'}
            metaData={'Get a Free Surety Bond Quote with Ai United Insurnace Today'} />
        <VerticalBanner {...bannerContent} />
        <MainGrid  {...contentSection1} />
        <TwoColumn {...contentSection2} />
        <ContactAndShop quoteLink={PATHCONSTANTS.QUOTES.SURETY.FORM} />
        <SimpleForm {...formContent} />
    </>
}