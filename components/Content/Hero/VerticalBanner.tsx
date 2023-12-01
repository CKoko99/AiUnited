import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../providers/theme";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import theme from "../../../providers/theme";
import { GTMEVENTS, GTMEventHandler } from "../../Scripts/GoogleTag";

interface VerticalBannerProps {
    title?: {
        [lang: string]: string;
    };
    subtitle?: {
        [lang: string]: string;
    };
    CTA?: {
        text: {
            [lang: string]: string;
        };
        link: string;
    };
    img?: {
        src: StaticImageData;
        alt: string;
    };
    audience?: string;
}

export default function (props: VerticalBannerProps) {

    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <>
        <Box
            textAlign={"center"}
            sx={{
                width: { xs: "95%", md: "70%" },
                margin: "auto",
                display: "flex", flexDirection: "column", gap: "1rem",
                padding: "1.5rem", alignItems: "center", justifyContent: "center",
            }}
        >
            <Typography fontFamily={CustomFonts.Gustavo} component={"h1"} variant="h3">{props.title && props.title[currentLang]}</Typography>
            <Typography variant="h5">{props.subtitle && props.subtitle[currentLang]}</Typography>
            {props.CTA &&
                <Link href={props.CTA.link} scroll={false}>
                    <Button variant="contained"
                        sx={{
                            backgroundColor: theme.palette.primary.light,
                            color: "white",
                            padding: "1rem 2rem",
                            borderRadius: "2rem",
                            fontWeight: "bold",
                            transition: "all 0.2s ease-in-out",
                            '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                            },
                            minWidth: "15rem",
                            width: {
                                xs: "80%", sm: "55%", md: "50%",
                            },
                            margin: {
                                xs: "auto", sm: "auto", md: "0",
                            }
                        }}
                        onClick={() => { GTMEventHandler(`${GTMEVENTS.audience}-${props.audience}`, { 'name': `${props.audience}-Quote` }) }}
                    >
                        {props.CTA.text[currentLang]}
                    </Button>
                </Link>
            }
            {props.img &&
                <Box
                    sx={{
                        position: "relative",
                        width: "100%", height: { xs: "15rem", sm: "20rem", md: "25rem" },
                    }}
                >
                    <Image fill priority={true} style={{ objectFit: "contain" }} {...props.img} />
                </Box>
            }
        </Box>
    </>
}