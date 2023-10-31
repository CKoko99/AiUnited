import { Box, FormControl, TextField, Input, Typography, RadioGroup, Radio, FormControlLabel, Select, MenuItem, InputLabel, FormHelperText } from "@mui/material"
import { useRouter } from "next/router"
import { Lang } from "../../locale/LocaleSwitcher"
import { useEffect, useMemo, useState } from "react"
import { DateField, DatePicker, DateValidationError, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs';
import { CustomFonts } from "../../../providers/theme"

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
            props.setAnswer(props.index, "")
        }
    }, [])
    useEffect(() => {
        props.setValid(props.index, valid)
        props.setAnswer(props.index, value)

    }, [valid, value])
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
                width: (props.fullWidth || props.outsideLabel) ? "100%" : { xs: "100%", md: "49.5%" },
                display: "flex", alignItems: "center", justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
            }}
        >
            {props.outsideLabel &&
                <Box
                    sx={{ width: { xs: "100%", md: "50%" } }}
                >
                    <Typography variant="h6">{props.title}</Typography>
                </Box>
            }
            <Box
                sx={{ width: props.outsideLabel ? { xs: "100%", md: "49.5%" } : "100%" }}
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
                    {props.title}
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
    const [value, setValue] = useState<Dayjs | null>(null);
    const [error, setError] = useState("");

    const [check, setCheck] = useState(false)
    const maxDate = dayjs()


    useEffect(() => {

        //check if value is a valid date
        if (!check) {
            return
        }
        if (value) {
            let numMonth = value.month() + 1
            let numDate = value.date()
            let stringMonth
            let stringDate
            if (numMonth < 10) {
                stringMonth = "0" + numMonth
            } else {
                stringMonth = numMonth
            }
            if (numDate < 10) {
                stringDate = "0" + numDate
            } else {
                stringDate = numDate
            }
            //const date = `${stringMonth}-${stringDate}-${value.year()}`
            const date = `${value.year()}-${stringMonth}-${stringDate}`
            //check if date is less than max date
            if (dayjs(date).isBefore(maxDate) && dayjs(date).isAfter("1900-01-01")) {
                props.setValid(props.index, true)
                props.setAnswer(props.index, date)
                setError("")
            } else {
                props.setValid(props.index, false)
                //setError(`${date} ${dayjs(date)} `)
                setError(validationText.date[props.lang])
            }
        } else {
            props.setValid(props.index, false)
            setError(validationText.date[props.lang])
        }

    }, [value, check])
    return (<>
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
                    {props.title[props.lang]}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex", gap: "2rem", justifyContent: "space-around",
                    width: props.fullWidth ? { xs: "100%", md: '49%' } : "100%"
                }}
            >

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                        sx={{ width: "100%" }}
                        label={"Date"}
                        value={value}
                        helperText={error}
                        onChange={(newValue) => {
                            setValue(newValue)
                        }}
                        onBlur={() => { setCheck(true) }}

                        slotProps={{
                            textField: {
                                helperText: error.length > 0 ? error : null,
                                error: error.length > 0,
                            },
                        }}

                    />


                </LocalizationProvider>
            </Box>
        </Box>
    </>)
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
        {props.type == "radio" && <RadioQuestion lang={currentLang}  {...props} title={props.title[currentLang]} />}
        {props.type.toLowerCase() === "select" && <SelectQuestion lang={currentLang} {...props} title={props.title[currentLang]} />}
        {props.type === "date" && <DateQuestion {...props} lang={currentLang} />}
    </>
}