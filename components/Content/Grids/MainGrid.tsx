import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../providers/theme";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MainGridProps {
    largeHorizontalCard?: {
        title: { [lang: string]: string; };
        body: { [lang: string]: string[]; };
    };
    largeVerticalCard?: {
        body: { [lang: string]: string[]; };
        img: {
            src: StaticImageData;
            alt: string;
        };
    };
    smallCard1?: {
        body: { [lang: string]: string[]; };
        CTA?: {
            text: { [lang: string]: string; };
            link: string;
            type: string;
        };
    };
    smallCard2?: {
        body: { [lang: string]: string[]; };
        CTA?: {
            text: { [lang: string]: string; };
            link: string;
            type: string;
        };
    };
}
const styles = {
    root: {
        display: "flex", justifyContent: "space-between",
        padding: "1rem",
        flexDirection: { xs: "column-reverse", md: "row" },
        gap: "1rem",
        width: {
            xs: "90%", md: "100%",
        }, margin: "auto"
    },
    card: {
        backgroundColor: "#F2F2F2",
        border: "1px solid #cacaca",
        borderRadius: "16px",
        display: "flex", flexDirection: "column",
        gap: "1rem"
    },

    smallCard: {
        width: { xs: "100%", md: "49%" }
        , textAlign: "center", display: "flex", flexDirection: "column", gap: "1rem",
        alignItems: "center", padding: "16px", justifyContent: "space-between"
    },
    verticalCard: {
        width: { xs: "100%", md: "33%" },
        padding: "24px"
    }
}

export default function (props: MainGridProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <>
        <Box
            sx={{
                ...styles.root,
            }}
        >
            <Box
                sx={{ display: "flex", width: { xs: "100%", md: "66%" }, flexDirection: "column", gap: "1rem" }}
            >
                {props.largeHorizontalCard &&
                    <Box
                        sx={{
                            ...styles.card,
                            minHeight: "19rem",
                            padding: { xs: "1rem", md: "1rem 2.5rem" },
                        }}
                    >
                        <Typography textAlign={"center"} fontFamily={CustomFonts.Gustavo} variant="h4">{props.largeHorizontalCard.title && props.largeHorizontalCard.title[currentLang]}</Typography>
                        {props.largeHorizontalCard.body[currentLang].map((paragraph, index) => {
                            return <Typography key={index} variant="h5">• {paragraph}</Typography>
                        })}
                    </Box>}
                <Box
                    sx={{
                        display: "flex", justifyContent: "space-between",
                        flexDirection: { xs: "column", md: "row" }, gap: "1rem",
                        flex: "1"
                    }}
                >
                    {props.smallCard1 &&
                        <Box
                            sx={{
                                ...styles.card,
                                ...styles.smallCard,
                            }}
                        >

                            {props.smallCard1.body[currentLang].map((paragraph, index) => {
                                return <Typography textAlign={"center"} key={index} variant="h5">{paragraph}</Typography>
                            })}

                            {props.smallCard1.CTA &&
                                <Link href={props.smallCard1.CTA.link}
                                    scroll={props.smallCard1.CTA.link.includes("#") ? false : true}
                                >
                                    <Button variant={props.smallCard1.CTA.type == "primary" ? "contained" : "outlined"}
                                        color={props.smallCard1.CTA.type == "primary" ? "primary" : "secondary"}
                                    >
                                        {props.smallCard1.CTA.text[currentLang]}
                                    </Button>
                                </Link>
                            }
                        </Box>}
                    {props.smallCard2 &&
                        <Box
                            sx={{
                                ...styles.card,
                                ...styles.smallCard,
                            }}
                        >
                            {props.smallCard2.body[currentLang].map((paragraph, index) => {
                                return <Typography textAlign={"center"} key={index} variant="h5">{paragraph}</Typography>
                            })}
                            {props.smallCard2.CTA &&
                                <Link href={props.smallCard2.CTA.link}
                                    scroll={props.smallCard2.CTA.link.includes("#") ? false : true}
                                >
                                    <Button variant={props.smallCard2.CTA.type == "primary" ? "contained" : "outlined"}
                                        color={props.smallCard2.CTA.type == "primary" ? "primary" : "secondary"}
                                    >
                                        {props.smallCard2.CTA.text[currentLang]}
                                    </Button>
                                </Link>
                            }
                        </Box>}
                </Box>
            </Box>
            {props.largeVerticalCard &&
                <Box

                    sx={{
                        ...styles.card,
                        ...styles.verticalCard,
                    }}
                >
                    {props.largeVerticalCard.body[currentLang].map((paragraph, index) => {
                        return <Typography textAlign={"center"} key={index} variant="h5"> {paragraph}</Typography>
                    })}
                    <Box
                        sx={{
                            position: "relative",
                            width: "90%", height: { xs: "12rem", sm: "15rem", md: "18rem" },
                            margin: "auto"
                        }}
                    >
                        <Image fill style={{
                            objectFit: "contain", zIndex: "1",
                            backgroundBlendMode: "darken"

                        }}  {...props.largeVerticalCard.img} />
                    </Box>
                </Box>}
        </Box>
    </>
}