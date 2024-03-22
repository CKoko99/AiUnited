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

const OPTIONS: {
    text: { [lang: string]: string; },
    subtitle?: { [lang: string]: string; },
    coverages: {
        key: string,
        title: { [lang: string]: string; },
        value?: string | number | boolean,
        valueText?: { [lang: string]: string; }
        hidden?: boolean
        options?: { value: string | number | boolean, text: { [lang: string]: string; } }[]
    }[]
    custom?: boolean,
}[] = [
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
                hidden: true
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
                title: { en: "Accidental Death", es: "Muerte Accidental" },
                hidden: true
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
                title: { en: "Towing Limit", es: "Límite de Remolque" },
                hidden: true
            },
            {
                key: "RentalLimit", valueText: { en: "None", es: "Ninguno" },
                value: "None",
                title: { en: "Rental Limit", es: "Límite de Alquiler" },
                hidden: true
            },
            {
                key: "GapCoverage", valueText: { en: "None", es: "Ninguno" },
                value: false,
                title: { en: "Gap Coverage", es: "Cobertura de Brecha" },
                hidden: true
            },
            {
                key: "CustomEquipmentValue", value: 0,
                valueText: { en: "None", es: "Ninguno" },
                title: { en: "Custom Equipment Value", es: "Valor del Equipo Personalizado" },
                hidden: true
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
            text: { en: "Recommended Coverage", es: "Cobertura Recomendada" },
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
                    value: "None", title: { en: "Medical Payments", es: "Pagos Médicos" },
                    hidden: true
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
                    value: "None", title: { en: "Accidental Death", es: "Muerte Accidental" },
                    hidden: true
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
                    value: "None", title: { en: "Towing Limit", es: "Límite de Remolque" },
                    hidden: true
                },
                {
                    key: "RentalLimit", valueText: { en: "None", es: "Ninguno" },
                    value: "None", title: { en: "Rental Limit", es: "Límite de Alquiler" },
                    hidden: true
                },
                {
                    key: "GapCoverage", valueText: { en: "None", es: "Ninguno" },
                    value: false, title: { en: "Gap Coverage", es: "Cobertura de Brecha" },
                    hidden: true
                },
                {
                    key: "CustomEquipmentValue",
                    valueText: { en: "None", es: "Ninguno" },
                    value: 0, title: { en: "Custom Equipment Value", es: "Valor del Equipo Personalizado" },
                    hidden: true
                }
            ]
        },
        {
            //Minimum Coverage as the minimum
            custom: true,
            text: { en: "Custom Coverage", es: "Cobertura Personalizada" },
            coverages: [
                {
                    key: "LiabilityBiLimit",
                    title: { en: "Bodily Injury", es: "Lesiones Corporales" },
                    options: [
                        { value: "30000/60000", text: { en: "30k/60k", es: "30k/60k" } },
                        { value: "50000/100000", text: { en: "50k/100k", es: "50k/100k" } },
                        { value: "100000/300000", text: { en: "100k/300k", es: "100k/300k" } },
                    ]
                },
                {
                    key: "LiabilityPdLimit",
                    title: { en: "Property Damage", es: "Daños a la Propiedad" },
                    options: [
                        { value: "25000", text: { en: "25k", es: "25k" } },
                        { value: "30000", text: { en: "30k", es: "30k" } },
                        { value: "50000", text: { en: "50k", es: "50k" } },
                        { value: "100000", text: { en: "100k", es: "100k" } },
                    ]
                },
                {
                    key: "MedPayLimit",
                    title: { en: "Medical Payments", es: "Pagos Médicos" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "500", text: { en: "500", es: "500" } },
                        { value: "1000", text: { en: "1000", es: "1000" } },
                        { value: "2000", text: { en: "2000", es: "2000" } },
                    ],
                    hidden: true
                },
                {
                    key: "PipLimit",
                    title: { en: "Personal Injury Protection", es: "Protección contra Lesiones Personales" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "2500", text: { en: "2500", es: "2500" } },
                        { value: "5000", text: { en: "5000", es: "5000" } },
                        { value: "10000", text: { en: "10000", es: "10000" } },
                    ]
                },
                {
                    key: "UninsuredMotoristPdLimit",
                    title: { en: "Uninsured Motorist Property Damage", es: "Daños a la Propiedad de un Conductor Sin Seguro" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "25000", text: { en: "25k", es: "25k" } },
                        { value: "30000", text: { en: "30k", es: "30k" } },
                        { value: "50000", text: { en: "50k", es: "50k" } },
                        { value: "100000", text: { en: "100k", es: "100k" } },
                    ],
                },
                {
                    key: "UninsuredMotoristBiLimit",
                    title: { en: "Uninsured Motorist Bodily Injury", es: "Lesiones Corporales de un Conductor Sin Seguro" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "30000/60000", text: { en: "30k/60k", es: "30k/60k" } },
                        { value: "50000/100000", text: { en: "50k/100k", es: "50k/100k" } },
                        { value: "100000/300000", text: { en: "100k/300k", es: "100k/300k" } },
                    ],
                },
                {
                    key: "AccidentalDeathLimit", title: { en: "Accidental Death", es: "Muerte Accidental" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "1000", text: { en: "1000", es: "1000" } },
                        { value: "2000", text: { en: "2000", es: "2000" } },
                        { value: "3000", text: { en: "3000", es: "3000" } },
                        { value: "4000", text: { en: "4000", es: "4000" } },
                        { value: "5000", text: { en: "5000", es: "5000" } },
                    ],
                    hidden: true
                },
                {
                    key: "ComprehensiveDeductible",
                    title: { en: "Comprehensive Deductible", es: "Deducible Comprensivo" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "500", text: { en: "500", es: "500" } },
                        { value: "1000", text: { en: "1000", es: "1000" } },
                        { value: "1500", text: { en: "1500", es: "1500" } },
                        { value: "2000", text: { en: "2000", es: "2000" } },
                    ],
                },
                {
                    key: "CollisionDeductible",
                    title: { en: "Collision Deductible", es: "Deducible de Colisión" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "500", text: { en: "500", es: "500" } },
                        { value: "1000", text: { en: "1000", es: "1000" } },
                        { value: "1500", text: { en: "1500", es: "1500" } },
                        { value: "2000", text: { en: "2000", es: "2000" } },
                    ],
                },
                {
                    key: "TowingLimit", title: { en: "Towing Limit", es: "Límite de Remolque" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "20", text: { en: "20", es: "20" } },
                        { value: "30", text: { en: "30", es: "30" } },
                        { value: "35", text: { en: "35", es: "35" } },
                        { value: "40", text: { en: "40", es: "40" } },
                        { value: "50", text: { en: "50", es: "50" } },
                        { value: "75", text: { en: "75", es: "75" } },
                        { value: "100", text: { en: "100", es: "100" } },
                    ],
                    hidden: true
                },
                {
                    key: "RentalLimit", title: { en: "Rental Limit", es: "Límite de Alquiler" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "15", text: { en: "15", es: "15" } },
                        { value: "20", text: { en: "20", es: "20" } },
                        { value: "25", text: { en: "25", es: "25" } },
                        { value: "30", text: { en: "30", es: "30" } },
                        { value: "35", text: { en: "35", es: "35" } },
                        { value: "40", text: { en: "40", es: "40" } },
                        { value: "50", text: { en: "50", es: "50" } },
                        { value: "75", text: { en: "75", es: "75" } },
                        { value: "100", text: { en: "100", es: "100" } },
                    ],
                    hidden: true
                },
                {
                    key: "GapCoverage", title: { en: "Gap Coverage", es: "Cobertura de Brecha" },
                    options: [
                        { value: false, text: { en: "None", es: "Ninguno" } },
                        { value: true, text: { en: "Yes", es: "Sí" } },
                    ],
                    hidden: true
                },
                {
                    key: "CustomEquipmentValue", title: { en: "Custom Equipment Value", es: "Valor del Equipo Personalizado" },
                    options: [
                        { value: 0, text: { en: "None", es: "Ninguno" } },
                    ],
                    hidden: true
                }
            ]
        },
        {
            // Comprehensive and Collision as the minimum
            custom: true,
            text: { en: "Custom Full Coverage", es: "Cobertura Personalizada" },
            coverages: [
                {
                    key: "LiabilityBiLimit",
                    title: { en: "Bodily Injury", es: "Lesiones Corporales" },
                    options: [
                        { value: "30000/60000", text: { en: "30k/60k", es: "30k/60k" } },
                        { value: "50000/100000", text: { en: "50k/100k", es: "50k/100k" } },
                        { value: "100000/300000", text: { en: "100k/300k", es: "100k/300k" } },
                    ]
                },
                {
                    key: "LiabilityPdLimit",
                    title: { en: "Property Damage", es: "Daños a la Propiedad" },
                    options: [
                        { value: "25000", text: { en: "25k", es: "25k" } },
                        { value: "30000", text: { en: "30k", es: "30k" } },
                        { value: "50000", text: { en: "50k", es: "50k" } },
                        { value: "100000", text: { en: "100k", es: "100k" } },
                    ]
                },
                {
                    key: "MedPayLimit",
                    title: { en: "Medical Payments", es: "Pagos Médicos" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "500", text: { en: "500", es: "500" } },
                        { value: "1000", text: { en: "1000", es: "1000" } },
                        { value: "2000", text: { en: "2000", es: "2000" } },
                    ],
                    hidden: true
                },
                {
                    key: "PipLimit",
                    title: { en: "Personal Injury Protection", es: "Protección contra Lesiones Personales" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "2500", text: { en: "2500", es: "2500" } },
                        { value: "5000", text: { en: "5000", es: "5000" } },
                        { value: "10000", text: { en: "10000", es: "10000" } },
                    ]
                },
                {
                    key: "UninsuredMotoristPdLimit",
                    title: { en: "Uninsured Motorist Property Damage", es: "Daños a la Propiedad de un Conductor Sin Seguro" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "25000", text: { en: "25k", es: "25k" } },
                        { value: "30000", text: { en: "30k", es: "30k" } },
                        { value: "50000", text: { en: "50k", es: "50k" } },
                        { value: "100000", text: { en: "100k", es: "100k" } },
                    ],
                },
                {
                    key: "UninsuredMotoristBiLimit",
                    title: { en: "Uninsured Motorist Bodily Injury", es: "Lesiones Corporales de un Conductor Sin Seguro" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "30000/60000", text: { en: "30k/60k", es: "30k/60k" } },
                        { value: "50000/100000", text: { en: "50k/100k", es: "50k/100k" } },
                        { value: "100000/300000", text: { en: "100k/300k", es: "100k/300k" } },
                    ],
                },
                {
                    key: "AccidentalDeathLimit", title: { en: "Accidental Death", es: "Muerte Accidental" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "1000", text: { en: "1000", es: "1000" } },
                        { value: "2000", text: { en: "2000", es: "2000" } },
                        { value: "3000", text: { en: "3000", es: "3000" } },
                        { value: "4000", text: { en: "4000", es: "4000" } },
                        { value: "5000", text: { en: "5000", es: "5000" } },
                    ],
                    hidden: true
                },
                {
                    key: "ComprehensiveDeductible",
                    title: { en: "Comprehensive Deductible", es: "Deducible Comprensivo" },
                    options: [
                        { value: "500", text: { en: "500", es: "500" } },
                        { value: "1000", text: { en: "1000", es: "1000" } },
                        { value: "1500", text: { en: "1500", es: "1500" } },
                        { value: "2000", text: { en: "2000", es: "2000" } },
                    ],
                },
                {
                    key: "CollisionDeductible",
                    title: { en: "Collision Deductible", es: "Deducible de Colisión" },
                    options: [
                        { value: "500", text: { en: "500", es: "500" } },
                        { value: "1000", text: { en: "1000", es: "1000" } },
                        { value: "1500", text: { en: "1500", es: "1500" } },
                        { value: "2000", text: { en: "2000", es: "2000" } },
                    ],
                },
                {
                    key: "TowingLimit", title: { en: "Towing Limit", es: "Límite de Remolque" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "20", text: { en: "20", es: "20" } },
                        { value: "30", text: { en: "30", es: "30" } },
                        { value: "35", text: { en: "35", es: "35" } },
                        { value: "40", text: { en: "40", es: "40" } },
                        { value: "50", text: { en: "50", es: "50" } },
                        { value: "75", text: { en: "75", es: "75" } },
                        { value: "100", text: { en: "100", es: "100" } },
                    ],
                    hidden: true
                },
                {
                    key: "RentalLimit", title: { en: "Rental Limit", es: "Límite de Alquiler" },
                    options: [
                        { value: "None", text: { en: "None", es: "Ninguno" } },
                        { value: "15", text: { en: "15", es: "15" } },
                        { value: "20", text: { en: "20", es: "20" } },
                        { value: "25", text: { en: "25", es: "25" } },
                        { value: "30", text: { en: "30", es: "30" } },
                        { value: "35", text: { en: "35", es: "35" } },
                        { value: "40", text: { en: "40", es: "40" } },
                        { value: "50", text: { en: "50", es: "50" } },
                        { value: "75", text: { en: "75", es: "75" } },
                        { value: "100", text: { en: "100", es: "100" } },
                    ],
                    hidden: true
                },
                {
                    key: "GapCoverage", title: { en: "Gap Coverage", es: "Cobertura de Brecha" },
                    options: [
                        { value: false, text: { en: "None", es: "Ninguno" } },
                        { value: true, text: { en: "Yes", es: "Sí" } },
                    ],
                    hidden: true
                },
                {
                    key: "CustomEquipmentValue", title: { en: "Custom Equipment Value", es: "Valor del Equipo Personalizado" },
                    options: [
                        { value: 0, text: { en: "None", es: "Ninguno" } },
                    ],
                    hidden: true
                }
            ]
        }
    ]

