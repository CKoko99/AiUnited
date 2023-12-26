import { Box, Button, Typography } from "@mui/material"
import { returnLocaleText } from "../locale/LocaleSwitcher"
import PATHCONSTANTS from "constants/sitemap"

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
    }
}

export default function (props) {
    let trimmedCategory = props.catagory.trim().toLowerCase().split(" ")[0]
    let category

    if (trimmedCategory === "auto") {
        category = ProductCategories.auto
    }

    return <>
        <Box
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, }}
        >
            <Box
                sx={{ minWidth: "50%", }}
            >

            </Box>
            <Box
                sx={{
                    width: { xs: "100%", sm: "50%" },
                    textAlign: { xs: "center", sm: "left" },
                }}

            >
                <Box>
                    <Typography fontWeight={"bold"} variant="h6">
                        {returnLocaleText(category.title)}
                    </Typography>
                    <Typography variant="subtitle1">
                        {returnLocaleText(category.subtitle)}
                    </Typography>
                </Box>
                <Box
                    sx={{ width: "100%", margin: "auto", display: "flex", justifyContent: "space-between", padding: "1rem" }}
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
        </Box>
    </>
}