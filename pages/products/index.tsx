import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"
import PATHCONSTANTS from "../../constants/sitemap"
import AutoImg from "../../public/assets/images/products/auto.png"
import HomeImg from "../../public/assets/images/products/home.png"
import MotorcycleImg from "../../public/assets/images/products/motorcycle.png"
import SR22Img from "../../public/assets/images/products/sr22.png"
import RentersImg from "../../public/assets/images/products/renters.png"
import MexicoImg from "../../public/assets/images/products/mexico.png"
import SuretyImg from "../../public/assets/images/products/surety.png"
import Image from "next/image"
import Hero from "../../components/Content/Hero/Hero"
import BannerImage from "../../public/assets/images/products/banner.png"
import BannerImage1 from "../../public/assets/images/products/banner2.png"
import VerticalBanner from "@/components/Content/Hero/VerticalBanner"
import { useRouter } from "next/router"
import { Lang } from "@/components/locale/LocaleSwitcher"
// auto home motorcycle sr22, renters, mexico, surety bonds
const bannerContent = {
    title: {
        en: "Our Products",
        es: "Nuestros Productos"
    },
    subtitle: {
        en: "We offer a variety of insurance products to match your needs.",
        es: "Ofrecemos una variedad de productos de seguros para satisfacer sus necesidades."
    },
    image: {
        src: BannerImage,
        alt: "Our Products"
    }
}
const verticalBannerContent = {
    title: {
        en: "Our Products",
        es: "Nuestros Productos"
    },
    subtitle: {
        en: "We offer a variety of insurance products to match your needs.",
        es: "Ofrecemos una variedad de productos de seguros para satisfacer sus necesidades."
    },
    img: {
        src: BannerImage1,
        alt: "Our Products"
    }
}
const navContent = [
    {
        title: { en: "Auto", es: "Auto" },
        link: "#Auto"
    },
    {
        title: { en: "Home", es: "Casa" },
        link: "#Home"
    },
    {
        title: { en: "Motorcycle", es: "Motocicleta" },
        link: "#Motorcycle"
    },
    {
        title: { en: "SR22", es: "SR22" },
        link: "#SR22"
    },
    {
        title: { en: "Renters", es: "Inquilinos" },
        link: "#Renters"
    },
    {
        title: { en: "Mexico", es: "México" },
        link: "#Mexico"
    },
    {
        title: { en: "Surety Bonds", es: "Fianzas" },
        link: "#SuretyBonds"
    },
]
const content = [
    {
        title: { en: "Auto Insurance", es: "Seguro de Auto" },
        id: "Auto",
        body: {
            en: `At Ai United, we understand that every driver is unique. That's why we offer a variety 
        of auto insurance coverages to match your needs.`,
            es: `En Ai United, entendemos que cada conductor es único. Es por eso que ofrecemos una variedad
            de coberturas de seguro de auto para satisfacer sus necesidades.`},
        quote: PATHCONSTANTS.QUOTES.AUTO.FORM,
        info: PATHCONSTANTS.QUOTES.AUTO.INDEX,
        img: AutoImg
    },
    {
        title: { en: "Home Insurance", es: "Seguro de Casa" },
        id: "Home",
        body: {
            en: `Having home insurance offers peace of mind. You can rest easy knowing that your home and belongings 
        are secure, and you won't face a financial crisis if disaster strikes.`,
            es: `Tener un seguro de hogar ofrece tranquilidad. Puede descansar tranquilo sabiendo que su hogar y sus pertenencias
        están seguros y que no se enfrentará a una crisis financiera si ocurre un desastre.`},
        quote: PATHCONSTANTS.QUOTES.HOME.FORM,
        info: PATHCONSTANTS.QUOTES.HOME.INDEX,
        img: HomeImg
    },
    {
        title: { en: "Motorcycle Insurance", es: "Seguro de Motocicleta" },
        id: "Motorcycle",
        body: {
            en: `Accidents happen, and when they do, you want to ensure you're financially protected. Motorcycle 
        insurance is essential to safeguard both you and your bike.`,
            es: `Los accidentes ocurren y, cuando ocurren, desea asegurarse de estar protegido financieramente.
        El seguro de motocicleta es esencial para proteger tanto a usted como a su motocicleta.`},
        quote: PATHCONSTANTS.QUOTES.MOTORCYCLE.FORM,
        info: PATHCONSTANTS.QUOTES.MOTORCYCLE.INDEX,
        img: MotorcycleImg
    },
    {
        title: { en: "SR22 Insurance", es: "Seguro SR22" },
        id: "SR22",
        body: {
            en: `SR-22 insurance is a unique type of coverage required by the state of reinstate your driving 
        privileges after certain violations.`,
            es: `El seguro SR-22 es un tipo de cobertura única requerida por el estado para restablecer sus privilegios de
        conducción después de ciertas violaciones.`},
        quote: PATHCONSTANTS.QUOTES.SR22.FORM,
        info: PATHCONSTANTS.QUOTES.SR22.INDEX,
        img: SR22Img
    },
    {
        title: { en: "Renters Insurance", es: "Seguro de Inquilinos" },
        id: "Renters",
        body: {
            en: `Protect yourself and your valuables by getting low cost renters insurance that will cover the 
        content of an apartment or home that you'll be renting.`,
            es: `Protéjase a sí mismo y a sus objetos de valor obteniendo un seguro de inquilinos de bajo costo que cubrirá el
        contenido de un apartamento o casa que alquilará.`},
        quote: PATHCONSTANTS.QUOTES.RENTER.FORM,
        info: PATHCONSTANTS.QUOTES.RENTER.INDEX,
        img: RentersImg
    },
    {
        title: {
            en: "Mexico Insurance",
            es: "Seguro de México"
        },
        id: "Mexico",
        body: {
            en: `Traveling to Mexico can be an exciting adventure, but it's essential to be prepared for the 
        unexpected. It's important to have Mexico tourist insurance on your vehicle.`,
            es: `Viajar a México puede ser una aventura emocionante, pero es esencial estar preparado para lo inesperado.
        Es importante tener un seguro de turista de México en su vehículo.`},
        quote: PATHCONSTANTS.QUOTES.MEXICO.FORM,
        info: PATHCONSTANTS.QUOTES.MEXICO.INDEX,
        img: MexicoImg
    },
    {
        title: { en: "Surety Bonds", es: "Seguro de Fianza" },
        id: "SuretyBonds",
        body: {
            en: `Ai United is dedicated to simplifying the world of Surety Bonds, ensuring you have
         the coverage you need, precisely when you need it.`,
            es: `Ai United se dedica a simplificar el mundo de las fianzas, asegurándose de tener
        la cobertura que necesita, precisamente cuando la necesita.`},
        quote: PATHCONSTANTS.QUOTES.SURETY.FORM,
        info: PATHCONSTANTS.QUOTES.SURETY.INDEX,
        img: SuretyImg
    }
]
const text = {
    GAQ: {
        en: "Get a Quote!",
        es: "¡Obtenga una cotización!"
    },
    LM: {
        en: "Learn More",
        es: "Aprende más"
    }
}
function ContentItem(props) {
    const currentLang = props.currentLang
    return <>
        <Box id={props.id}
            sx={{
                display: "flex", justifyContent: "space-around",
                flexDirection: { xs: "column", md: props.odd ? "row-reverse" : "row" },
                width: "85%", margin: "auto",
                padding: "1rem", alignItems: "center"
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "40%" },
                    position: "relative", height: "15rem"
                }}
            >
                <Image
                    fill style={{ objectFit: "contain" }}
                    src={props.img} alt={props.id}
                />
            </Box>
            <Box
                sx={{
                    width: { xs: "100%", md: "40%" },
                    display: "flex", flexDirection: "column", gap: "1rem",
                }}
            >
                <Typography fontWeight={600} variant="h4">
                    {props.title[currentLang]}
                </Typography>
                <Typography variant="h6">
                    {props.body[currentLang]}
                </Typography>
                <Box
                    sx={{ display: "flex", justifyContent: "space-around" }}
                >
                    <Link href={props.quote}>
                        <Button
                            variant="contained" color="primary"
                        >{text.GAQ[currentLang]}</Button>
                    </Link>
                    <Link href={props.info}>
                        <Button
                            variant="outlined" color="secondary"
                        >{text.LM[currentLang]}</Button>
                    </Link>
                </Box>
            </Box>
        </Box >
    </>
}
export default function () {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    return <>
        <VerticalBanner {...verticalBannerContent} />
        <Box
            sx={{
                display: { xs: "none", md: "flex" }, justifyContent: "space-around",
                border: "1px solid #cacaca",
            }}
        >
            {navContent.map((item, index) => {
                return <Link href={item.link} key={index}>
                    <Button>
                        {item.title[currentLang]}
                    </Button>
                </Link>
            })}
        </Box>
        <Box
            sx={{ padding: { xs: "0 0 1rem", md: "3rem 0" } }}
        >
            {
                content.map((item, index) => {
                    return <>
                        <ContentItem currentLang={currentLang} odd={index % 2} key={index} {...item} />
                        {index !== content.length - 1 && <hr />}
                    </>
                })
            }
        </Box >

    </>
}