function returnDefaultValues(defaultValue, options) {

    if (!defaultValue || defaultValue.length < 2) {
        return { selectedIndex: -1, selectedCoverageValues: [] }
    }
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
            return { selectedIndex: options[i], selectedCoverageValues: defaultValue }
        } else {
            //if there isn't a match set the index to the custom option that is in the options array
            let customIndex = -1
            for (let j = 0; j < options.length; j++) {
                if (OPTIONS[options[j]].custom) {
                    customIndex = options[j]
                    break
                }
            }
            return { selectedIndex: customIndex, selectedCoverageValues: defaultValue }
        }
    }
    return { selectedIndex: -1, selectedCoverageValues: [] }
}

export default function (props) {
    const [selectedIndex, setSelectedIndex] = useState<number>(returnDefaultValues(props.formValues[props.id], props.options).selectedIndex)
    const [options] = useState<number[]>(props.options)
    const [selectedCoverageValues, setSelectedCoverageValues] = useState<{ questionId: string, value: string }[]>(returnDefaultValues(props.formValues[props.id], props.options).selectedCoverageValues)
    //const [options] = useState([0])

    function setCoverageValuesHandler(index: number, values: { questionId: string, value: string }[]) {
        setSelectedIndex(index)
        setSelectedCoverageValues(values)
    }


    useEffect(() => {
        if (selectedIndex === -1) {
            const name = { questionId: "CoverageOption", value: "None", valid: false }
            props.updateFormValues(props.id, [name])
        } else {

            const name = { questionId: "CoverageOption", value: OPTIONS[selectedIndex].text.en, valid: true }

            const selectedCoverageOptions = selectedCoverageValues.map((coverage) => {
                return { questionId: coverage.questionId, value: coverage.value, valid: true }
            })
            //add name to the front of the array
            const updatedFormValue = [name, ...selectedCoverageOptions]
            props.updateFormValues(props.id, //[{ questionId: props.questionId, value: value }])
                updatedFormValue
            )
            props.clearError()
        }
    }, [selectedCoverageValues, selectedIndex])

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
                    return <IndividualCoverage key={index} index={index} selected={index === selectedIndex} handleSelect={setCoverageValuesHandler} {...OPTIONS[index]}
                        defaultValues={selectedCoverageValues}
                    />
                })}

            </Box>
        </Box>

    </>)
}