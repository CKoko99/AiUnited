import { Box, FormControl, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { Lang } from "../../locale/LocaleSwitcher"
import { useEffect, useState } from "react"

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
        props.setValid(props.index, valid)
    }, [valid])
    function setValueHandler(e) {
        if (!props.validation || props.validation === 'email') {
            setValue(e.target.value)
        }
        if (props.validation === 'number') {
            //filter out non-numeric characters
            const filtered = e.target.value.replace(/\D/g, '')
            setValue(filtered)
        }
        if (props.validation === 'phone') {
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
export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <><InputQuestion  {...props} title={props.title[currentLang]} /> </>
}