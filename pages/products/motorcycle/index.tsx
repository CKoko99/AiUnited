import Cards2 from "@/components/Content/Cards/Cards2";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import PictureWithList2 from "@/components/Content/PictureWithList2";
import TextSection from "@/components/Content/TextSection";
import PATHCONSTANTS from "constants/sitemap";
import HeadComponent from "@/components/Head";
import MotorcycleImg1 from "public/assets/images/products/motorcycle/motorcycle1.png";
import CustomersImg from "public/assets/images/products/customers.png";
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg2 from "public/assets/images/products/motorcycle/motorcycle2.png";
import ThinkingImg from "public/assets/images/products/thinking.png";
import MotorcycleSubNav from "@/components/SubNavBar/products/motorcycle";
const headContent = {
    title: "Ai United Motorcycle Insurance Guide",
    metaData:
        "Explore Motorcycle Insurance options for reliable family protection. Learn more about coverage benefits today.",
};

const verticalBannerContent = {
    title: {
        en: "Motorcycle Insurance Essentials: A Comprehensive Guide",
        es: "Elementos esenciales del seguro de motocicleta: una guía completa",
    },
    img: {
        src: MotorcycleImg1,
        alt: "Motorcycle Rider",
    },
};

const contentSection1 = {
    title: {
        en: "Find the Best Motorcycle Coverage",
        es: "Encuentre la mejor cobertura de motocicleta",
    },
    subtitle: {
        en: `Welcome to a journey towards secure and worry-free living! Your safety on the road is our top priority, and we believe that having the right motorcycle insurance is the key to a confident and protected housing experience.`,
        es: `¡Bienvenido a un viaje hacia una vida segura y sin preocupaciones! Su seguridad en la carretera es nuestra principal prioridad, y creemos que tener el seguro de motocicleta adecuado es la clave para una experiencia de vivienda segura y protegida.`,
    },
    alignSubtitle: "left",
};

const contentSection2 = {
    subtitle: {
        en: `Explore Your Options and Secure Your Journey with a Comprehensive Motorcycle Insurance Plan Today!`,
        es: `¡Explore sus opciones y asegure su viaje con un plan integral de seguro de motocicleta hoy!`,
    },
    noPadding: true,
    ctaButtons: [
        {
            text: {
                en: "Get a Quote",
                es: "Obtenga una cotización",
            },
            href: PATHCONSTANTS.QUOTES.MOTORCYCLE.INDEX,
            color: "primary" as const,
            variant: "contained" as const,
        },
        {
            text: {
                en: "Contact Us",
                es: "Contáctenos",
            },
            href: PATHCONSTANTS.ABOUT.CONTACT,
            color: "secondary" as const,
            variant: "outlined" as const,
        },
    ],
};

const contentSection3 = {
    title: {
        en: "Why Our Customers Love Us",
        es: "Por qué nuestros clientes nos aman",
    },
    img: {
        src: CustomersImg,
        alt: "Customers",
    },
    content: [
        {
            title: {
                en: `Competitive Rates`,
                es: `Tarifas competitivas`,
            },
            body: {
                en: `Explore cost-effective coverage choices. We are dedicated to offering competitive rates that align with your financial needs.`,
                es: `Explore opciones de cobertura rentables. Nos dedicamos a ofrecer tarifas competitivas que se alineen con sus necesidades financieras.`,
            },
        },
        {
            title: {
                en: `Exceptional Customer Service`,
                es: `Servicio al cliente excepcional`,
            },
            body: {
                en: `We provide excellent customer service, including responsive support, fast communication, and problem resolution.`,
                es: `Brindamos un excelente servicio al cliente, que incluye soporte receptivo, comunicación rápida y resolución de problemas.`,
            },
        },
        {
            title: {
                en: `Wide Coverage Ranges`,
                es: `Amplios rangos de cobertura`,
            },
            body: {
                en: `We take pride in providing extensive coverage options that cater to a diverse range of needs.`,
                es: `Nos enorgullecemos de brindar amplias opciones de cobertura que atienden una amplia gama de necesidades.`,
            },
        },
    ],
};
const contentSection4 = {
    content: [
        {
            img: {
                src: CardImg2,
                alt: "Living Room",
            },
            title: {
                en: "Explore Coverage Options",
                es: "Explore las opciones de cobertura",
            },
            body: {
                en: `Read more information to see what coverage is right for you.`,
                es: `Lea más información para ver qué cobertura es la adecuada para usted.`,
            },
            link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.COVERAGE,
        },
        {
            img: {
                src: ThinkingImg,
                alt: "Discounts",
            },
            title: {
                en: "Explore Frequently Asked Questions",
                es: "Explore las preguntas frecuentes",
            },
            body: {
                en: `Find answers to your questions about Motorcycle Insurance.`,
                es: `Encuentre respuestas a sus preguntas sobre el seguro de motocicleta.`,
            },
            link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.FAQ,
        },
        {
            img: {
                src: ArticlesImg,
                alt: "Blog Articles",
            },
            title: {
                en: "Explore Auto Insurance Articles",
                es: "Explore los artículos de seguro de auto",
            },
            body: {
                en: `Learn more about auto insurance and how to protect yourself.`,
                es: `Aprenda más sobre el seguro de auto y cómo protegerse.`,
            },
            link: PATHCONSTANTS.ARTICLES.INDEX,
        },
    ],
};

export default function () {
    return (
        <>
            <HeadComponent {...headContent} />
            <HorizontalBanner {...verticalBannerContent} />
            <MotorcycleSubNav />
            <TextSection {...contentSection1} />
            <TextSection {...contentSection2} />
            <PictureWithList2 {...contentSection3} />
            <Cards2 {...contentSection4} />
        </>
    );
}
