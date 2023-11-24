import { Box, Typography } from '@mui/material';
import VerticalBanner from '../../components/Content/Hero/VerticalBanner';
import PATHCONSTANTS from '../../constants/sitemap';
import MexicoImg1 from '../../public/assets/images/quotes/mexico/mexico1.png';
import MexicoImg2 from '../../public/assets/images/quotes/home/home2.png';
import MexicoImg3 from '../../public/assets/images/quotes/mexico/mexico2.png';
import MainGrid from '../../components/Content/Grids/MainGrid';
import ContactAndShop from '../../components/Content/FlexDigrams/Combo/ContactAndShop';
import TwoColumn from '../../components/Content/Grids/TwoColumn';

import HeadComponent from '../../components/Head';

const bannerContent = {
    title: {
        en: "Get Mexico Insurance Today",
        es: "Obtenga Seguro De México Hoy"
    },
    subtitle: {
        en: `We are your dedicated partner in ensuring that your trip to Mexico is not only memorable 
        but also worry-free. Our mission is yo provide you with the peace of mind you need to explore 
        Mexico's wonders without hesitation.`,
        es: `Somos su socio dedicado para garantizar que su viaje a México no solo sea memorable,
        sino también sin preocupaciones. Nuestra misión es brindarle la tranquilidad que necesita para explorar
        Las maravillas de México sin dudarlo.`
    },
    CTA: {
        text: {
            en: "Get a Quote",
            es: "Obtenga Una Cotización"
        },
        link: `${PATHCONSTANTS.QUOTES.MEXICO.FORM}`
    },
    img: {
        src: MexicoImg1,
        alt: "Tourist"
    },
    audience: "Mexico"
}
const contentSection1 = {
    largeHorizontalCard: {
        title: {
            en: "Mexico Insurance is Your Shield Against the Unexpected",
            es: "El Seguro De México Es Su Escudo Contra Lo Inesperado"
        },
        body: {
            en: [`Traveling to Mexico can be an exciting adventure, but it's essential to be prepared for the unexpected.`,
                `When you travel into Mexico with an American or Canadian licensed vehicle, you need Mexican auto insurance before
             crossing the border`
            ],
            es: [`Viajar a México puede ser una aventura emocionante, pero es esencial estar preparado para lo inesperado.`,
                `Cuando viaja a México con un vehículo con licencia estadounidense o canadiense, necesita un seguro de automóvil mexicano antes
                cruzando la frontera`
            ],
        },
    },
    largeVerticalCard: {
        body: {
            en: [`Whether you drive a brand-new car or an older model, auto insurance protects your investment`],
            es: [`Ya sea que conduzca un automóvil nuevo o un modelo más antiguo, el seguro de automóvil protege su inversión`]
        },
        img: { src: MexicoImg2, alt: "car" }
    },
    smallCard1: {
        body: {
            en: [`See what our customers have to say about Ai United`],
            es: [`Vea lo que nuestros clientes tienen que decir sobre Ai United`]
        },
        CTA: {
            type: "secondary",
            text: { en: "Read Reviews", es: "Leer Reseñas" },
            link: PATHCONSTANTS.ABOUT.REVIEWS
        },
    },
    smallCard2: {
        body: {
            en: ['Get a free quote today from the comfort of your home'],
            es: ['Obtenga una cotización gratuita hoy desde la comodidad de su hogar']
        },
        CTA: {
            type: "primary",
            text: { en: "Get A Quote", es: "Obtener Una Cotización" },
            link: `${PATHCONSTANTS.QUOTES.MEXICO.FORM}`
        },
    }
}
const contentSection2 = {
    title: {
        en: "Exploring Mexico Insurance Coverage Options",
        es: "Explorando Las Opciones De Cobertura De Seguro De México"
    },
    body: {
        en: [
            `At Ai United, we understand that every driver is unique. That's why we offer a variety of auto insurance coverages to match your needs.`,
            `• Liability Insurance`,
            `• Collision Insurance`,
            `• Comprehensive Insurance`,
            `• And More`
        ],
        es: [
            `En Ai United, entendemos que cada conductor es único. Es por eso que ofrecemos una variedad de coberturas de seguro de auto para satisfacer sus necesidades.`,
            `• Seguro de Responsabilidad Civil`,
            `• Seguro de Colisión`,
            `• Seguro Integral`,
            `• Y Más`
        ],
    },
    img: { src: MexicoImg3, alt: "car" },
}
export default function () {
    return <>
        <HeadComponent title={'Mexico Insurance | Get a Free Mexican Insurance Quote'}
            metaData={'Get a Free Mexico Tourist Insurance Quote with Ai United Insurnace Today'} />
        <VerticalBanner {...bannerContent} />
        <MainGrid  {...contentSection1} />
        <TwoColumn {...contentSection2} />
        <ContactAndShop quoteLink={PATHCONSTANTS.QUOTES.MEXICO.FORM} />
        <Box
            id="Mexico-quote"
            sx={{
                width: "100%", margin: "auto", textAlign: "center",
                backgroundColor: "primary.dark",
            }}>
            <Box
                sx={{
                    paddingTop: "2rem",
                    width: { xs: "90%", sm: '70%', md: "70%", lg: "50%" }, margin: "auto",
                    color: "white"
                }}
            >
                <Typography variant="h2">Mexico Insurance Quote</Typography>
                <Typography variant="h5">Start a free renters insurance quote to see the savings</Typography>
            </Box>
            <Box
                sx={{ width: "90%", margin: "auto", padding: "2rem" }}
            >
                <iframe id="Mexico-quote" src="https://buy.mexipass.com/AIUN034" height="800" width="100%" />
            </Box>
        </Box>
    </>
}