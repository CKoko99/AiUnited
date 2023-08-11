import { Box, Typography, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import theme from "../../../providers/theme";


interface BannerProps {
    title: string;
    subtitle: string;
    ctaButton?: {
        link: string;
        text: string;
    };
    image?: StaticImageData;
}
const styles = {
    root: {
        display: "flex",
        width: {
            xs: "95%", sm: "90%", md: "85%", lg: "80%",
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
        backgroundColor: theme.palette.primary.light,
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "2rem",
        fontWeight: "bold",
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
    },
    imageContainer: {
        width: {
            xs: "100%", sm: "100%", md: "55%", lg: "55%",
        },
        padding: "1rem",
        display: "flex", justifyContent: "center", alignItems: "center",
        flexDirection: "column",
    }
}

export default function Banner(props: BannerProps) {

    return (<>
        <Box sx={{ ...styles.root }}>
            <Box
                sx={{
                    ...styles.textSection,
                }}
            >
                <Typography variant="h2" fontWeight="bold" gutterBottom>{props.title}</Typography>

                <Typography sx={{

                }} variant="h4" gutterBottom>{props.subtitle}</Typography>

                {props.ctaButton && (
                    <Button href={props.ctaButton.link} sx={{ ...styles.ctaButton }} variant="contained">
                        {props.ctaButton.text}
                    </Button>
                )}
            </Box>
            <Box
                sx={{ ...styles.imageContainer }}
            >
                {props.image && <Image

                    src={props?.image} alt={props.title} />}
                <Typography sx={{
                    display: "none",
                }} variant="h4" gutterBottom>{props.subtitle}</Typography>
            </Box>
        </Box >
    </>)
}