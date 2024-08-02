import TextSection from "@/components/Content/TextSection";
import ContactAndLocations from "../../components/Content/FlexDigrams/Combo/ContactAndLocations";
import Hero from "../../components/Content/Hero/Hero";
import BannerImg from "../../public/assets/images/about/contact/banner.png";
import SimpleForm from "components/Forms/Simple/Simple";
import HeadComponent from "@/components/Head";

const headContent = {
    title: "Ai United Insurance - Contact Us",
    metaData:
        "Contact Ai United Insurance for all your insurance needs. We are here to help you with all your insurance needs.",
};

const heroContent = {
    title: {
        en: "Contact Our Team",
        es: "Contacte a Nuestro Equipo",
    },
    subtitle: {
        en: `Ai United Insurance is an independent agency located in Texas. We service everything 
    from auto insurance, motorcycle insurance, home insurance, Mexico insurance, and much more. 
    At Ai United Insurance, we pride ourselves on being innovative and leading a new wave of change 
    within the insurance industry.
    `,
        es: `Ai United Insurance son agencias independientes ubicadas en Texas. Ofrecemos 
    desde seguros de auto, hasta seguros de motocicletas, seguros de vivienda, seguros de México y
    mucho más. En Ai United Insurance nos enorgullecemos de ser innovadores y liderar un
    nueva ola de cambio dentro de la industria del seguro.`,
    },
    image: {
        src: BannerImg,
        alt: "Contact Us",
    },
    opacity: 0.4,
    titleComponent: "h1" as const,
    align: "left",
};
const formContent = {
    conversion: "Home",
    spreadsheet: "HR Dept",
    title: {
        en: "Contact Us",
        es: "Contáctenos",
    },
    subtitle: {
        en: "Please fill out the form below and we will get back to you as soon as possible.",
        es: "Por favor complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.",
    },
    questions: [
        {
            title: {
                en: "First Name",
                es: "Nombre",
            },
            type: "input",
            required: true,
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
            title: {
                en: "Message",
                es: "Mensaje",
            },
            largeText: true,
            type: "input",
            required: true,
            fullWidth: true,
        },
    ],
};

export default function () {
    return (
        <>
            {/*
      <Hero {...heroContent} />
      */}
            <HeadComponent {...headContent} />
            <TextSection {...heroContent} />
            <ContactAndLocations hideTitle />
            <SimpleForm {...formContent} />
        </>
    );
}
