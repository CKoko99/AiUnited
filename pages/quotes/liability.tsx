import JotFormEmbed from 'react-jotform-embed';
import SimpleForm from '../../components/Forms/Simple/Simple';

const formContent = {
    id: "GeneralLiability-quote",
    title: { en: "General Liability Quote", es: "Cotización de responsabilidad general" },
    subtitle: { en: "Start a free liability insurance quote to see the savings", es: `Comience una cotización gratuita de seguro de responsabilidad para ver los ahorros` },
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
                es: "¿Algun accidente o violación en los últimos 3 años?",
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
        <SimpleForm {...formContent} />
    </>
}