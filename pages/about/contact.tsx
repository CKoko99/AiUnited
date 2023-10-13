import JotFormEmbed from 'react-jotform-embed';
import SimpleForm from '../../components/Forms/Simple/Simple';

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
      type: "textarea",
      required: true,
      fullWidth: true,
    },
  ],
};
export default function () {
  return (
    <>
      <SimpleForm {...formContent} />
      <JotFormEmbed src="https://form.jotform.com/80783795128166" />
    </>

  )
}
