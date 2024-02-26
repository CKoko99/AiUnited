'use client'
import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { yearCalendarClasses } from "@mui/x-date-pickers";
import PATHCONSTANTS from "constants/sitemap"
import { get } from "http"
import { use } from "marked";
import { useEffect, useState } from "react"
import { set, useFormContext } from "react-hook-form";


const TEXT = {
    years: { en: "Years", es: "Años" },
    make: { en: "Make", es: "Marca" },
    model: { en: "Model", es: "Modelo" },
    validationError: { en: "Please select a vehicle", es: "Por favor seleccione un vehículo" }
}
const DEFAULTS = {
    waitTime: process.env.NODE_ENV === "development" ? 500 : 1000
}

async function getYears() {
    try {
        const res = await fetch(PATHCONSTANTS.BACKEND2 + "/vehicles/years",
            { method: 'GET', }
        );
        const data = await res.json();
        data.years.sort((a, b) => b - a);
        return data; // Optionally return data if needed elsewhere
    } catch (err) {
        console.log(err);
        return { years: [] }; // Return an empty array or handle the error accordingly
    }
}

async function getMakes(year) {
    try {
        const res = await fetch(`${PATHCONSTANTS.BACKEND2}/vehicles/makes?year=${year}`,
            { method: 'GET', }
        );
        const data = await res.json();

        return data; // Optionally return data if needed elsewhere
    } catch (err) {
        console.log(err);
        return { makes: [] }; // Return an empty array or handle the error accordingly
    }
}

async function getModels(year, make) {
    try {
        const res = await fetch(`${PATHCONSTANTS.BACKEND2}/vehicles/models?year=${year}&make=${make}`,
            { method: 'GET', }
        );
        const data = await res.json();
        return data; // Optionally return data if needed elsewhere
    } catch (err) {
        console.log(err);
        return { models: [] }; // Return an empty array or handle the error accordingly 
    }
}
async function getVIN(year, make, model,) {
    try {
        const res = await fetch(`${PATHCONSTANTS.BACKEND2}/vehicles/VIN?year=${year}&make=${make}&model=${model}`,
            { method: 'GET', }
        );
        const data = await res.json();
        return data; // Optionally return data if needed elsewhere
    } catch (err) {
        console.log(err);
        return { VINs: [] }; // Return an empty array or handle the error accordingly
    }
}
async function getVINDetails(VIN) {
    try {
        const res = await fetch(`${PATHCONSTANTS.BACKEND2}/vehicles/VINdetails?VIN=${VIN}`,
            { method: 'GET', }
        );
        const data = await res.json();
        return data; // Optionally return data if needed elsewhere
    } catch (err) {
        console.log(err);
        return { details: [] }; // Return an empty array or handle the error accordingly
    }
}
function returnInitialValues(formValues, id, defaultValue) {
    const returnValues = { year: "", make: "", model: "" }
    if (formValues[id]) {
        console.log("Form Values: ", formValues[id])

        for (let i = 0; i < formValues[id].length; i++) {
            const element = formValues[id][i];
            switch (element.questionId) {
                case "Year":
                    returnValues.year = element.value;
                    break;
                case "Make":
                    returnValues.make = element.value;
                    break;
                case "Model":
                    returnValues.model = element.value;
                    break;
                default:
                    break;
            }
        }
        return returnValues;
    }

    if (defaultValue) {
        returnValues.year = defaultValue[0];
        returnValues.make = defaultValue[1];
        returnValues.model = defaultValue[2];
        return returnValues;
    }
    return returnValues;
}


