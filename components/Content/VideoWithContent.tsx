import { Box, Typography } from "@mui/material";
import CenterVideo from "./CenterVideo";
import { Lang } from "../locale/LocaleSwitcher";
import { useRouter } from "next/router";
import { CustomFonts } from "../../providers/theme";

interface ComponentProps {
    video: {
        video: {
            [lang: string]: string;
        }
        title: string;
    }
    title?: {
        [lang: string]: string;
    }
    body?: {
        [lang: string]: string;
    }
}

export default function (props: ComponentProps) {

    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    return <>
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                width: "90%",
                margin: "auto",
                padding: { xs: "1rem 0", md: "2rem" },
                gap: "1rem"
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    padding: { xs: "0 1rem", md: "0 1rem" },
                    display: "flex", flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Typography variant="h4"
                    sx={{ textAlign: { xs: "center", md: "left" } }}
                    fontWeight={600} fontFamily={CustomFonts.Gustavo}
                >
                    {props.title && props.title[currentLang]}
                </Typography>
                <Typography variant="h6"
                    sx={{ textAlign: { xs: "center", md: "left" } }}
                >
                    {props.body && props.body[currentLang]}
                </Typography>
            </Box>
            <CenterVideo {...props.video} />
        </Box>
    </>
}