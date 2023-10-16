import { Box, FormControl, TextField, Input, Typography, RadioGroup, Radio, FormControlLabel, Select, MenuItem, InputLabel, FormHelperText } from "@mui/material"
import { useRouter } from "next/router"
import { Lang } from "../../locale/LocaleSwitcher"
import { useEffect, useState } from "react"
import { DateField, DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs';

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
    }
}
const selectLabel = {
    en: "Select",
    es: "Seleccione",
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
        }
    }, [])
    useEffect(() => {
        props.setValid(props.index, valid)
    }, [valid])
    function setValueHandler(e) {
        if (!props.validation || props.validation === 'email') {
            setValue(e.target.value)
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
                setError(validationText.phone[currentLang])
            } else {
                setError("")
            }
        }
    }
    return <>
        <Box
            sx={{
                width: props.fullWidth ? "100%" : { xs: "100%", md: "48.5%" }
            }}
        >
            <FormControl fullWidth>
                <TextField
                    multiline={props.largeText}
                    rows={props.largeText ? 6 : 1}
                    error={error.length > 0}
                    value={value}
                    helperText={error}
                    onChange={(e) => setValueHandler(e)}
                    label={props.title}
                    onFocus={() => setOnceFocused(true)}
                    onBlur={() => checkValidation()}
                />
            </FormControl>
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
        }
    }, [value])
    return <>
        <Box
            sx={{
                width: props.fullWidth ? "100%" : { xs: "100%", md: "48.5%" },
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
        } else {
            setValid(false)
            props.setValid(props.index, false)
        }
    }, [value])

    return <>
        <Box
            sx={{
                width: props.fullWidth ? "100%" : { xs: "100%", md: "48.5%" },
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
            <Box
                sx={{
                    display: "flex", gap: "2rem", justifyContent: "space-around",
                    width: props.fullWidth ? { xs: "100%", md: '48.5%' } : "100%"
                }}
            >
                <FormControl error={!valid && validOnce} fullWidth
                >
                    <InputLabel id="select-label">{selectLabel[props.lang]}</InputLabel>
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

function DateQuestion(props) {
    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
    return (<>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
                label={props.title[props.lang]}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue)
                }}
            />
        </LocalizationProvider>
    </>)
}

export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <>{props.type.toLowerCase() == "input" && <InputQuestion  {...props} title={props.title[currentLang]} />}
        {props.type == "radio" && <RadioQuestion lang={currentLang}  {...props} title={props.title[currentLang]} />}
        {props.type.toLowerCase() === "select" && <SelectQuestion lang={currentLang} {...props} title={props.title[currentLang]} />}
        {props.type === "date" && <DateQuestion {...props} lang={currentLang} />}
    </>
}