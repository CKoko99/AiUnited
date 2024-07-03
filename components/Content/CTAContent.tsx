import { Box, Button, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Lang, returnLocaleText } from "../locale/LocaleSwitcher";
import Link from "next/link";

interface CTAContentProps {
    title: {
        [lang: string]: string;
    };
    text: {
        [lang: string]: string;
    };
    img: {
        src: StaticImageData;
        alt: string;
    };
    cta1?: {
        link: string;
        text: {
            [lang: string]: string;
        };
    };
    cta2?: {
        link: string;
        text: {
            [lang: string]: string;
        };
    };
}
const styles = {
    root: {
        width: { xs: "90%", md: "80%" },
        margin: "auto",
    },
    image: {
        position: "relative",
        minHeight: "20rem",
        width: "90%",
        margin: "auto",
    },
    buttons: {
        display: "flex",
        justifyContent: "space-around",
        margin: "1rem 0",
        //  gap: "1rem",
        flexDirection: "row",
        transition: "all .2s ease-in-out",
        "&:hover": {
            // fontWeight: "bold",
            translate: "scale(1.1)",
        },
    },
};

export default function CTAContent(props: CTAContentProps) {
    return (
        <>
            <Box sx={{ ...styles.root }}>
                <Typography
                    variant="h4"
                    component="h4"
                    sx={{ textAlign: "center", margin: "1rem 0" }}
                >
                    {returnLocaleText(props.title)}
                </Typography>
                <Box sx={{ ...styles.image }}>
                    <Image
                        fill
                        style={{ objectFit: "contain" }}
                        {...props.img}
                    />
                </Box>
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{ textAlign: "center", margin: "1rem 0" }}
                >
                    {returnLocaleText(props.text)}
                </Typography>
                <Box sx={{ ...styles.buttons }}>
                    {props.cta1 && (
                        <Button
                            variant="outlined"
                            color="secondary"
                            href={props.cta1.link}
                            sx={{ textAlign: "center" }}
                        >
                            {returnLocaleText(props.cta1.text)}
                        </Button>
                    )}
                    {props.cta2 && (
                        <Link href={props.cta2.link}>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ textAlign: "center" }}
                            >
                                {returnLocaleText(props.cta2.text)}
                            </Button>
                        </Link>
                    )}
                </Box>
            </Box>
        </>
    );
}
