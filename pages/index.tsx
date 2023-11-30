import HeadComponent from "../components/Head";
import Banner from "../components/Content/Hero/HomeBanner";
import BannerImage from "../public/assets/images/home/Reading.png";
import PictureWithList from '../components/Content/PictureWithList';
import partnerImg1 from "../public/assets/images/home/partners/progressive.png";
import partnerImg2 from "../public/assets/images/home/partners/alinsco.png";
import partnerImg3 from "../public/assets/images/home/partners/appllo.png";
import partnerImg4 from "../public/assets/images/home/partners/bluefire.png";
import partnerImg5 from "../public/assets/images/home/partners/falcon.png";
import ContentSplit from "../components/Content/ContentSplit";
import QuotesDiagram from "../components/Content/FlexDigrams/QuotesDiagram";
import autoQuoteImg from "../public/assets/images/home/quotes/auto.png";
import homeQuoteImg from "../public/assets/images/home/quotes/home.png";
import motorcycleQuoteImg from "../public/assets/images/home/quotes/motorcycle.png";
import sr22QuoteImg from "../public/assets/images/home/quotes/sr22.png";
import rentersQuoteImg from "../public/assets/images/home/quotes/renter.png";
import mexicoQuoteImg from "../public/assets/images/home/quotes/mexico.png";
import suretyQuoteImg from "public/assets/images/home/quotes/surety.png";
import CTAContent from 'components/Content/CTAContent';
import representativeImg from "../public/assets/images/home/quotes/representative.png";
import HomeReview from '../components/Content/Reviews/CloudReview';
import ReviewImg from "../public/assets/images/home/reviews/review.png";
import Card from '../components/Content/Cards/Cards';
import PoliciesImg from "../public/assets/images/home/about/policies.png";
import AboutImg from "../public/assets/images/home/about/about.png";
import CareersImg from "../public/assets/images/home/about/careers.png";
import PhoneImg from "../public/assets/images/home/phone.png";
import PATHCONSTANTS from '../constants/sitemap';
import { useEffect } from 'react';
import homePlainImg from "public/assets/images/home/quotes/homeplain.png";
import autoPlainImg from "public/assets/images/home/quotes/autoplain.png";
import motorcyclePlainImg from "public/assets/images/home/quotes/motorcycleplain.png";
import rentersPlainImg from "public/assets/images/home/quotes/renterplain.png";

const bannerContent = {
    title: {
        en: "Simplify Your Coverage and Save Money Today",
        es: "Simplifique su cobertura y ahorre dinero hoy"
    },
    subtitle: {
        en: "Fast, Easy, and Affordable Coverage for All Your Needs!",
        es: "¡Cobertura rápida, fácil y asequible para todas sus necesidades!"
    },
    image: {
        src: BannerImage,
        alt: "Reading"
    },
    buttons: [
        {
            text: {
                en: "Auto Insurance",
                es: "Seguro de auto"
            },
            img: {
                src: autoPlainImg,
                alt: "Auto"
            },
            link: PATHCONSTANTS.QUOTES.AUTO.INDEX,
            id: "Auto"
        },
        {
            text: {
                en: "Home Insurance",
                es: "Seguro de casa"
            },
            img: {
                src: homePlainImg,
                alt: "Home"
            },
            link: PATHCONSTANTS.QUOTES.HOME.INDEX,
            id: "Home"
        },
        {
            text: {
                en: "Renters Insurance",
                es: "Seguro de motocicleta"
            },
            img: {
                src: rentersPlainImg,
                alt: "Apartment"
            },
            link: PATHCONSTANTS.QUOTES.RENTER.INDEX,
            id: "Renters"

        },
        {
            text: {
                en: "Motorcycle Insurance",
                es: "Seguro de motocicleta"
            },
            img: {
                src: motorcyclePlainImg,
                alt: "Motorcycle"
            },
            link: PATHCONSTANTS.QUOTES.MOTORCYCLE.INDEX,
            id: "Motorcycle"
        },

    ]
}
const picturesWithListContent = {
    title: {
        en: `Your 3 Step Insurance Solution`,
        es: `Su solución de seguro de 3 pasos`
    },

    img: {
        src: PhoneImg,
        alt: "Phone"
    },
    hideMobileImg: true,
    content: [
        {
            title: {
                en: "Complete Our Easy Online Form",
                es: "Complete nuestro formulario en línea fácil"
            },
            body: {
                en: "We'll ask you a few simple questions about your insurance needs through our online quoting form",
                es: "Le haremos algunas preguntas simples sobre sus necesidades de seguro a través de nuestro formulario de cotización en línea"
            }
        },
        {
            title: {
                en: "Review Insurance Options",
                es: "Revisar opciones de seguro"
            },
            body: {
                en: "These options are carefully curated, considering factors like your preferences, budget, and coverage requirements.",
                es: "Estas opciones están cuidadosamente seleccionadas, teniendo en cuenta factores como sus preferencias, presupuesto y requisitos de cobertura."
            }
        },
        {
            title: {
                en: "Choose the coverage that suits you best",
                es: "Elija la cobertura que mejor se adapte a sus necesidades"
            },
            body: {
                en: "When you're satisfied with your selection, you can proceed to secure the coverage right then and there.",
                es: "Cuando esté satisfecho con su selección, puede proceder a asegurar la cobertura en ese momento."
            }
        },
    ]
}

