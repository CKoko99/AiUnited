import {
    Box,
    Button,
    CircularProgress,
    Modal,
    Typography,
} from "@mui/material";
//import Question from "./Question";
import { useRouter } from "next/router";
import { Lang, returnLocaleText } from "../../locale/LocaleSwitcher";
import { useEffect, useState } from "react";
import PATHCONSTANTS from "../../../constants/sitemap";
import Image from "next/image";
import checkmarkImg from "../../../public/assets/images/components/checkmark.png";
import Question from "./Question";
import { GTMEVENTS, GTMEventHandler } from "../../Scripts/Google/GoogleTag";
import * as ttq from "components/Scripts/TikTok/TikTokEvents";
import * as fbq from "components/Scripts/Facebook/FacebookEvents";
const text = {
    secured: {
        en: "Your information is secure and will never be shared.",
        es: "Su información es segura y nunca será compartida.",
    },
    consent: {
        en: "By submitting this form you agree to be contacted by an Ai United Insurance agent.",
        es: "Al enviar este formulario, acepta ser contactado por un agente de Ai United Insurance.",
    },
    thankYou: {
        en: "Thank You!",
        es: "¡Gracias!",
    },
    thankYouMessage: {
        en: "Your Submission Has Been Recevied.",
        es: "Su solicitud ha sido recibida.",
    },
    submit: {
        en: "Submit",
        es: "Enviar",
    },
};
function getEmailProps(
    questions: {
        title: { [key: string]: string };
    }[],
    answers: string[],
) {
    let name = ["", ""];
    let email = "";
    //find first name and last name
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].title.en.toLowerCase() === "first name") {
            name[0] = answers[i];
        }
        if (questions[i].title.en.toLowerCase() === "last name") {
            name[1] = answers[i];
        }
        if (questions[i].title.en.toLowerCase() === "email") {
            email = answers[i];
        }
    }
    return { name: name.join(" "), email };
}
export interface SimpleFormInterface {
    id?: string;
    title: { [lang: string]: string };
    subtitle: { [lang: string]: string };
    questions: {
        title: { [lang: string]: string };
        type: string;
        options?: { [lang: string]: string }[];
        required?: boolean;
        file?: boolean;
        validation?: string;
        subGroup?: { [lang: string]: string };
        answers?: { [lang: string]: string }[];
        fullWidth?: boolean;
        future?: boolean;
        label?: { [lang: string]: string };
        outsideLabel?: boolean;
    }[];
    sheetTitle?: string;
    spreadsheet: string;
    conversion?: string;
    job?: boolean;
}
export default function (props: SimpleFormInterface) {
    //fill array with false values for each question
    const [validArray, setValidArray] = useState(
        Array(props.questions.length).fill(false),
    );
    const [valid, setValid] = useState(false);
    const [answersArray, setAnswersArray] = useState(
        Array(props.questions.length).fill(null),
    );

    const [formSubmmited, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [handlingSubmit, setHandlingSubmit] = useState(false);
    function setIndexValid(index: number, valid: boolean) {
        setValidArray((prevValidArray) => {
            const newArray = [...prevValidArray];
            newArray[index] = valid;
            return newArray;
        });
    }

    function setIndexAnswer(index: number, answer: any) {
        const newArray = [...answersArray];
        newArray[index] = answer;
        setAnswersArray(newArray);
    }

    useEffect(() => {
        //check if all values in array are true
        const valid = validArray.every((value) => value);
        setValid(valid);
    }, [validArray]);

    async function uploadToSheet() {
        //prepare data to be sent to google sheet
        //Numbering system to make sure the data is in the correct order

        const jsonData = {
            sheetTitle: props.sheetTitle || props.title.en,
            company: "AiUnited",
            spreadsheet: props.spreadsheet,
            device: window.navigator.userAgent,
            data: props.questions.map((question, index) => {
                return {
                    question: question.title.en,
                    response: answersArray[index],
                };
            }),
        };
        try {
            await fetch(`${PATHCONSTANTS.BACKEND}/forms`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            })
                .then((res) => res.json())
                .then(() => {
                    setFormSubmitted(true);
                })
                .catch((error) => {
                    console.log(error);
                    setFormSubmitted(false);
                });
        } catch (error) {
            console.log(error);
            setFormSubmitted(false);
        }
    }

    async function sendEmail() {
        const emailProps = getEmailProps(props.questions, answersArray);

        const questionsArray: string[] = [];
        props.questions.forEach((question) => {
            questionsArray.push(question.title.en);
        });
        try {
            await fetch(`${PATHCONSTANTS.BACKEND}/forms/email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: emailProps.email,
                    company: "Ai United",
                    spreadsheet: props.spreadsheet,
                    name: emailProps.name,
                    questions: questionsArray,
                    answers: answersArray,
                    formTitle: props.title.en,
                    job: props.job ? true : false,
                }),
            });
        } catch (error) {
            console.log(error);
        }
    }
    async function handleSubmit() {
        //send answers to backend
        setLoading(true);
        await uploadToSheet();
        setLoading(false);
        setHandlingSubmit(false);
        if (props.conversion) {
            const eventName = props.job
                ? `Hiring-${props.conversion}`
                : `${props.conversion}-Quote`;
            if (!props.job) {
                GTMEventHandler(`${GTMEVENTS.conversion}-${props.conversion}`, {
                    name: eventName,
                });
            }
            ttq.event(eventName);
            fbq.event(eventName);
        }
        await sendEmail();
    }
    useEffect(() => {
        //loop through valid array and check if atleast one value = "FILE_PLACEHOLDER"
        //if so, set valid to false
        //if not, set valid to true
        if (!handlingSubmit) {
            return;
        }
        setLoading(true);
        let Uploading = false;
        for (let i = 0; i < answersArray.length; i++) {
            if (answersArray[i] === "FILE_PLACEHOLDER") {
                Uploading = true;
            }
        }
        if (Uploading) {
            return;
        }
        handleSubmit();
    }, [handlingSubmit, answersArray]);
    return (
        <>
            <Box
                id={props.id}
                sx={{
                    margin: " auto",
                    textAlign: "center",

                    backgroundColor: "primary.dark",
                    padding: "2rem 0",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: "90%",
                                sm: "70%",
                                md: "70%",
                                lg: "50%",
                            },
                            margin: "auto",
                            color: "white",
                        }}
                    >
                        <Typography variant="h2">
                            {returnLocaleText(props.title)}
                        </Typography>
                        <Typography fontSize={"1.5rem"} variant="subtitle1">
                            {returnLocaleText(props.subtitle)}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "white",
                            maxWidth: "1000px",
                            margin: "auto",
                            padding: "1rem",
                            width: { xs: "90%", sm: "80%" },
                        }}
                    >
                        {!formSubmmited ? (
                            <>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            md: "row",
                                        },
                                        flexWrap: "wrap",
                                        gap: "1.2rem 0rem",
                                        justifyContent: "space-between",
                                        margin: "auto",
                                        padding: "1rem",
                                    }}
                                >
                                    {props.questions.map((question, index) => {
                                        return (
                                            <Question
                                                handlingSubmit={handlingSubmit}
                                                index={index}
                                                setAnswer={setIndexAnswer}
                                                setValid={setIndexValid}
                                                key={index}
                                                {...question}
                                            />
                                        );
                                    })}
                                </Box>
                                <Box sx={{ padding: "1rem" }}>
                                    <Button
                                        onClick={() => {
                                            setHandlingSubmit(true);
                                        }}
                                        disabled={loading || !valid}
                                        variant="contained"
                                        color="secondary"
                                    >
                                        {!loading ? (
                                            returnLocaleText(text.submit)
                                        ) : (
                                            <CircularProgress
                                                style={{
                                                    width: "2rem",
                                                    height: "2rem",
                                                }}
                                            />
                                        )}
                                    </Button>
                                </Box>
                                <Box
                                    textAlign={"center"}
                                    sx={{ width: "80%", margin: "auto" }}
                                >
                                    <Typography variant="subtitle1">
                                        {returnLocaleText(text.secured)}{" "}
                                        {returnLocaleText(text.consent)}
                                    </Typography>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box
                                    sx={{
                                        padding: "1rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: ".75rem",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "10rem",
                                            height: "10rem",
                                            margin: "auto",
                                        }}
                                    >
                                        <Image
                                            fill
                                            style={{ objectFit: "contain" }}
                                            src={checkmarkImg}
                                            alt="checkmark"
                                        />
                                    </Box>
                                    <Typography
                                        fontWeight={"bold"}
                                        variant="h4"
                                    >
                                        {returnLocaleText(text.thankYou)}
                                    </Typography>
                                    <Typography variant="h5">
                                        {returnLocaleText(text.thankYouMessage)}
                                    </Typography>
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    );
}
