import SimpleForm from '../../components/Forms/Simple/Simple';


const formContent = {
    title: {
        en: "SR-22 Insurance Quote", es: "Cotización de seguro de SR-22"
    },
    subtitle: { en: "Start a free SR-22 insurance quote to see the savings", es: `Comience una cotización gratuita de seguro SR-22 para ver los ahorros` },
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
            title: { en: "Any accidents or violations in the past 3 years?", es: "¿Algun accidente o violacion en los ultimos 3 años?" },
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
        <SimpleForm {...formContent} />
    </>
}