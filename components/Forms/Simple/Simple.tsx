import { Box, Button, Typography } from "@mui/material";
import Question from "./Question";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { useEffect, useState } from "react";

export default function (props) {
    const router = useRouter()

    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    //fill array with false values for each question 
    const [validArray, setValidArray] = useState(Array(props.questions.length).fill(false))
    const [valid, setValid] = useState(false)
    function setIndexValid(index, valid) {
        const newArray = [...validArray]
        newArray[index] = valid
        setValidArray(newArray)

    }
    useEffect(() => {
        //check if all values in array are true
        const valid = validArray.every((value) => value)
        setValid(valid)
    }, [validArray])
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
                    <Typography variant="h2">{props.title[currentLang]}</Typography>
                    <Typography variant="h5">{props.subtitle[currentLang]}</Typography>
                </Box>
                <Box
                    sx={{
                        backgroundColor: "white",
                        maxWidth: "1000px",
                        margin: "auto",
                        padding: "1rem",
                        width: { xs: "90%", sm: "80%", },
                    }}
                >

                    <Box
                        sx={{
                            display: "flex", flexDirection: { xs: "column", md: "row" }, flexWrap: "wrap", gap: "1.2rem",
                            justifyContent: "space-between", margin: "auto",
                            padding: "1rem"
                        }}
                    >
                        {props.questions.map((question, index) => {
                            return <Question index={index} setValid={setIndexValid} key={index} {...question} />
                        })}
                    </Box>
                    <Box
                        sx={{ padding: "1rem" }}
                    >

                        <Button disabled={!valid} variant="contained" color="secondary">Submit</Button>
                    </Box>
                </Box>
            </Box >
        </Box >
    </>
}