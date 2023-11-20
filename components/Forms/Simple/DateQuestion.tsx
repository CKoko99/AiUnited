import { Box, Typography } from "@mui/material"
import { lazy, useEffect, useState } from "react"
//import { DateField, DatePicker, DateValidationError, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs';
import validationText from './validationText'
const DateField = lazy(() => import('@mui/x-date-pickers').then(({ DateField }) => ({ default: DateField })));
const LocalizationProvider = lazy(() => import('@mui/x-date-pickers').then(({ LocalizationProvider }) => ({ default: LocalizationProvider })));

export default function DateQuestion(props) {
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
            if (props.future) {
                if (dayjs(date).isAfter(maxDate)) {
                    props.setValid(props.index, true)
                    props.setAnswer(props.index, date)
                    setError("")
                } else {
                    props.setValid(props.index, false)
                    //setError(`${date} ${dayjs(date)} `)
                    setError(validationText.date[props.lang])
                }
            } else {
                if (dayjs(date).isBefore(maxDate) && dayjs(date).isAfter("1900-01-01")) {
                    props.setValid(props.index, true)
                    props.setAnswer(props.index, date)
                    setError("")
                } else {
                    props.setValid(props.index, false)
                    //setError(`${date} ${dayjs(date)} `)
                    setError(validationText.date[props.lang])
                }
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
                        onChange={(newValue: Dayjs | null) => {
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