import SimpleForm from '../../components/Forms/Simple/Simple';


const formContent = {
    title: {
        en: "Surety Bond Quote", es: "Cotización de seguro de fianza"
    },
    subtitle: { en: "Start a free surety bond quote to see the savings", es: `Comience una cotización gratuita de seguro de fianza para ver los ahorros` },
    questions: [
        {
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
        <SimpleForm {...formContent} />
    </>
}