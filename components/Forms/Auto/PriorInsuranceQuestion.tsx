import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PATHCONSTANTS from "constants/sitemap";
import { useEffect, useState } from "react";

async function getPriorCompanies() {
    try {
        const res = await fetch(PATHCONSTANTS.BACKEND2 + "/rates/priorCarriers",
            { method: 'GET', }
        );
        const data = await res.json();

        return data; // Optionally return data if needed elsewhere
    } catch (err) {
        console.log(err);
        return []; // Return an empty array or handle the error accordingly
    }
}

export default function (props) {
    const [priorCompanies, setPriorCompanies] = useState([])
    const [selectedValue, setSelectedValue] = useState("")

    function handleValueChange(passedValue) {
        setSelectedValue(passedValue)
        //find carrier Name from passedValue
        const foundCompany = priorCompanies.find((company: any) => company.id === passedValue);
        const carrierName = foundCompany ? (foundCompany as any).carrierName : '';
        props.updateFormValues(props.id, [
            { questionId: "PriorCarrierId", value: passedValue },
            { questionId: "PriorCarrierName", value: carrierName },
        ])
        props.addIdToList(props.nextQuestionId)
    }

    useEffect(() => {
        getPriorCompanies().then((data) => {
            setPriorCompanies(data)
        })
        if (props.defaultValue) {
            handleValueChange(props.defaultValue)
        }
    }, [])
    return <>
        <FormControl fullWidth>
            <InputLabel id="priorInsuranceLabel">Prior Insurance Carrier</InputLabel>
            <Select
                labelId="priorInsuranceLabel"
                id="priorInsurance"
                value={selectedValue}
                label="Prior Insurance Carrier"
                onChange={(e) => {
                    handleValueChange(e.target.value)
                }}
            >
                {priorCompanies.map((company: { id: string, carrierName: string }, index) => <MenuItem key={index} value={company.id}
                >{company.carrierName}</MenuItem>)}
            </Select>
        </FormControl>
    </>
}