import { Box, Typography } from "@mui/material"
import { returnLocaleText } from "../locale/LocaleSwitcher"
import Link from "next/link"
import PATHCONSTANTS from "constants/sitemap"
import Image from "next/image"
import { CustomFonts } from "providers/theme"
import { useState } from "react"
const TEXT = {
    discover: {
        en: "Discover Related Articles",
        es: "Descubre Artículos Relacionados"
    },
    readMore: {
        en: "Read More Articles",
        es: "Lee Más Artículos"
    }
}
const classes = {
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
        opacity: .15,
        //transform: 'opacity 0.3s',
    },
}
function ContentItem(props) {
    const [hover, setHover] = useState(false)
    const { article } = props
    const imageUrl = article.attributes.Thumbnail.data.attributes.url
    const title = article.attributes.Title
    const link = article.attributes.title_slug
    return <>
        <Link href={PATHCONSTANTS.ARTICLES.INDEX + "/" + link}>
            <Box
                sx={{
                    display: "flex", flexDirection: "column", gap: "1rem",
                    marginTop: "1rem", border: "1px solid black", width: "25rem", maxWidth: "100%",
                    position: "relative",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Box
                    sx={hover ? { ...classes.imageColor, ...classes.imageHover } : { ...classes.imageColor }}
                ></Box>
                <Box sx={{
                    display: "flex", flexDirection: "row", gap: "1rem",
                }}>
                    <Box sx={{
                        position: "relative",
                        minWidth: "8rem", minHeight: "5rem",
                        borderRight: "1px solid black",
                    }}>

                        <Image fill
                            style={{ objectFit: "cover" }}
                            src={imageUrl} alt={title} />
                    </Box>
                    <Typography
                        sx={{
                            color: hover ? "black" : "#5a5a5a",
                            transition: 'color 0.5s',
                        }}
                        variant="h6" >{returnLocaleText(title)}</Typography>
                </Box>
            </Box>
        </Link>
    </>
}
export default function (props) {
    const [moreHover, setMoreHover] = useState(false)
    const articles = props.articles.slice(0, 3)
    return <>
        <Box
            sx={{
                padding: "1rem 1rem",
                position: "sticky", top: "6rem",
                maxWidth: "100%",
                alignSelf: "flex-start",
            }}
        >
            <Typography fontFamily={CustomFonts.Gustavo}
                fontWeight={"bold"}
                textAlign={"center"} variant="h6" >{returnLocaleText(TEXT.discover)}</Typography>
            <hr />
            {articles.map((item, index) => {
                return <ContentItem key={index} article={item} />
            })}
            <Typography textAlign={"center"} variant="h6"
                onMouseEnter={() => setMoreHover(true)}
                onMouseLeave={() => setMoreHover(false)}
                sx={{
                    color: moreHover ? "black" : "#5a5a5a",
                    transition: 'color 0.5s',
                }}
            >
                <Link href={PATHCONSTANTS.ARTICLES.INDEX}>
                    {returnLocaleText(TEXT.readMore)}
                </Link>
                <Box sx={{
                    width: moreHover ? "70%" : "0%",
                    height: "1px",
                    backgroundColor: "black",
                    transition: 'width 0.5s',
                    margin: "auto",
                }} ></Box>
            </Typography>
        </Box >
    </>
}