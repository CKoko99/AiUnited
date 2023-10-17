import SimpleForm from '../../components/Forms/Simple/Simple';


const formContent = {
    title: {
        en: "Renters Insurance Quote", es: "Cotización de seguro de inquilinos"
    },
    subtitle: { en: "Start a free renters insurance quote to see the savings", es: `Comience una cotización gratuita de seguro de inquilinos para ver los ahorros` },
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
            title: { en: "How much personal property", es: "¿Cuánta propiedad personal?" },
            outsideLabel: true,
            type: "input",
            required: true,
        },
        {
            title: { en: "How much Liability?", es: "¿Cuánta responsabilidad?" },
            outsideLabel: true,
            type: "input",
            required: true,
        },
        {
            title: { en: "Is there a fire alarm on the property?", es: "¿Hay una alarma de incendio en la propiedad?" },
            type: "radio",
            required: true,
            answers: [
                { en: "Yes", es: "Sí" },
                { en: "No", es: "No" },
            ],
            fullWidth: true,

        },
        {
            title: { en: "Is there a burglar alarm on the property?", es: "¿Hay una alarma contra robos en la propiedad?" },
            type: "radio",
            required: true,
            answers: [
                { en: "Yes", es: "Sí" },
                { en: "No", es: "No" },
            ],
            fullWidth: true,

        },
        {
            title: { en: "Any Additional Information?", es: "¿Alguna información adicional?" },
            type: "input",
            largeText: true,
            fullWidth: true,

        },
    ]
}
export default function () {
    return <>
        <SimpleForm {...formContent} />
    </>
}