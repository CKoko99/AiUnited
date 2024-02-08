import { Box, FormControl, TextField } from "@mui/material";
import { set, useForm } from "react-hook-form";
import { returnLocaleText } from "../../locale/LocaleSwitcher";
import { useEffect, useRef, useState } from "react";
export default function (props) {

    const [value, setValue] = useState(props.defaultValue ? String(props.defaultValue) : "")
    const [blurred, setBlurred] = useState(false)

    const validation = props.validation || {}
    const validationRules = {
        required: validation.required === false ? false : true,
        minLength: validation.minLength,
        maxLength: validation.maxLength || 100,
        pattern: validation.pattern || null,
        type: validation.type || null
    }

    const [isValid, setIsValid] = useState(!validationRules.required || props.defaultValue)


    function validateInput(passedValue) {
        let errorFound = false
        if (!validationRules.required) {

            setIsValid(true)
            return true
        }
        if (validationRules.pattern) {
            const filtered = passedValue.replace(validationRules.pattern, "")
            if (filtered !== passedValue) {

                errorFound = true
            }
            setValue(filtered)
        }
        if (validationRules.type) {
            if (validationRules.type === "email") {
                if (!passedValue.includes('@') || !passedValue.includes('.') || passedValue.length < 5) {
                    errorFound = true
                }
            }
        }
        if (passedValue.length < validationRules.minLength) {
            errorFound = true

        }
        if (passedValue.length > validationRules.maxLength) {
            errorFound = true

        }
        if (validationRules.required && passedValue.length === 0) {
            errorFound = true
        }

        setIsValid(!errorFound)
        return !errorFound
    }

    function handleChange(e) {
        setValue(e.target.value)
        const newIsValid = validateInput(e.target.value)
        if (props.convertToNumber) {
            props.updateFormValues(props.id, [{ questionId: props.questionId, value: Number(e.target.value) }])
        } else {
            props.updateFormValues(props.id, [{ questionId: props.questionId, value: e.target.value }])
        }
        if (newIsValid) {
            props.addIdToList(props.nextQuestionId)
        }
        else {
            //   props.removeIdFromList(props.nextQuestionId)
        }
    }
    useEffect(() => {
        if (isValid) {
            props.addIdToList(props.nextQuestionId)
        }
        if (props.defaultValue) {
            handleChange({ target: { value: String(props.defaultValue) } })
        }
    }, [])
    return <>
        <Box
        >
            <FormControl fullWidth>
                <TextField
                    {...props.register(props.questionId)}
                    multiline={props.largeText}
                    rows={props.largeText ? 6 : 1}
                    label={returnLocaleText(props.question)}
                    value={value}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => {
                        setBlurred(true)
                    }
                    }
                    error={!isValid && blurred}
                    helperText={!isValid && blurred ? returnLocaleText(props.validationError) : ""}
                />
            </FormControl>
        </Box>
    </>;
}