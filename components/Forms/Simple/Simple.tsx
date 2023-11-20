import { Box, Button, CircularProgress, Modal, Typography } from "@mui/material";
//import Question from "./Question";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { useEffect, useState } from "react";
import PATHCONSTANTS from "../../../constants/sitemap";
import FormModal from "../../Modals/FormModal";
import Image from "next/image";
import checkmarkImg from "../../../public/assets/images/components/checkmark.png"
import dynamic from 'next/dynamic';
import Question from "./Question";


function getEmailProps(questions, answers) {
    let name = ["", ""]
    let email = ""
    //find first name and last name
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].title.en.toLowerCase() === "first name") {
            name[0] = answers[i]
        }
        if (questions[i].title.en.toLowerCase() === "last name") {
            name[1] = answers[i]
        }
        if (questions[i].title.en.toLowerCase() === "email") {
            email = answers[i]
        }
    }
    return { name: name.join(" "), email }
}

export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    //fill array with false values for each question 
    const [validArray, setValidArray] = useState(Array(props.questions.length).fill(false))
    const [valid, setValid] = useState(false)
    const [answersArray, setAnswersArray] = useState(Array(props.questions.length).fill(null))

    const [showModal, setShowModal] = useState(false)
    const [formSubmmited, setFormSubmitted] = useState(false)
    const [modalError, setModalError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [handlingSubmit, setHandlingSubmit] = useState(false)
    function setIndexValid(index: number, valid: boolean) {
        const newArray = [...validArray]
        newArray[index] = valid
        setValidArray(newArray)
    }

    function setIndexAnswer(index: number, answer: any) {
        const newArray = [...answersArray]
        newArray[index] = answer
        setAnswersArray(newArray)
    }

    useEffect(() => {
        //check if all values in array are true
        const valid = validArray.every((value) => value)
        setValid(valid)
    }, [validArray])

    async function uploadToSheet() {
        console.log(answersArray)
        const timestamp = new Date().toLocaleString();

        //prepare data to be sent to google sheet
        //Numbering system to make sure the data is in the correct order
        const formData = new FormData();
        formData.append("1 Timestamp", timestamp);

        for (let i = 0; i < answersArray.length; i++) {
            formData.append(`${2 + i} ${i + 1} ${props.questions[i].title.en}`, answersArray[i]);
        }
        formData.append("SheetTitle", props.sheetTitle || props.title.en);
        formData.append("Spreadsheet", "AiUnited");
        console.log(PATHCONSTANTS.BACKEND)
        await fetch(`${PATHCONSTANTS.BACKEND}/forms`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                [...formData.entries(),]
            ),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setModalError(false)
                setFormSubmitted(true)

            })
            .catch((error) => {
                console.log(error);
                setModalError(true)
                setFormSubmitted(false)
            });
        setShowModal(true)
    }

    async function sendEmail() {
        console.log("send email")
        const emailProps = getEmailProps(props.questions, answersArray)


        const questionsArray: string[] = []
        props.questions.forEach((question) => {
            questionsArray.push(question.title.en)
        })
        await fetch(`${PATHCONSTANTS.BACKEND}/forms/email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: emailProps.email,
                company: "Ai United",
                name: emailProps.name,
                questions: questionsArray,
                answers: answersArray,
                formTitle: props.title.en,
            }),
        })
    }
    async function handleSubmit() {
        console.log("HANDLE SUBMIT")
        //send answers to backend
        setLoading(true)
        await uploadToSheet()
        setLoading(false)
        setHandlingSubmit(false)
        await sendEmail()
    }
    useEffect(() => {
        //loop through valid array and check if atleast one value = "FILE_PLACEHOLDER"
        //if so, set valid to false
        //if not, set valid to true
        if (!handlingSubmit) {
            return
        }
        setLoading(true)
        let Uploading = false
        for (let i = 0; i < answersArray.length; i++) {
            if (answersArray[i] === "FILE_PLACEHOLDER") {
                console.log("FOUND PLACEHOLDER")
                Uploading = true
            }
        }
        if (Uploading) {
            return
        }
        handleSubmit()
    }, [handlingSubmit, answersArray])
    return <>
        <Box
            id={props.id}
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
                    <Typography fontSize={"1.5rem"} variant="subtitle1">{props.subtitle[currentLang]}</Typography>
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

                    {!formSubmmited ? <><Box
                        sx={{
                            display: "flex", flexDirection: { xs: "column", md: "row" }, flexWrap: "wrap", gap: "1.2rem 0rem",
                            justifyContent: "space-between", margin: "auto",
                            padding: "1rem"
                        }}
                    >
                        {props.questions.map((question, index) => {
                            return <Question handlingSubmit={handlingSubmit} index={index} setAnswer={setIndexAnswer} setValid={setIndexValid} key={index} {...question} />
                        })}
                    </Box>
                        <Box
                            sx={{ padding: "1rem" }}
                        >
                            <Button onClick={() => { setHandlingSubmit(true) }}
                                disabled={loading || !valid}
                                variant="contained" color="secondary">
                                {!loading ? "Submit" : <CircularProgress style={{ width: "2rem", height: "2rem" }} />}</Button>
                        </Box>
                    </> : <>
                        <Box sx={{
                            padding: "1rem", display: "flex",
                            flexDirection: "column", gap: ".75rem"
                        }}>
                            <Box
                                sx={{ position: "relative", width: "10rem", height: "10rem", margin: "auto" }}
                            >
                                <Image fill style={{ objectFit: "contain" }} src={checkmarkImg} alt="checkmark" />
                            </Box>
                            <Typography
                                fontWeight={"bold"}
                                variant="h4"
                            >
                                Thank You!
                            </Typography>
                            <Typography
                                variant="h5"
                            >
                                Your Submission Has Been Recevied.
                            </Typography>
                        </Box>
                    </>}
                </Box>
            </Box >
        </Box >
        {showModal ? <Modal
            open={showModal}
            onClose={() => { setShowModal(false) }}
        >
            <FormModal close={() => setShowModal(false)} isError={modalError} />
        </Modal> : null}
    </>
}