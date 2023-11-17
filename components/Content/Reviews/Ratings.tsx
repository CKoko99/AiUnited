import { Box, Typography } from "@mui/material";
import theme from "../../../providers/theme";
import { Lang } from "../../locale/LocaleSwitcher";
import { useRouter } from "next/router";
import Link from "next/link";

const componentText = {
    stars: {
        en: "out of 5 stars",
        es: "de 5 estrellas",
    },
    AllReviews: {
        en: "Click here to see all reviews on Google",
        es: "Haga clic aquí para ver todas las reseñas en Google",
    },
    reviewsLink: "https://www.google.com/search?sca_esv=576971128&sxsrf=AM9HkKl0tGlHbe1Jj9XpcL9eAfhAeeH3qA:1700233866823&q=Ai+United+Insurance&ludocid=5438269300436612819&lsig=AB86z5WGPXa4UD1341t4v3EQFrPj&kgs=e999a6ad534847b9&shndl=-1&source=sh/x/loc/act/m1/can/3#lrd=0x8640cec3750f28c9:0x4b789d1d956fb6d3,1,,,,"
}
const reviewSections = [
    {
        value: 5,
        percent: 100,
    },
    {
        value: 4,
        percent: 25,
    },
    {
        value: 3,
        percent: 4,
    },
    {
        value: 2,
        percent: 8,
    },
    {
        value: 1,
        percent: 15,
    },
]

const classes = {
    root: {
        display: "flex",
        padding: "2rem 0",
        margin: "auto",
        textAlign: "center",
        justifyContent: "center",
        gap: "2rem",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
    },
    reviewSections: {
        display: "flex",
        flexDirection: "column",
        gap: ".7rem",
        justifyContent: "center",
        alignItems: "center",
    },
    reviewSection: {
        display: "flex",
        alignItems: "center",
        gap: "1rem"
    },
    reviewBar: {
        width: "15rem",
        border: "1px solid #999999",
        borderRadius: "8px",
        zIndex: 3,
    },
    reviewBarFill: {
        backgroundColor: theme.palette.secondary.main,
        minHeight: "1.2rem",
        zIndex: 2,
    }
}
export default function () {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <>
        <Box sx={classes.root}>
            <Box>
                <Box><Typography sx={{ fontSize: "7rem !important" }} variant="h1">4.5</Typography></Box>
                <Box>{componentText.stars[currentLang]}</Box>
            </Box>
            <Box sx={{ ...classes.reviewSections }}>
                {reviewSections.map((section) => {
                    return <Box sx={{ ...classes.reviewSection }}>
                        <Box sx={{ ...classes.reviewBar }}>
                            <Box sx={{
                                ...classes.reviewBarFill, width: `${section.percent}%`,
                                borderRadius: section.percent > 90 ? "8px" : "8px 0 0 8px",
                            }}></Box>
                        </Box>
                        {section.value}
                    </Box>
                })}
            </Box>
        </Box>
        <Box
            sx={{ width: "80%", margin: "auto" }}
        >
            <Typography
                textAlign={"center"} color={"primary"}
            ><Link href={componentText.reviewsLink} target="_blank">{componentText.AllReviews[currentLang]}</Link></Typography>
        </Box>
    </>
}