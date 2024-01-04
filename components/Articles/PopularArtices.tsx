import { Box, Typography } from "@mui/material";
import TextSection from "../Content/TextSection";
import { returnLocaleText } from "../locale/LocaleSwitcher";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const contentSection1 = {
    title: {
        en: "Popular Articles",
        es: "Artículos Populares"
    },
    subtitle: {
        en: `Discover In-Depth Knowledge and Insights with Our Highly-Requested and Widely-Read Selection of Popular Articles on Insurance Strategies, Tips, and Comprehensive Coverage Solutions.`,
        es: `Descubra el conocimiento y las ideas en profundidad con nuestra selección de artículos populares sobre estrategias de seguros, consejos y soluciones de cobertura integral, altamente solicitados y ampliamente leídos.`
    },
}

const classes = {
    root: {
        width: { xs: "100%", sm: "90%", md: "80%", lg: "80%" },
        margin: "auto",
        display: "flex", justifyContent: "space-around",
        flexDirection: { xs: "column", md: "row" },
        gap: "2rem", alignItems: "center",
        flexWrap: "wrap",
    },
    contentItem: {
        border: "1px solid #cacaca",
        position: "relative",
        width: { xs: "90%", sm: "80%", md: "45%", lg: "30%" },
        alignSelf: "stretch",
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
        <Box
            sx={{
                ...classes.contentItem
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Link href={`/articles/${link}`}>
                <Box
                    sx={hover ? { ...classes.imageColor, ...classes.imageHover } : { ...classes.imageColor }}
                ></Box>
                <Box sx={{ position: "relative" }}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%", minHeight: "10rem",
                        }}
                    >
                        <Image fill style={{
                            objectFit: "contain",
                        }} src={imageUrl}
                            alt={title.en} />
                    </Box>
                </Box>
                <Box
                    sx={
                        {
                            borderTop: "1px solid #cacaca",
                            padding: "1rem",
                            position: "relative",
                        }}
                >
                    <Typography variant="h6"
                        fontWeight={600}
                    >
                        {returnLocaleText(title)}
                    </Typography>
                </Box>
            </Link >
        </Box >
    </>
}
export default function (props) {
    return <>
        <TextSection {...contentSection1} />
        <Box sx={classes.root}>
            {props.articles.map((article, index) => {
                return <ContentItem key={index} article={article} />
            })}

        </Box>
    </>;
}