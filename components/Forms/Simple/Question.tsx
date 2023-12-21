import { Box, FormControl, TextField, Input, Typography, RadioGroup, Radio, FormControlLabel, Select, MenuItem, InputLabel, FormHelperText, Button, Modal } from "@mui/material"
import { useRouter } from "next/router"
import { Lang } from "../../locale/LocaleSwitcher"
import { ChangeEvent, lazy, useEffect, useMemo, useState } from "react"
import { CustomFonts } from "../../../providers/theme"
import { KeyboardArrowDownSharp } from "@mui/icons-material"
import CloseIcon from '@mui/icons-material/Close';
import PATHCONSTANTS from "../../../constants/sitemap"
import dynamic from 'next/dynamic';
import DateQuestion from "./DateQuestion"


// Usage i
const chunkSize = 1024 * 1024 * .5;

const validationText = {
    email: {
        en: "Please enter a valid email address.",
        es: "Por favor ingrese una dirección de correo electrónico válida.",
    },
    phone: {
        en: "Please enter a valid phone number.",
        es: "Por favor ingrese un número de teléfono válido.",
    },
    required: {
        en: "This field is required.",
        es: "Este campo es obligatorio.",
    },
    select: {
        en: "Please select an option.",
        es: "Por favor seleccione una opción.",
    },
    date: {
        en: "Please enter a valid date.",
        es: "Por favor ingrese una fecha válida.",
    },
    zip: {
        en: "Please enter a valid 5 digit zip code.",
        es: "Por favor ingrese un código postal válido de 5 dígitos.",
    },
    file: {
        choose: {
            en: "Choose a file",
            es: "Elija un archivo",
        },
        replace: {
            en: "Replace file",
            es: "Reemplazar archivo",
        },
    }
}
const selectLabel = {
    en: "Select",
    es: "Seleccione",
}
const classes = {
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: { xs: "90%", sm: "80%", md: "70%", lg: "50%" },
        minHeight: "20%",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: { xs: "1rem", sm: " 2rem  " },
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        maxHeight: "90vh",
    },
}
function InputQuestion(props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    const [value, setValue] = useState('')
    const [onceValid, setOnceValid] = useState(false)
    const [onceFocused, setOnceFocused] = useState(false)
    const [valid, setValid] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        if (!props.validation && !props.required) {
            setValid(true)
            props.setValid(props.index, true)
            props.setAnswer(props.index, "")
        }
    }, [])

    function setValueHandler(e) {
        setOnceFocused(true)
        if (!props.validation || props.validation === 'email') {
            setValue(e.target.value)
            console.log(e.target.value)
        }
        if (props.validation === 'number' || props.validation === 'phone' || props.validation === 'zip') {
            //filter out non-numeric characters
            const filtered = e.target.value.replace(/\D/g, '')
            setValue(filtered)
        }
    }

    function checkValidation() {

        if (props.required) {
            const valid = value.length > 0
            setOnceValid(valid)
            setValid(valid)
            if (!valid) {
                setError(validationText.required[currentLang])
            } else {
                setError("")
            }
        } else {
            setValid(true)
        }

        if (props.validation === 'email') {
            //check to see if it's a valid email
            //includes @ before a . and at least 1 character before and after
            const valid = value.includes('@') && value.includes('.') && value.length > 3
            setOnceValid(valid)
            setValid(valid)
            if (!valid) {
                setError(validationText.email[currentLang])
            } else {
                setError("")
            }
        }

        if (props.validation === 'phone') {
            //check if 10 characters
            const valid = value.length === 10
            setOnceValid(valid)
            setValid(valid)
            if (!valid) {
                setError(validationText.phone[currentLang])
            } else {
                setError("")
            }
        }

        if (props.validation === 'zip') {
            const valid = value.length === 5
            setOnceValid(valid)
            setValid(valid)
            if (!valid) {
                setError(validationText.zip[currentLang])
            } else {
                setError("")
            }
        }
    }
    useEffect(() => {
        props.setValid(props.index, valid)
        props.setAnswer(props.index, value)
        if (onceFocused) {
            checkValidation()
        }
    }, [valid, value])
    return <>
        <Box
            sx={{
                width: (props.fullWidth || props.outsideLabel) ? "100%" : { xs: "100%", md: "49%" },
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
            }}
        >
            {props.outsideLabel &&
                <Box
                    sx={{ width: { xs: "100%", md: "50%" } }}
                >
                    <Typography variant="h6">{props.title}{//if last letter is a question mark, don't add another
                        props.title.slice(-1) === "?" ? "" : ":"
                    }</Typography>
                </Box>
            }
            <Box
                sx={{ width: props.outsideLabel ? { xs: "100%", md: "49%" } : "100%" }}
            >
                <FormControl fullWidth>
                    <TextField
                        multiline={props.largeText}
                        rows={props.largeText ? 6 : 1}
                        error={error.length > 0}
                        value={value}
                        helperText={error}
                        onChange={(e) => setValueHandler(e)}
                        label={props.label ? props.label[currentLang] : props.title}
                        onFocus={() => setOnceFocused(true)}
                        onBlur={() => checkValidation()}
                    />
                </FormControl>
            </Box>
        </Box>
    </>
}
function RadioQuestion(props) {

    const [value, setValue] = useState('')
    const [valid, setValid] = useState(false)
    useEffect(() => {
        if (value.length > 0) {

            setValid(true)
            props.setValid(props.index, true)
            props.setAnswer(props.index, value)
        }
    }, [value])
    return <>
        <Box
            sx={{
                width: props.fullWidth ? "100%" : { xs: "100%", md: "49.5%" },
                display: "flex", flexDirection: props.fullWidth ? { xs: "column", md: 'row' } : "column",
                justifyContent: "space-between", alignItems: "center"
            }}
        >
            <Box
                sx={{ width: props.fullWidth ? { xs: "100%", md: '50%' } : "100%" }}
            >
                <Typography variant="h6">
                    {props.title}{//if last letter is a question mark, don't add another
                        props.title.slice(-1) === "?" ? "" : ":"
                    }
                </Typography>
            </Box>
            <Box sx={{
                display: "flex", gap: "2rem", justifyContent: "space-around",
                width: props.fullWidth ? { xs: "100%", md: '50%' } : "100%"
            }}>
                {props.answers.map((option, index) => {
                    return <Box
                        key={index}
                        sx={{
                            display: "flex", alignItems: "center", gap: "1rem",
                            padding: "0.5rem 0"
                        }}
                    >
                        <FormControlLabel
                            control={<Radio />}
                            checked={value === option[props.lang]}
                            onChange={() => setValue(option[props.lang])}
                            value={option[props.lang]}
                            label={option[props.lang]}
                        />
                    </Box>
                })}

            </Box>
        </Box>
    </>
}
function SelectQuestion(props) {
    const [value, setValue] = useState('')
    const [valid, setValid] = useState(false)
    const [validOnce, setValidOnce] = useState(false)
    useEffect(() => {
        if (value.length > 0) {
            setValid(true)
            setValidOnce(true)
            props.setValid(props.index, true)
            props.setAnswer(props.index, value)

        } else {
            setValid(false)
            props.setValid(props.index, false)
        }
    }, [value])

    return <>
        <Box
            sx={{
                width: props.fullWidth ? "100%" : { xs: "100%", md: "49%" },
                display: "flex", flexDirection: props.fullWidth ? { xs: "column", md: 'row' } : "column",
                justifyContent: "space-between", alignItems: "center"
            }}
        >
            <Box
                sx={{ width: props.fullWidth ? { xs: "100%", md: '50%' } : "100%" }}
            >

                <Typography variant="h6">
                    {props.title}{//if last letter is a question mark, don't add another
                        props.title.slice(-1) === "?" ? "" : ":"
                    }
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex", gap: "2rem", justifyContent: "space-around",
                    width: props.fullWidth ? { xs: "100%", md: '49%' } : "100%"
                }}
            >
                <FormControl error={!valid && validOnce} fullWidth
                >
                    <InputLabel id={"select-label" + selectLabel[props.lang]}>{selectLabel[props.lang]}</InputLabel>
                    <Select
                        sx={{ minWidth: "15rem" }}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={() => {
                            if (value.length > 0) {
                                setValid(true)
                            } else {
                                setValid(false)
                            }
                            setValidOnce(true)
                        }}
                        labelId={"select-label" + selectLabel[props.lang]}
                        id={"select" + selectLabel[props.lang]}
                        label={selectLabel[props.lang]}
                    >
                        {props.answers.map((option, index) => {
                            return <MenuItem key={index} value={option[props.lang]}>{option[props.lang]}</MenuItem>
                        })}
                    </Select>
                    {(validOnce && !valid) && <FormHelperText>{validationText.select[props.lang]}</FormHelperText>}
                </FormControl>
            </Box >
        </Box >
    </>
}

