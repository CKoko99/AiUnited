import Cards from "../../components/Content/Cards/Cards";
import Hero from "../../components/Content/Hero/Hero";
import TextSection from "../../components/Content/TextSection";
import PATHCONSTANTS from "../../constants/sitemap";
import CsrImg from '../../public/assets/images/about/careers/csr.png'

const heroContent = {
    title: {
        en: `Start Your Career At Ai United`,
        es: `Comience su carrera en Ai United`,
    },
    subtitle: {
        en: `At Ai United Insurance, you have the best of the best. Earn what you're worth!`,
        es: `En Ai United Insurance, tienes lo mejor de lo mejor. ¡Gana lo que vales!`
    },
}
const textSection1 = {
    title: {
        en: `Join the Team!`,
        es: `¡Únete al equipo!`,
    },
    subtitle: {
        en: `Our workforce is our greatest asset, and we want to ensure that our employees have the 
        opportunity to continue to grow their skills and experience and can progress in their careers.`,
        es: `Nuestra fuerza laboral es nuestro mayor activo, y queremos asegurarnos de que nuestros empleados tengan la
        oportunidad de seguir desarrollando sus habilidades y experiencia y puedan progresar en sus carreras.`,
    }
}
const cardsContent = {
    title: {
        en: 'Learn More',
        es: 'Aprende más'
    },
    subtitle: {
        en: 'We offer a variety of opportunities for growth',
        es: 'Ofrecemos una variedad de oportunidades de crecimiento'
    },
    content: [{
        img: {
            src: CsrImg,
            alt: "Customer Service Representative"
        },
        title: {
            en: 'Customer Service Representative',
            es: 'Representante de servicio al cliente'
        },
        link: PATHCONSTANTS.ABOUT.CAREERS.CSR,
    }, {
        img: {
            src: CsrImg,
            alt: "Customer Service Representative"
        },
        title: {
            en: "Operations",
            es: "Operaciones"
        },
        link: PATHCONSTANTS.ABOUT.CAREERS.OPERATIONS,
    }, {
        img: {
            src: CsrImg,
            alt: "Customer Service Representative"
        },
        title: {
            en: "District Manager",
            es: "Gerente de distrito"
        },
        link: PATHCONSTANTS.ABOUT.CAREERS.DM,
    }
    ]
}
export default function (props) {
    return <>
        <Hero {...heroContent} />
        <TextSection {...textSection1} />
        <Cards {...cardsContent} />
    </>
}