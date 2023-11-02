import { Box, Typography, Button, TextField } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { Lang } from "../../locale/LocaleSwitcher";
import { useRouter } from "next/router";

interface ComponentProps {
    image?: {
        src: StaticImageData,
        alt: string,
    }
    title?: { [lang: string]: string; };
    subtitle?: { [lang: string]: string; };
    opacity?: number;
    align?: "left" | "center" | "right";
}
const styles = {
    imageContainer: {
        width: "100%",
        minHeight: { xs: "32rem", sm: "29rem", md: "24rem" },

        position: "relative",
    },
    textContainer: {
        top: "50%", position: "absolute",
        left: "50%", transform: "translate(-50%, -50%)",
        width: { xs: "80%", sm: "70%", md: "70%" },
        color: "white",
        textAlign: "center",
    },
    glowText: {
        textShadow: " 0 0 10px #c1c1c1, 0 0 1px #a1a1a1, 0 0 30px #a8a8a8, 0 0 40px #a38d8f, 0 0 50px #b25e65, 0 0 60px #bb4a53, 0 0 70px #e27b83;"
    },
    glowTextSub: {
        textShadow: "0 0 10px #fff, 0 0 20px #000, 0 0 30px #a8a8a8, 0 0 40px #a38d8f, 0 0 50px #b25e65, 0 0 60px #bb4a53, 0 0 70px #e27b83;"
    },
    Buttons: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        margin: "2rem 0 0",
        gap: "1rem",
    }
}
export default function (props: ComponentProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                }}
            >

                <Box
                    sx={{
                        backgroundColor: "black",
                    }}
                >
                    <Box
                        sx={{
                            ...styles.imageContainer,
                            opacity: props.opacity ? props.opacity : .5,
                            backgroundColor: "black",
                            overflow: "hidden",
                        }}>
                        {props.image ? <Image priority {...props.image} fill style={{ objectFit: "cover" }} /> : null}
                    </Box>
                </Box>
                <Box
                    sx={{
                        ...styles.textContainer,
                        textAlign: props.align ? props.align : "center",
                    }}
                >
                    {props.title ? <Typography variant="h3"
                        sx={{
                            ...styles.glowText,

                        }}
                    >
                        {props.title[currentLang]}
                    </Typography> : null}
                    {props.subtitle ?
                        <Typography variant="h4"
                            sx={{
                                ...styles.glowTextSub,
                            }}
                        >
                            {props.subtitle[currentLang]}
                        </Typography> : null}
                </Box>
            </Box>
        </>
    )
}