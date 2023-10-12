import { Box, Button, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Lang } from "../locale/LocaleSwitcher";

interface CTAContentProps {
    title: {
        [lang: string]: string;
    }
    text: {
        [lang: string]: string;
    }
    img: {
        src: StaticImageData;
        alt: string;
    };
    cta1?: {
        link: string;
        text: {
            [lang: string]: string;
        }
    };
    cta2?: {
        link: string;
        text: {
            [lang: string]: string;
        }
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
        width: '90%',
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
        }
    }
}

export default function CTAContent(props: CTAContentProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <>
        <Box sx={{ ...styles.root }}>
            <Typography variant="h4" component="h4" sx={{ textAlign: "center", margin: "1rem 0" }}>
                {props.title[currentLang]}
            </Typography>
            <Box sx={{ ...styles.image }}>
                <Image
                    fill style={{ objectFit: "contain" }}
                    {...props.img}
                />
            </Box>
            <Typography variant="h5" component="h5" sx={{ textAlign: "center", margin: "1rem 0" }}>
                {props.text[currentLang]}
            </Typography>
            <Box sx={{ ...styles.buttons }}>
                {props.cta1 && <Button
                    variant="outlined"
                    color="secondary"
                    href={props.cta1.link}
                    sx={{ textAlign: "center" }}
                >
                    {props.cta1.text[currentLang]}
                </Button>}
                {props.cta2 && <Button
                    variant="contained"
                    color="secondary"
                    href={props.cta2.link}
                    sx={{ textAlign: "center" }}
                >
                    {props.cta2.text[currentLang]}
                </Button>}
            </Box>
        </Box>
    </>
}