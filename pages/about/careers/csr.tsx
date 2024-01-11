import TextSection from "@/components/Content/TextSection";
import Hero from "../../../components/Content/Hero/Hero";
import TextContent from "../../../components/Content/TextContent";
import BannerImg from '../../../public/assets/images/about/careers/banner.png'

import dynamic from 'next/dynamic';
const Simple = dynamic(() => import('../../../components/Forms/Simple/Simple'), { ssr: false });
const heroContent = {
    title: {
        en: "Customer Service Representative / Insurance Agent",
        es: "Representante de Servicio al Cliente / Agente de Seguros"
    },
    image: {
        src: BannerImg,
        alt: 'Ai United Insurance Careers',
    }
}
const textSection1 = {
    title: {
        en: `Customer Service Representative / Insurance Agent`,
        es: `Representante de Servicio al Cliente / Agente de Seguros`,
    },
    subtitle: {
        en: `Customer Service Representatives / Insurance Agents are responsible for handling multiple 
        types of customer experience inquiries, resolving service concerns, documenting customer 
        requests, and completing policy changes.
        `,
        es: `Los representantes de servicio al cliente / agentes de seguros son responsables de manejar múltiples tipos de
        consultas de experiencia del cliente, resolver problemas de servicio, documentar las solicitudes de los clientes y completar
        cambios en las pólizas.`
    },
    titleVariant: "h2" as const,
    titleComponent: "h1" as const,
    subtitleVariant: "h5" as const,
}
const textContent = {
    content: [
        {
            variant: "h5",
            fontWeight: "bold",
            text: {
                en: [`Responsibilities and Duties`],
                es: [`Responsabilidades y Deberes`]
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
                    `Seeking out new clients and developing clientele by networking, and generating lists of prospective clients`,
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
                    `Asegurarse de que se cumplan los requisitos de la póliza, incluyendo el cumplimiento de los formularios correspondientes`,
                    `Explicar las características, ventajas y desventajas de varias pólizas`,
                    `Buscar nuevos clientes y desarrollar una clientela mediante la creación de redes para generar listas de clientes potenciales`,
                    `Obtener licencias u obtener cursos de educación contínua para fines de licencias`,
                ]
            },
        },
        {
            variant: "h5",
            fontWeight: "bold",
            text: {
                en: [`Qualifications and Requirements`],
                es: [`Calificaciones y Requisitos`]
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
            type: "bulletedList",
            text: {
                en: [`Bilingual (Spanish/English) Required`,
                    `Basic computer knowledge; ability to type 20+ WPM`,
                    `Possess strong interpersonal skills`,
                    `Be able to communicate clearly, both written and orally`,
                    `Be able to prioritize  plan work activities as to use time efficiently`,
                    `Be organized, accurate, thorough, and able to monitor work for quality`,
                    `Be dependable, able to follow instructions, respond to management direction, and must be able to improve
        performance through management feedback`,
                    `Reliable transportation`,
                ],
                es: [`Bilingüe (español / inglés) requerido`,
                    `Conocimientos básicos de informática; habilidad para escribir con el teclado a una velocidad de más de 20 palabras por minuto`,
                    `Poseer fuertes habilidades interpersonales`,
                    `Ser capaz de comunicarse claramente, tanto por escrito como oralmente`,
                    `Ser capaz de priorizar las actividades de trabajo para utilizar el tiempo de manera eficiente`,
                    `Ser organizado, preciso, minucioso y capaz de controlar el trabajo con calidad`,
                    `Ser confiable, capaz de seguir instrucciones, responder a la dirección de la gerencia y 
                    deberá tener la capacidad de mejorar el desempeño a través de la retroalimentación de la gerencia`,
                    `Transporte confiable`,]
            }
        },
        {
            variant: "h5",
            fontWeight: "bold",
            text: {
                en: [`Education and Licensing`],
                es: [`Educación y Licencias`]
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
                    `While performing the duties of this job, employee is regularly required to sit.  The employee is occasionally required
                to stand, walk, stoop, kneel, or crouch. The employee must occasionally lift and/or move up to 20 pounds.`
                ],
                es: [
                    `Al desempeñar las funciones de este trabajo, se requiere que el empleado se siente regularmente. 
                El empleado ocasionalmente debe pararse, caminar, agacharse, arrodillarse o agacharse. El empleado debe ocasionalmente
                levantar y / o mover hasta 20 libras.`
                ]
            }
        },
        {
            text: {
                en: [
                    `This job description in no way states or implies that these are the only duties to be performed by the employee occupying this position. 
                Employees will be required to follow any other job - related instructions and to perform any other job - related 
                duties requested by their supervisor.`
                ]
            }
        },
        {
            text: {
                en: [
                    `This job description may be revised due to new responsibilities or duties.`
                ],
                es: [
                    `Esta descripción del trabajo puede ser revisada debido a nuevas responsabilidades o deberes implementadas.`
                ]
            }
        }
    ]
}
const formContent = {
    job: true,
    sheetTitle: "CSR Application",
    title: {
        en: "Customer Service Representative / Insurance Agent",
        es: "Representante de Servicio al Cliente / Agente de Seguros",
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
                es: "¿Tienes habilidades informáticas?"
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
            label: { en: "WPM", es: "Palabras Por Minuto" },
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
                { en: "Indeed", es: "Indeed" },
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
        <TextSection {...textSection1} />
        <TextContent {...textContent} />

        <Simple {...formContent} />
    </>
}