import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { use } from "marked";
import { useState, useEffect } from "react";
const TEXT = {
    month: { en: "Month", es: "Mes" },
    day: { en: "Day", es: "Día" },
    year: { en: "Year", es: "Año" },
    selctionError: { en: "Please select a violation", es: "Por favor seleccione una violación" },
    dateError: { en: "Please select a date", es: "Por favor seleccione una fecha" },
    violation: { en: "Violation", es: "Violación" },
    occuredAt: { en: "When did this violation occur?", es: "¿Cuándo ocurrió esta violación?" }
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
//violation code
//occured at
const codes = [
    "Consuming Alcohol While Driving",
    "Driving School Bus While Intoxicated",
    "DUI Alcohol/Liquor",
    "DWAI",
    "DWI",
    "Educational Program Required (ARD)",
    "Illegal Transportation of Alcohol",
    "Implied Consent/Refuse Breath Test",
    "Open Container Violation",
    "OWI",
    "Violation of Liquor Law",
    "Accident, with Pedestrian",
    "Accident, At-Fault",
    "Homicide with a Motor Vehicle",
    "Vehicular Manslaughter",
    "DUI Drugs/Opiates",
    "Possession of Controlled Substance",
    "Light Violations (Head, Tail, etc...)",
    "Motorcycle Equipment Violation",
    "Operating with Defective Equipment",
    "Overheight Vehicle",
    "Overlength Vehicle",
    "Changing Lanes when Unsafe",
    "Crossing Center Median",
    "Crossing Divided Highway",
    "Crossing Yellow Line",
    "Disregard No Passing Zone",
    "Driving on Left Side of Roadway",
    "Driving on Shoulder",
    "Driving on Sidewalk or Parkway",
    "Failure to Keep Right",
    "Illegal Pass on Right",
    "Improper Merging Into Traffic",
    "Improper Passing",
    "Improper Passing of a School Bus",
    "Improper Use of Lane",
    "Operating Where Prohibited",
    "Allow Unlicensed Driver to Drive",
    "Display Altered/Counterfeit DL",
    "Display Another Person's DL",
    "Driving While Suspended or Revoked",
    "Driving With an Expired License",
    "Driving Without a License or Permit",
    "Duplicate Drivers License",
    "Failure to Display DL",
    "False License or Registration",
    "Loaned DL to Another Person",
    "No Chauffeurs License",
    "No Drivers License",
    "No Motorcycle Qualification",
    "Obtaining License by Misrepresenting",
    "Operating During Life Suspension",
    "Operating Out of Class",
    "Suspension (Chargeable)",
    "Violation of DL Restriction",
    "Violation of Instruction Permit",
    "Driving at Night Without Lights",
    "Failure to Dim Headlights",
    "Accident, Not At-Fault",
    "Disobey Police Order",
    "Eluding Police/Evading Arrest",
    "Avoiding Traffic-Control Device",
    "Failure to Give Stop or Turn Signal",
    "Failure to Stop for Approaching Train",
    "Failure to Stop for Railroad Crossing",
    "Failure to Stop for Red Light",
    "Failure to Stop for Stop Sign",
    "Failure to Yield (Pedestrian)",
    "Failure to Yield Right of Way",
    "Failure to Yield to Emergency Vehicle",
    "Giving Improper Signal",
    "Driving Too Fast for Conditions",
    "Driving Too Slow for Conditions",
    "Drv Under Minimum Speed Limit",
    "Excessive Acceleration",
    "Failure to Control Speed",
    "Racing/Speed Contest",
    "Speeding",
    "Speeding in a School Zone",
    "Unsafe Speed",
    "Improper Start",
    "Squealing or Screeching Tires",
    "Unsafe Start,Park,Stop,Standing",
    "Improper Towing or Pushing of Vehicle",
    "Turned Across Divided Section",
    "Turned When Unsafe",
    "Drive Left of Center",
    "Driving on Wrong Side of Road",
    "Driving Wrong Way on One-Way",
    "Wrong Direction Around Traffic Island",
    "Wrong Direction Divided Street",
    "Aggravated Assault with an Auto",
    "All Other Moving Violations",
    "All Other Non-Moving Violations",
    "Altered or Forged VIN",
    "Improperly Backing",
    "Bus/Car Pool/ Hov - Lane Violation",
    "Careless and Imprudent Driving",
    "Changing Driver in Moving Vehicle",
    "Coasting with Gears Disengaged",
    "Conviction of Insurance Fraud",
    "Criminal Negligence",
    "Disregard of Safety",
    "Drivers View Obstructed",
    "Driving Over Fire Hose",
    "Driving Through Safety Zone",
    "Driving W/O Owners Consent",
    "Failure to Control Vehicle",
    "Failure to Exchange Info After Accident",
    "Failure to Pay Toll",
    "Failure to Wear Seat Belt",
    "Failure of Duty",
    "Failure to Sound Horn",
    "Felony Involving a Motor Vehicle",
    "Following Improperly",
    "Following Too Close",
    "Impeding Traffic Movement",
    "Improper Driving",
    "Improper Entering/Leaving Turnpike",
    "Increase Speed While Being Passed",
    "Leave Vehicle With Engine Running",
    "Leaving Scene  /  Hit-and-Run",
    "Motor Vehicle Inspection Viol.",
    "Negligent Collision",
    "Negligent Driving",
    "No Liability Insurance in Force",
    "Parking on Roadway",
    "Prohibited U Turn",
    "Protective Head Gear Violation",
    "Reckless Driving",
    "Stealing Auto",
    "Unrestrained Child",
    "Unsafe Operator",
    "Vehicle Emissions Suspension",
    "Vehicular Injury",
    "Violating Safety Zone",
    "Violation of Promise to Appear",
    "Comprehensive Claim",
    "Allow Unlawful Operation of Vehicle",
    "Uninsured Motorist Claim",
    "Underinsured Motorist Claim",
    "Medical Payments Claim",
    "PIP Claim",
    "Use of Wireless Device without Handsfree while Driving",
    "Use of Wireless Dev for Text-Based Comm. While Driving",
    "Failure to Use Ignition Interlock Device"
]
function isDateValidHandler(dayValue, monthValue, yearValue) {
    if (dayValue === "NaN" || monthValue === "NaN" || yearValue === "NaN") {
        return false;
    }
    if (dayValue !== "" && monthValue !== "" && yearValue !== "") {
        return true;
    }
    return false;
}
function returnDefaultViolationItem(defaultValues) {
    let newDefaultValues = {
        codeValue: "",
        month: "",
        day: "",
        year: ""
    }
    try {
        if (defaultValues) {
            newDefaultValues.codeValue = defaultValues.value.Code;
            const date = new Date(defaultValues.value.OccurredAt)
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
            newDefaultValues.year = String(year)
        }
    } catch (e) {
        console.error("Error setting default values")
        console.error(e)
    } finally {
        return newDefaultValues
    }
}

function ViolationItem(props) {
    const [codeValue, setCodeValue] = useState(returnDefaultViolationItem(props.initialValue).codeValue);
    const [hidden, setHidden] = useState(true)
    const [monthValue, setMonthValue] = useState(returnDefaultViolationItem(props.initialValue).month);
    const [dayValue, setDayValue] = useState(returnDefaultViolationItem(props.initialValue).day);
    const [yearValue, setYearValue] = useState(returnDefaultViolationItem(props.initialValue).year);

    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState(false);
    const completeDateValue = `${yearValue}-${monthValue}-${dayValue}T05:00:00Z`;
    const showDays = monthValue !== ""
    const showYears = dayValue !== "";

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
        //  props.addIdToList(props.nextQuestionId);
    }




    useEffect(() => {

        props.updateViolationData(props.index, {
            value: {
                OccurredAt: completeDateValue,
                Code: codeValue
            },
            isValid: isDateValidHandler(dayValue, monthValue, yearValue) && codeValue !== ""
        });

        /*
          props.setFormValue(`${props.questionId}`, newValue);
          props.updateFormValues(props.id, [{ questionId: props.questionId, value: newValue, valid: isValidHandler() }])
          if (isValidHandler()) {
              props.clearError();
          }
          */
    }, [codeValue, monthValue, dayValue, yearValue])

    useEffect(() => {
        setHidden(false);
    }, [])

    useEffect(() => {
        if (props.passedError) {
            setError(true)
        }
    }, [props.passedError])

    useEffect(() => {
        if (isValid) {
            setError(false)
        }
    }, [isValid])
    useEffect(() => {
        /* if (props.passedValue) {
             setCodeValue(props.passedValue.value.code)
             const date = new Date(props.passedValue.value.OccuredAt)
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
             let year = date.getFullYear()
             handleMonthChange(month)
             handleDayChange(day)
             handleYearChange(year)
         }*/
    }, [props.passedvalue])
    useEffect(() => {
        /* if (props.defaultValue) {
             console.log("props.defaultValue")
             console.log(props.defaultValue)
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
         }*/
        props.updateViolationData(props.index, {
            value: {
                OccurredAt: completeDateValue,
                Code: codeValue
            },
            isValid: isDateValidHandler(dayValue, monthValue, yearValue) && codeValue !== ""
        });
        return
        if (props.initialValue) {
            console.log("props.initialValue")
            console.log(props.initialValue)
            setCodeValue(props.initialValue.code)
            const date = new Date(props.initialValue.OccuredAt)
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
            let year = date.getFullYear()
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
                width: "100%",
                display: "flex", flexDirection: "column", gap: "1rem",
                alignItems: "center"
            }}
        >
            <FormControl fullWidth >
                <InputLabel id={`Violation`}>{returnLocaleText(TEXT.violation)}</InputLabel>
                <Select
                    value={codeValue}
                    sx={{ minWidth: "15rem" }}
                    onChange={(e) => setCodeValue(e.target.value)}
                    label={returnLocaleText(TEXT.violation)}
                    error={error && (codeValue === "")}
                >
                    {codes.map((code, index) => {
                        return <MenuItem key={index} value={code}>{code}</MenuItem>
                    }
                    )}
                </Select>
                {error && (codeValue === "") && <FormHelperText
                    error={true}
                >{returnLocaleText(TEXT.selctionError)}</FormHelperText>}
            </FormControl>
            <Typography variant="h6" >{returnLocaleText(TEXT.occuredAt)}:</Typography>
            <Box
                sx={{
                    display: "flex", gap: "1rem", justifyContent: "space-around",
                    width: props.fullWidth ? { xs: "100%", md: '49%' } : "100%",
                    marginBottom: "3rem"
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
                        onBlur={() => {

                        }}
                        label={"month"}
                        error={error && (monthValue === "")}
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
                        error={error && (dayValue === "")}
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
                        error={error && (yearValue === "")}
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
            {error && (monthValue === "" || dayValue === "" || yearValue === "") && <FormHelperText
                error={true}
            >{returnLocaleText(TEXT.dateError)}</FormHelperText>}
            {(props.index !== 0 && props.lastIndex) && <Button
                onClick={() => {
                    props.removeViolationIndex(props.index)
                }}
            > Remove Violation</Button>}
        </Box>
    </>
}
function returnDefaultViolation(defaultValues) {
    const newDefaultValues: {
        value: { Code: string, OccurredAt: string },
        isValid: boolean
    }[] = []
    try {
        if (defaultValues) {
            defaultValues.forEach((violation, index) => {
                let defaultCodeValue = violation.Code
                const date = new Date(violation.OccurredAt)
                let defaultMonthValue = String(date.getMonth() + 1)

                let defaultDayValue = String(date.getDate())

                let defaultYearValue = String(date.getFullYear())
                //if any equal "NaN" then set to ""

                let isValid = isDateValidHandler(defaultDayValue, defaultMonthValue, defaultYearValue) && defaultCodeValue !== ""
                if (defaultDayValue === "NaN" || defaultMonthValue === "NaN" || defaultYearValue === "NaN") {
                    defaultDayValue = ""
                    defaultMonthValue = ""
                    defaultYearValue = ""
                }
                const newViolation = {
                    value: {
                        Code: violation.Code,
                        OccurredAt: violation.OccurredAt
                    },
                    isValid
                }
                newDefaultValues.push(newViolation);

            })
        }
    } catch (e) {
        console.error("Error setting default values")
        console.error(e)
    } finally {
        return newDefaultValues
    }
}
export default function Violations(props) {
    const [violationsCount, setViolationsCount] = useState(returnDefaultViolation(props.defaultValue).length || 1)
    const [violationsData, setViolationsData] = useState<any[]>(returnDefaultViolation(props.defaultValue))
    const [defaultViolations] = useState<any[]>(returnDefaultViolation(props.defaultValue))
    function handleViolationsUpdate(id, data) {
        setViolationsData((prevState: any[]) => {
            const newState: any[] = [...prevState]
            newState[id] = data
            //   console.log("new state", newState)
            return newState
        })
    }
    function removeViolationIndex(index) {
        setViolationsData(prevState => {
            const firstHalf = prevState.slice(0, index)
            const secondHalf = prevState.slice(index + 1)
            const newState = [...firstHalf, ...secondHalf]
            return newState
        })
        setViolationsCount(violationsCount - 1)
    }

    useEffect(() => {
        if (violationsData.length < 1) {
            return
        }
        const allValid = violationsData.every(violation => violation.isValid)
        const allValues = violationsData.map(violation => violation.value)



        props.updateFormValues(props.id, //[{ questionId: props.questionId, value: value }])
            [{ valid: allValid, value: allValues, questionId: props.questionId }]
            //   { questionId: coverage.key, value: coverage.value, valid: true }
        )
        props.addIdToList(props.nextQuestionId)
    }, [violationsData])

    useEffect(() => {
        return
        if (props.defaultValue) {
            const defaultViolations = props.defaultValue
            console.log("props.defaultValue")
            console.log(props.defaultValue)
            const newViolations = defaultViolations.map((violation, index) => {
                return {
                    value: {
                        OccuredAt: violation.OccuredAt,
                        code: violation.code
                    },
                    isValid: true
                }
            })
            console.log("newViolations")
            console.log(newViolations)
            setViolationsData(newViolations)
            setViolationsCount(defaultViolations.length)
        } else {
            setViolationsCount(1)
        }
    }, [])

    return (
        <Box
            sx={{
                display: "flex", flexDirection: "column", gap: ".5rem", alignItems: "center",
                width: "100%", margin: "auto", marginTop: "-.5rem"
            }}
        >
            <Typography fontWeight={"bold"} variant="h4" align="center">
                {returnLocaleText(props.title)}
            </Typography>
            <Typography variant="h6" align="center">
                {returnLocaleText(props.subtitle)}
            </Typography>
            {[...Array(violationsCount)].map((x, i) => {
                return <ViolationItem
                    key={i}
                    index={i}
                    updateViolationData={handleViolationsUpdate}
                    questionId={props.questionId + i}
                    nextQuestionId={props.nextQuestionId + i}
                    shownIdList={props.shownIdList}
                    addIdToList={props.addIdToList}
                    fullWidth={props.fullWidth}
                    removeViolationIndex={removeViolationIndex}
                    passedValue={violationsData[i]}
                    lastIndex={i === violationsCount - 1}
                    passedError={props.passedError}
                    initialValue={defaultViolations[i] ? defaultViolations[i] : null}
                />
            })}
            {(violationsData[violationsCount - 1] as any)?.isValid && <Button
                onClick={() => {
                    setViolationsCount(violationsCount + 1)
                }}
            >
                Add New Violation
            </Button>}

        </Box>
    )
}