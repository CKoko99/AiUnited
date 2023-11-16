import { Box, Button, Typography } from "@mui/material";
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
    cta1: {
        text: {
            [lang: string]: string;
        }
        href: string;
    }
    cta2: {
        text: {
            [lang: string]: string;
        }
        href: string;
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
                flexDirection: { xs: "column-reverse", md: "row" },
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
                    sx={{ textAlign: "left" }}
                    fontWeight={600} fontFamily={CustomFonts.Gustavo}
                >
                    {props.title && props.title[currentLang]}
                </Typography>
                <Typography variant="h6"
                    sx={{ textAlign: "left" }}
                >
                    {props.body && props.body[currentLang]}
                </Typography>
                <Box
                    sx={{
                        display: "flex", gap: "1.5rem",
                        justifyContent: { xs: "space-between", md: "flex-start" },
                        width: { xs: "90%", sm: "80%", md: "100%" }, margin: "auto"
                    }}
                >
                    <Button variant="outlined" color="secondary" href={props.cta1.href}>
                        {props.cta1.text[currentLang]}
                    </Button>
                    <Button variant="text" color="secondary" href={props.cta2.href}>
                        {props.cta2.text[currentLang]}
                    </Button>
                </Box>
            </Box>
            <CenterVideo {...props.video} />
        </Box>
    </>
}