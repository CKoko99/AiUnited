import Hero from "../../../components/Content/Hero/Hero";
import TextContent from "../../../components/Content/TextContent";
import Simple from "../../../components/Forms/Simple/Simple";

const heroContent = {
    title: {
        en: "Operations",
        es: "Operaciones"
    }
}

const textContent = {
    content: [
        {
            variant: "h4",
            fontWeight: "bold",
            text: {
                en: [`Operations`],
                es: [`Operaciones`]
            },
        },
        {
            type: "bulletedList",
            text: {
                en: [`Work full-time available 5 days a week Monday- Saturdays`,
                    `Able to travel to other cities when needed but not often`,
                    `Some physical activities are needed from time to time like lifting, picking up, moving and cleaning`,
                    `Other duties that arise`,
                    `Recording, processing, verifying and maintaining records of financial transactions`,
                    `Recording, processing, verifying and maintaining records of mainteneance tasks`,
                    `Work with local government agencies to obtain and keep up to date all inspection and permitting`,
                    `Oversee the registration, inspection, and maintenance of all company vehicles`,
                    `Communicate clearly and effectively with landlords, contractors, and different vendors`,
                    `Schedule vendor appointments for different locations, such as pest control, HVAC, contractors etc.`,
                    `Receiving, reportingm and assigning tech issues`,
                    `Data entry`,
                    `Track and report all maintenance, security, or IT issues`,
                    `Maintain/ renew location leases`,
                ],
                es: [`Trabajar a tiempo completo disponible 5 días a la semana de lunes a sábados`,
                    `Capaz de viajar a otras ciudades cuando sea necesario pero no con frecuencia`,
                    `De vez en cuando se necesitan algunas actividades físicas como levantar, recoger, mover y limpiar`,
                    `Otras tareas que surjan`,
                    `Grabación, procesamiento, verificación y mantenimiento de registros de transacciones financieras`,
                    `Grabación, procesamiento, verificación y mantenimiento de registros de tareas de mantenimiento`,
                    `Trabajar con agencias gubernamentales locales para obtener y mantener al día todas las inspecciones y permisos`,
                    `Supervisar el registro, la inspección y el mantenimiento de todos los vehículos de la empresa`,
                    `Comunicarse de manera clara y efectiva con propietarios, contratistas y diferentes proveedores`,
                    `Programar citas con proveedores para diferentes ubicaciones, como control de plagas, HVAC, contratistas, etc.`,
                    `Recibir, informar y asignar problemas técnicos`,
                    `Entrada de datos`,
                    `Seguimiento e informe de todos los problemas de mantenimiento, seguridad o TI`,
                    `Mantener / renovar los arrendamientos de ubicación`,
                ]
            },
        },
        {
            fontWeight: "Bold",
            text: {
                en: [`Education and Licensing`],
                es: [`Educación y licencias`]
            }
        },
        {
            type: "bulletedList",
            text: {
                en: [`High School Diploma or GED`,
                    `6 months - 1 year of Customer Service`,
                    `1-2 year of Lead/ Supervisory experience, preferred`,
                    `Good organizational and interpersonal skills`,
                    `Good computer knowledge`,
                    `Able to work independently with minimal/ no supervision`,
                    `Ability to quickly learn any Company/ Proprietary software is necessary`,
                    `Bilingual (English/ Spanish)`
                ],
                es: [`Diploma de escuela secundaria o GED`,
                    `6 meses - 1 año de servicio al cliente`,
                    `1-2 años de experiencia de liderazgo / supervisión, preferido`,
                    `Buenas habilidades organizativas e interpersonales`,
                    `Buen conocimiento informático`,
                    `Capaz de trabajar de forma independiente con supervisión mínima / nula`,
                    `La capacidad de aprender rápidamente cualquier software de la compañía / patentado es necesaria`,
                    `Bilingüe (inglés / español)`
                ]
            }
        },
        {
            text: {
                en: [
                    `While performing the duties of this job, employee is regularly required to sit; use hands to finger, handle, or 
                feel and talk or hear. The employee is frequently required to reach with hands and arms. The employee is occasionally required
                to stand, walk, stoop, kneel, or crouch. The employee must occasionally lift and/or move up to 20 pounds.`
                ],
                es: [
                    `Mientras realiza las tareas de este trabajo, el empleado debe sentarse regularmente; usar las manos para 
                dedo, manejar o sentir y hablar u oír. Se requiere con frecuencia que el empleado alcance con las manos y los brazos. El empleado
                ocasionalmente debe pararse, caminar, agacharse, arrodillarse o agacharse. El empleado debe levantar y / o mover ocasionalmente hasta 20 libras.`
                ]
            }
        },
        {
            text: {
                en: [
                    `This job description in no way states or implies that these are the only duties to be performed by the employee occupying this position. 
                Employees will be required to follow any other job-related instructions and to perform any other job-related 
                dutiesrequested by their supervisor.`
                ],
                es: [
                    `Esta descripción del trabajo de ninguna manera establece o implica que estas son las únicas tareas que debe realizar el empleado que ocupa este puesto.
                Se requerirá que los empleados sigan cualquier otra instrucción relacionada con el trabajo y realicen cualquier otra tarea relacionada con el trabajo
                deberes solicitados por su supervisor.`
                ]
            }
        },
    ]
}

const formContent = {
    sheetTitle: "Operations Application",
    title: {
        en: "Operations Representative",
        es: "Representante de operaciones",
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
            title: {
                en: "Are you at least 18 years of age?",
                es: "¿Tiene al menos 18 años de edad?"
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
            title: { en: "Date Available", es: "Fecha disponible" },
            type: "date",
            required: true,
            fullWidth: true,
            future: true
        },
        {
            title: {
                en: "Are you willing to travel up to 15 miles to work?",
                es: "¿Está dispuesto a viajar hasta 15 millas para trabajar?"
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
                en: "Do you speak fluent English and Spanish?",
                es: "¿Hablas inglés y español con fluidez?"
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
                en: "Can you work Monday through Friday from 9:00 AM to 7:00 PM? and Saturday from 10:00 AM to 5:00 PM?",
                es: "¿Puede trabajar de lunes a viernes de 9:00 a.m. a 7:00 p.m. y los sábados de 10:00 a.m. a 5:00 p.m.?"
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
                en: "Are you computer literate?",
                es: "¿Eres alfabetizado en computación?"
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
                en: "What is your typing speed?",
                es: "¿Cuál es tu velocidad de escritura?"
            },
            type: "input",
            label: { en: "WPM", es: "WPM" },
            validation: "number",
            outsideLabel: true,
            required: true,
        },
        {
            title: {
                en: "How did you hear about us?",
                es: "¿Cómo se enteró de nosotros?"
            },
            type: "select",
            fullWidth: true,
            required: true,
            answers: [
                { en: "Referral", es: "Referencia" },
                { en: "Street Sign", es: "Señal de la calle" },
                { en: "Facebook Ad", es: "Facebook Ad" },
                { en: "Instagram Ad", es: "Instagram Ad" },
                { en: "Walk-in", es: "Walk-in" },
            ],
        },
        {
            title: {
                en: "Referred By?",
                es: "¿Referido por?"
            },
            type: "input",
            label: "Name",
            outsideLabel: true,
        },
        {
            type: "file",
            title: {
                en: "Upload Resume",
                es: "Subir currículum",
            },
            required: true,
            fullWidth: true,
        }
    ],
};
export default function () {
    return <>
        <Hero {...heroContent} />
        <TextContent {...textContent} />
        <Simple {...formContent} />
    </>
}