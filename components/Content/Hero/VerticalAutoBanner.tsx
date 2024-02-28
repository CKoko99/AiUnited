import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../providers/theme";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import theme from "../../../providers/theme";
import { GTMEVENTS, GTMEventHandler } from "../../Scripts/GoogleTag";
import { useEffect, useState } from "react";
import PATHCONSTANTS from "constants/sitemap";

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
    return <>
        <Box
            textAlign={"center"}
            sx={{
                width: { xs: "95%", md: "70%" },
                margin: "auto",
                display: "flex", flexDirection: "column", gap: "1rem",
                padding: "1.5rem", alignItems: "center", justifyContent: "center",
            }}
            id={"Auto-quote"}
        >
            <Typography fontFamily={CustomFonts.Gustavo} component={"h1"} variant="h3">{props.title && props.title[currentLang]}</Typography>
            <Typography variant="h5">{props.subtitle && props.subtitle[currentLang]}</Typography>
            <Box
                sx={{
                    display: "flex",
                    margin: "1rem auto",
                    width: "100%",
                    justifyContent: "center",
                }}
            >
                <Box>

                    <Button
                        variant="contained"
                        color="secondary"
                        href={PATHCONSTANTS.GETAQUOTE.AUTO}
                        onClick={() => { GTMEventHandler(`${GTMEVENTS.audience}-TR-Auto-Start`, { 'name': "Auto-Quote" }) }}
                        sx={{
                            minWidth: "10rem", minHeight: "3.5rem"
                        }}
                    >
                        {props.cta.buttonText[currentLang]}
                    </Button>

                </Box>
            </Box>
            {props.img &&
                <Box
                    sx={{
                        position: "relative",
                        width: "100%", height: { xs: "15rem", sm: "20rem", md: "22rem" },
                    }}
                >
                    <Image fill priority={true} style={{ objectFit: "contain" }} {...props.img} />
                </Box>
            }
        </Box>
    </>
}