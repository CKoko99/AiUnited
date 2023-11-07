import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Lang } from "../locale/LocaleSwitcher";
import { useState } from "react";
import { CustomFonts } from "../../providers/theme";

interface ParentProps {
    title?: {
        [lang: string]: string;
    };
    subtitle?: {
        [lang: string]: string;
    };
    hideMobileImg?: boolean;
    img?: {
        src: StaticImageData;
        alt: string;
    },
    content?: {
        title: {
            [lang: string]: string;
        },
        body: {
            [lang: string]: string;
        },
    }[]
}
const parentClasses = {
    root: {
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0rem", md: "1rem" },
        padding: "1rem 0",
    },
    titles: {
        textAlign: "center",
    },
    mainContainer: {
        margin: "auto",
        width: { xs: "90%", sm: "80%", md: "90%", lg: "80%" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
    },
    imageContainer: {
        width: { xs: "100%", sm: "100%", md: "45%", lg: "45%" },
    },
    image: {
        position: "relative",
        height: "25rem",
        width: "100%"
    },
    contentContainer: {
        width: { xs: "100%", sm: "100%", md: "45%", lg: "45%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        gap: "2rem",
        padding: "1rem"
    },
}
const itemClasses = {
    root: {
        textAlign: { xs: "center", md: "left" },
    },
    title: {},
    body: {},
}
function ContentItem(props) {
    const [isHovered, setIsHovered] = useState(false)
    return <>
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                ...itemClasses.root,
                transition: 'transform 0.5s',
                transform: isHovered ? 'scale(1.1)' : "",
            }}
        >
            {props.title && <Typography sx={{ ...itemClasses.title }} fontWeight={"600"} variant="h5">{props.title[props.lang]}</Typography>}
            {props.body && <Typography sx={{ ...itemClasses.body }} variant="body1">{props.body[props.lang]}</Typography>}
        </Box>
    </>
}

export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <>
        <Box sx={parentClasses.root} >
            <Box sx={parentClasses.titles}>
                {props.title && <Typography
                    fontFamily={CustomFonts.Gustavo}
                    fontWeight={"bold"} variant="h3">{props.title[currentLang]}</Typography>}
                {props.subtitle && <Typography variant="h6">{props.subtitle[currentLang]}</Typography>}
            </Box>
            <Box sx={parentClasses.mainContainer}>
                <Box
                    sx={{ ...parentClasses.imageContainer, display: props.hideMobileImg ? { xs: "none", md: "block" } : "block" }}
                >
                    {props.img &&
                        <Box sx={parentClasses.image}>
                            <Image fill style={{ objectFit: "contain" }} {...props.img} />
                        </Box>
                    }
                </Box>
                <Box sx={parentClasses.contentContainer}>
                    {props.content?.map((item: any, index: number) => {
                        return <ContentItem lang={currentLang} key={index} {...item} />
                    })}
                </Box>
            </Box>
        </Box>
    </>
}