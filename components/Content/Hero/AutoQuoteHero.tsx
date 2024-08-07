import { Box, Typography, Button, TextField } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { useEffect, useState } from "react";
import { Lang, returnLocaleText } from "../../locale/LocaleSwitcher";
import { useRouter } from "next/router";
import { GTMEVENTS, GTMEventHandler } from "../../Scripts/Google/GoogleTag";

interface VerticalBannerProps {
    title?: {
        [lang: string]: string;
    };
    subtitle?: {
        [lang: string]: string;
    };
    CTA?: {
        text: {
            [lang: string]: string;
        };
        link: string;
    };
    img?: {
        src: StaticImageData;
        alt: string;
    };
    audience: string;
    validation?: string;
}

const styles = {
    imageContainer: {
        width: "100%",
        minHeight: { xs: "32rem", sm: "29rem", md: "24rem" },

        position: "relative",
    },
    textContainer: {
        top: "50%",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "80%", sm: "70%", md: "60%" },
        color: "white",
        textAlign: "center",
    },
    glowText: {
        textShadow:
            " 0 0 10px #c1c1c1, 0 0 1px #a1a1a1, 0 0 30px #a8a8a8, 0 0 40px #a38d8f, 0 0 50px #b25e65, 0 0 60px #bb4a53, 0 0 70px #e27b83;",
    },
    glowTextSub: {
        textShadow:
            "0 0 10px #fff, 0 0 20px #000, 0 0 30px #a8a8a8, 0 0 40px #a38d8f, 0 0 50px #b25e65, 0 0 60px #bb4a53, 0 0 70px #e27b83;",
    },
    Buttons: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        margin: "2rem 0 0",

        gap: "1rem",
    },
};
const errorValidationText = {
    en: "Please enter a valid zipcode",
    es: "Por favor ingrese un código postal válido",
};
export default function (props: {
    title: { [lang: string]: string };
    subtitle: { [lang: string]: string };
    cta: {
        placeholder: { [lang: string]: string };
        buttonText: { [lang: string]: string };
    };
    image: {
        src: StaticImageData;
        alt: string;
    };
    align?: "center" | "left" | "right";
    opacity?: number;
    validation?: string;
}) {
    const [inputValue, setInputValue] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [onceValid, setOnceValid] = useState(false);
    let alinscoLink = `https://customers.empowerins.com/Fn/Quotes/PrimaryDriver.aspx?AgentNo=p1cLqpHj4s4fcL2mzmkBvA&zipcode=${inputValue}`;

    const handleValueChange = (targetValue: string) => {
        if (props.validation?.toLowerCase() === "zipcode") {
            targetValue = targetValue.replace(/\D/g, "");
            setInputValue(targetValue);
        } else {
            setInputValue(targetValue);
        }
    };
    function redirect() {
        if (isValid) {
            GTMEventHandler(`${GTMEVENTS.conversion}-Auto`, {
                name: "Auto-Quote",
            });
            window.open(alinscoLink, "_blank");
        } else {
            setErrorText(returnLocaleText(errorValidationText));
        }
    }
    useEffect(() => {
        if (props.validation.toLowerCase() === "zipcode") {
            if (inputValue?.length === 5) {
                setOnceValid(true);
                setIsValid(true);
                setErrorText("");
            } else if (inputValue?.length !== 5 && onceValid) {
                setIsValid(false);
                setErrorText(returnLocaleText(errorValidationText));
            }
        }
    }, [inputValue]);

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                }}
                //                id={"Auto-quote"}
            >
                <Box
                    id={"Auto-quote"}
                    sx={{ position: "absolute", top: "-7rem" }}
                ></Box>
                <Box
                    sx={{
                        backgroundColor: "black",
                    }}
                >
                    <Box
                        sx={{
                            ...styles.imageContainer,
                            opacity: props.opacity ? props.opacity : 0.5,
                            backgroundColor: "black",
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            priority
                            {...props.image}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        ...styles.textContainer,
                        textAlign: props.align ? props.align : "center",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            ...styles.glowText,
                        }}
                    >
                        {returnLocaleText(props.title)}
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            ...styles.glowTextSub,
                        }}
                    >
                        {returnLocaleText(props.subtitle)}
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
                            placeholder={returnLocaleText(
                                props.cta.placeholder,
                            )}
                            variant="outlined"
                            color="secondary"
                            value={inputValue}
                            onChange={(e) => handleValueChange(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key !== "Enter") {
                                    return;
                                }
                                redirect();
                            }}
                            error={!isValid}
                            helperText={errorText}
                            style={{
                                width: "12rem",
                                backgroundColor: "white",
                            }}
                        />
                        <Box>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    if (isValid) {
                                        window.open(alinscoLink, "_blank");
                                    } else {
                                        setErrorText(
                                            returnLocaleText(
                                                errorValidationText,
                                            ),
                                        );
                                    }
                                }}
                                sx={{
                                    minWidth: "10rem",
                                    minHeight: "3.5rem",
                                }}
                            >
                                {returnLocaleText(props.cta.buttonText)}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
