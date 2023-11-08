import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import { Lang } from "../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../providers/theme";

const text = {
    title: {
        en: "Read Our Reviews",
        es: "Lea nuestras reseñas"
    },
    readFull: {
        en: "Read Full Review",
        es: "Leer reseña completa"
    },
    showMore: {
        en: "Show More",
        es: "Mostrar más"
    },
}
interface ReviewsListProps {
    reviews: {
        body: { [lang: string]: string; };
        author: string;
        reviewLink: string;
    }[];
}
const classes = {
    root: {
        display: "flex",
        padding: "2rem 0",
        margin: "auto",
        textAlign: "center",
        justifyContent: "center",
        gap: "2rem",
        alignItems: "center",
        flexDirection: "column",
        width: "90%",
    },
    cardContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { xs: "column", md: "row" },
        gap: "1.5rem",
        flexWrap: "wrap",
    },
    card: {
        margin: { xs: "auto", md: "0" },
        backgroundColor: "#F2F2F2",
        border: "1px solid #cacaca",
        borderRadius: "16px",
        display: "flex", flexDirection: "column",
        gap: "1rem",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
        padding: "16px",
        width: { xs: "90%", md: "30%" },
        textAlign: "left",
        justifyContent: "space-between",
    },
}
function ReviewItem(props: any) {
    return <>
        <Box
            sx={{ ...classes.card }}
        >
            <Box>
                <Typography>
                    "{props.body.en.substring(0, 350)} {props.body.en.length > 350 ? "..." : ""}"
                </Typography>
            </Box>
            <Box
            >
                <Typography
                    textAlign={"right"}
                >
                    - {props.author}
                </Typography>
                <Typography
                    textAlign={"center"}
                    color="primary"
                >
                    <Link href={props.reviewLink}
                        target="_blank"
                    >
                        {text.readFull[props.lang]}
                    </Link>
                </Typography>
            </Box>
        </Box>
    </>
}
export default function (props: ReviewsListProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    const [showCount, setShowCount] = useState(3)
    return <>
        <Box
            sx={classes.root}
        >
            <Typography fontFamily={CustomFonts.Gustavo} fontWeight={"bold"} variant="h3">{text.title[currentLang]}</Typography>
            <Box
                sx={{ ...classes.cardContainer }}>
                {props.reviews?.map((review, index) => {
                    if (index >= showCount) return null
                    return <ReviewItem lang={currentLang} key={index} {...review} />
                })}
            </Box>
            {showCount < props.reviews?.length && <Button
                color="secondary" variant="contained" onClick={() => setShowCount(showCount + 3)}
            >
                {text.showMore[currentLang]}
            </Button>}
        </Box>
    </>
}