import { Box, Button, Typography } from "@mui/material"
import { returnLocaleText } from "../locale/LocaleSwitcher"
import PATHCONSTANTS from "constants/sitemap"
import TrafficImg from "public/assets/images/products/auto/traffic.png"
import Image from "next/image"
const ProductCategories = {
    auto: {
        title: {
            en: `Secure Your Journey with Confidence!`,
            es: `¡Asegure su viaje con confianza!`
        },
        subtitle: {
            en: `Take the Wheel of Safety – Get Your Auto Insurance Today!`,
            es: `Tome el volante de la seguridad: ¡obtenga su seguro de auto hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.AUTO.INDEX,
        img: {
            src: TrafficImg,
            alt: "Traffic"
        }
    }
}

export default function (props) {
    console.log(props)
    let trimmedCategory = props.category.trim().toLowerCase().split(" ")[0]
    let category

    if (trimmedCategory === "auto") {
        category = ProductCategories.auto
    }

    return <>
        <Box
            sx={{
                display: "flex", flexDirection: { xs: "column", md: "row" },
                width: props.article ? "100%" : { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                margin: "auto",
            }}
        >
            <Box
                sx={{
                    minWidth: "50%",
                    position: "relative", height: { xs: "13rem", sm: "15rem", md: "15rem" },

                }}
            >
                <Image fill style={{
                    objectFit: "contain", padding: ".5rem",
                }} src={category.img.src} alt={category.img.alt} />
            </Box>
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    textAlign: { xs: "center", md: "left" },
                    padding: "1rem",
                }}

            >
                <Box>
                    <Typography fontWeight={"bold"} variant={props.article ? "h5" : "h4"}>
                        {returnLocaleText(category.title)}
                    </Typography>
                    <Typography variant="h6">
                        {returnLocaleText(category.subtitle)}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "100%", margin: "auto", display: "flex", justifyContent: { xs: "space-around", md: "flex-start" }, padding: "1rem",
                        gap: "2rem"

                    }}
                >
                    <Button sx={{ textAlign: "center" }}
                        variant={"contained"} color="primary" href={category.quoteLink}
                    >
                        {returnLocaleText({ en: "Get a Quote", es: "Obtener una Cotización" })}
                    </Button>
                    <Button sx={{ textAlign: "center" }}
                        variant="outlined" color="secondary" href={PATHCONSTANTS.ABOUT.CONTACT}
                    >
                        {returnLocaleText({ en: "Contact Us", es: "Contáctenos" })}
                    </Button>
                </Box>
            </Box>
        </Box>
    </>
}