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
    reviewsLink: "https://www.google.com/search?q=ai+united+insurance+bammel&sca_esv=576971128&ei=G906ZZyfIvGlqtsP5PeL8Ag&ved=0ahUKEwjcmNeC15SCAxXxkmoFHeT7Ao4Q4dUDCBA&uact=5&oq=ai+united+insurance+bammel&gs_lp=Egxnd3Mtd2l6LXNlcnAiGmFpIHVuaXRlZCBpbnN1cmFuY2UgYmFtbWVsMggQABiJBRiiBDIFEAAYogRI_i1QwRNYryRwAngBkAEAmAF2oAGRBaoBAzkuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAg0QABhHGNYEGMkDGLADwgILEAAYigUYkgMYsAPCAgsQLhiABBjHARivAcICCBAAGIoFGIYDwgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAg0QLhgNGIAEGMcBGNEDwgIHEAAYDRiABMICDRAuGA0YgAQYxwEYrwHCAhwQLhgNGIAEGMcBGNEDGJcFGNwEGN4EGOAE2AEBwgIEECEYCuIDBBgAIEGIBgGQBgq6BgYIARABGBQ&sclient=gws-wiz-serp#lrd=0x8640cec3750f28c9:0x4b789d1d956fb6d3,1,,,,"
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