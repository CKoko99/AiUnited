import { Box, Typography, Button, TextField } from "@mui/material";
import Image from "next/image";

import { useEffect, useState } from "react";
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

export default function (props) {
    const [inputValue, setInputValue] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [errorText, setErrorText] = useState("")
    const [onceValid, setOnceValid] = useState(false)
    let alinskoLink = `https://customers.empowerins.com/Fn/Quotes/PrimaryDriver.aspx?AgentNo=p1cLqpHj4s4fcL2mzmkBvA&zipcode=${inputValue}`


    const handleValueChange = (targetValue) => {
        // if (!targetValue) return
        if (props.validation?.toLowerCase() === "zipcode") {
            //remove all non numbers from string
            targetValue = targetValue.replace(/\D/g, '')
            setInputValue(targetValue)
        } else {
            setInputValue(targetValue)
        }
    }

    useEffect(() => {
        if (props.validation?.toLowerCase() === "zipcode") {
            if (inputValue?.length === 5) {
                setOnceValid(true)
                setIsValid(true)
                setErrorText("")
            } else if (inputValue?.length !== 5 && onceValid) {
                setIsValid(false)
                setErrorText("Please enter a valid zipcode")
            }
        }
    }, [inputValue])
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                }}
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
                        <Image {...props.image} fill style={{ objectFit: "cover" }} />
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
                        {props.title}
                    </Typography>
                    <Typography variant="h4"

                        sx={{
                            ...styles.glowTextSub,

                        }}
                    >
                        {props.subtitle}
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
                            placeholder={props.cta.placeholder}
                            variant="outlined"
                            color="secondary"
                            value={inputValue}
                            onChange={(e) => handleValueChange(e.target.value)}
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
                                        window.open(alinskoLink, "_blank")
                                    } else {
                                        setErrorText("Please enter a valid zipcode")
                                    }
                                }}
                                sx={{ width: "10rem", minHeight: "3.5rem" }}
                            >
                                {props.cta.button}
                            </Button>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}