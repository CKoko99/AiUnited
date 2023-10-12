import { Box, Typography } from "@mui/material";
import Question from "./Question";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";

export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <>
        <Box
            sx={{
                margin: " auto", textAlign: "center",

                backgroundColor: "primary.dark", padding: "2rem 0"
            }}
        >
            <Box
                sx={{
                    display: "flex", flexDirection: "column", gap: "1rem",

                }}
            >
                <Box
                    sx={{
                        width: { xs: "90%", sm: '70%', md: "70%", lg: "50%" }, margin: "auto",
                        color: "white"
                    }}
                >
                    <Typography variant="h1">{props.title[currentLang]}</Typography>
                    <Typography variant="h5">{props.subtitle[currentLang]}</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex", flexDirection: { xs: "column", md: "row" }, flexWrap: "wrap", gap: "1rem",
                        width: { xs: "90%", sm: "80%", },
                        maxWidth: "1000px", padding: "1rem",
                        justifyContent: "space-between", margin: "auto",
                        backgroundColor: "white"

                    }}
                >
                    {props.questions.map((question, index) => {
                        return <Question key={index} {...question} />
                    })}
                </Box>
            </Box >
        </Box >
    </>
}