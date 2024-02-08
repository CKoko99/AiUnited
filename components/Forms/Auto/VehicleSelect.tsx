'use client'
import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { yearCalendarClasses } from "@mui/x-date-pickers";
import PATHCONSTANTS from "constants/sitemap"
import { get } from "http"
import { useEffect, useState } from "react"
import { set, useFormContext } from "react-hook-form";


const TEXT = {
    years: { en: "Years", es: "Años" },
    make: { en: "Make", es: "Marca" },
    model: { en: "Model", es: "Modelo" },
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
        const res = await fetch(`http://localhost:8081/vehicles/makes?year=${year}`,
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
        const res = await fetch(`http://localhost:8081/vehicles/models?year=${year}&make=${make}`,
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
        const res = await fetch(`http://localhost:8081/vehicles/VIN?year=${year}&make=${make}&model=${model}`,
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
        const res = await fetch(`http://localhost:8081/vehicles/VINdetails?VIN=${VIN}`,
            { method: 'GET', }
        );
        const data = await res.json();
        return data; // Optionally return data if needed elsewhere
    } catch (err) {
        console.log(err);
        return { details: [] }; // Return an empty array or handle the error accordingly
    }
}
export default function (props) {

    const [years, setYears] = useState([])
    const [yearValue, setYearValue] = useState(props.defaultValue ? props.defaultValue[0] : "");
    const [disableMake, setDisableMake] = useState(true);

    const [makes, setMakes] = useState([]);
    const [makeValue, setMakeValue] = useState(props.defaultValue ? props.defaultValue[1] : "");
    const [disableModel, setDisableModel] = useState(true);

    const [models, setModels] = useState([]);
    const [modelValue, setModelValue] = useState(props.defaultValue ? props.defaultValue[2] : "");

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

        const newMakesList = await getMakes(value);
        // console.log(newMakesList);
        setMakes(newMakesList.makes);
        setDisableMake(false);
        setMakeValue("");
        setModelValue("");

    }
    async function handleMakeChange(value) {
        setMakeValue(value);
        const newModelsList = await getModels(yearValue, value);
        console.log(newModelsList);
        console.log("yearValue: ", yearValue)

        setModels(newModelsList.models);
        setDisableModel(false);
        setModelValue("");
    }


    async function handleModelChange(value) {
        setModelValue(value);
        //get and set vin value to be the first vin in the list
        const VINResponse = await getVIN(yearValue, makeValue, value);
        const newVinValue = VINResponse.VINs[0].VIN;
        const VINDetailsResponse = await getVINDetails(newVinValue);
        console.log(newVinValue)
        console.log(VINDetailsResponse)
        setVINValue(VINDetailsResponse.VIN);
        props.addIdToList(props.nextQuestionId);
    }

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
            { questionId: "Year", value: yearValue },
            { questionId: "Make", value: makeValue },
            { questionId: "Model", value: modelValue },
            { questionId: "Vin", value: VINValue }
        ])


    }, [yearValue, makeValue, modelValue, VINValue])

    useEffect(() => {
        props.register(`${props.questionId}`, { value: completeValue, });
    }, [])

    async function defaultValuesHandler() {
        console.log("Default Values: ", props.defaultValue)
        setTimeout(() => {
            handleYearChange(props.defaultValue[0])
            setTimeout(() => {
                handleMakeChange(props.defaultValue[1])
                setTimeout(() => {
                    handleModelChange(props.defaultValue[2])
                }, 500)
            }, 500)
        }, 500)
    }

    useEffect(() => {
        if (props.defaultValue) {
            defaultValuesHandler()
        }
    }, [])
    return <>
        <Box
            sx={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", margin: "1rem auto" }}
        >
            {props.question && <Typography sx={{ whiteSpace: "nowrap" }} variant="h6" >{returnLocaleText(props.question)}</Typography>}
            <Box
                sx={{
                    display: "flex", gap: "1rem", justifyContent: "space-around",
                    width: props.fullWidth ? { xs: "100%", md: '49%' } : "100%"
                }}
            >
                <FormControl fullWidth
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
                <FormControl fullWidth
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
                <FormControl fullWidth
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
            </Box>
        </Box>
    </>
}