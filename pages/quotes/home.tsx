import SimpleForm from '../../components/Forms/Simple/Simple';


const formContent = {
    title: {
        en: "Home Insurance Quote", es: "Cotización de seguro de hogar"
    },
    subtitle: { en: "Start a free home insurance quote to see the savings", es: `Comience una cotización gratuita de seguro de hogar para ver los ahorros` },
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
        <SimpleForm {...formContent} />
    </>
}