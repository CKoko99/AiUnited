import { Box, Button, Typography } from "@mui/material"
import { returnLocaleText } from "../locale/LocaleSwitcher"
import PATHCONSTANTS from "constants/sitemap"
import TrafficImg from "public/assets/images/products/auto/traffic.png"
import HomeImg from "public/assets/images/products/home/house.png"
import MotorcycleImg from "public/assets/images/products/motorcycle/motorcycle.png"
import RentersImg from "public/assets/images/products/renters/renters.png"
import MexicoImg from "public/assets/images/products/mexico/island.png"
import SuretyImg from "public/assets/images/products/surety/surety.png"
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
    },
    home: {
        title: {
            en: `Secure Your Home with Confidence!`,
            es: `¡Asegure su hogar con confianza!`
        },
        subtitle: {
            en: `Protect Your Home and Your Family – Get Your Home Insurance Today!`,
            es: `Proteja su hogar y su familia: ¡obtenga su seguro de hogar hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.HOME.INDEX,
        img: {
            src: HomeImg,
            alt: "House"
        }
    },
    motorcycle: {
        title: {
            en: `Secure Your Ride with Confidence!`,
            es: `¡Asegure su viaje con confianza!`
        },
        subtitle: {
            en: `Ride with Confidence – Get Your Motorcycle Insurance Today!`,
            es: `Viaje con confianza: ¡obtenga su seguro de motocicleta hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.MOTORCYCLE.INDEX,
        img: {
            src: MotorcycleImg,
            alt: "Motorcycle"
        }
    },
    sr22: {
        title: {
            en: `Secure Your Journey with Confidence!`,
            es: `¡Asegure su viaje con confianza!`
        },
        subtitle: {
            en: `Take the Wheel of Safety – Get Your SR-22 Auto Insurance Today!`,
            es: `Tome el volante de la seguridad: ¡obtenga su seguro de auto SR-22 hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.SR22.INDEX,
        img: {
            src: TrafficImg,
            alt: "Traffic"
        }
    },
    renters: {
        title: {
            en: `Secure Your Home with Confidence!`,
            es: `¡Asegure su hogar con confianza!`
        },
        subtitle: {
            en: `Protect Your Home and Your Family – Get Your Renters Insurance Today!`,
            es: `Proteja su hogar y su familia: ¡obtenga su seguro de inquilinos hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.RENTER.INDEX,
        img: {
            src: RentersImg,
            alt: "Renters"
        }
    },
    mexico: {
        title: {
            en: `Secure Your Vacation with Confidence!`,
            es: `¡Asegure sus vacaciones con confianza!`
        },
        subtitle: {
            en: `Protect Your Vacation and Your Family – Get Your Mexico Insurance Today!`,
            es: `Proteja sus vacaciones y su familia: ¡obtenga su seguro de México hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.MEXICO.INDEX,
        img: {
            src: MexicoImg,
            alt: "Mexico"
        }
    },
    surety: {
        title: {
            en: `Secure Your Business with Confidence!`,
            es: `¡Asegure su negocio con confianza!`
        },
        subtitle: {
            en: `Protect Your Business and Your Family – Get Your Surety Bond Today!`,
            es: `Proteja su negocio y su familia: ¡obtenga su fianza hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.SURETY.INDEX,
        img: {
            src: SuretyImg,
            alt: "Surety"
        }
    }
}

export default function (props) {
    let trimmedCategory = props.category.trim().toLowerCase().split(" ")[0]
    let category

    if (trimmedCategory === "auto") {
        category = ProductCategories.auto
    } else if (trimmedCategory === "home") {
        category = ProductCategories.home
    } else if (trimmedCategory === "motorcycle") {
        category = ProductCategories.motorcycle
    } else if (trimmedCategory === "sr22") {
        category = ProductCategories.sr22
    } else if (trimmedCategory === "renters") {
        category = ProductCategories.renters
    } else if (trimmedCategory === "mexico") {
        category = ProductCategories.mexico
    } else if (trimmedCategory === "surety") {
        category = ProductCategories.surety
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