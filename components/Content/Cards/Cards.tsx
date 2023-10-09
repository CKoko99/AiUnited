import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";


interface CardProps {
    title?: string;
    subtitle?: string;
    content?: {
        img: {
            src: StaticImageData;
            alt: string;
        },
        title: string;
        link: string;
    }[]
}
const styles = {
    root: {
        width: {
            xs: "90%", sm: "85%", md: "90%", lg: "85%",
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
        },
        minWidth: "200px",
        transition: 'font-weight 0.3s', // Add opacity transition

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
        height: { xs: "15rem", sm: "16rem", md: "13rem", lg: "15rem" },
        minHeight: "100%",
        minWidth: "13rem",
        maxWidth: { md: "13rem", lg: "15rem" },
        overflow: "hidden",
        borderBottom: "1px solid black",
        position: "relative",
    },
    imageColor: {
        opacity: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0, left: 0,
        backgroundColor: "primary.main",
        transition: 'opacity 0.5s', // Add opacity transition
    },
    imageHover: {
        opacity: .2,
        //transform: 'opacity 0.3s',
    },
}
function Card(props) {
    const [hovered, setHovered] = useState(false)
    return <Box sx={{ ...styles.card }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <Link href={`${props.link}`}>
            <Box sx={{
                ...styles.cardImage
            }}>
                <Box
                    sx={hovered ? { ...styles.imageColor, ...styles.imageHover } : { ...styles.imageColor }}
                ></Box>
                <Image style={{ objectFit: "cover" }}  {...props.img} />
            </Box>
        </Link >
        <Link href={`${props.link}`}>
            <Box
                sx={{ ...styles.cardTitle }}
            >
                <Typography
                    variant="h6"
                    style={{
                        fontWeight: "inherit"
                    }}
                >
                    {props.title}
                </Typography>
            </Box>
        </Link>
    </Box >
}
export default function Cards(props: CardProps) {
    return (<>
        <Box
            sx={{ ...styles.root }}
        >
            <Box sx={{ ...styles.cardContent }} >

                <Box sx={{ ...styles.titles }}>
                    <Typography variant="h4" sx={{ ...styles.title }} >
                        {props.title}
                    </Typography>
                    <Typography variant="h6">
                        {props.subtitle}
                    </Typography>
                </Box>
                <Box sx={{ ...styles.cards }}>
                    {props.content?.map((item: any, index: number) => {
                        return <Card key={index} {...item} />
                    })
                    }
                </Box>
            </Box >
        </Box >
    </>)
}