import Cards2 from "@/components/Content/Cards/Cards2";
import HorizontalBanner from "@/components/Content/Hero/HorizontalBanner";
import PictureWithList2 from "@/components/Content/PictureWithList2";
import TextSection from "@/components/Content/TextSection";
import HomeSubNav from "@/components/SubNavBar/products/home";
import PATHCONSTANTS from "constants/sitemap";
import HeadComponent from "@/components/Head";
import HomeImg1 from "public/assets/images/products/home/home1.png";
import CustomersImg from "public/assets/images/products/customers.png";
import ArticlesImg from "public/assets/images/products/article1.png";
import CardImg2 from "public/assets/images/products/home/livingroom.png";
import CardImg1 from "public/assets/images/products/discount.png";

const headContent = {
    title: "Ai United Home Insurance Guide",
    metaData: `Explore tailored home insurance policies for comprehensive protection. Discover standard and tailored coverage options to protect your property and belongings.`,
};

const verticalBannerContent = {
    title: {
        en: "Home Insurance Essentials: A Comprehensive Guide",
        es: "Lo esencial del seguro de hogar: una guía completa",
    },
    img: {
        src: HomeImg1,
        alt: "House",
    },
};

const contentSection1 = {
    title: {
        en: "Find the Best Home Coverage",
        es: "Encuentre la mejor cobertura de hogar",
    },
    subtitle: {
        en: `Welcome to Ai United, your trusted partner in safeguarding what matters most. Home insurance is your key to worry-free living, offering protection for your belongings and much more`,
        es: `Bienvenido a Ai United, su socio de confianza para proteger lo que más importa. El seguro de hogar es su clave para vivir sin preocupaciones, ofreciendo protección para sus pertenencias y mucho más.`,
    },
    alignSubtitle: "left",
};

const contentSection2 = {
    subtitle: {
        en: `Explore Your Options and Secure Your Journey with a Comprehensive Home Insurance Plan Today!`,
        es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de hogar integral hoy!`,
    },
    noPadding: true,
    ctaButtons: [
        {
            text: {
                en: "Get a Quote",
                es: "Obtenga una cotización",
            },
            href: PATHCONSTANTS.QUOTES.HOME.INDEX,
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
            link: PATHCONSTANTS.PRODUCTS.HOME.COVERAGE,
        },
        {
            img: {
                src: CardImg1,
                alt: "Discounts",
            },
            title: {
                en: "Explore Affordable Home Coverage",
                es: "Explore la cobertura de hogar asequible",
            },
            body: {
                en: `See your options for finding affordable coverages.`,
                es: `Vea sus opciones para encontrar coberturas asequibles.`,
            },
            link: PATHCONSTANTS.PRODUCTS.HOME.AFFORDABLE,
        },
        {
            img: {
                src: ArticlesImg,
                alt: "Blog Articles",
            },
            title: {
                en: "Explore Home Insurance Articles",
                es: "Explore artículos de seguro de hogar",
            },
            body: {
                en: `Learn more about home insurance and how to protect yourself.`,
                es: `Aprenda más sobre el seguro de hogar y cómo protegerse.`,
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
            <HomeSubNav />
            <TextSection {...contentSection1} />
            <TextSection {...contentSection2} />
            <PictureWithList2 {...contentSection3} />
            <Cards2 {...contentSection4} />
        </>
    );
}
