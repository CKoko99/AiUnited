import { returnLocaleText } from "@/components/locale/LocaleSwitcher"
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

const styles = {
    root: {
        width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
        margin: "auto",
        padding: "1rem 0",
    },
    underline: {
        width: "0%",
        transition: 'width 0.5s', // Add opacity transition
    },
    underlineHover: {
        width: "100%",
        transition: 'width 0.5s', // Add opacity transition
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

function ContentItem(props) {
    const [hovered, setHovered] = useState(false);

    return <Link
        style={{ flex: "1", display: "flex", flexDirection: "column", gap: "1rem" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={`${props.link}`}
    >
        <Box
            sx={{
                border: "1px solid #a8a8a8",
                padding: "1rem",
                position: "relative",
            }}
        >
            <Box
                sx={hovered ? { ...styles.imageColor, ...styles.imageHover } : { ...styles.imageColor }}
            ></Box>
            <Box
                sx={{
                    position: "relative", width: { xs: "11rem", md: "13rem" }, height: { xs: "11rem", md: "13rem" }, margin: "auto",
                }}
            >
                <Image fill style={{ objectFit: "contain" }} {...props.img} />
            </Box>
        </Box>
        <Box
            sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: "1" }}
        >

            <Typography fontWeight={600} variant="h6">
                {returnLocaleText(props.title)}
            </Typography>
            <Box>
                <Box sx={{
                    width: hovered ? styles.underlineHover : styles.underline, height: "3px",
                    opacity: 0.5,
                    backgroundColor: "primary.light",
                }} />
                <Typography variant="body1">
                    {returnLocaleText(props.body)}
                </Typography>
            </Box>
        </Box>
    </Link>
}

export default function (props) {
    return <Box sx={{ ...styles.root }}
    >
        <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-around", gap: "2rem" }}
        >

            {props.content.map((item, index) => {
                return <ContentItem key={index} {...item} />
            })}
        </Box>
    </Box>
}