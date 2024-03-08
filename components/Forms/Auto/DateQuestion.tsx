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

export default function (props) {
    const ref = useRef(null)
    const [hidden, setHidden] = useState(true)
    const [monthValue, setMonthValue] = useState(props.defaultValue ? props.defaultValue[0] : "");
    const [showDays, setShowDays] = useState(false);
    const [dayValue, setDayValue] = useState(props.defaultValue ? props.defaultValue[1] : "");
    const [showYears, setShowYears] = useState(false);
    const [yearValue, setYearValue] = useState(props.defaultValue ? props.defaultValue[2] : "");
    const [completeValue, setCompleteValue] = useState("");
    const [isValid, setIsValid] = useState(false);


    function handleMonthChange(value) {
        setMonthValue(value);
        setShowDays(true);
        //check if the day value is valid for the month if not then set it to ""
        try {
            const selectedMonth = months.find(month => month?.value === value);
            if (selectedMonth && dayValue > selectedMonth.maxDays) {
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
        setShowYears(true);
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
    function isValidHandler() {
        if (dayValue !== "" && monthValue !== "" && yearValue !== "") {
            setIsValid(true);
            return true;
        }
        setIsValid(false);
        return false;
    }

    useEffect(() => {
        const newValue = handleValueChange();
        props.setFormValue(`${props.questionId}`, newValue);
        props.updateFormValues(props.id, [{ questionId: props.questionId, value: newValue, valid: isValidHandler() }])
        if (isValidHandler()) {
            props.clearError();
        }
    }, [monthValue, dayValue, yearValue])

    useEffect(() => {
        props.register(`${props.questionId}`, { value: completeValue });
        setHidden(false);
    }, [])

    useEffect(() => {
        if (props.defaultValue) {

            const defaultDate = new Date(props.defaultValue)
            let monthInt = defaultDate.getMonth() + 1
            let month = String(monthInt)
            if (monthInt < 10) {
                month = "0" + month
            }
            let dayInt = defaultDate.getDate()
            let day = String(dayInt)
            if (dayInt < 10) {
                day = "0" + day
            }
            let year = defaultDate.getFullYear()

            handleMonthChange(month)
            handleDayChange(day)
            handleYearChange(year)
        }
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
                            inputProps={{ ...props.register(`select-month-${props.questionId}`) }}
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