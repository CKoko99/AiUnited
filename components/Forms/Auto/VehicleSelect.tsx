'use client'
import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import PATHCONSTANTS from "constants/sitemap"
import { useEffect, useState } from "react"


const TEXT = {
    years: { en: "Years", es: "Años" },
    make: { en: "Make", es: "Marca" },
    model: { en: "Model", es: "Modelo" },
    validationError: { en: "Please select a vehicle", es: "Por favor seleccione un vehículo" }
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
        //   console.log("Form Values: ", formValues[id])

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
    const [years, setYears] = useState([returnInitialValues(props.formValues, props.id, props.defaultValue).year]);
    const [yearValue, setYearValue] = useState(returnInitialValues(props.formValues, props.id, props.defaultValue).year);
    const disableMake = yearValue === "";

    const [makes, setMakes] = useState([returnInitialValues(props.formValues, props.id, props.defaultValue).make]);
    const [makeValue, setMakeValue] = useState(returnInitialValues(props.formValues, props.id, props.defaultValue).make);
    const disableModel = makeValue === "";

    const [models, setModels] = useState([returnInitialValues(props.formValues, props.id, props.defaultValue).model]);
    const [modelValue, setModelValue] = useState(returnInitialValues(props.formValues, props.id, props.defaultValue).model);

    const [VINValue, setVINValue] = useState("");

    const isValid = yearValue !== "" && makeValue !== "" && modelValue !== "" && VINValue !== "";
    const completeValue = [yearValue, makeValue, modelValue, VINValue]


    useEffect(() => {
        const fetchYears = async () => {
            const yearsData = await getYears();
            //sort years in descending order

            setYears(yearsData.years);
        };
        fetchYears();
    }, [])

    async function fetchMakes() {
        const newMakesList = await getMakes(yearValue);
        setMakes(newMakesList.makes);
        //if make value is not in newMakesList.makes, set make value to ""
        if (!newMakesList.makes.includes(makeValue)) {
            setMakeValue("");
            setModelValue("");
        }
    }


    async function fetchModels() {
        const newModelsList = await getModels(yearValue, makeValue);
        setModels(newModelsList.models);
        //if make value is not in newMakesList.makes, set make value to ""
        if (!newModelsList.models.includes(modelValue)) {
            setModelValue("");
        }
    }

    useEffect(() => {
        //when year value changes, fetch makes and models
        fetchMakes();
        console.log("Fetching Makes")
        fetchModels();
        console.log("Fetching Models")
    }, [yearValue])

    useEffect(() => {
        fetchModels();
    }, [makeValue])


    useEffect(() => {
        async function fetchData() {
            if (yearValue === "" || makeValue === "" || modelValue === "") {
                return;
            }
            // Asynchronous logic here
            try {

                let newVINList = await getVIN(yearValue, makeValue, modelValue);

                setVINValue(newVINList.VINs[0].VIN);
                props.addIdToList(props.nextQuestionId);
            } catch (error) {
                console.log("ERROR: YEAR, MAKE, MODEL" + " " + yearValue + " " + makeValue + " " + modelValue)
                console.log(error)   // Error handling
            }

        }
        fetchData();

    }, [yearValue, makeValue, modelValue])




    useEffect(() => {
        console.log("Complete Value: ", completeValue)
        props.updateFormValues(props.id, [
            { questionId: "Year", value: yearValue, valid: isValid },
            { questionId: "Make", value: makeValue, valid: isValid },
            { questionId: "Model", value: modelValue, valid: isValid },
            { questionId: "Vin", value: VINValue, valid: isValid }
        ])
        if (isValid) {
            props.clearError()
        }

    }, [yearValue, makeValue, modelValue, VINValue])

    useEffect(() => {
        setHidden(false)
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
                            setYearValue(e.target.value)
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
                            setMakeValue(e.target.value)
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
                            setModelValue(e.target.value)
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