export default function (props) {

    const [hidden, setHidden] = useState(true);
    const [years, setYears] = useState([])
    const [yearValue, setYearValue] = useState('');
    const [disableMake, setDisableMake] = useState(true);

    const [makes, setMakes] = useState([]);
    const [makeValue, setMakeValue] = useState('')
    const [disableModel, setDisableModel] = useState(true);

    const [models, setModels] = useState([]);
    const [modelValue, setModelValue] = useState('')

    const [VINValue, setVINValue] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [completeValue, setCompleteValue] = useState([yearValue, makeValue, modelValue]);

    useEffect(() => {
        const fetchYears = async () => {
            const yearsData = await getYears();
            //sort years in descending order

            setYears(yearsData.years);
        };

        fetchYears();
    }, [])

    async function handleYearChange(value) {
        setYearValue(value);
    }
    useEffect(() => {
        async function fetchData() {
            try {
                // Asynchronous logic here
                let newMakesList = await getMakes(yearValue);
                console.log("newMakesList");
                console.log(newMakesList);
                // console.log(newMakesList);
                setMakes(newMakesList.makes);
                setDisableMake(false);
                //if make value is not in newMakesList.makes, set make value to ""
                if (!newMakesList.makes.includes(makeValue)) {
                    setMakeValue("");
                    setModelValue("");
                }
            } catch (error) {
                // Error handling
            }
        };
        fetchData();
    }, [yearValue])


    async function handleMakeChange(value) {
        setMakeValue(value)

    }
    useEffect(() => {
        async function fetchData() {
            try {
                // Asynchronous logic here
                let newModelsList = await getModels(yearValue, makeValue);
                console.log("newModelsList");
                console.log(newModelsList);
                // console.log(newMakesList);
                setModels(newModelsList.models);
                setDisableModel(false);
                //if make value is not in newMakesList.makes, set make value to ""
                if (!newModelsList.models.includes(modelValue)) {
                    setModelValue("");
                } else {
                    setMakeValue(makeValue);
                }
            } catch (error) {
                // Error handling
            }
        };
        fetchData();
    }, [makeValue])

    async function handleModelChange(value) {
        //use new Promise to check if the model value is set

        setModelValue(value);
    }
    useEffect(() => {
        async function fetchData() {
            if (yearValue === "" || makeValue === "" || modelValue === "") {
                return;
            }
            // Asynchronous logic here
            try {

                let newVINList = await getVIN(yearValue, makeValue, modelValue);
                console.log("newVINList");
                console.log(newVINList);
                // console.log(newMakesList);
                setVINValue(newVINList.VINs[0].VIN);
                props.addIdToList(props.nextQuestionId);
            } catch (error) {
                console.log("ERROR: YEAR, MAKE, MODEL" + " " + yearValue + " " + makeValue + " " + modelValue)
                console.log(error)   // Error handling
            }

        }
        fetchData();

    }, [yearValue, makeValue, modelValue])

    function isValidHandler() {
        if (yearValue !== null && makeValue !== null && modelValue !== null) {
            setIsValid(true);
            return true;
        }
        setIsValid(false);
        return false;
    }


    useEffect(() => {
        const newValue = [yearValue, makeValue, modelValue, VINValue];
        setCompleteValue(newValue);
        props.setFormValue(`${props.questionId}`, newValue);

        console.log(VINValue)
        props.updateFormValues(props.id, [
            { questionId: "Year", value: yearValue, valid: yearValue !== "" },
            { questionId: "Make", value: makeValue, valid: makeValue !== "" },
            { questionId: "Model", value: modelValue, valid: modelValue !== "" },
            { questionId: "Vin", value: VINValue, valid: VINValue !== "" }
        ])
        if (yearValue !== "" && makeValue !== "" && modelValue !== "" && VINValue !== "") {
            props.clearError()
        }

    }, [yearValue, makeValue, modelValue, VINValue])

    useEffect(() => {
        props.register(`${props.questionId}`, { value: completeValue, });
        setHidden(false)
    }, [])

    async function defaultValuesHandler(year, make, model) {
        console.log("Default Values: " + year + " " + make + " " + model)
        setTimeout(() => {
            handleYearChange(year)
            console.log("Handle Year: " + year)
            setTimeout(() => {
                console.log("Handle Make: " + make)
                handleMakeChange(make)
                setTimeout(() => {
                    console.log("Handle Model: " + model)
                    handleModelChange(model)
                }, DEFAULTS.waitTime)
            }, DEFAULTS.waitTime)
        }, DEFAULTS.waitTime)
    }

    useEffect(() => {
        const initialValues = returnInitialValues(props.formValues, props.id, props.defaultValue)
        //   setYearValue(initialValues.year);
        defaultValuesHandler(initialValues.year, initialValues.make, initialValues.model)
    }, [])


    return <>
        <Box
            sx={{
                opacity: hidden ? 0 : 1,
                transition: "opacity 1s",
                display: "flex", alignItems: "center", gap: "1rem", width: "100%", margin: "1rem auto",
                flexDirection: "column"
            }}

        >
            {props.question && <Typography sx={{ whiteSpace: "nowrap" }} variant="h6" >{returnLocaleText(props.question)}</Typography>}
            < Box
                sx={{
                    display: "flex", gap: "1rem", justifyContent: "space-around",
                    width: props.fullWidth ? { xs: "100%", md: '49%' } : "100%"
                }}
            >
                <FormControl error={props.passedError} fullWidth
                >
                    <InputLabel id={`year-label-${props.questionId}`}>{returnLocaleText(TEXT.years)}</InputLabel>
                    <Select
                        value={yearValue}
                        onChange={(e) => {
                            handleYearChange(e.target.value)
                        }}
                        onBlur={() => {

                        }}
                        label={returnLocaleText(TEXT.years)}
                    >
                        {years.map((option, index) => {
                            return <MenuItem key={index} value={option}>{option}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl error={props.passedError} fullWidth
                >
                    <InputLabel id={`make-label-${props.questionId}`}>{returnLocaleText(TEXT.make)}</InputLabel>
                    <Select
                        disabled={disableMake}
                        value={makeValue}
                        onChange={(e) => {
                            handleMakeChange(e.target.value)
                        }}
                        label={returnLocaleText(TEXT.make)}
                    >
                        {makes.map((option, index) => {
                            return <MenuItem key={index} value={option}>{option}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <FormControl error={props.passedError} fullWidth
                >
                    <InputLabel id={`model-label-${props.questionId}`}>{returnLocaleText(TEXT.model)}</InputLabel>
                    <Select
                        disabled={disableModel}
                        value={modelValue}
                        onChange={(e) => {
                            handleModelChange(e.target.value)
                        }}
                        label={returnLocaleText(TEXT.model)}
                    >
                        {models.map((option, index) => {
                            return <MenuItem key={index} value={option}>{option}</MenuItem>
                        })}
                    </Select>
                </FormControl>

            </Box >
            {props.passedError && <FormHelperText
                error={true}
            >{returnLocaleText(TEXT.validationError)}</FormHelperText>}
        </Box >
    </>
}