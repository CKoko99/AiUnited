import ContactAndShop from "../../components/Content/FlexDigrams/Combo/ContactAndShop";
import MainGrid from "../../components/Content/Grids/MainGrid";
import TwoColumn from "../../components/Content/Grids/TwoColumn";
import VerticalBanner from "../../components/Content/Hero/VerticalBanner";
import HeadComponent from "../../components/Head";
import PATHCONSTANTS from "../../constants/sitemap";
import RentersImg1 from "../../public/assets/images/quotes/renters/renter1.png";
import RentersImg2 from "../../public/assets/images/quotes/renters/renter2.png";
import RentersImg3 from "../../public/assets/images/quotes/renters/renter3.png";

import SimpleForm from "components/Forms/Simple/Simple";
const bannerContent = {
    title: {
        en: "Get Renters Insurance Today",
        es: "Obtenga Seguro De Inquilinos Hoy",
    },
    subtitle: {
        en: `Protect yourself and your valuables by getting low-cost renters insurance that covers the content of 
        an apartment or home that you'll be renting.`,
        es: `Protéjase a sí mismo y a sus objetos de valor obteniendo un seguro de inquilinos de bajo costo que cubrirá el contenido de un apartamento o casa que alquilará.`,
    },
    CTA: {
        color: "secondary",
        text: {
            en: "Get a Quote",
            es: "Obtener una cotización",
        },
        link: `${PATHCONSTANTS.QUOTES.RENTER.FORM}`,
    },
    img: {
        src: RentersImg1,
        alt: "renters",
    },
    audience: "Renters",
};

const contentSection2 = {
    largeHorizontalCard: {
        title: {
            en: "Why you need renters insurance",
            es: `¿Por Qué Necesita un Seguro de Inquilinos?`,
        },
        body: {
            en: [
                `Many landlords in America require tenants to purchase rental insurance.`,
                `The good news is that we can help you find an affordable policy at the comfort of your home.`,
            ],
            es: [
                `Muchos propietarios en Estados Unidos requieren que los inquilinos compren un seguro de alquiler`,
                `La buena noticia es que podemos ayudarlo a encontrar una póliza accesible desde la comodidad de su hogar`,
            ],
        },
    },
    largeVerticalCard: {
        body: {
            en: [
                `Join the thousands of Texans who switch to Ai United Insurance.`,
            ],
            es: [
                `Únase a los miles de tejanos que cambian a Ai United Insurance`,
            ],
        },
        img: { src: RentersImg2, alt: "apartment" },
    },
    smallCard1: {
        body: {
            en: [`Visit one of our offices located throughout Texas`],
            es: [`Visite una de nuestras oficinas ubicadas en todo Texas`],
        },
        CTA: {
            type: "secondary",
            text: { en: "Find a Store", es: "Encuentra una tienda" },
            link: PATHCONSTANTS.LOCATIONS.INDEX,
        },
    },
    smallCard2: {
        body: {
            en: ["Get a free quote today from the comfort of your home"],
            es: [
                "Obtenga una cotización gratuita hoy desde la comodidad de su hogar",
            ],
        },
        CTA: {
            type: "primary",
            text: { en: "Get A Quote", es: "Obtener Una Cotización" },
            link: PATHCONSTANTS.QUOTES.RENTER.FORM,
        },
    },
};
const contentSection3 = {
    title: {
        en: "What does renters insurance cover?",
        es: "¿Qué Cubre el Seguro de Inquilinos?",
    },
    body: {
        en: [
            `Renters insurance is an insurance policy that can cover theft, water backup damages, certain natural disasters, bodily injuries, and more in a rented property.`,
            ``,
            `If you rent an apartment, home or even a dorm, renters insurance is recommended for protecting your space and belongings in a covered accident.`,
        ],

        es: [
            `El seguro de inquilinos es una póliza de seguro que puede cubrir en caso de robo, daños por acumulación de agua, ciertos desastres naturales, lesiones corporales y más en una propiedad alquilada.`,
            ``,
            `Si alquila un apartamento, una casa o incluso un dormitorio, se recomienda un seguro de inquilinos para proteger su espacio y pertenencias en caso de un accidente cubierto.`,
        ],
    },
    img: { src: RentersImg3, alt: "Home" },
};
const formContent = {
    id: "Renter-quote",
    conversion: "Renters",
    spreadsheet: "Store 1",
    title: {
        en: "Renters Insurance Quote",
        es: "Cotización de Seguro de Inquilinos",
    },
    subtitle: {
        en: "Start a free renters insurance quote to see the savings.",
        es: `Comience una cotización gratuita de seguro de inquilinos para ver los ahorros`,
    },
    questions: [
        {
            subGroup: {
                en: "Personal Information",
                es: "Información personal",
            },
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
            title: { en: "Date of Birth", es: "Fecha de nacimiento" },
            type: "date",
            required: true,
            fullWidth: true,
        },
        {
            title: { en: "Residence Type", es: "Tipo de residencia" },
            type: "select",
            required: true,
            answers: [
                { en: "Single Family", es: "Familia unida" },
                { en: "Townhouse / Condo", es: "Casa adosada / Condominio" },
                { en: "Multi Family", es: "Familia múltiple" },
                { en: "High Rise / Mid Rise", es: "Rascacielos / Mid Rise" },
                { en: "Country Home / Acreage", es: "Casa de campo / Terreno" },
            ],
            fullWidth: true,
        },
        {
            title: {
                en: "What is the value of your personal property?",
                es: "¿Cuál es el valor de su propiedad personal?",
            },
            outsideLabel: true,
            type: "input",
            required: true,
        },
        {
            title: {
                en: "How much Liability?",
                es: "¿Cuánta responsabilidad?",
            },
            outsideLabel: true,
            type: "input",
            required: true,
        },
        {
            title: {
                en: "Is there a fire alarm on the property?",
                es: "¿Hay una alarma de incendio en la propiedad?",
            },
            type: "radio",
            required: true,
            answers: [
                { en: "Yes", es: "Sí" },
                { en: "No", es: "No" },
            ],
            fullWidth: true,
        },
        {
            title: {
                en: "Is there a burglar alarm on the property?",
                es: "¿Hay una alarma contra robos en la propiedad?",
            },
            type: "radio",
            required: true,
            answers: [
                { en: "Yes", es: "Sí" },
                { en: "No", es: "No" },
            ],
            fullWidth: true,
        },
        {
            title: {
                en: "Any Additional Information?",
                es: "¿Alguna información adicional?",
            },
            type: "input",
            largeText: true,
            fullWidth: true,
        },
    ],
};
export default function () {
    return (
        <>
            <HeadComponent
                title={"Renter Insurance | Get a Free Renter Insurance Quote"}
                metaData={
                    "Secure your home with a free Renter Insurance quote from Ai United Insurance. Protect your family's peace of mind today."
                }
            />
            <VerticalBanner {...bannerContent} />
            <MainGrid {...contentSection2} />
            <TwoColumn {...contentSection3} />
            <ContactAndShop quoteLink={PATHCONSTANTS.QUOTES.RENTER.FORM} />
            <SimpleForm {...formContent} />
        </>
    );
}
