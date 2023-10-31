import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang } from "../locale/LocaleSwitcher";

interface ComponentProps {
    title?: { [lang: string]: string; };
    subtitle?: { [lang: string]: string; };
}

const classes = {
    root: {
        width: { xs: "90%", sm: "80%", md: "70%" },
        margin: "auto",
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
                <Typography variant="h3" sx={{ textAlign: "center", margin: "2rem 0 0" }}>
                    {props.title[currentLang]}
                </Typography> : null}
            {props.subtitle ?
                <Typography variant="h5" sx={{ textAlign: "center", margin: "2rem 0 0" }}>
                    {props.subtitle[currentLang]}
                </Typography> : null}
        </Box>
    </>
}