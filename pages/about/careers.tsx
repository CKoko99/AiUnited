import Cards from "../../components/Content/Cards/Cards";
import Hero from "../../components/Content/Hero/Hero";
import TextSection from "../../components/Content/TextSection";
import PATHCONSTANTS from "../../constants/sitemap";
import CsrImg from "../../public/assets/images/about/careers/csr.png";
import OpsImg from "../../public/assets/images/about/careers/operations.png";
import DmImg from "../../public/assets/images/about/careers/dm.png";
import BannerImg from "../../public/assets/images/about/careers/banner.png";
import PictureWithList from "../../components/Content/PictureWithList";
import WorkImg from "../../public/assets/images/about/careers/work.png";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import HeadComponent from "@/components/Head";

const headContent = {
    title: `Ai United Insurance - Careers`,
    graphImg:
        "https://firebasestorage.googleapis.com/v0/b/insurance-hub-397016.appspot.com/o/CareersGraphImg.png?alt=media&token=61346c2e-44fe-47b5-abb0-2dc79d32262d",
};
const heroContent = {
    title: {
        en: `Start Your Career At Ai United`,
        es: `Comience su Carrera en Ai United`,
    },
    subtitle: {
        en: `At Ai United Insurance, you have the best of the best. Earn what you're worth!`,
        es: `En Ai United Insurance, tienes lo mejor de lo mejor. ¡Gana lo que vales!`,
    },
    image: {
        src: BannerImg,
        alt: "Ai United Insurance Careers",
    },
};
const textSection1 = {
    title: {
        en: `Join the Team!`,
        es: `¡Únete al Equipo!`,
    },
    subtitle: {
        en: `Our workforce is our greatest asset. We aim to ensure our employees have opportunities to grow their skills, gain experience, and advance in their careers.`,
        es: `Nuestra fuerza laboral es nuestro mayor activo. Nuestro objetivo es garantizar que nuestros empleados tengan oportunidades para desarrollar sus habilidades, adquirir experiencia y avanzar en sus carreras.`,
    },
    titleVariant: "h2" as const,
    titleComponent: "h1" as const,
    subtitleVariant: "h5" as const,
};

const picturesWithListContent = {
    img: {
        src: WorkImg,
        alt: "Phone",
    },
    content: [
        {
            title: {
                en: "Positive Work Environment",
                es: "Ambiente de Trabajo Positivo",
            },
            body: {
                en: "We believe that the best ideas come from a collective effort, and we actively promote an environment where every team member feels comfortable sharing their thoughts and insights.",
                es: "Creemos que las mejores ideas provienen de un esfuerzo colectivo, y promovemos activamente un entorno en el que cada miembro del equipo se sienta cómodo compartiendo sus pensamientos y conocimientos.",
            },
        },
        {
            title: {
                en: "Equal Opportunity Employer",
                es: "Empleador Que Ofrece Igualdad de Oportunidades",
            },
            body: {
                en: "Diversity and belonging are not just goals; they are integral to our identity. We actively promote diversity within our team and strive to create an environment where everyone feels a sense of belonging.",
                es: `La diversidad y la pertenencia no son solo objetivos; son parte integral de nuestra identidad. Promovemos activamente la diversidad dentro de nuestro equipo y nos esforzamos por 
                crear un ambiente en el que todos se sientan incluidos.`,
            },
        },
        {
            title: {
                en: "Company Overview",
                es: "Descripción General de la Compañía",
            },
            body: {
                en: "Our mission is clear: to safeguard what matters most to our clients. We go beyond providing insurance policies; we strive to be a pillar of support during life's unexpected twists and turns.",
                es: "Nuestra misión es clara: proteger lo que más les importa a nuestros clientes. Vamos más allá de proporcionar pólizas de seguro; nos esforzamos por ser un pilar de apoyo durante los giros inesperados de la vida.",
            },
        },
    ],
};
const cardsContent = {
    title: {
        en: "Learn More",
        es: "Aprende Más",
    },
    subtitle: {
        en: "We offer a variety of opportunities for growth",
        es: "Ofrecemos una variedad de oportunidades de crecimiento",
    },
    content: [
        {
            img: {
                src: CsrImg,
                alt: "Customer Service Representative",
            },
            title: {
                en: "Customer Service Representative",
                es: "Representante de Servicio al Cliente",
            },
            link: PATHCONSTANTS.ABOUT.CAREERS.CSR,
        },
        /* {
        img: {
            src: OpsImg,
            alt: "Operations"
        },
        title: {
            en: "Operations",
            es: "Operaciones"
        },
        link: PATHCONSTANTS.ABOUT.CAREERS.OPERATIONS,
    },*/
        {
            img: {
                src: DmImg,
                alt: "District Manager",
            },
            title: {
                en: "District Manager",
                es: "Gerente de Distrito",
            },
            link: PATHCONSTANTS.ABOUT.CAREERS.DM,
        },
    ],
};

export default function () {
    return (
        <>
            <HeadComponent {...headContent} />
            <TextSection {...textSection1} />
            <PictureWithList {...picturesWithListContent} />
            <Cards {...cardsContent} />
            {false && (
                <Box
                    sx={{
                        textAlign: "center",
                        width: "100%",
                        marginBottom: "1rem",
                    }}
                >
                    <Link
                        style={{ color: "blue" }}
                        target="_blank"
                        href={
                            "https://drive.google.com/file/d/1xFQ71e9eC0nj0h2gmmkeyQC46BkB93YB/preview"
                        }
                    >
                        <Typography
                            variant="h6"
                            component="h6"
                            sx={{ color: "blue", textDecoration: "underline" }}
                        >
                            Ai United Employment Application
                        </Typography>
                    </Link>
                </Box>
            )}
        </>
    );
}
