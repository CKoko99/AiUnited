import { returnLocaleText } from "@/components/locale/LocaleSwitcher"
import { Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"

//"{"status":"Request Parameter Validated Failed","errors":["Payload is not valid based on requested contract","Value \"300000\" is not defined in enum. : PolicyCoverages.UninsuredMotoristBiLimit","Value \"10000\" does not match const. : PolicyCoverages.PipLimit"],"accountId":"00000000-0000-0000-0000-000000000000","tT2Output":""}"
const OPTIONS = [
    {
        text: { en: "Minimum Liability", es: "Responsabilidad Mínima" },
        coverages: [{
            key: "LiabilityBiLimit",
            title: { en: "Bodily Injury", es: "Lesiones Corporales" },
            value: "30000/60000"
        },
        {
            key: "LiabilityPdLimit", value: "25000",
            title: { en: "Property Damage", es: "Daños a la Propiedad" }
        },
        {
            key: "MedPayLimit", value: "None",
            title: { en: "Medical Payments", es: "Pagos Médicos" },
        },
        {
            key: "PipLimit", value: "None",
            title: { en: "Personal Injury Protection", es: "Protección contra Lesiones Personales" }
        },
        {
            key: "UninsuredMotoristPdLimit", value: "None",
            title: { en: "Uninsured Motorist Property Damage", es: "Daños a la Propiedad de un Conductor Sin Seguro" }
        },
        {
            key: "UninsuredMotoristBiLimit", value: "None",
            title: { en: "Uninsured Motorist Bodily Injury", es: "Lesiones Corporales de un Conductor Sin Seguro" }
        },
        {
            key: "AccidentalDeathLimit", value: "None",
            title: { en: "Accidental Death", es: "Muerte Accidental" }
        },
        {
            key: "ComprehensiveDeductible", value: "None",
            title: { en: "Comprehensive Deductible", es: "Deducible Comprensivo" }
        },
        {
            key: "CollisionDeductible", value: "None",
            title: { en: "Collision Deductible", es: "Deducible de Colisión" }
        },
        {
            key: "TowingLimit", value: "None",
            title: { en: "Towing Limit", es: "Límite de Remolque" }
        },
        {
            key: "RentalLimit", value: "None",
            title: { en: "Rental Limit", es: "Límite de Alquiler" }
        },
        {
            key: "GapCoverage", value: false,
            title: { en: "Gap Coverage", es: "Cobertura de Brecha" }
        },
        {
            key: "CustomEquipmentValue", value: 0,
            title: { en: "Custom Equipment Value", es: "Valor del Equipo Personalizado" }
        }
        ]
    },
    {
        text: { en: "Standard Liability", es: "Responsabilidad Estándar" },
        coverages: [{
            key: "LiabilityBiLimit", value: "50000/100000",
            title: { en: "Bodily Injury", es: "Lesiones Corporales" },
        },
        { key: "LiabilityPdLimit", value: "50000", title: { en: "Property Damage", es: "Daños a la Propiedad" } },
        { key: "MedPayLimit", value: "None", title: { en: "Medical Payments", es: "Pagos Médicos" } },
        { key: "PipLimit", value: "None", title: { en: "Personal Injury Protection", es: "Protección contra Lesiones Personales" } },
        { key: "UninsuredMotoristPdLimit", value: "None", title: { en: "Uninsured Motorist Property Damage", es: "Daños a la Propiedad de un Conductor Sin Seguro" } },
        { key: "UninsuredMotoristBiLimit", value: "None", title: { en: "Uninsured Motorist Bodily Injury", es: "Lesiones Corporales de un Conductor Sin Seguro" } },
        { key: "AccidentalDeathLimit", value: "None", title: { en: "Accidental Death", es: "Muerte Accidental" } },
        { key: "ComprehensiveDeductible", value: "500", title: { en: "Comprehensive Deductible", es: "Deducible Comprensivo" } },
        { key: "CollisionDeductible", value: "500", title: { en: "Collision Deductible", es: "Deducible de Colisión" } },
        { key: "TowingLimit", value: "None", title: { en: "Towing Limit", es: "Límite de Remolque" } },
        { key: "RentalLimit", value: "None", title: { en: "Rental Limit", es: "Límite de Alquiler" } },
        { key: "GapCoverage", value: false, title: { en: "Gap Coverage", es: "Cobertura de Brecha" } },
        { key: "CustomEquipmentValue", value: 0, title: { en: "Custom Equipment Value", es: "Valor del Equipo Personalizado" } }]
    },
    {
        /* 
            "ComprehensiveDeductible": "500",
                        "CollisionDeductible": "500",
                        "TowingLimit": "250",
                        "RentalLimit": "100",
                        "GapCoverage": true,
                        "CustomEquipmentValue": 0
        */
        text: { en: "Best Coverage", es: "Cobertura Completa" },
        coverages: [{ key: "LiabilityBiLimit", value: "100000/300000", title: { en: "Bodily Injury", es: "Lesiones Corporales" } },
        { key: "LiabilityPdLimit", value: "100000", title: { en: "Property Damage", es: "Daños a la Propiedad" } },
        { key: "MedPayLimit", value: "None", title: { en: "Medical Payments", es: "Pagos Médicos" } },
        { key: "PipLimit", value: "2500", title: { en: "Personal Injury Protection", es: "Protección contra Lesiones Personales" } },
        { key: "UninsuredMotoristPdLimit", value: "100000", title: { en: "Uninsured Motorist Property Damage", es: "Daños a la Propiedad de un Conductor Sin Seguro" } },
        { key: "UninsuredMotoristBiLimit", value: "100000/300000", title: { en: "Uninsured Motorist Bodily Injury", es: "Lesiones Corporales de un Conductor Sin Seguro" } },
        { key: "AccidentalDeathLimit", value: "10000", title: { en: "Accidental Death", es: "Muerte Accidental" } },
        { key: "ComprehensiveDeductible", value: "500", title: { en: "Comprehensive Deductible", es: "Deducible Comprensivo" } },
        { key: "CollisionDeductible", value: "500", title: { en: "Collision Deductible", es: "Deducible de Colisión" } },
        { key: "TowingLimit", value: "250", title: { en: "Towing Limit", es: "Límite de Remolque" } },
        { key: "RentalLimit", value: "100", title: { en: "Rental Limit", es: "Límite de Alquiler" } },
        { key: "GapCoverage", value: true, title: { en: "Gap Coverage", es: "Cobertura de Brecha" } },
        { key: "CustomEquipmentValue", value: 0, title: { en: "Custom Equipment Value", es: "Valor del Equipo Personalizado" } }]
    }
]
//"{"status":"Request Parameter Validated Failed","errors":["Payload is not valid based on requested contract","Value \"300000\" is not defined in enum. : PolicyCoverages.UninsuredMotoristBiLimit"],"accountId":"00000000-0000-0000-0000-000000000000","tT2Output":""}"
//"{"status":"Request Parameter Validated Failed","errors":["Payload is not valid based on requested contract","Value \"300000\" is not defined in enum. : PolicyCoverages.UninsuredMotoristBiLimit","Value \"2500\" does not match const. : PolicyCoverages.PipLimit"],"accountId":"00000000-0000-0000-0000-000000000000","tT2Output":""}"
export default function (props) {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [options] = useState(props.options as Number[])

    function handleSelect(index: number) {
        setSelectedIndex(index)
        props.updateFormValues(props.id, //[{ questionId: props.questionId, value: value }])
            OPTIONS[index].coverages.map((coverage, index) => {
                return { questionId: coverage.key, value: coverage.value }
            })
        )
    }

    return (<>
        <Box>
            {OPTIONS.map((option, index) => {
                return (
                    <Box key={index} onClick={() => {
                        handleSelect(index)
                    }}
                        sx={{
                            border: index === selectedIndex ? "1px solid black" : "1px solid #cacaca",
                            padding: "1rem", margin: "1rem"
                        }}
                    >
                        <Typography
                            variant="h5" sx={{ fontWeight: "bold", marginBottom: ".5rem" }}
                        >{returnLocaleText(option.text)}</Typography>
                        <Box>
                            {option.coverages.map((coverage, index) => {
                                return <Box key={index}>
                                    <Typography
                                        variant="body1" >
                                        {returnLocaleText(coverage.title)}: {coverage.value}
                                    </Typography>
                                </Box>
                            })}
                        </Box>
                    </Box>
                )
            })}
        </Box>

    </>)
}