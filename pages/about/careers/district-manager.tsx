import TextSection from "@/components/Content/TextSection";
import Hero from "../../../components/Content/Hero/Hero";
import TextContent from "../../../components/Content/TextContent";
import BannerImg from "../../../public/assets/images/about/careers/banner.png";
import Simple from "components/Forms/Simple/Simple";
import HeadComponent from "@/components/Head";

const headContent = {
    title: `Ai United Insurance - Careers`,
    graphImg:
        "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/CareersGraphImg.png?alt=media&token=61346c2e-44fe-47b5-abb0-2dc79d32262d",
};

const heroContent = {
    title: {
        en: "District Manager",
        es: "Gerente de Distrito",
    },
    image: {
        src: BannerImg,
        alt: "Ai United Insurance Careers",
    },
};

const textSection1 = {
    title: {
        en: `District Manager`,
        es: `Gerente de Distrito`,
    },
    subtitle: {
        en: `The District Manager is responsible for ensuring all required tasks for all locations are carried out by all employees 
        in their designated zone. The District Manager is responsible for additional tasks delegated by and reports 
        directly to the Regional Manager and manages and directs a sales force to achieve sales and profit goals.`,
        es: `El gerente de distrito es responsable de garantizar que todas las tareas requeridas para todas las ubicaciones sean realizadas por todos los empleados
        en su zona designada. El gerente del distrito tiene la tarea de gestionar las responsabilidades
        asignadas, informando directamente al gerente regional. Además, supervisa y guía a un equipo de agentes
        con el objetivo de alcanzar metas de ventas y ganancias.`,
    },
    titleVariant: "h2" as const,
    titleComponent: "h1" as const,
    subtitleVariant: "h5" as const,
};
const textContent = {
    content: [
        {
            variant: "h5" as const,
            fontWeight: "bold",
            text: {
                en: [`Responsibilities and Duties`],
                es: [`Responsabilidades y Deberes`],
            },
        },
        {
            type: "bulletedList",
            text: {
                en: [
                    `Manages multiple locations with agents designated within a geographic zone`,
                    `Screen applicants, interview, and hire new agents`,
                    `Promote positive attitude to ensure excellent customer service skills are being utilized when Agents are interacting
                 with customers as well as with the other team members`,
                    `Manage staff members by setting goals, giving performance evaluations,  and providing staff members with training opportunities
                 and guidance`,
                    `Monitoring agents for attendance and other disciplinary ossies, such as cell phone use, personal calls, and employee peroformance of job function`,
                    `Create and implement weekly work schedule for agents`,
                    `Handles any escalated customer service issues that may arise`,
                    `Direct and observe Agents to ensure performance of tasks and customer service levels are being met`,
                ],
                es: [
                    `Trabajar a tiempo completo disponible 5 días a la semana de lunes a sábados`,
                    `Capaz de viajar a otras ciudades cuando sea necesario pero no con frecuencia`,
                    `De vez en cuando se necesitan algunas actividades físicas como levantar, recoger, mover y limpiar`,
                    `Grabación, procesamiento, verificación y mantenimiento de registros de transacciones financieras`,
                    `Grabación, procesamiento, verificación y mantenimiento de registros de tareas de mantenimiento`,
                    `Trabajar con agencias gubernamentales locales para obtener y mantener al día todas las inspecciones y permisos`,
                    `Supervisar el registro, la inspección y el mantenimiento de todos los vehículos de la empresa`,
                    `Comunicarse de manera clara y efectiva con propietarios, contratistas y diferentes proveedores`,
                    `Programar citas con proveedores para diferentes ubicaciones, como control de plagas, HVAC, contratistas, etc.`,
                    `Recibir, informar y asignar problemas técnicos`,
                    `Entrada de datos`,
                    `Seguimiento e informe de todos los problemas de mantenimiento, seguridad o soporte técnico`,
                    `Mantener / renovar los arrendamientos de ubicación`,
                ],
            },
        },
        {
            variant: "h5" as const,
            fontWeight: "bold",
            text: {
                en: [`Qualifications and Requirements`],
                es: [`Calificaciones y Requisitos`],
            },
        },
        {
            type: "bulletedList",
            text: {
                en: [
                    `Good organizational and interpersonal skills`,
                    `Good computer knowledge`,
                    `Able to work independently with minimal/ no supervision`,
                    `Ability to quickly learn any Company/ Proprietary software is necessary`,
                    `Bilingual (English/ Spanish)`,
                ],
                es: [
                    `Buenas habilidades organizativas e interpersonales`,
                    `Buen conocimiento informático`,
                    `Capaz de trabajar de forma independiente con supervisión mínima / nula`,
                    `La capacidad de aprender rápidamente cualquier software de la compañía es necesaria`,
                    `Bilingüe (inglés / español)`,
                ],
            },
        },
        {
            variant: "h5" as const,
            fontWeight: "bold",
            text: {
                en: [`Education and Licensing`],
                es: [`Educación y Licencias`],
            },
        },
        {
            type: "bulletedList",
            text: {
                en: [
                    `High School Diploma or GED`,
                    `6 months - 1 year of Customer Service`,
                    `1-2 year of Lead/ Supervisory experience preferred`,
                ],
                es: [
                    `Diploma de escuela secundaria o GED`,
                    `6 meses - 1 año de servicio al cliente`,
                    `1-2 años de experiencia de liderazgo / supervisión preferido`,
                ],
            },
        },

        {
            text: {
                en: [
                    `While performing the duties of this job, employee is regularly required to sit.  The employee is occasionally required
                    to stand, walk, stoop, kneel, or crouch. The employee must occasionally lift and/or move up to 20 pounds.`,
                ],
                es: [
                    `Al desempeñar las funciones de este trabajo, se requiere que el empleado se siente regularmente.
                    El empleado ocasionalmente debe pararse, caminar, agacharse, arrodillarse o agacharse. El empleado debe ocasionalmente
                    levantar y / o mover hasta 20 libras.`,
                ],
            },
        },
        {
            text: {
                en: [
                    `This job description in no way states or implies that these are the only duties to be performed by the employee occupying this position. 
                Employees will be required to follow any other job-related instructions and to perform any other job-related 
                duties requested by their supervisor.`,
                ],
                es: [
                    `Esta descripción del trabajo de ninguna manera establece o implica que estas son las únicas tareas que debe realizar el empleado que ocupa este puesto.
                Se requerirá que los empleados sigan cualquier otra instrucción relacionada con el trabajo y realicen cualquier otra tarea relacionada con el trabajo
                 solicitados por su supervisor.`,
                ],
            },
        },
    ],
};

