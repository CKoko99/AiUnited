import Hero from "../../../components/Content/Hero/Hero";
import TextContent from "../../../components/Content/TextContent";
import Simple from "../../../components/Forms/Simple/Simple";
import BannerImg from '../../../public/assets/images/about/careers/banner.png'

const heroContent = {
    title: {
        en: "Customer Service Representative / Insurance Agent",
        es: "Representante de servicio al cliente / Agente de seguros"
    },
    image: {
        src: BannerImg,
        alt: 'Ai United Insurance Careers',
    }
}
const textContent = {
    content: [
        {
            variant: "h4",
            fontWeight: "bold",
            text: {
                en: [`Customer Service Representative / Insurance Agent`],
                es: [`Representante de servicio al cliente / Agente de seguros`]
            },
        },
        {
            text: {
                en: [`Customer Service Representative / Insurance Agent are responsible for handling multiple types of customer experience 
            inquiries, resolving service concerns, documenting customer requests and completing changes to policies. Other 
            responsibilities of a Customer Service Representative may also include:`],
                es: [`Los representantes de servicio al cliente / agentes de seguros son responsables de manejar múltiples tipos de
            consultas de experiencia del cliente, resolver problemas de servicio, documentar las solicitudes de los clientes y completar
            cambios en las pólizas. Otras responsabilidades de un representante de servicio al cliente también pueden incluir:`]
            },
        },
        {
            variant: "h5",
            fontWeight: "bold",
            text: {
                en: [`Responsibilities and Duties`],
                es: [`Responsabilidades y deberes`]
            },
        },
        {
            type: "bulletedList",
            text: {
                en: [`Performing administrative tasks`,
                    `Attending meetings, seminars and programs to learn about new products and services, learning new skills, 
        and receiving technical assistance in developing new accounts`,
                    `Provide various types of insurance policies to businesses and individuals`,
                    `Calculating premiums and establishing payment methods`,
                    `Communicating with customers through phone calls, texts, email and other forms of communication`,
                    `Communicating with underwriting departments and submitting forms`,
                    `Customizing insurance programs to suit individual customers`,
                    `Ensuring that policy requirements are fulfilled, including the completion of appropriate forms`,
                    `Explaining features, advantages and disadvantages of various policies`,
                    `Seeking out new clients and developing clientele by networking to find new customers and generating lists of prospective clients`,
                    `Get licensed or obtain continuing education courses for licensing purposes`,
                ],
                es: [`Realizar tareas administrativas`,
                    `Asistir a reuniones, seminarios y programas para aprender sobre nuevos productos y servicios, aprender nuevas habilidades,
        y recibir asistencia técnica para desarrollar nuevas cuentas`,
                    `Proporcionar varios tipos de pólizas de seguro a empresas y particulares`,
                    `Calcular primas y establecer métodos de pago`,
                    `Comunicarse con los clientes a través de llamadas telefónicas, mensajes de texto, correo electrónico y otras formas de comunicación`,
                    `Comunicarse con los departamentos de suscripción y enviar formularios`,
                    `Personalizar programas de seguros para adaptarse a clientes individuales`,
                    `Asegurarse de que se cumplan los requisitos de la póliza, incluida la cumplimentación de los formularios correspondientes`,
                    `Explicar las características, ventajas y desventajas de varias pólizas`,
                    `Buscar nuevos clientes y desarrollar una clientela mediante la creación de redes para encontrar nuevos clientes y generar listas de clientes potenciales`,
                    `Obtener licencias u obtener cursos de educación continua para fines de licencias`,
                ]
            },
        },
        {
            text: {
                en: [`To effectively perform the duties of a Customer Service Representative/ Insurance agent, individuals must be able to 
            demonstrate a number of competencies that are essential to the position, which include:`],
                es: [`Para desempeñar eficazmente las funciones de representante de servicio al cliente / agente de seguros, las personas deben poder
            demostrar una serie de competencias que son esenciales para el puesto, que incluyen:`]
            }
        },
        {
            variant: "h5",
            fontWeight: "bold",
            text: {
                en: [`Qualifications and Requirements`],
                es: [`Calificaciones y requisitos`]
            },
        },
        {
            text: {
                en: [`Bilingual (Spanish/English) Required`,
                    `Basic computer knowledge; ability to type 20+ WPM`,
                    `Possess strong interpersonal skills`,
                    `Be able to communicate clearly, both writtern and orally`,
                    `Be able to prioritize  plan work activities as to use time efficiently`,
                    `Be organized, accurate, thorough, and able to monitor work for quality`,
                    `Be dependable, able to follow instructions, respond to management direction, and must be able to improve
        performance through management feedback`,
                    `Reliable transportation`,
                ],
                es: [`Bilingüe (español / inglés) requerido`,
                    `Conocimientos básicos de informática; capacidad para escribir a máquina 20+ WPM`,
                    `Poseer fuertes habilidades interpersonales`,
                    `Ser capaz de comunicarse claramente, tanto por escrito como oralmente`,
                    `Ser capaz de priorizar planificar las actividades de trabajo para utilizar el tiempo de manera eficiente`,
                    `Ser organizado, preciso, minucioso y capaz de controlar el trabajo con calidad`,
                    `Ser confiable, capaz de seguir instrucciones, responder a la dirección de la gerencia y debe poder mejorar
        el rendimiento a través de la retroalimentación de la gerencia`,
                    `Transporte confiable`,]
            }
        },
        {
            variant: "h5",
            fontWeight: "bold",
            text: {
                en: [`Education and Licensing`],
                es: [`Educación y licencias`]
            }
        },
        {
            type: "bulletedList",
            text: {
                en: [`High School Diploma or GED`,
                    `0 - 6 months Customer Service / Insurance / Sales Experience (preferred)`,
                    `Valid County Mutual, Limited Lines or Property & Casualty License in Texas (preferred)`,],
                es: [`Diploma de escuela secundaria o GED`,
                    `0 - 6 meses de experiencia en servicio al cliente / seguros / ventas (preferido)`,
                    `Licencia válida de County Mutual, Limited Lines o Property & Casualty en Texas (preferido)`,]
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
                ]
            }
        },
        {
            text: {
                en: [
                    `This job description may be revised upon development of other duties and changes in responsibilities.`
                ],
                es: [
                    `Esta descripción del trabajo puede revisarse al desarrollar otras tareas y cambios en las responsabilidades.`
                ]
            }
        }
    ]
}
const formContent = {
    sheetTitle: "CSR Application",
    title: {
        en: "Customer Service Representative / Insurance Agent",
        es: "Representante de servicio al cliente / Agente de seguros",
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
            label: { en: "Name", es: "Nombre" },
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