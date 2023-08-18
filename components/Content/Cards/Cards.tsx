import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
    title: string;
    subtitle: string;
    content: any;
}
const styles = {
    root: {
        width: {
            xs: "90%", sm: "85%", md: "85%", lg: "80%",
        },
        margin: "1rem auto",
    },
    cardContent: {
        display: { xs: "block", sm: "block", md: "flex", lg: "flex", },
        alignItems: "center",
    },
    titles: {
        textAlign: { xs: "center", md: "left", },
    },
    title: {
        fontWeight: "bold",
    },
    cardTitle: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "0rem", md: "1rem" },
        margin: "1rem auto",
    },
    card: {
        border: "1px solid black",
        flex: 1,
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
            cursor: "pointer",
            fontWeight: "bold",
        }
    },
    cards: {
        display: "flex",
        flexDirection: {
            xs: "column", sm: "column", md: "row", lg: "row",
        }
    },
    cardImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "13rem", sm: "16rem", md: "12rem", lg: "15rem" },
        overflow: "hidden",
        borderBottom: "1px solid black"

    }
}
export default function Card(props: CardProps) {
    console.log(props.content)
    return (<>
        <Box
            sx={{ ...styles.root }}
        >
            <Box sx={{ ...styles.cardContent }} >

                <Box sx={{ ...styles.titles }}>
                    <Typography variant="h4" component="h4" sx={{ ...styles.title }} >
                        {props.title}
                    </Typography>
                    <Typography variant="h6" component="h6" >
                        {props.subtitle}
                    </Typography>
                </Box>
                <Box sx={{ ...styles.cards }}>
                    {props.content?.map((item: any, index: number) => {
                        return <Box key={index} sx={{ ...styles.card }}>
                            <Link href={`${item.link}`}>
                                <Box sx={{
                                    ...styles.cardImage
                                }}>
                                    <Image src={item.img} alt={item.title} />
                                </Box>
                            </Link>
                            <Link href={`${item.link}`}>
                                <Box
                                    sx={{ ...styles.cardTitle }}
                                >
                                    <Typography
                                        variant="h6"
                                        style={{
                                            fontWeight: "inherit"
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    })
                    }
                </Box>
            </Box >
        </Box >
    </>)
}