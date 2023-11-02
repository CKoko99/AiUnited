import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Lang } from "../../locale/LocaleSwitcher";


interface CardProps {
    title?: {
        [lang: string]: string;
    }
    subtitle?: {
        [lang: string]: string;
    }
    content?: {
        img: {
            src: StaticImageData;
            alt: string;
        },
        title: {
            [lang: string]: string;
        }
        link: string;
    }[]
}
const styles = {
    root: {
        width: {
            xs: "90%", sm: "85%", md: "90%", lg: "85%",
        },
        padding: "1rem 0",
        margin: "0 auto",
    },
    cardContent: {
        display: { xs: "block", sm: "block", md: "flex", lg: "flex", },
        alignItems: "center",
    },
    titles: {
        textAlign: { xs: "center", md: "left", },
        minWidth: { lg: "17rem", },
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
        border: "2px solid #a8a8a8",
        flex: 1,
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#7d7d7d",
        "&:hover": {
            cursor: "pointer",
            color: "black",
            border: "2px solid #6e6e6e",
        },
        minWidth: { xs: "205px", lg: "250px" },
        transition: 'all 0.3s, border 0.3s', // Add opacity transition

    },
    cards: {
        display: "flex",
        flexDirection: {
            xs: "column", sm: "column", md: "row", lg: "row",
        }
    },
    topSection: {
        height: { xs: "15rem", sm: "13rem", md: "13rem", lg: "15rem" },
        borderBottom: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    cardImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { xs: "15rem", sm: "16rem", md: "13rem", lg: "12rem" },
        maxHeight: "100%",
        width: { xs: "100%", sm: "50%", md: "100%" },
        // maxWidth: { md: "13rem", lg: "15rem" },
        overflow: "hidden",
        position: "relative",
    },
    imageColor: {
        opacity: 0,
        minWidth: "100%",
        minHeight: "100%",
        position: "absolute",
        top: 0, left: 0,
        zIndex: 2,
        backgroundColor: "primary.main",
        transition: 'opacity 0.5s', // Add opacity transition
    },
    imageHover: {
        opacity: .2,
        //transform: 'opacity 0.3s',
    },
}
function Card(props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    const [hovered, setHovered] = useState(false)
    return <Box sx={{ ...styles.card }}
        onMouseEnter={() => {
            setHovered(true)
        }}
        onMouseLeave={() => setHovered(false)}
    >
        <Link href={`${props.link}`}>
            <Box
                sx={{ ...styles.topSection }}
            >
                <Box
                    sx={hovered ? { ...styles.imageColor, ...styles.imageHover } : { ...styles.imageColor }}
                ></Box>
                <Box sx={{
                    ...styles.cardImage
                }}>
                    <Image fill style={{ objectFit: "contain", zIndex: "1" }}  {...props.img} />
                </Box>
            </Box>
        </Link >
        <Link
            style={{ margin: "auto" }}
            href={`${props.link}`}>
            <Box
                sx={{ ...styles.cardTitle }}
            >
                <Typography
                    variant="h6"
                    style={{
                        fontWeight: "inherit"
                    }}
                >
                    {props.title[currentLang]}
                </Typography>
            </Box>
        </Link>
    </Box >
}
export default function Cards(props: CardProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return (<>
        <Box
            sx={{ ...styles.root }}
        >
            <Box sx={{ ...styles.cardContent }} >

                <Box sx={{ ...styles.titles }}>

                    <Typography variant="h4" sx={{ ...styles.title }} >
                        {props.title && props.title[currentLang]}
                    </Typography>
                    <Typography variant="h6">
                        {props.subtitle && props.subtitle[currentLang]}
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