import { Box, Typography, Button, Modal } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CustomFonts } from "../../../providers/theme";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { useState } from "react";
import GetAQuote from "../../Modals/GetAQuote";

interface BannerProps {
    title: {
        [lang: string]: string;
    };
    subtitle: {
        [lang: string]: string;
    };
    ctaButton?: {
        text: {
            [lang: string]: string;
        };
    };
    image?: {
        src: StaticImageData;
        alt: string;
    }
}
const styles = {
    root: {
        display: "flex",
        width: {
            xs: "95%", sm: "90%", md: "85%", lg: "90%",
        },
        flexDirection: {
            xs: "column", sm: "column", md: "row", lg: "row",
        },
        margin: "auto",
        textAlign: {
            xs: "center", sm: "center", md: "left", lg: "left",
        }
    },
    textSection: {
        width: {
            xs: "100%", sm: "100%", md: "55%", lg: "55%",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1rem",
    },
    ctaButton: {
        //backgroundColor: theme.palette.primary.light,
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "2rem",
        fontFamily: CustomFonts.Gustavo,
        fontSize: "1rem",
        fontWeight: "bold",
        '&:hover': {
            //    backgroundColor: theme.palette.primary.main,
        },
        minWidth: "15rem",
        width: {
            xs: "80%", sm: "55%", md: "50%",
        },
        margin: {
            xs: "auto", sm: "auto", md: "0",
        }
    },
    imageContainer: {
        position: "relative",
        width: {
            xs: "100%", sm: "100%", md: "55%", lg: "55%",
        },
        minHeight: "20rem",
        padding: "1rem",
        display: "flex", justifyContent: "center", alignItems: "center",
        flexDirection: "column",
    }
}

export default function Banner(props: BannerProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    const [openModal, setOpenModal] = useState(false);

    return (<>
        <Box sx={{ ...styles.root }}>
            <Box
                sx={{
                    ...styles.textSection,
                }}
            >
                <Typography variant="h2" component={"h1"} fontWeight="bold" gutterBottom>{props.title[currentLang]}</Typography>

                <Typography sx={{

                }} variant="h4" gutterBottom>{props.subtitle[currentLang]}</Typography>

                {props.ctaButton && (
                    <Button sx={{ ...styles.ctaButton }} variant="contained"
                        onClick={() => { setOpenModal(true) }}
                    >

                        {props.ctaButton.text[currentLang]}


                    </Button>
                )}
            </Box>
            <Box
                sx={{ ...styles.imageContainer }}
            >
                {props.image && <Image
                    fill priority
                    style={{ objectFit: "contain" }}
                    {...props.image} />}
                <Typography sx={{
                    display: "none",
                }} variant="h4" gutterBottom>{props.subtitle[currentLang]}</Typography>
            </Box>
        </Box >
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
        >
            <GetAQuote close={() => { setOpenModal(false) }} />
        </Modal>
    </>)
}