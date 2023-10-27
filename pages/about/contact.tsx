import JotFormEmbed from 'react-jotform-embed';
import SimpleForm from '../../components/Forms/Simple/Simple';
import ContactAndLocations from '../../components/Content/FlexDigrams/Combo/ContactAndLocations';
import Hero from '../../components/Content/Hero/Hero';

const heroContent = {
  title: {
    en: "Get in Touch",
    es: "Póngase en contacto",
  },
  subtitle: {
    en: `We'd love to hear from you, if you need to contact us for any reason, or 
    complete the form below and we'll get back to you as soon as possible.`,
    es: `Nos encantaría saber de usted, si necesita comunicarse con nosotros por cualquier motivo, o
    complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.`,
  },
}
const formContent = {
  title: {
    en: "Contact Us",
    es: "Contáctenos",
  },
  subtitle: {
    en: "Please fill out the form below and we will get back to you as soon as possible.",
    es: "Por favor complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible."
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
      <Hero {...heroContent} />
      <ContactAndLocations />
      <SimpleForm {...formContent} />
      <JotFormEmbed src="https://form.jotform.com/80783795128166" />
    </>

  )
}
