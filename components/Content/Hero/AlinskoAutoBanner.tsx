import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang, returnLocaleText } from "../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../providers/theme";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import theme from "../../../providers/theme";
import { GTMEVENTS, GTMEventHandler } from "../../Scripts/Google/GoogleTag";
import { useEffect, useState } from "react";
import PATHCONSTANTS from "constants/sitemap";

const errorValidationText = {
    en: "Please enter a valid zipcode",
    es: "Por favor ingrese un código postal válido",
};
export default function (props: {
    title: { [key: string]: string };
    subtitle: { [key: string]: string };
    cta: {
        placeholder: { [key: string]: string };
        buttonText: { [key: string]: string };
    };
    img: StaticImageData;
    validation: string;
}) {
    const [inputValue, setInputValue] = useState("");
    const [userIP, setUserIP] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [onceValid, setOnceValid] = useState(false);
    let alinscoLink = `https://customers.empowerins.com/Fn/Quotes/PrimaryDriver.aspx?AgentNo=p1cLqpHj4s4fcL2mzmkBvA&zipcode=${inputValue}`;

    async function uploadToSheet() {
        const timestamp = new Date().toLocaleString();

        const formData = new FormData();
        formData.append("1 Timestamp", timestamp);
        formData.append("2 Device", window.navigator.userAgent);
        formData.append("3 ZipCode", inputValue);
        formData.append("4 User IP", userIP);
        formData.append("SheetTitle", "Ai United Alinsco Auto Banner");
        formData.append("Spreadsheet", "AiUnited");
        try {
            await fetch(`${PATHCONSTANTS.BACKEND}/forms`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([...formData.entries()]),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    const handleValueChange = (targetValue: string) => {
        if (props.validation?.toLowerCase() === "zipcode") {
            targetValue = targetValue.replace(/\D/g, "");
            setInputValue(targetValue);
        } else {
            setInputValue(targetValue);
        }
    };

    async function redirect() {
        if (isValid) {
            uploadToSheet();
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

    useEffect(() => {
        const fetchIPAddress = async () => {
            try {
                const response = await fetch(
                    "https://api.ipify.org?format=json",
                );
                const data = await response.json();
                setUserIP(data.ip || "");
            } catch (error) {
                console.error("Error fetching IP address:", error);
            }
        };
        fetchIPAddress();
    }, []);
    return (
        <>
            <Box
                textAlign={"center"}
                sx={{
                    width: { xs: "95%", md: "70%" },
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "1.5rem",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                id={"Auto-quote"}
            >
                <Typography
                    fontFamily={CustomFonts.Gustavo}
                    component={"h1"}
                    variant="h3"
                >
                    {props.title && returnLocaleText(props.title)}
                </Typography>
                <Typography variant="h5">
                    {props.subtitle && returnLocaleText(props.subtitle)}
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
                        placeholder={returnLocaleText(props.cta.placeholder)}
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
                                redirect();
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
                {props.img && (
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: { xs: "15rem", sm: "20rem", md: "22rem" },
                        }}
                    >
                        <Image
                            fill
                            priority={true}
                            style={{ objectFit: "contain" }}
                            {...props.img}
                            alt={returnLocaleText(props.title)}
                        />
                    </Box>
                )}
            </Box>
        </>
    );
}