const partnerCompanies = {
    title: {
        en: "We Shop For the Best Deals to Save You Time and Money",
        es: "Buscamos las mejores ofertas para ahorrarle tiempo y dinero"
    },
    content: [
        {
            img: {
                src: partnerImg1,
                alt: "Progressive"
            },
        },
        {
            img: {
                src: partnerImg2,
                alt: "Alinsco"
            },
        },
        {
            img: {
                src: partnerImg3,
                alt: "Appllo"

            },
        },
        {
            img: {
                src: partnerImg4,
                alt: "Bluefire"
            }
        },
        {
            img: {
                src: partnerImg5,
                alt: "Falcon"
            }
        },
    ]
}
const onlineQuotesContent = {
    title: {
        en: "Shop Online",
        es: "Comprar en línea"
    },
    content: [
        {
            img: {
                src: autoQuoteImg,
                alt: "Auto Insurance"
            },
            title: {
                en: "Auto Insurance",
                es: "Seguro de auto"
            },
            link: PATHCONSTANTS.QUOTES.AUTO.INDEX
        },
        {
            img: {
                src: homeQuoteImg,
                alt: "Home Insurance"
            },
            title: {
                en: "Home Insurance",
                es: "Seguro de casa"
            },
            link: PATHCONSTANTS.QUOTES.HOME.INDEX
        },
        {
            img: {
                src: motorcycleQuoteImg,
                alt: "Motorcycle Insurance"
            },
            title: {
                en: "Motorcycle Insurance",
                es: "Seguro de motocicleta"
            },
            link: PATHCONSTANTS.QUOTES.MOTORCYCLE.INDEX
        },
        {
            img: {
                src: sr22QuoteImg,
                alt: "SR-22 Insurance"
            },
            title: {
                en: "SR-22 Insurance",
                es: "Seguro SR-22"
            },
            link: PATHCONSTANTS.QUOTES.SR22.INDEX
        },
        {
            img: {
                src: rentersQuoteImg,
                alt: "Renters Insurance"
            },
            title: {
                en: "Renters Insurance",
                es: "Seguro de inquilinos"
            },
            link: PATHCONSTANTS.QUOTES.RENTER.INDEX
        },
        {
            img: {
                src: mexicoQuoteImg,
                alt: "Mexico Insurance"
            },
            title: {
                en: "Mexico Insurance",
                es: "Seguro de México"
            },
            link: PATHCONSTANTS.QUOTES.MEXICO.INDEX
        },
        {
            img: {
                src: suretyQuoteImg,
                alt: "Surety Bonds"
            },
            title: {
                en: "Surety Bonds",
                es: "Fianzas"
            },
            link: PATHCONSTANTS.QUOTES.SURETY.INDEX
        },
    ]
}
const callQuoteContent = {
    title: {
        en: "Contact a Representative",
        es: "Contacta a un representante"
    },
    img: {
        src: representativeImg,
        alt: "Representative"
    },
    text: {
        en: "Whether You Give Us a Call or Request a Quote Online, Our Experts Are Here to Provide You With Excellent Assistance.",
        es: "Ya sea que nos llame o solicite una cotización en línea, nuestros expertos están aquí para brindarle una excelente asistencia."
    },
    cta1: {
        text: { en: PATHCONSTANTS.PHONETEXT, es: PATHCONSTANTS.PHONETEXT },
        link: PATHCONSTANTS.PHONE
    },
    cta2: {
        text: {
            en: "Get in Touch!",
            es: "Ponerse en contacto!"
        },
        link: PATHCONSTANTS.ABOUT.CONTACT
    }
}
const reviewContent = {
    title: {
        en: "See What Our Customers Are Saying about Ai United",
        es: "Vea lo que nuestros clientes dicen sobre Ai United"
    },
    content: {
        name: {
            en: "Jacob B",
            es: "Jacob B"
        },
        review: {
            en: `I'd been shopping around for a better auto insurance rate with little success. Bethany saved me almost $100 per month with the same coverage!
    I'm very pleased with my policy and I recommend Ai United to all my friends and family!`,
            es: `Había estado buscando una mejor tarifa de seguro de auto sin mucho éxito. ¡Bethany me ahorró casi $ 100 por mes con la misma cobertura!
    Estoy muy contento con mi póliza y recomiendo Ai United a todos mis amigos y familiares!`
        },
    },
    cta: {
        text: {
            en: "Read More Reviews",
            es: "Leer más reseñas"
        },
        link: PATHCONSTANTS.ABOUT.REVIEWS
    },
    img: {
        src: ReviewImg,
        alt: "Review"
    }
}
const aboutContent = {
    title: {
        en: "Learn More",
        es: "Aprende más"
    },
    subtitle: {
        en: "Insights, Information, and Beyond",
        es: "Información y más"
    },
    content: [
        {
            title: {
                en: "Our Policies",
                es: "Nuestras políticas"
            },

            img: {
                src: PoliciesImg,
                alt: "Policies"
            },
            link: PATHCONSTANTS.PRODUCTS.INDEX
        },
        {
            title: {
                en: "About Us",
                es: "Sobre nosotros"
            },
            img: {
                src: AboutImg,
                alt: "About"
            },
            link: PATHCONSTANTS.ABOUT.INDEX
        },
        {
            title: {
                en: "Careers",
                es: "Carreras"
            },
            img: {
                src: CareersImg,
                alt: "Careers"
            },
            link: PATHCONSTANTS.ABOUT.CAREERS.INDEX
        }
    ]
}

export default function () {
    async function testServer() {
        await fetch(`${PATHCONSTANTS.BACKEND}/`)
            .then(
                () => { console.log("success") })
            .catch((err) => { console.log(err) })
    }
    useEffect(() => {
        testServer()
    }, [])
    return (
        <>
            <HeadComponent title={'Ai United'} metaData={'Ai United Insurnace'} />
            <Banner {...bannerContent} />
            {//<FlexDiagram {...partnerCompanies} />
            }
            <PictureWithList {...picturesWithListContent} />
            <ContentSplit
                title={{ en: "Get a Free Quote in Minutes!", es: "¡Obtenga una cotización gratuita en minutos!" }}
            >
                <QuotesDiagram {...onlineQuotesContent} />
                <CTAContent {...callQuoteContent} />
            </ContentSplit>
            <HomeReview {...reviewContent} />
            <Card {...aboutContent} />
        </>

    )
}
