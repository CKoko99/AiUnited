import Image, { StaticImageData } from "next/image";
import { Box, Typography, Button } from "@mui/material";
import theme from "../../../providers/theme";
interface HomeReviewProps {
    title: string;
    img: StaticImageData;
    content: {
        name: string;
        review: string;
    },
    cta: string;
}

const styles = {
    root: {
        backgroundColor: theme.palette.primary.light,
        padding: ".5rem 0",
    },
    review: {
        width: {
            xs: "85%", md: "80%"
        },
        display: "flex",
        flexDirection: {
            xs: "column", md: "row"
        },
        margin: "auto",
    },
    title: {
        color: "white",
        textAlign: "center", fontWeight: "bold", margin: "1rem 0"
    },
    image: {
        width: {
            xs: "100%", md: "50%"
        }
    },
    chat: {
        width: {
            xs: "100%", md: "100%"
        },
        backgroundColor: "white",
        padding: "1rem",
        textAlign: "center",
    },
    content: {},
    name: {},
    cloud: {

        width: "90%",
        margin: "auto",
        display: "inline-block",
        borderRadius: "15px",
        background: "white",
        padding: "2rem",
        position: "relative",
        "::before": {
            right: "1rem",
            clipPath: "polygon(0 0, 75% 0, 100% 100%)",
            top: "calc(100% - 2px)",

            position: "absolute",
        }
    },
    smallCloud: {

    },
}
const SpeechBubble = ({ children }) => {

    return (
        <Box sx={{ ...styles.cloud }}>

            {children}
        </Box>
    );
};


export default function HomeReview(props: any) {
    return (
        <>
            <Box
                sx={{ ...styles.root }}
            >
                <Typography variant="h4" component="h4" sx={{ ...styles.title }}>
                    {props.title}
                </Typography>
                <Box
                    sx={{ ...styles.review }}
                >
                    <Box
                        sx={{ ...styles.image }}
                    >
                        <Image src={props.img} alt={props.title} />
                    </Box>
                    <SpeechBubble pbottom aright>

                        {props.content &&

                            <Box
                                sx={{
                                    ...styles.content
                                }}
                            >
                                <Typography variant="body1"
                                    sx={{ ...styles.review }}
                                >
                                    {props.content.review}
                                </Typography>
                                <Typography variant="body1"
                                    sx={{ ...styles.name }}

                                >
                                    {props.content.name}
                                </Typography>
                            </Box>
                        }
                        {props.cta && <Button variant="contained" color="secondary"
                            href={props.cta.link}
                        >
                            {props.cta.text}
                        </Button>}
                    </SpeechBubble>

                </Box>
            </Box>
        </>
    )
}