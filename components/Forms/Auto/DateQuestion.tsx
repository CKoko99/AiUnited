import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const TEXT = {
    month: { en: "Month", es: "Mes" },
    day: { en: "Day", es: "Día" },
    year: { en: "Year", es: "Año" },
    validationError: { en: "Please select a date", es: "Por favor seleccione una fecha" }
}

const months = [
    { value: "01", text: { en: "January", es: "Enero" }, maxDays: 31 },
    { value: "02", text: { en: "February", es: "Febrero" }, maxDays: 29 },
    { value: "03", text: { en: "March", es: "Marzo" }, maxDays: 31 },
    { value: "04", text: { en: "April", es: "Abril" }, maxDays: 30 },
    { value: "05", text: { en: "May", es: "Mayo" }, maxDays: 31 },
    { value: "06", text: { en: "June", es: "Junio" }, maxDays: 30 },
    { value: "07", text: { en: "July", es: "Julio" }, maxDays: 31 },
    { value: "08", text: { en: "August", es: "Agosto" }, maxDays: 31 },
    { value: "09", text: { en: "September", es: "Septiembre" }, maxDays: 30 },
    { value: "10", text: { en: "October", es: "Octubre" }, maxDays: 31 },
    { value: "11", text: { en: "November", es: "Noviembre" }, maxDays: 30 },
    { value: "12", text: { en: "December", es: "Diciembre" }, maxDays: 31 },
];

function returnDefaultDate(defaultValue) {
    let newDefaultValues = {
        month: "",
        day: "",
        year: ""
    }
    try {
        if (defaultValue) {
            const date = new Date(defaultValue)
            let monthInt = date.getMonth() + 1
            let month = String(monthInt)
            if (monthInt < 10) {
                month = "0" + month
            }
            let dayInt = date.getDate()
            let day = String(dayInt)
            if (dayInt < 10) {
                day = "0" + day
            }
            let year = String(date.getFullYear())
            month = month === "NaN" ? "" : month
            day = day === "NaN" ? "" : day
            year = year === "NaN" ? "" : year
            newDefaultValues.month = month
            newDefaultValues.day = day
            newDefaultValues.year = year
        }
    } catch (e) {
        console.error("Error setting default values")
        console.error(e)
    } finally {
        return newDefaultValues
    }
}

export default function (props) {
    const ref = useRef(null)
    const [hidden, setHidden] = useState(true)
    const [monthValue, setMonthValue] = useState(returnDefaultDate(props.defaultValue).month);
    const [dayValue, setDayValue] = useState(returnDefaultDate(props.defaultValue).day);
    const [yearValue, setYearValue] = useState(returnDefaultDate(props.defaultValue).year);
    const [completeValue, setCompleteValue] = useState("");

    const showDays = monthValue !== ""
    const showYears = dayValue !== "";

    const isValid = dayValue !== "" && monthValue !== "" && yearValue !== "";

    function handleMonthChange(value) {
        setMonthValue(value);
        //check if the day value is valid for the month if not then set it to ""
        try {
            const selectedMonth = months.find(month => month?.value === value);
            if (selectedMonth && Number(dayValue) > selectedMonth.maxDays) {
                setDayValue("");
            }
        } catch (e) {
            console.log(e)
            console.error("error setting day value")
            setDayValue("");
        }

    }
    function handleDayChange(value) {
        setDayValue(value);
    }
    function handleYearChange(value) {
        setYearValue(value);
        props.addIdToList(props.nextQuestionId);
    }

    function handleValueChange() {
        //add a 0 to the month value if it is less than 10

        setCompleteValue(`${yearValue}-${monthValue}-${dayValue}T05:00:00Z`);
        return `${yearValue}-${monthValue}-${dayValue}T05:00:00Z`;
    }


    useEffect(() => {
        const newValue = handleValueChange();
        props.updateFormValues(props.id, [{ questionId: props.questionId, value: newValue, valid: isValid }])
        if (isValid) {
            props.clearError();
        }
    }, [monthValue, dayValue, yearValue])

    useEffect(() => {
        setHidden(false);
    }, [])

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (yearValue !== "" && monthValue !== "" && dayValue !== "") {
            props.addIdToList(props.nextQuestionId);
        }
    }, [props.shownIdList])
    return <>

        <Box
            sx={{
                opacity: hidden ? 0 : 1,
                transition: "opacity 1s",
                display: "flex", flexDirection: "column", gap: "1rem"
            }}
        >
            <Box
                sx={{
                    display: "flex", alignItems: "center", gap: "1rem", width: "100%",
                    flexDirection: {
                        xs: "column", md: "row"
                    }
                }}
            >
                <Typography sx={{ whiteSpace: "nowrap" }} variant="h6" >{returnLocaleText(props.question)}:</Typography>
                <Box
                    sx={{
                        display: "flex", gap: "1rem", justifyContent: "space-around",
                        width: props.fullWidth ? { xs: "100%", md: '49%' } : "100%"
                    }}
                >
                    <FormControl fullWidth
                    >
                        <InputLabel id={`month-label-${props.questionId}`}>{returnLocaleText(TEXT.month)}</InputLabel>
                        <Select
                            value={monthValue}
                            onChange={(e) => {
                                handleMonthChange(e.target.value)
                            }}
                            ref={ref}
                            onBlur={() => {

                            }}
                            label={"month"}
                        >
                            {months.map((option, index) => {
                                return <MenuItem key={index} value={option.value}>{returnLocaleText(option.text)}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth
                    >
                        <InputLabel id={`day-label-${props.questionId}`}>{returnLocaleText(TEXT.day)}</InputLabel>
                        <Select
                            disabled={!showDays}
                            value={dayValue}
                            onChange={(e) => {
                                handleDayChange(e.target.value)
                            }}
                            label={"day"}
                        >
                            {//format so numbers are 01, 02, 03, etc
                            }
                            {[...Array(months.find(month => month.value === monthValue)?.maxDays)].map((x, i) => {
                                let value = String(i + 1)
                                if (value.length === 1) {
                                    value = "0" + value
                                }
                                return <MenuItem key={i} value={value}>{value}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth
                    >
                        <InputLabel id={`year-label-${props.questionId}`}>{returnLocaleText(TEXT.year)}</InputLabel>
                        <Select
                            disabled={!showYears}
                            value={yearValue}
                            onChange={(e) => {
                                handleYearChange(e.target.value)
                            }}
                            label={"year"}
                        >
                            {[...Array(120)].map((x, i) => {
                                return <MenuItem key={i} //value={2024 - i}
                                    //VALUE is current year - i
                                    value={new Date().getFullYear() - i}
                                >{new Date().getFullYear() - i}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            {props.passedError && <FormHelperText
                error={true}
            >{returnLocaleText(TEXT.validationError)}</FormHelperText>}
        </Box>
    </>
}