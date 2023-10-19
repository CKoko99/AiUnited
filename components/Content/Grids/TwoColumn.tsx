import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../providers/theme";

export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <><Box
        sx={{
            display: "flex", flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            width: { xs: "95%", md: "100%" }, margin: "auto",
            padding: "1rem", gap: "1rem"
        }}
    >
        <Box
            sx={{
                position: "relative", height: { xs: "20rem", md: "25rem" },
                width: { xs: "100%", md: "49%" },
            }}
        >
            <Image {...props.img} fill style={{ objectFit: "contain" }} />
        </Box>
        <Box
            sx={{
                width: { xs: "100%", md: "60%" }, padding: "2rem",
                backgroundColor: "#F2F2F2",
                border: "1px solid #cacaca",
                borderRadius: "16px",
                display: "flex", flexDirection: "column", gap: "1rem"
            }}
        >
            <Typography fontFamily={CustomFonts.Gustavo} variant="h4">{props.title[currentLang]}</Typography>
            <Box>
                {props.body[currentLang].map((paragraph, index) => {
                    return <Typography key={index} variant="h5"> {paragraph}</Typography>
                })}
            </Box>
        </Box>
    </Box ></>
}