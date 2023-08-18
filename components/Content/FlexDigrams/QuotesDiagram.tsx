import { Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//menu content prop will be an array of objects with title and img
interface DiagramProps {
    title: string;
    content: any;
}
const styles = {
    root: {
        width: {
            xs: "100%", sm: "85%", md: "90%", lg: "90%",
        },
        margin: "auto",
    },
    diagram: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
    },

    image: {
        width: '90%',
        margin: "auto",
        padding: "0 .25rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            cursor: "pointer",
            width: "100%",
        },
    },
    contentItem: {
        width: {
            xs: "100%", sm: "100%", md: "50%", lg: "50%",
        },
        minWidth: {
            xs: "33%", sm: "26%", md: "26%", lg: "26%",
        },
        maxWidth: {
            xs: "33%", sm: "26%", md: "26%", lg: "26%",
        },
        cursor: "pointer",
        margin: 0,
        flex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    }
}
export default function Diagram(props: DiagramProps) {
    return (<>
        <Box sx={{ ...styles.root }}>
            <Typography variant="h4" component="h4" sx={{ textAlign: "center", margin: "1rem 0" }}>
                {props.title}
            </Typography>
            <Box
                sx={{ ...styles.diagram }}
            >
                {props.content?.map((item: any, index: number) => {
                    return (
                        <Link
                            href={item.link}
                            key={index}
                        >
                            <Box sx={{ ...styles.contentItem }}
                            >
                                <Box sx={{ ...styles.image }}>
                                    <Image src={item.img} alt={item.title}
                                    />
                                </Box>
                                {item.title && (
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={{
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            margin: "1rem 0",
                                            whiteSpace: "pre-line",
                                        }}
                                    >
                                        {item.title.split(' ').map((word: string, index: any) => (
                                            <React.Fragment key={index}>
                                                {word}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </Typography>
                                )}
                            </Box>
                        </Link>
                    )
                })}
            </Box>
        </Box>
    </>)
}