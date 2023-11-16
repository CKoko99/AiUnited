import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import { Lang } from "../../locale/LocaleSwitcher";
import theme, { CustomFonts } from "../../../providers/theme";
import TextSection from "../TextSection";

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
        gap: "3.5rem 1.5rem",
        flexWrap: "wrap",
        marginTop: "2rem",
    },
    card: {
        margin: { xs: "auto", md: "0" },
        backgroundColor: "#F2F2F2",
        border: "1px solid #cacaca",
        borderRadius: "16px",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
        padding: "16px",
        minWidth: { xs: "90%", md: "30%" },
        textAlign: "left",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        flex: "1"
    },
    initials: {
        marginTop: "-0.25rem", color: "white",
        fontFamily: CustomFonts.Gustavo, fontWeight: "bold"
    }
}
function Avatar(props: any) {
    const initials = props.author.split(" ").map((name: string) => name[0]).join("")
    return <Box
        sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            top: "-3rem",
        }}
    >
        <Box
            sx={{ backgroundColor: theme.palette.primary.main, padding: "1rem", borderRadius: "50%" }}
        >
            <Typography
                variant="h5"
                sx={{ ...classes.initials }}
            >
                {initials[0]}.{initials[1]}.
            </Typography>
        </Box>
    </Box>
}
function ReviewItem(props: any) {
    return <>
        <Box
            sx={{ ...classes.card }}
        >
            <Avatar author={props.author} />

            <Box
                sx={{
                    display: "flex", flexDirection: "column",
                    justifyContent: "space-between", flex: "1",
                    marginTop: "-2.5rem",
                }}
            >
                <Box>
                    <Typography
                        variant="body1"
                    >
                        "{props.body.en.substring(0, 350)} {props.body.en.length > 350 ? "..." : ""}"
                    </Typography>
                </Box>
                <Box
                >
                    <Typography
                        textAlign={"right"}
                        sx={{ marginBottom: ".5rem" }}
                        variant="body1"
                    >
                        - {props.author}
                    </Typography>
                    <Typography
                        textAlign={"center"}
                        variant="body1"
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
        </Box >
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
            <TextSection title={text.title} />
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