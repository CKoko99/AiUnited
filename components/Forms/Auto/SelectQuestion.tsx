import { returnLocaleText } from "@/components/locale/LocaleSwitcher"
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"

export default function (props) {
    const ref = useRef(null)

    const [value, setValue] = useState(props.defaultValue || '')
    const [valid, setValid] = useState(false)
    const [validOnce, setValidOnce] = useState(false)

    function handleValueChange(passedValue) {
        setValue(passedValue)
        if (passedValue) {
            setValid(true)
            setValidOnce(true)
            //     props.setValid(props.index, true)
            //   props.setAnswer(props.index, value)
            props.updateFormValues(props.id, [{ questionId: props.questionId, value: passedValue }])
            props.addIdToList(props.nextQuestionId)
        } else {
            setValid(false)
            //    props.setValid(props.index, false)
        }
    }
    useEffect(() => {
        if (props.defaultValue) {
            handleValueChange(props.defaultValue)
        }
    }, [])


    return <>
        <Box
            sx={{
                width: "100%",
                display: "flex", flexDirection: props.fullWidth ? { xs: "column", md: 'row' } : "column",
                justifyContent: "space-between", alignItems: "center"
            }}
        >
            <Box
                sx={{ width: props.fullWidth ? { xs: "100%", md: '50%' } : "100%" }}
            >

                <Typography variant="h6">

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
                    <InputLabel id={"select-label"}>{returnLocaleText(props.question)}</InputLabel>
                    <Select
                        sx={{ minWidth: "15rem" }}
                        value={value}
                        onChange={(e) => {
                            handleValueChange(e.target.value)
                        }}
                        onBlur={() => {
                            setValidOnce(true)
                        }}
                        ref={ref}
                        inputProps={{ ...props.register(props.questionId) }}
                        label={returnLocaleText(props.question)}
                    >
                        {props.answers.map((option, index) => {
                            return <MenuItem key={index} value={option.value}>{returnLocaleText(option.text)}</MenuItem>
                        })}
                    </Select>
                    {(validOnce && !valid) && <FormHelperText>error</FormHelperText>}
                </FormControl>
            </Box >
        </Box >
    </>
}