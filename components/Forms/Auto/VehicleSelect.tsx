'use client'
import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Button, FormControl, FormHelperText, Input, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import PATHCONSTANTS from "constants/sitemap"
import { useEffect, useState } from "react"
import { set } from "react-hook-form";


const TEXT = {
    years: { en: "Years", es: "Años" },
    make: { en: "Make", es: "Marca" },
    model: { en: "Model", es: "Modelo" },
    validationError: { en: "Please select a vehicle", es: "Por favor seleccione un vehículo" }
}
const classes = {
    modalRoot: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "1102",
        textAlign: "center",
        // overflow: "hidden",
    },
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: { xs: "80%", sm: "75%", md: "70%", lg: "55%" },
        maxHeight: "60%",
        overflow: "scroll",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: { xs: "2rem", md: "3rem", },
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
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
        let returnedDetails: {
            Maker: string,
            Model: string,
            Year: string,
            error?: {
                [lang: string]: string;
            }
        } = { Maker: "", Model: "", Year: "", }
        const res = await fetch(`${PATHCONSTANTS.BACKEND2}/vehicles/VINdetails?VIN=${VIN}`,
            { method: 'GET', }
        );
        const data = await res.json();
        returnedDetails.Maker = data.Maker || "";
        returnedDetails.Model = data.Model || "";
        returnedDetails.Year = data.Year || "";
        if (returnedDetails.Maker === "" || returnedDetails.Model === "" || returnedDetails.Year === "") {
            returnedDetails.error = { en: "Invalid VIN Please Try Again", es: "VIN inválido, por favor inténtelo de nuevo" }
        }
        return returnedDetails; // Optionally return data if needed elsewhere
    } catch (err) {
        console.log(err);
        return {
            error: { en: "An Error Occurred Please Try Again", es: "Ocurrió un error, por favor inténtelo de nuevo" },
            Maker: "",
            Model: "",
            Year: ""
        }; // Return an empty array or handle the error accordingly
    }
}
function returnInitialValues(formValues, id, defaultValue) {
    const returnValues = { year: "", make: "", model: "", VIN: "" }
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
                case "Vin":
                    returnValues.VIN = element.value;
                    break;
                default:
                    break;
            }
        }
        return returnValues;
    }

    if (defaultValue) {
        returnValues.year = defaultValue[0] || "";
        returnValues.make = defaultValue[1] || "";
        returnValues.model = defaultValue[2] || "";
        returnValues.VIN = defaultValue[3] || "";
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
    const [VINInput, setVINInput] = useState(returnInitialValues(props.formValues, props.id, props.defaultValue).VIN);
    const [vinInputError, setVinInputError] = useState(false);
    const isValid = yearValue !== "" && makeValue !== "" && modelValue !== "" && String(VINValue) !== "";

    const [usingEnteredVIN, setUsingEnteredVIN] = useState(VINInput !== "")

    const [vinSearchError, setVinSearchError] = useState<{ [lang: string]: string; }>({ en: "", es: "" })

    const [editMode, setEditMode] = useState(false)
    const [openVehicleSelectModal, setOpenVehicleSelectModal] = useState(false)

    const [showModalError, setShowModalError] = useState(false)

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
        fetchModels();
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
                let newVinValue
                if (!usingEnteredVIN) {
                    let newVINList = await getVIN(yearValue, makeValue, modelValue);
                    newVinValue = newVINList.VINs[0].VIN;
                } else {
                    newVinValue = VINInput;
                }
                if (!newVinValue) {
                    newVinValue = ""
                }
                setVINValue(newVinValue);
                props.addIdToList(props.nextQuestionId);
            } catch (error) {
                console.log("ERROR: YEAR, MAKE, MODEL" + " " + yearValue + " " + makeValue + " " + modelValue)
                console.log(error)   // Error handling
            }

        }
        fetchData();

    }, [yearValue, makeValue, modelValue, usingEnteredVIN])




    useEffect(() => {
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
            {(yearValue !== "" || makeValue !== "" || modelValue !== "") && < Box
                sx={{
                    display: "flex", gap: "1rem", justifyContent: "space-around",
                    width: props.fullWidth ? { xs: "100%", md: '49%' } : "100%"
                }}
            >
                <FormControl error={props.passedError} fullWidth
                >
                    <InputLabel id={`year-label-${props.questionId}`}>{returnLocaleText(TEXT.years)}</InputLabel>
                    <Select
                        disabled={!editMode}
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
                        disabled={!editMode || disableMake}
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

                        disabled={!editMode || disableModel}
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
            }
            {(!editMode) && <Button
                disabled={editMode}
                onClick={() => {
                    setEditMode(true)
                }}
                variant={(yearValue === "") ? "contained" : "outlined"}
            >
                {yearValue === "" ? <>{returnLocaleText({ en: "Add Vehicle", es: "Agregar vehículo" })}</> :
                    <>
                        {returnLocaleText({ en: "Edit Vehicle", es: "Editar vehículo" })}
                    </>
                }
            </Button>}
            <Modal open={editMode} onClose={() => { setEditMode(false) }}
                sx={{ ...classes.modalRoot }}
            >
                <Box sx={{ ...classes.modal }}>
                    <Box
                        sx={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}
                    >
                        <Typography variant="h6">
                            {returnLocaleText({ en: "Enter A Vehicle Identifcation Number", es: "Ingrese un número de identificación del vehículo" })}
                        </Typography>
                        <FormControl fullWidth>
                            <TextField
                                label={returnLocaleText({ en: "VIN", es: "Número de identificación del vehículo" })}
                                value={VINInput}
                                onChange={(e) => {
                                    setVINInput(e.target.value.toUpperCase())
                                }}
                                //show error if vinInputError is true but hide it if the length is 17
                                error={vinInputError && VINInput.length !== 17}
                                helperText={(vinInputError && VINInput.length !== 17) ? returnLocaleText({
                                    en: `Please enter a valid 17 character VIN \n${VINInput.length}/17`, es: "Por favor ingrese un VIN válido de 17 caracteres"
                                }) :
                                    `${VINInput.length} / 17`}

                            />

                        </FormControl>
                        <Typography variant="subtitle2">
                            {returnLocaleText(
                                {
                                    en: "Adding a VIN will allow us to provide you with a more accurate quote",
                                    es: "Agregar un VIN nos permitirá proporcionarle una cotización más precisa"
                                }
                            )}
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={async () => {
                                if (VINInput.length !== 17) {
                                    setVinInputError(true)
                                    return;
                                }
                                setVinInputError(false)
                                const newVINDetails = await getVINDetails(VINInput);
                                if (newVINDetails.error) {
                                    setVinSearchError(newVINDetails.error)
                                    return
                                }
                                if (newVINDetails.Maker !== "" && newVINDetails.Model !== "" && newVINDetails.Year !== "") {
                                    setUsingEnteredVIN(true)
                                    setYearValue(newVINDetails.Year)
                                    setMakeValue(newVINDetails.Maker)
                                    setModelValue(newVINDetails.Model)
                                    setVINValue(VINInput)
                                    setEditMode(false)
                                }

                            }}
                            sx={{ minWidth: "10rem" }}
                        >
                            {returnLocaleText({ en: "Submit", es: "Enviar" })}
                        </Button>
                    </Box>
                    <Box>----Or----</Box>
                    <Box>
                        <Button variant="outlined"
                            color="secondary"
                            onClick={() => {
                                setOpenVehicleSelectModal(true)
                            }}>
                            {returnLocaleText({ en: "Select Vehicle", es: "Seleccionar vehículo" })}
                        </Button>
                    </Box>
                </Box>
            </Modal>
            {returnLocaleText(vinSearchError) !== "" && <Modal open={returnLocaleText(vinSearchError) !== ""} onClose={() => { setVinSearchError({ en: "", es: "" }) }}
                sx={{ ...classes.modalRoot }}
            >
                <Box sx={{ ...classes.modal }}>
                    <Typography variant="h6">{returnLocaleText(vinSearchError)}</Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setVinSearchError({ en: "", es: "" })
                        }}
                    >
                        {returnLocaleText({ en: "Try Again", es: "Inténtalo de nuevo" })}
                    </Button>
                </Box>
            </Modal>}
            <Modal open={openVehicleSelectModal} onClose={() => { setOpenVehicleSelectModal(false) }}
                sx={{ ...classes.modalRoot }}
            >
                <Box sx={{ ...classes.modal }}>
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
                                disabled={!editMode}
                                value={yearValue}
                                onChange={(e) => {
                                    setYearValue(e.target.value)
                                }}
                                onBlur={() => {

                                }}
                                label={returnLocaleText(TEXT.years)}
                                error={showModalError}
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
                                disabled={!editMode || disableMake}
                                value={makeValue}
                                onChange={(e) => {
                                    setMakeValue(e.target.value)
                                }}
                                label={returnLocaleText(TEXT.make)}
                                error={showModalError}

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

                                disabled={!editMode || disableModel}
                                value={modelValue}
                                onChange={(e) => {
                                    setModelValue(e.target.value)
                                }}
                                label={returnLocaleText(TEXT.model)}
                                error={showModalError}
                            >
                                {models.map((option, index) => {
                                    return <MenuItem key={index} value={option}>{option}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Box >
                    <Box textAlign={"center"}>
                        {showModalError && <FormHelperText
                            error={true} sx={{ textAlign: "center" }}
                        >{returnLocaleText(
                            { en: "Please select a vehicle", es: "Por favor seleccione un vehículo" }
                        )}</FormHelperText>}
                    </Box>
                    <Button variant="contained"
                        onClick={() => {
                            if (yearValue === "" || makeValue === "" || modelValue === "") {
                                setShowModalError(true)
                                return
                            }
                            setShowModalError(false)
                            setOpenVehicleSelectModal(false)
                            setEditMode(false)
                            setUsingEnteredVIN(false)
                        }}>
                        {returnLocaleText({ en: "Submit", es: "Enviar" })}
                    </Button>
                </Box>
            </Modal>
            {props.passedError && <FormHelperText
                error={true}
            >{returnLocaleText(TEXT.validationError)}</FormHelperText>}
        </Box >
    </>
}