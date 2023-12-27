import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CustomFonts } from "providers/theme";

export default function (props) {
    return <>
        <Box
            sx={{
                display: "flex", alignItems: "center",
                width: "90%", margin: "auto", justifyContent: "space-around",
                flexDirection: { xs: "column", md: "row" },
            }}

        >
            <Box
                sx={{
                    padding: { xs: "1rem", md: "3rem" },
                    maxWidth: { xs: "90%", md: "50%" }
                }}
            >
                <Typography sx={{
                    fontFamily: CustomFonts.Gustavo,
                    fontWeight: "bold"
                }} variant="h3" component={"h1"}>{returnLocaleText(props.title)}</Typography>
                {props.subtitle && <Typography variant="h5">{returnLocaleText(props.subtitle)}</Typography>}
            </Box>
            <Box
                sx={{
                    position: "relative", height: "20rem", width: "30rem", maxWidth: "100vw",
                    padding: "2rem"
                }}
            >
                <Image fill
                    style={{ objectFit: "contain" }}
                    {...props.img} />
            </Box>
        </Box>
    </>
}