import { Box, Typography, Button, TextField } from "@mui/material";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Lang } from "../../locale/LocaleSwitcher";
import { useRouter } from "next/router";
import { GTMEVENTS, GTMEventHandler } from "../../Scripts/GoogleTag";
const styles = {
    imageContainer: {
        width: "100%",
        minHeight: { xs: "32rem", sm: "29rem", md: "24rem" },

        position: "relative",
    },
    textContainer: {
        top: "50%", position: "absolute",
        left: "50%", transform: "translate(-50%, -50%)",
        width: { xs: "80%", sm: "70%", md: "60%" },
        color: "white",
        textAlign: "center",
    },
    glowText: {
        textShadow: " 0 0 10px #c1c1c1, 0 0 1px #a1a1a1, 0 0 30px #a8a8a8, 0 0 40px #a38d8f, 0 0 50px #b25e65, 0 0 60px #bb4a53, 0 0 70px #e27b83;"

    },
    glowTextSub: {
        textShadow: "0 0 10px #fff, 0 0 20px #000, 0 0 30px #a8a8a8, 0 0 40px #a38d8f, 0 0 50px #b25e65, 0 0 60px #bb4a53, 0 0 70px #e27b83;"
    },
    Buttons: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        margin: "2rem 0 0",

        gap: "1rem",
    }
}
const errorValidationText = {
    en: "Please enter a valid zipcode",
    es: "Por favor ingrese un código postal válido"
}
export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    const [inputValue, setInputValue] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [errorText, setErrorText] = useState("")
    const [onceValid, setOnceValid] = useState(false)
    let alinscoLink = `https://customers.empowerins.com/Fn/Quotes/PrimaryDriver.aspx?AgentNo=p1cLqpHj4s4fcL2mzmkBvA&zipcode=${inputValue}`


    const handleValueChange = (targetValue) => {
        if (props.validation?.toLowerCase() === "zipcode") {
            targetValue = targetValue.replace(/\D/g, '')
            setInputValue(targetValue)
        } else {
            setInputValue(targetValue)
        }
    }
    function redirect() {
        if (isValid) {
            GTMEventHandler(`${GTMEVENTS.conversion}-Auto`, { 'name': "Auto-Quote" })
            window.open(alinscoLink, "_blank")
        } else {
            setErrorText(errorValidationText[currentLang])
        }
    }
    useEffect(() => {
        if (props.validation.toLowerCase() === "zipcode") {
            if (inputValue?.length === 5) {
                setOnceValid(true)
                setIsValid(true)
                setErrorText("")
            } else if (inputValue?.length !== 5 && onceValid) {
                setIsValid(false)
                setErrorText(errorValidationText[currentLang])
            }
        }
    }, [inputValue])

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                }}
                id={"Auto-quote"}
            >

                <Box
                    sx={{
                        backgroundColor: "black",
                    }}
                >
                    <Box
                        sx={{
                            ...styles.imageContainer,
                            opacity: props.opacity ? props.opacity : .5,
                            backgroundColor: "black",
                            overflow: "hidden",
                        }}>
                        <Image priority {...props.image} fill style={{ objectFit: "cover" }} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        ...styles.textContainer,
                        textAlign: props.align ? props.align : "center",
                    }}
                >
                    <Typography variant="h3"
                        sx={{
                            ...styles.glowText,

                        }}
                    >
                        {props.title[currentLang]}
                    </Typography>
                    <Typography variant="h4"

                        sx={{
                            ...styles.glowTextSub,

                        }}
                    >
                        {props.subtitle[currentLang]}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            margin: "1rem auto",
                            width: "100%",
                            justifyContent: "center",
                        }}
                    >
                        <TextField
                            placeholder={props.cta.placeholder[currentLang]}
                            variant="outlined"
                            color="secondary"
                            value={inputValue}
                            onChange={(e) => handleValueChange(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key !== "Enter") {
                                    return
                                }
                                redirect()
                            }}
                            error={!isValid}
                            helperText={errorText}
                            style={{
                                width: "12rem",
                                backgroundColor: "white"
                            }}
                        />
                        <Box>

                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    if (isValid) {
                                        window.open(alinscoLink, "_blank")
                                    } else {
                                        setErrorText(errorValidationText[currentLang])
                                    }
                                }}
                                sx={{
                                    minWidth: "10rem", minHeight: "3.5rem"
                                }}
                            >
                                {props.cta.buttonText[currentLang]}
                            </Button>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}