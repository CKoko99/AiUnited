import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang } from "../locale/LocaleSwitcher";
import { CustomFonts } from "../../providers/theme";

interface ComponentProps {
    title?: { [lang: string]: string; };
    subtitle?: { [lang: string]: string; };
}

const classes = {
    root: {
        width: { xs: "90%", sm: "80%", md: "70%", lg: "65%" },
        margin: "auto", padding: "1rem 0", display: "flex",
        flexDirection: "column", alignItems: "center",
        gap: "1rem",
    }
}

export default function (props: ComponentProps) {

    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    return <>
        <Box sx={{ ...classes.root, }}
        >
            {props.title ?
                <Typography fontFamily={CustomFonts.Gustavo} variant="h4" fontWeight={600} sx={{ textAlign: "center", }}>
                    {props.title[currentLang]}
                </Typography> : null}
            {props.subtitle ?
                <Typography variant="h6" sx={{ textAlign: "center", }}>
                    {props.subtitle[currentLang]}
                </Typography> : null}
        </Box>
    </>
}