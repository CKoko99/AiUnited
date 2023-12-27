import { Box, Typography } from "@mui/material";
import { returnLocaleText } from "../locale/LocaleSwitcher";
import { CustomFonts } from "providers/theme";

const months = [
    { en: "January", es: "Enero" },
    { en: "February", es: "Febrero" },
    { en: "March", es: "Marzo" },
    { en: "April", es: "Abril" },
    { en: "May", es: "Mayo" },
    { en: "June", es: "Junio" },
    { en: "July", es: "Julio" },
    { en: "August", es: "Agosto" },
    { en: "September", es: "Septiembre" },
    { en: "October", es: "Octubre" },
    { en: "November", es: "Noviembre" },
    { en: "December", es: "Diciembre" },
]

export default function (props) {
    //console.log(props)
    return <>
        <Box sx={{
            display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem",
            maxWidth: 1076,

        }}>
            {props.title && <Typography fontWeight={"bold"} fontFamily={CustomFonts.Gustavo} variant="h3">
                {returnLocaleText(props.title)}
            </Typography>}
            {props.date && <Typography variant="h6">
                {returnLocaleText(months[props.date.month])} {props.date.day}, {props.date.year}
            </Typography>
            }
            {props.summary && <Typography variant="h6">
                {returnLocaleText(props.summary)}
            </Typography>}
        </Box>
    </>
}