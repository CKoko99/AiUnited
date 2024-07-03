import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import {
    Box,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import PATHCONSTANTS from "constants/sitemap";
import { useEffect, useState } from "react";

const TEXT = {
    label: { en: "Prior Insurance Carrier", es: "Aseguradora anterior" },
    validationError: {
        en: "Please select a prior insurance carrier",
        es: "Por favor seleccione una aseguradora anterior",
    },
};

async function getPriorCompanies() {
    try {
        const res = await fetch(
            PATHCONSTANTS.BACKEND2 + "/rates/priorCarriers",
            { method: "GET" },
        );
        const data = await res.json();
        //    console.log(data)
        //data is an array of objects
        //find where carrierName is OTHER and move it to the end of the array
        const otherIndex = data.findIndex(
            (company: any) => company.carrierName === "OTHER",
        );
        if (otherIndex > -1) {
            const other = data.splice(otherIndex, 1);
            data.push(other[0]);
        }

        return data; // Optionally return data if needed elsewhere
    } catch (err) {
        console.log(err);
        return []; // Return an empty array or handle the error accordingly
    }
}

export default function (props: {
    id: string;
    defaultValue: string;
    passedError: boolean;
    nextQuestionId?: string | string[];
    addIdToList: Function;
    updateFormValues: Function;
    clearError: Function;
}) {
    const [hidden, setHidden] = useState(true);
    const [priorCompanies, setPriorCompanies] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");
    const [onceValid, setOnceValid] = useState(false);
    const valid = selectedValue !== "";
    function handleValueChange(passedValue: string) {
        setSelectedValue(passedValue);
        const passedValidity = passedValue !== "";
        if (passedValidity) {
            setOnceValid(true);
            props.clearError();
        }
        //find carrier Name from passedValue
        const foundCompany = priorCompanies.find(
            (company: any) => company.id === passedValue,
        );
        const carrierName = foundCompany
            ? (foundCompany as any).carrierName
            : "";
        props.updateFormValues(props.id, [
            {
                questionId: "PriorCarrierId",
                value: passedValue,
                valid: passedValidity,
            },
            {
                questionId: "PriorCarrierName",
                value: carrierName,
                valid: passedValidity,
            },
        ]);
        props.addIdToList(props.nextQuestionId);
    }

    useEffect(() => {
        getPriorCompanies().then((data) => {
            setPriorCompanies(data);
        });
        if (props.defaultValue) {
            handleValueChange(props.defaultValue);
        }
        setHidden(false);
    }, []);
    return (
        <>
            <Box
                sx={{
                    opacity: hidden ? 0 : 1,
                    transition: "opacity 1s",
                }}
            >
                <FormControl
                    error={props.passedError && !valid && onceValid}
                    fullWidth
                >
                    <InputLabel id="priorInsuranceLabel">
                        {returnLocaleText(TEXT.label)}
                    </InputLabel>
                    <Select
                        labelId="priorInsuranceLabel"
                        id="priorInsurance"
                        value={selectedValue}
                        label={returnLocaleText(TEXT.label)}
                        onChange={(e) => {
                            handleValueChange(e.target.value);
                        }}
                    >
                        {priorCompanies.map(
                            (
                                company: { id: string; carrierName: string },
                                index,
                            ) => (
                                <MenuItem key={index} value={company.id}>
                                    {company.carrierName}
                                </MenuItem>
                            ),
                        )}
                    </Select>
                </FormControl>
                {props.passedError && (
                    <FormHelperText error={true}>
                        {returnLocaleText(TEXT.validationError)}
                    </FormHelperText>
                )}
            </Box>
        </>
    );
}