const formContent = {
    job: true,
    sheetTitle: "DM Application",
    spreadsheet: "HR Dept",
    title: {
        en: "District Manager",
        es: "Gerente de Distrito",
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
                es: "¿Tiene al menos 18 años de edad?",
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
            future: true,
        },
        {
            title: {
                en: "Are you willing to travel up to 15 miles to work?",
                es: "¿Está dispuesto a viajar hasta 15 millas para trabajar?",
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
                es: "¿Hablas inglés y español con fluidez?",
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
                es: "¿Puede trabajar de lunes a viernes de 9:00 a.m. a 7:00 p.m. y los sábados de 10:00 a.m. a 5:00 p.m.?",
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
                es: "¿Tienes habilidades informáticas?",
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
                es: "¿Cuál es tu velocidad de escritura?",
            },
            type: "input",
            label: { en: "WPM", es: "Palabras Por Minuto" },
            validation: "number",
            outsideLabel: true,
            required: true,
        },
        {
            title: {
                en: "How did you hear about us?",
                es: "¿Cómo se enteró de nosotros?",
            },
            type: "select",
            fullWidth: true,
            required: true,
            answers: [
                { en: "Referral", es: "Referencia" },
                { en: "Street Sign", es: "Señal de la calle" },
                { en: "Indeed", es: "Indeed" },
                { en: "Facebook Ad", es: "Facebook Ad" },
                { en: "Instagram Ad", es: "Instagram Ad" },
                { en: "Walk-in", es: "Walk-in" },
                { en: "Mail", es: "Correo" },
                { en: "QR Code", es: "Código QR" },
            ],
        },
        {
            title: {
                en: "Referred By?",
                es: "¿Referido por?",
            },
            type: "input",
            label: { en: "Name", es: "Nombre" },
            outsideLabel: true,
        },
        {
            type: "file",
            title: {
                en: "Upload Resume",
                es: "Subir currículum",
            },
            fullWidth: true,
        },
    ],
};

export default function () {
    return (
        <>
            <HeadComponent {...headContent} />
            <TextSection {...textSection1} />
            <TextContent {...textContent} />
            <Simple {...formContent} />
        </>
    );
}
