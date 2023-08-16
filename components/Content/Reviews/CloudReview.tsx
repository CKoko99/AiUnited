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
        margin: "1rem auto"
    },
    review: {
        width: {
            xs: "85%", md: "90%"
        },
        display: "flex",
        flexDirection: {
            xs: "column", md: "row"
        },
        margin: "auto",
        alignItems: "center",
    },
    title: {
        color: "white",
        textAlign: "center", fontWeight: "bold",
        width: "80%",
        margin: "1rem auto",
    },
    image: {
        width: {
            xs: "80%", sm: "70%", md: "40%", lg: "40%",
        },
        margin: "auto",
    },
    chat: {
        width: {
            xs: "100%", md: "40%"
        },
        margin: "1rem auto",
        borderRadius: "15px",
        backgroundColor: "white",
        padding: " 0 1.5rem 1.5rem 1.5rem",
        textAlign: "center",
    },
    content: {},
    name: {},
    reviewSection: {
        paddingLeft: '16px',
        fontStyle: 'italic',
        marginTop: '1rem',
        display: "block",
    },
    reviewBefore: {
        display: " block",
        paddingLeft: "10px",
        content: '"\u0081"',
        fontSize: "80px",
        position: "absolute",
        left: "-20px",
        top: "-20px",
        color: "#7a7a7a",
    },
    quoteMark: {
        display: 'block',
        padding: '10px',
        content: '"\u201C"', // Unicode character for opening double quote
        fontSize: '80px',
        position: 'absolute',
        left: '-20px',
        top: '-20px',
        color: '#7a7a7a',
    },
    reviewText: {
        marginTop: { xs: "-3rem", sm: "-3.5rem", md: "-4rem" }
    },
    author: {
        marginTop: '8px',
        textAlign: 'right',
    },
    ctaButton: {
        margin: "1rem auto",
    }
}



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
                    <Box
                        sx={{ ...styles.chat }}
                    >
                        {props.content &&

                            <Box
                                sx={{
                                    ...styles.content
                                }}
                            >
                                <Box
                                    sx={{ ...styles.reviewSection, textAlign: "left" }}
                                >
                                    <Typography variant="h1"
                                        sx={{ marginLeft: "-2rem" }}
                                    >"</Typography>
                                    <Typography variant="h6"
                                        sx={{ ...styles.reviewText }}
                                    >
                                        {props.content.review}
                                    </Typography>


                                    <Typography variant="h6"
                                        sx={{ ...styles.author }}
                                    >
                                        - {props.content.name}
                                    </Typography>
                                </Box>
                            </Box>
                        }
                        {props.cta && <Button sx={{ ...styles.ctaButton }} variant="contained" color="secondary"
                            href={props.cta.link}
                        >
                            {props.cta.text}
                        </Button>}
                    </Box>

                </Box>
            </Box >
        </>
    )
}