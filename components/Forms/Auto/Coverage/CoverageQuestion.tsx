import { returnLocaleText } from "@/components/locale/LocaleSwitcher"
import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import IndividualCoverage from "./IndividualCoverage"
const TEXT = {
    selectCoverage: { en: "Select Your Coverage Option", es: "Seleccione su opción de cobertura" },
    validationError: { en: "Please select a coverage option", es: "Por favor seleccione una opción de cobertura" },
    policyCoverages: { en: "Policy Coverages", es: "Coberturas de Póliza" },
    vehicleCoverages: { en: "Vehicle Coverages", es: "Coberturas del Vehículo" }
}

const OPTIONS = [
    {
        text: { en: "Minimum Liability", es: "Responsabilidad Mínima" },
        subtitle: {
            en: "For those prioritizing savings, this option provides the minimum coverage required in the state of Texas.",
            es: "Para aquellos que priorizan el ahorro, esta opción proporciona la cobertura mínima requerida en el estado de Texas."
        },
        coverages: [{
            key: "LiabilityBiLimit",
            title: { en: "Bodily Injury", es: "Lesiones Corporales" },
            valueText: { en: "30k/60k", es: "30k/60k" },
            value: "30000/60000"
        },
        {
            key: "LiabilityPdLimit", value: "25000",
            valueText: { en: "25k", es: "25k" },
            title: { en: "Property Damage", es: "Daños a la Propiedad" }
        },
        {
            key: "MedPayLimit", valueText: { en: "None", es: "Ninguno" },
            value: "None",
            title: { en: "Medical Payments", es: "Pagos Médicos" },
        },
        {
            key: "PipLimit", valueText: { en: "None", es: "Ninguno" },
            value: "None",
            title: { en: "Personal Injury Protection", es: "Protección contra Lesiones Personales" }
        },
        {
            key: "UninsuredMotoristPdLimit", value: "None",
            valueText: { en: "None", es: "Ninguno" },
            title: { en: "Uninsured Motorist Property Damage", es: "Daños a la Propiedad de un Conductor Sin Seguro" }
        },
        {
            key: "UninsuredMotoristBiLimit", valueText: { en: "None", es: "Ninguno" },
            value: "None",
            title: { en: "Uninsured Motorist Bodily Injury", es: "Lesiones Corporales de un Conductor Sin Seguro" }
        },
        {
            key: "AccidentalDeathLimit", valueText: { en: "None", es: "Ninguno" },
            value: "None",
            title: { en: "Accidental Death", es: "Muerte Accidental" }
        },
        {
            key: "ComprehensiveDeductible", valueText: { en: "None", es: "Ninguno" },
            value: "None",
            title: { en: "Comprehensive Deductible", es: "Deducible Comprensivo" }
        },
        {
            key: "CollisionDeductible", valueText: { en: "None", es: "Ninguno" },
            value: "None",
            title: { en: "Collision Deductible", es: "Deducible de Colisión" }
        },
        {
            key: "TowingLimit", valueText: { en: "None", es: "Ninguno" },
            value: "None",
            title: { en: "Towing Limit", es: "Límite de Remolque" }
        },
        {
            key: "RentalLimit", valueText: { en: "None", es: "Ninguno" },
            value: "None",
            title: { en: "Rental Limit", es: "Límite de Alquiler" }
        },
        {
            key: "GapCoverage", valueText: { en: "None", es: "Ninguno" },
            value: false,

            title: { en: "Gap Coverage", es: "Cobertura de Brecha" }
        },
        {
            key: "CustomEquipmentValue", value: 0,
            valueText: { en: "None", es: "Ninguno" },
            title: { en: "Custom Equipment Value", es: "Valor del Equipo Personalizado" }
        }
        ]
    },
    {
        text: { en: "Standard Coverage", es: "Cobertura Estándar" },
        subtitle: {
            en: "This option provides a balance of coverage and affordability, offering a higher level of protection than the minimum.",
            es: "Esta opción proporciona un equilibrio entre cobertura y asequibilidad, ofreciendo un nivel de protección más alto que el mínimo."
        },
        coverages: [{
            key: "LiabilityBiLimit", valueText: { en: "30k/60k", es: "30k/60k" },
            value: "30000/60000",
            title: { en: "Bodily Injury", es: "Lesiones Corporales" },
        },
        {
            key: "LiabilityPdLimit",
            value: "25000",
            valueText: { en: "25k", es: "25k" }, title: { en: "Property Damage", es: "Daños a la Propiedad" }
        },
        {
            key: "MedPayLimit",
            valueText: { en: "None", es: "Ninguno" },
            value: "None", title: { en: "Medical Payments", es: "Pagos Médicos" }
        },
        {
            key: "PipLimit",
            valueText: { en: "2500", es: "2500" },
            value: "2500", title: { en: "Personal Injury Protection", es: "Protección contra Lesiones Personales" }
        },
        {
            key: "UninsuredMotoristPdLimit", value: "25000",
            valueText: { en: "25k", es: "25k" }, title: { en: "Uninsured Motorist Property Damage", es: "Daños a la Propiedad de un Conductor Sin Seguro" }
        },
        {
            key: "UninsuredMotoristBiLimit", valueText: { en: "30k/60k", es: "30k/60k" },
            value: "30000/60000", title: { en: "Uninsured Motorist Bodily Injury", es: "Lesiones Corporales de un Conductor Sin Seguro" }
        },
        {
            key: "AccidentalDeathLimit", valueText: { en: "None", es: "Ninguno" },
            value: "None", title: { en: "Accidental Death", es: "Muerte Accidental" }
        },
        {
            key: "ComprehensiveDeductible", valueText: { en: "None", es: "Ninguno" },
            value: "None",
            title: { en: "Comprehensive Deductible", es: "Deducible Comprensivo" }
        },
        {
            key: "CollisionDeductible", valueText: { en: "None", es: "Ninguno" },
            value: "None",
            title: { en: "Collision Deductible", es: "Deducible de Colisión" }
        },
        {
            key: "TowingLimit", valueText: { en: "None", es: "Ninguno" },
            value: "None", title: { en: "Towing Limit", es: "Límite de Remolque" }
        },
        {
            key: "RentalLimit", valueText: { en: "None", es: "Ninguno" },
            value: "None", title: { en: "Rental Limit", es: "Límite de Alquiler" }
        },
        {
            key: "GapCoverage", valueText: { en: "None", es: "Ninguno" },
            value: false, title: { en: "Gap Coverage", es: "Cobertura de Brecha" }
        },
        {
            key: "CustomEquipmentValue",
            valueText: { en: "None", es: "Ninguno" },
            value: 0, title: { en: "Custom Equipment Value", es: "Valor del Equipo Personalizado" }
        }]
    },
    {
        text: { en: "Best Coverage", es: "Cobertura Completa" },
        subtitle: {
            en: "For those seeking the highest level of protection, this option provides the most comprehensive coverage available.",
            es: "Para aquellos que buscan el más alto nivel de protección, esta opción proporciona la cobertura más completa disponible."
        },
        coverages: [

            {
                key: "LiabilityBiLimit",
                valueText: { en: "30k/60k", es: "30k/60k" },
                value: "30000/60000", title: { en: "Bodily Injury", es: "Lesiones Corporales" }
            },
            {
                key: "LiabilityPdLimit",
                value: "25000",
                valueText: { en: "25k", es: "25k" }, title: { en: "Property Damage", es: "Daños a la Propiedad" }
            },
            {
                key: "MedPayLimit", valueText: { en: "None", es: "Ninguno" },
                value: "None", title: { en: "Medical Payments", es: "Pagos Médicos" }
            },
            {
                key: "PipLimit",
                valueText: { en: "2500", es: "2500" },
                value: "2500", title: { en: "Personal Injury Protection", es: "Protección contra Lesiones Personales" }
            },
            {
                key: "UninsuredMotoristPdLimit",
                value: "25000",
                valueText: { en: "25k", es: "25k" }, title: { en: "Uninsured Motorist Property Damage", es: "Daños a la Propiedad de un Conductor Sin Seguro" }
            },
            {
                key: "UninsuredMotoristBiLimit",
                valueText: { en: "30k/60k", es: "30k/60k" },
                value: "30000/60000", title: { en: "Uninsured Motorist Bodily Injury", es: "Lesiones Corporales de un Conductor Sin Seguro" }
            },
            {
                key: "AccidentalDeathLimit", valueText: { en: "None", es: "Ninguno" },
                value: "None", title: { en: "Accidental Death", es: "Muerte Accidental" }
            },
            {
                key: "ComprehensiveDeductible",
                valueText: { en: "500", es: "500" },
                value: "500", title: { en: "Comprehensive Deductible", es: "Deducible Comprensivo" }
            },
            {
                key: "CollisionDeductible",
                valueText: { en: "500", es: "500" },
                value: "500", title: { en: "Collision Deductible", es: "Deducible de Colisión" }
            },
            {
                key: "TowingLimit", valueText: { en: "None", es: "Ninguno" },
                value: "None", title: { en: "Towing Limit", es: "Límite de Remolque" }
            },
            {
                key: "RentalLimit", valueText: { en: "None", es: "Ninguno" },
                value: "None", title: { en: "Rental Limit", es: "Límite de Alquiler" }
            },
            {
                key: "GapCoverage", valueText: { en: "None", es: "Ninguno" },
                value: false, title: { en: "Gap Coverage", es: "Cobertura de Brecha" }
            },
            {
                key: "CustomEquipmentValue",
                valueText: { en: "None", es: "Ninguno" },
                value: 0, title: { en: "Custom Equipment Value", es: "Valor del Equipo Personalizado" }
            }
        ]
    }
]
//"{"status":"Request Parameter Validated Failed","errors":["Payload is not valid based on requested contract","Value \"300000\" is not defined in enum. : PolicyCoverages.UninsuredMotoristBiLimit"],"accountId":"00000000-0000-0000-0000-000000000000","tT2Output":""}"
//"{"status":"Request Parameter Validated Failed","errors":["Payload is not valid based on requested contract","Value \"300000\" is not defined in enum. : PolicyCoverages.UninsuredMotoristBiLimit","Value \"2500\" does not match const. : PolicyCoverages.PipLimit"],"accountId":"00000000-0000-0000-0000-000000000000","tT2Output":""}"
export default function (props) {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [options] = useState(props.options as number[])
    //const [options] = useState([0])

    useEffect(() => {
        //loop through options and find the one that matches the formValues
        //if found, set the selectedIndex to that index
        //if not found, set the selectedIndex to -1

        let defaultValue = props.formValues[props.id]
        if (!defaultValue) return
        let found = false
        for (let i = 0; i < options.length; i++) {
            // if (!options.includes(i)) continue

            const option = OPTIONS[options[i]]
            defaultValue = defaultValue.filter((coverage) => coverage.questionId !== "CoverageOption")
            let match = true
            for (let j = 0; j < option.coverages.length; j++) {
                const coverage = option.coverages[j]
                if (coverage.value !== defaultValue[j].value) {
                    match = false
                    break
                }
            }
            if (match) {
                setSelectedIndex(options[i])
                found = true
                break
            } else {
                setSelectedIndex(-1)
            }
        }

    }, [])

    useEffect(() => {
        if (selectedIndex === -1) {
            const name = { questionId: "CoverageOption", value: "None", valid: false }
            props.updateFormValues(props.id, [name])
        } else {
            const name = { questionId: "CoverageOption", value: OPTIONS[selectedIndex].text.en, valid: true }

            const selectedCoverageOptions = OPTIONS[selectedIndex].coverages.map((coverage) => {
                return { questionId: coverage.key, value: coverage.value, valid: true }
            })
            //add name to the front of the array
            const updatedFormValue = [name, ...selectedCoverageOptions]
            props.updateFormValues(props.id, //[{ questionId: props.questionId, value: value }])
                updatedFormValue
            )
            props.clearError()
        }
    }, [selectedIndex])

    return (<>
        <Box>
            {props.passedError && <Typography
                variant="body1"
                sx={{
                    color: "red",
                    textAlign: "center",
                    padding: "0 0 1rem",
                }}
            >{returnLocaleText(TEXT.validationError)}</Typography>}
            <Box
                sx={{
                    display: "flex", justifyContent: "center", gap: "1rem",
                    flexDirection: "column",
                }}
            >
                {OPTIONS.map((option, index) => {
                    //if index is not in the options array, return null
                    if (!options.includes(index)) return null
                    return <IndividualCoverage key={index} index={index} selected={index === selectedIndex} handleSelect={setSelectedIndex} {...OPTIONS[index]} />
                })}
            </Box>
        </Box>

    </>)
}