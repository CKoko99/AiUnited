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
const navContent = [
    {
        title: "Auto",
        link: "#Auto"
    },
    {
        title: "Home",
        link: "#Home"
    },
    {
        title: "Motorcycle",
        link: "#Motorcycle"
    },
    {
        title: "SR22",
        link: "#SR22"
    },
    {
        title: "Renters",
        link: "#Renters"
    },
    {
        title: "Mexico",
        link: "#Mexico"
    },
    {
        title: "Surety Bonds",
        link: "#SuretyBonds"
    },
]
const content = [
    {
        title: "Auto Insurance",
        id: "Auto",
        body: `At Ai United, we understand that every driver is unique. That's why we offer a variety 
        of auto insurance coverages to match your needs.`,
        quote: PATHCONSTANTS.QUOTES.AUTO.FORM,
        info: PATHCONSTANTS.QUOTES.AUTO.INDEX,
        img: AutoImg
    },
    {
        title: "Home Insurance",
        id: "Home",
        body: `Having home insurance offers peace of mind. You can rest easy knowing that your home and belongings 
        are secure, and you won't face a financial crisis if disaster strikes.`,
        quote: PATHCONSTANTS.QUOTES.HOME.FORM,
        info: PATHCONSTANTS.QUOTES.HOME.INDEX,
        img: HomeImg
    },
    {
        title: "Motorcycle Insurance",
        id: "Motorcycle",
        body: `Accidents happen, and when they do, you want to ensure you're financially protected. Motorcycle 
        insurance is essential to safeguard both you and your bike.`,
        quote: PATHCONSTANTS.QUOTES.MOTORCYCLE.FORM,
        info: PATHCONSTANTS.QUOTES.MOTORCYCLE.INDEX,
        img: MotorcycleImg
    },
    {
        title: "SR22 Insurance",
        id: "SR22",
        body: `SR-22 insurance is a unique type of coverage required by the state of reinstate your driving 
        privileges after certain violations.`,
        quote: PATHCONSTANTS.QUOTES.SR22.FORM,
        info: PATHCONSTANTS.QUOTES.SR22.INDEX,
        img: SR22Img
    },
    {
        title: "Renters Insurance",
        id: "Renters",
        body: `Protect yourself and your valuables by getting low cost renters insurance that will cover the 
        content of an apartment or home that you'll be renting.`,
        quote: PATHCONSTANTS.QUOTES.RENTER.FORM,
        info: PATHCONSTANTS.QUOTES.RENTER.INDEX,
        img: RentersImg
    },
    {
        title: "Mexico Insurance",
        id: "Mexico",
        body: `Traveling to Mexico can be an exciting adventure, but it's essential to be prepared for the 
        unexpected. It's important to have Mexico tourist insurance on your vehicle.`,
        quote: PATHCONSTANTS.QUOTES.MEXICO.FORM,
        info: PATHCONSTANTS.QUOTES.MEXICO.INDEX,
        img: MexicoImg
    },
    {
        title: "Surety Bonds",
        id: "SuretyBonds",
        body: `Ai United is dedicated to simplifying the world of Surety Bonds, ensuring you have
         the coverage you need, precisely when you need it.`,
        quote: PATHCONSTANTS.QUOTES.SURETY.FORM,
        info: PATHCONSTANTS.QUOTES.SURETY.INDEX,
        img: SuretyImg
    }
]
function ContentItem(props) {
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
                    {props.title}
                </Typography>
                <Typography variant="h6">
                    {props.body}
                </Typography>
                <Box
                    sx={{ display: "flex", justifyContent: "space-around" }}
                >
                    <Link href={props.quote}>
                        <Button
                            variant="contained" color="primary"
                        >Get a Quote!</Button>
                    </Link>
                    <Link href={props.info}>
                        <Button
                            variant="outlined" color="secondary"
                        >Learn More</Button>
                    </Link>
                </Box>
            </Box>
        </Box >
    </>
}
export default function () {
    return <>
        <Hero {...bannerContent} />
        <Box
            sx={{
                display: { xs: "none", md: "flex" }, justifyContent: "space-around",
                border: "1px solid #cacaca",
            }}
        >
            {navContent.map((item, index) => {
                return <Link href={item.link} key={index}>
                    <Button>
                        {item.title}
                    </Button>
                </Link>
            })}
        </Box>
        <Box
            sx={{ padding: "3rem 0" }}
        >
            {content.map((item, index) => {
                return <>
                    <ContentItem odd={index % 2} key={index} {...item} />
                    {index !== content.length - 1 && <hr />}
                </>
            })}
        </Box>

    </>
}