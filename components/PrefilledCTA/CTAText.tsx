import { Box, Button, Typography } from "@mui/material";
import PATHCONSTANTS from "constants/sitemap";
import { returnLocaleText } from "../locale/LocaleSwitcher";

const ProductCategories = {
    Auto: {
        subtitle: {
            en: `Explore Your Options and Secure Your Journey with a Comprehensive Auto Insurance Plan Today!`,
            es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de auto integral hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.AUTO.INDEX,
    },
    Home: {
        subtitle: {
            en: `Explore Your Options and Secure Your Journey with a Comprehensive Home Insurance Plan Today!`,
            es: `¡Explore sus opciones y asegure su viaje con un plan de seguro de hogar integral hoy!`
        },
        quoteLink: PATHCONSTANTS.QUOTES.HOME.INDEX,
    },

}

export default function (props) {
    let trimmedCategory = props.category.trim().toLowerCase().split(" ")[0]
    let category


    if (trimmedCategory === "auto") {
        category = ProductCategories.Auto
    }
    console.log(category)

    return <>
        <Box
            sx={{ textAlign: "center", }}
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