function FileQuestion(props) {

    const [value, setValue] = useState({})
    const [currentChunkIndex, setCurrentChunkIndex] = useState(-1);
    const [progress, setProgress] = useState(0);
    const [showModal, setShowModal] = useState(false)

    function handleDrop(e: any) {
        e.preventDefault();
        console.log(e.target.files[0]);
        if (!e.target.files[0]) {
            return
        }
        if (e.target.files[0].size / chunkSize > 20) {
            props.setValid(props.index, false)
            setValue({})
            setShowModal(true)
            return
        }
        if (e.target.files[0]) {
            console.log(e.target.files[0].size / 1024 / 1024)
            props.setValid(props.index, true)
            setValue(e.target.files[0])
        }
    }


    async function uploadChunk(readerEvent) {
        const data = readerEvent.target.result;
        const params = new URLSearchParams();
        params.set('name', (value as File).name);
        params.set('size', (value as File).size.toString());
        params.set('currentChunkIndex', currentChunkIndex.toString());
        console.log('totalChunks', Math.ceil((value as File).size / chunkSize).toString());
        params.set('totalChunks', Math.ceil((value as File).size / chunkSize).toString());
        const headers = { 'Content-Type': 'application/octet-stream' };
        const url = PATHCONSTANTS.BACKEND + '/files?' + params.toString();
        console.log(url);
        const chunks = Math.ceil((value as File).size / chunkSize) - 1;
        const isLastChunk = currentChunkIndex === chunks;
        if (isLastChunk) {
            setProgress(99);
        }

        await fetch(url, {
            method: 'POST',
            headers: headers,
            body: data
        }).then(respone => respone.json())
            .then(data => {
                if (isLastChunk) {
                    //file.finalFilename = response.data.finalFilename;
                    setCurrentChunkIndex(-1);
                    console.log(data.fileLink)
                    props.setAnswer(props.index, data.fileLink)

                    //props.onFileChange(data.fileLink);
                    setProgress(100);
                } else {
                    setProgress(Math.round((currentChunkIndex + 1) / chunks * 100));
                    setCurrentChunkIndex(currentChunkIndex + 1);
                }
            }).catch(error => {
                console.log(error);
            });
    }

    function readAndUploadCurrentChunk() {
        const reader = new FileReader();
        if (!value) {
            return;
        }
        if (currentChunkIndex === 0) {
            console.log("first chunk");
            console.log(value)
            console.log("out of", Math.ceil((value as File).size / chunkSize))
        }
        const from = currentChunkIndex * chunkSize;
        const to = from + chunkSize;
        const blob = (value as File).slice(from, to);
        if (currentChunkIndex === -1) {
            console.log("negative")
            return
        }
        console.log("uploading chunk", currentChunkIndex);
        reader.onload = e => uploadChunk(e);
        reader.readAsDataURL(blob);
    }
    useEffect(() => {
        if (value && (value as File).size) {
            console.log("value changed")
        }
    }, [value])
    useEffect(() => {
        if (currentChunkIndex === -1) {
            return
        } else {
            console.log("current chunk changed" + currentChunkIndex)
            readAndUploadCurrentChunk()
        }
    }, [currentChunkIndex])

    useEffect(() => {
        if (props.handlingSubmit) {
            console.log("handling submit")
            if (currentChunkIndex === -1) {
                setCurrentChunkIndex(0)
            }
        }
    }, [props.handlingSubmit])
    return <>
        <Box
            sx={{
                width: props.fullWidth ? "100%" : { xs: "100%", md: "49.5%" },
                display: "flex", flexDirection: props.fullWidth ? { xs: "column", md: 'row' } : "column",
                justifyContent: "space-between", alignItems: "center"
            }}
        >
            <Box
                sx={{ width: props.fullWidth ? { xs: "100%", md: '50%' } : "100%" }}
            >
                <Typography variant="h6">
                    {props.title}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex", gap: ".5rem", justifyContent: "space-around",
                width: props.fullWidth ? { xs: "100%", md: '50%' } : "100%",
                flexDirection: "column", alignItems: "center"
            }}>
                <Input
                    //accept="*"
                    style={{ display: 'none' }}
                    id={`file-input-add-file`}
                    type="file"
                    onChange={e => handleDrop(e)}
                    aria-label="add file"
                />
                <label htmlFor={`file-input-add-file`}>
                    <Button variant="contained" color="primary" component="span">
                        {(value as File).name ? validationText.file.replace[props.lang] : validationText.file.choose[props.lang]}
                        <KeyboardArrowDownSharp />
                    </Button>
                    {/* Add a visually hidden label for accessibility */}
                    <span style={{ display: 'none' }}>Choose a file</span>
                </label>
                {value && (value as File).name}
            </Box>
        </Box>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
            <Box
                sx={{ ...classes.modal }}
            >
                <Box
                    sx={{ textAlign: "right" }}
                >
                    <CloseIcon sx={{ cursor: "pointer" }} onClick={() => setShowModal(false)} />
                </Box>
                <Typography textAlign={"center"} variant="h6">
                    The Selected file is too large please select a file under 10MB.
                </Typography>
                <Button onClick={() => setShowModal(false)}>Close</Button>
            </Box>
        </Modal>
    </>
}
export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <>
        {props.subGroup && <Box
            sx={{
                minWidth: "100%",
                paddingLeft: ".5rem",
            }}
        >
            <Typography fontWeight={"600"} textAlign={"left"} variant="h5">{props.subGroup[currentLang]}:</Typography>
        </Box>
        }
        {props.type.toLowerCase() == "input" && <InputQuestion  {...props} title={props.title[currentLang]} />}
        {props.type.toLowerCase() == "radio" && <RadioQuestion lang={currentLang}  {...props} title={props.title[currentLang]} />}
        {props.type.toLowerCase() === "select" && <SelectQuestion lang={currentLang} {...props} title={props.title[currentLang]} />}
        {props.type.toLowerCase() === "date" && <DateQuestion {...props} lang={currentLang} />}
        {props.type.toLowerCase() === "file" && <FileQuestion {...props} title={props.title[currentLang]} lang={currentLang} />}
    </>
}