import { Box, Typography } from "@mui/material"
import { returnLocaleText } from "../locale/LocaleSwitcher"
import Link from "next/link"
import PATHCONSTANTS from "constants/sitemap"
import Image from "next/image"
import sampleImg from "public/assets/images/home/Laptop.png"
import { relative } from "path"
import { CustomFonts } from "providers/theme"
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
const SampleArticle = {
    img: {
        src: sampleImg,
        alt: "sample-article"
    },
    title: {
        en: "The Ultimate Guide to Cheap Auto Quotes",
        es: "La Guía Definitiva para Cotizaciones de Auto Baratas"
    },
    uuid: '1234',
    slug: 'the-ultimate-guide-to-cheap-auto-quotes'
}
export default function (props) {
    return <>
        <Box
            sx={{
                padding: "1rem 2rem",
                position: "sticky", top: "6rem",
                maxWidth: "100%",
                alignSelf: "flex-start",
            }}
        >
            <Typography fontFamily={CustomFonts.Gustavo}
                fontWeight={"bold"}
                textAlign={"center"} variant="h6" >{returnLocaleText(TEXT.discover)}</Typography>
            <hr />
            {[1, 2, 3].map((item, index) => {
                return <Link key={index} href={PATHCONSTANTS.ARTICLES.INDEX + "/" + SampleArticle.slug}>

                    <Box key={index} sx={{
                        display: "flex", flexDirection: "column", gap: "1rem",
                        marginTop: "1rem", border: "1px solid black", width: "25rem", maxWidth: "100%"
                    }}>
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
                                    src={SampleArticle.img.src} alt={SampleArticle.img.alt} />
                            </Box>
                            <Typography fontWeight={"light"} variant="h6" >{returnLocaleText(SampleArticle.title)}</Typography>
                        </Box>
                    </Box>
                </Link>
            })}
            <Typography textAlign={"center"} variant="h6">
                <Link href={PATHCONSTANTS.ARTICLES.INDEX}>
                    {returnLocaleText(TEXT.readMore)}
                </Link>
            </Typography>
        </Box >
    </>
}