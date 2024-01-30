import { Box, Button, Typography } from "@mui/material";
import PATHCONSTANTS from "constants/sitemap";
import { returnLocaleText } from "../locale/LocaleSwitcher";

interface ComponentProps {
    category: string
    contained?: boolean
}

const ProductCategories = {
    auto: {
        subtitle: {
            en: `Explore Your Options and Secure Your Journey with a Comprehensive Auto Insurance Plan Today!`,
            es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de auto integral hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.AUTO.INDEX,
    },
    home: {
        subtitle: {
            en: `Explore Your Options and Secure Your Journey with a Comprehensive Home Insurance Plan Today!`,
            es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de hogar integral hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.HOME.INDEX,
    },
    motorcycle: {
        subtitle: {
            en: `Explore Your Options and Secure Your Journey with a Comprehensive Motorcycle Insurance Plan Today!`,
            es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de motocicleta integral hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.MOTORCYCLE.INDEX,
    },
    sr22: {
        subtitle: {
            en: `Explore Your Options and Secure Your Journey with a Comprehensive SR-22 Insurance Plan Today!`,
            es: `¡Explore sus opciones y asegure su viaje con un plan de seguro SR-22 integral hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.SR22.INDEX,
    },
    renters: {
        subtitle: {
            en: `Explore Your Options and Secure Your Journey with a Comprehensive Renters Insurance Plan Today!`,
            es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de inquilinos integral hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.RENTER.INDEX,
    },
    mexico: {
        subtitle: {
            en: `Explore Your Options and Secure Your Journey with a Comprehensive Mexico Tourist Auto Insurance Plan Today!`,
            es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de auto para turistas en México integral hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.MEXICO.INDEX,
    },
    surety: {
        subtitle: {
            en: `Explore Your Options and Secure Your Journey with a Comprehensive Surety Bonds Plan Today!`,
            es: `¡Explore sus opciones y asegure su viaje con un plan de bonos de garantía integral hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.SURETY.INDEX,
    },

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
                textAlign: "center",
                width: !props.contained ? "100%" : { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                margin: "auto",
            }}
        >
            <Typography variant="h6">
                {returnLocaleText(category.subtitle)}
            </Typography>
            <Box
                sx={{ width: { xs: "100%", sm: "60%" }, margin: "auto", display: "flex", justifyContent: "space-around", padding: "1rem" }}
            >
                <Button
                    variant={"contained"} color="primary" href={category.quoteLink}
                >
                    {returnLocaleText({ en: "Get a Quote", es: "Obtener una Cotización" })}
                </Button>
                <Button
                    variant="outlined" color="secondary" href={PATHCONSTANTS.ABOUT.CONTACT}
                >
                    {returnLocaleText({ en: "Contact Us", es: "Contáctenos" })}
                </Button>
            </Box>
        </Box>
    </>
}