import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, Typography } from "@mui/material";
import { CustomFonts } from "providers/theme";
import { useEffect, useState } from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {
    BodilyInjury, PropertyDamage, CollisionDeductible, ComprehensiveDeductible, PersonalInjuryProtection,
    AccidentalDeath, MedicalPayments, CustomEquipmentValue,
    GapCoverage, RentalLimit, TowingLimit, UninsuredMotoristBI, UninsuredMotoristPD
} from "./Modals";
const TEXT = {
    selectCoverage: { en: "Select Your Coverage Option", es: "Seleccione su opción de cobertura" },
    validationError: { en: "Please select a coverage option", es: "Por favor seleccione una opción de cobertura" },
    policyCoverages: { en: "Liability Coverages", es: "Coberturas de Responsabilidad" },
    vehicleCoverages: { en: "Vehicle Coverages", es: "Coberturas del Vehículo" },
    additionalCoverages: { en: "Additional Coverages", es: "Coberturas Adicionales" },
    seeDetails: { en: "See More Details", es: "Ver Más Detalles" },
    coverageDetails: { en: "Coverage Details", es: "Detalles de la Cobertura" },
}
const policyCoverages = [
    "LiabilityBiLimit", "LiabilityPdLimit",
]
const vehicleCoverages = [
    "ComprehensiveDeductible", "CollisionDeductible",
]
const additionalCoverages = [
    "PipLimit", "UninsuredMotoristBiLimit", "UninsuredMotoristPdLimit"
]

const classes = {
    root: {
        padding: "1rem",
        width: { xs: "90%", sm: "75%", md: "75%", lg: "60%" },
        margin: "auto",
        transition: "all .4s",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
    },
    mainHeading: {
        fontWeight: "bold", marginBottom: ".5rem"
    },
    subHeading: {
        marginBottom: "1rem"
    },
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
    shownCoverageDetails: {
        display: "flex", justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" }, gap: "1rem",
        flexWrap: "wrap"
    },
    showCoverageDetailsSection: {
        display: "flex", flexDirection: "column", gap: ".3rem",
    },
    showCoverageDetailLine: {
        display: "flex", justifyContent: "space-between",
        gap: "1rem", alignItems: "center"
    },
    showCoverageDetailLineValue: {
        display: "flex", alignItems: "center", gap: ".25rem"
    },
    bottomButtonSection: {
        display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",
        margin: "1.5rem auto 0", gap: ".5rem"
    },
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: { xs: "87.5%", sm: "75%", md: "70%", lg: "55%" },
        maxHeight: "60%",
        overflow: "scroll",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: { xs: "1.5rem", md: "3rem", },
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
}



function CoveragePackage(props) {
    const [openDetailsModal, setOpenDetailsModal] = useState(false)
    const selected = props.selected

    function selectCoverageHandler() {
        const newCoverageValues = props.coverages.map(coverage => {
            return {
                questionId: coverage.key,
                value: coverage.value
            }
        })
        props.handleSelect(props.index, newCoverageValues)
    }
    return <>
        <Box
            sx={{
                ...classes.root,
                border: selected ? "1px solid black" : "1px solid #cacaca",
                backgroundColor: selected ? "#0e76bc2b" : "white",
            }}
        >
            <Box>

                <Typography
                    variant="h5" sx={{ ...classes.mainHeading }}
                >{returnLocaleText(props.text)}</Typography>
                <Typography
                    variant="body1" sx={{ ...classes.subHeading }}
                >{returnLocaleText(props.subtitle)}</Typography>
            </Box>
            <Box
                sx={{
                    ...classes.shownCoverageDetails,
                }}
            >
                <Box
                >
                    <Typography variant="h6"
                        fontFamily={CustomFonts.Gustavo}
                    >
                        {returnLocaleText(TEXT.policyCoverages)}
                    </Typography>
                    <Box
                        sx={{ ...classes.showCoverageDetailsSection }}
                    >
                        {policyCoverages.map((coverage, policyCoverageIndex) => {
                            return <Box key={coverage}
                                sx={{
                                    ...classes.showCoverageDetailLine
                                }}
                            >
                                <Typography variant="body1">
                                    {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.title)}:
                                </Typography>
                                <Box
                                    sx={{ ...classes.showCoverageDetailLineValue }}
                                >
                                    <Typography variant="body1">
                                        {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.valueText as {
                                            [lang: string]: string;
                                        })}
                                    </Typography>
                                    {coverage === "LiabilityBiLimit" && <BodilyInjury />}
                                    {coverage === "LiabilityPdLimit" && <PropertyDamage />}
                                    {coverage === "PipLimit" && <PersonalInjuryProtection />}
                                </Box>
                            </Box>
                        }
                        )}
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        fontFamily={CustomFonts.Gustavo}
                    >{returnLocaleText(TEXT.vehicleCoverages)}</Typography>

                    <Box
                        sx={{ ...classes.showCoverageDetailsSection }}
                    >   {
                            vehicleCoverages.map(coverage => {
                                return <Box key={coverage}
                                    sx={{
                                        ...classes.showCoverageDetailLine
                                    }}>
                                    <Typography variant="body1"
                                    >
                                        {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.title)}:
                                    </Typography>
                                    <Box
                                        sx={{ ...classes.showCoverageDetailLineValue }}
                                    >
                                        <Typography variant="body1">
                                            {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.valueText as {
                                                [lang: string]: string;
                                            })}
                                        </Typography>
                                        {coverage === "ComprehensiveDeductible" && <ComprehensiveDeductible />}
                                        {coverage === "CollisionDeductible" && <CollisionDeductible />}
                                    </Box>
                                </Box>
                            }
                            )}
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        fontFamily={CustomFonts.Gustavo}
                    >{returnLocaleText(TEXT.additionalCoverages)}</Typography>

                    <Box
                        sx={{ ...classes.showCoverageDetailsSection }}
                    >   {
                            additionalCoverages.map(coverage => {
                                return <Box key={coverage}
                                    sx={{
                                        ...classes.showCoverageDetailLine
                                    }}>
                                    <Typography variant="body1"
                                    >
                                        {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.title)}:
                                    </Typography>
                                    <Box
                                        sx={{ ...classes.showCoverageDetailLineValue }}
                                    >
                                        <Typography variant="body1">
                                            {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.valueText as {
                                                [lang: string]: string;
                                            })}
                                        </Typography>
                                        {coverage === "PipLimit" && <PersonalInjuryProtection />}
                                        {coverage === "UninsuredMotoristBiLimit" && <UninsuredMotoristBI />}
                                        {coverage === "UninsuredMotoristPdLimit" && <UninsuredMotoristPD />}
                                    </Box>
                                </Box>
                            }
                            )}
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    ...classes.bottomButtonSection
                }}
            >
                <Button variant="contained" color="primary"
                    onClick={() => {
                        selectCoverageHandler()
                    }}
                >
                    {returnLocaleText(TEXT.selectCoverage)}
                </Button>
                <Button
                    color="secondary"
                    onClick={() => setOpenDetailsModal(true)}
                >
                    {returnLocaleText(TEXT.seeDetails)}
                </Button>
            </Box>
        </Box >
        <Modal
            open={openDetailsModal}
            onClose={() => setOpenDetailsModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ ...classes.modalRoot }}
        >
            <Box
                sx={{ ...classes.modal }}
            >
                <Typography variant="h5"
                    fontFamily={CustomFonts.Gustavo}
                >{returnLocaleText(TEXT.coverageDetails)}</Typography>
                {props.coverages.map((coverage, index) => {
                    if (coverage.hidden) return null
                    return <Box key={index}
                        sx={{
                            display: "flex", justifyContent: "space-between",
                            gap: "2rem"
                        }}
                    >
                        <Typography variant="body1"
                            sx={{ textAlign: "left" }}
                        >
                            {returnLocaleText(coverage.title)}:
                        </Typography>
                        <Box
                            sx={{ display: "flex", alignItems: "center", gap: ".25rem" }}
                        >
                            <Typography variant="body1">
                                {returnLocaleText(coverage.valueText as {
                                    [lang: string]: string;
                                })}
                            </Typography>
                            {coverage.key === "LiabilityBiLimit" && <BodilyInjury inModal />}
                            {coverage.key === "LiabilityPdLimit" && <PropertyDamage inModal />}
                            {coverage.key === "PipLimit" && <PersonalInjuryProtection inModal />}
                            {coverage.key === "ComprehensiveDeductible" && <ComprehensiveDeductible inModal />}
                            {coverage.key === "CollisionDeductible" && <CollisionDeductible inModal />}
                            {coverage.key === "MedPayLimit" && <MedicalPayments inModal />}
                            {coverage.key === "AccidentalDeathLimit" && <AccidentalDeath inModal />}
                            {coverage.key === "CustomEquipmentValue" && <CustomEquipmentValue inModal />}
                            {coverage.key === "GapCoverage" && <GapCoverage inModal />}
                            {coverage.key === "RentalLimit" && <RentalLimit inModal />}
                            {coverage.key === "TowingLimit" && <TowingLimit inModal />}
                            {coverage.key === "UninsuredMotoristBiLimit" && <UninsuredMotoristBI inModal />}
                            {coverage.key === "UninsuredMotoristPdLimit" && <UninsuredMotoristPD inModal />}
                        </Box>
                    </Box>
                })}
            </Box>
        </Modal>
    </>
}

function returnValueSelection(defaultCoverages, defaultSelections) {
    const returnDefaultCoverages: {
        value: string,
        key: string,
        options: { value: string, text: string }[]
    }[] = []
    for (let i = 0; i < defaultCoverages.length; i++) {
        returnDefaultCoverages.push({
            value: defaultCoverages[i].options[0].value,
            options: defaultCoverages[i].options,
            key: defaultCoverages[i].key
        })
    }
    if (defaultSelections) {
        //if defaultSelection then get the values and set them to the returnDefaultCoverages
        for (let i = 0; i < defaultSelections.length; i++) {
            let index = returnDefaultCoverages.findIndex(cov => cov.key === defaultSelections[i].questionId)
            returnDefaultCoverages[index].value = defaultSelections[i].value
        }
    }
    return returnDefaultCoverages

}

function CustomCoverage(props) {
    const [openDetailsModal, setOpenDetailsModal] = useState(false)
    const [coverageValues, setCoverageValues] = useState(returnValueSelection(props.coverages, props.defaultValues))
    const selected = props.selected


    function selectCoverageHandler() {
        const passedCoverageValues = coverageValues.map((coverage, index) => {
            return {
                questionId: coverage.key,
                value: coverage.value
            }
        })
        props.handleSelect(props.index, passedCoverageValues)
    }

    function handleCoverageValueChange(coverageKey, value) {

        let newCoverageValues = [...coverageValues]
        // newCoverageValues[coverageKey].value = value
        //find the index of the coverage that was changed
        let coverageIndex = props.coverages.findIndex(cov => cov.key === coverageKey)
        //update the value of the coverage that was changed
        newCoverageValues[coverageIndex].value = value

        //if the coverage is comprehensive, update the collision deductible to match the comprehensive deductible
        if (coverageKey === "ComprehensiveDeductible") {
            newCoverageValues[props.coverages.findIndex(cov => cov.key === "CollisionDeductible")].value = value
        }
        //if the coverage is collision, update the comprehensive deductible to match the collision deductible
        if (coverageKey === "CollisionDeductible") {
            newCoverageValues[props.coverages.findIndex(cov => cov.key === "ComprehensiveDeductible")].value = value
        }

        setCoverageValues(newCoverageValues)
        const passedCoverageValues = newCoverageValues.map((coverage, index) => {
            return {
                questionId: coverage.key,
                value: coverage.value
            }
        })
        props.handleSelect(props.index, passedCoverageValues)
    }


    return <>
        <Box sx={{ ...classes.root, border: selected ? "1px solid black" : "1px solid #cacaca", backgroundColor: selected ? "#0e76bc2b" : "white" }}>
            <Box>
                <Typography variant="h5" sx={{ ...classes.mainHeading }}>{returnLocaleText({ en: "Custom Coverage", es: "Cobertura Personalizada" })}</Typography>
                <Typography variant="body1" sx={{ ...classes.subHeading }}>{returnLocaleText({
                    en: "For maximum flexibility, build your own coverage package.",
                    es: "Para máxima flexibilidad, construya su propio paquete de cobertura."
                })}</Typography>
            </Box>
            <Box
                sx={{
                    ...classes.shownCoverageDetails,
                }}
            >
                <Box
                >
                    <Typography variant="h6"
                        fontFamily={CustomFonts.Gustavo}
                    >
                        {returnLocaleText(TEXT.policyCoverages)}
                    </Typography>
                    <Box
                        sx={{ ...classes.showCoverageDetailsSection }}
                    >
                        {policyCoverages.map((coverage, policyCoverageIndex) => {
                            let coverageOption = props.coverages.find(cov => cov.key === coverage)
                            let coverageIndex = props.coverages.findIndex(cov => cov.key === coverage)
                            if (!coverageOption) return null
                            return <Box key={coverage}
                                sx={{
                                    ...classes.showCoverageDetailLine
                                }}
                            >
                                <Typography variant="body1"
                                    sx={{ maxWidth: "11rem" }}
                                >
                                    {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.title)}:
                                </Typography>
                                <Box
                                    sx={{ ...classes.showCoverageDetailLineValue }}
                                >

                                    <FormControl fullWidth sx={{
                                        maxHeight: "3rem",
                                        backgroundColor: "#f0f0f0",
                                    }}
                                    >
                                        <InputLabel id={"select-label"}>{returnLocaleText(props.question)}</InputLabel>
                                        <Select
                                            sx={{
                                                width: "7.5rem",
                                                minHeight: "1.5rem"
                                            }}
                                            value={coverageValues[coverageIndex].value}
                                            onChange={(e) => {
                                                handleCoverageValueChange(coverage, e.target.value)
                                            }}
                                        >
                                            {coverageValues[coverageIndex].options.map((option, index) => {
                                                return <MenuItem key={index} value={option.value}>{returnLocaleText(option.text)}
                                                </MenuItem>
                                            })}
                                        </Select>
                                    </FormControl>

                                    <Typography variant="body1">
                                        {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.valueText as {
                                            [lang: string]: string;
                                        })}
                                    </Typography>
                                    {coverage === "LiabilityBiLimit" && <BodilyInjury />}
                                    {coverage === "LiabilityPdLimit" && <PropertyDamage />}
                                    {coverage === "PipLimit" && <PersonalInjuryProtection />}
                                </Box>
                            </Box>
                        }
                        )}
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        fontFamily={CustomFonts.Gustavo}
                    >{returnLocaleText(TEXT.vehicleCoverages)}</Typography>

                    <Box
                        sx={{ ...classes.showCoverageDetailsSection }}
                    >   {
                            vehicleCoverages.map(coverage => {
                                let coverageOption = props.coverages.find(cov => cov.key === coverage)
                                let coverageIndex = props.coverages.findIndex(cov => cov.key === coverage)
                                if (!coverageOption) return null
                                return <Box key={coverage}
                                    sx={{
                                        ...classes.showCoverageDetailLine
                                    }}>
                                    <Typography variant="body1" sx={{ maxWidth: "11rem" }}
                                    >
                                        {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.title)}:
                                    </Typography>
                                    <Box
                                        sx={{ ...classes.showCoverageDetailLineValue }}
                                    >
                                        <FormControl fullWidth sx={{
                                            maxHeight: "3rem",
                                            backgroundColor: "#f0f0f0",
                                        }}
                                        >
                                            <InputLabel id={"select-label"}>{returnLocaleText(props.question)}</InputLabel>
                                            <Select
                                                sx={{
                                                    width: "7.5rem",
                                                    minHeight: "1.5rem"
                                                }}
                                                value={coverageValues[coverageIndex].value}
                                                onChange={(e) => {
                                                    handleCoverageValueChange(coverage, e.target.value)
                                                }}
                                            >
                                                {coverageValues[coverageIndex].options.map((option, index) => {
                                                    return <MenuItem key={index} value={option.value}>{returnLocaleText(option.text)}
                                                    </MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>
                                        <Typography variant="body1">
                                            {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.valueText as {
                                                [lang: string]: string;
                                            })}
                                        </Typography>
                                        {coverage === "ComprehensiveDeductible" && <ComprehensiveDeductible />}
                                        {coverage === "CollisionDeductible" && <CollisionDeductible />}
                                    </Box>
                                </Box>
                            }
                            )}
                    </Box>
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        fontFamily={CustomFonts.Gustavo}
                    >{returnLocaleText(TEXT.additionalCoverages)}</Typography>

                    <Box
                        sx={{ ...classes.showCoverageDetailsSection }}
                    >   {
                            additionalCoverages.map(coverage => {
                                let coverageOption = props.coverages.find(cov => cov.key === coverage)
                                let coverageIndex = props.coverages.findIndex(cov => cov.key === coverage)
                                if (!coverageOption) return null
                                return <Box key={coverage}
                                    sx={{
                                        ...classes.showCoverageDetailLine
                                    }}>
                                    <Typography variant="body1" sx={{ maxWidth: "11rem" }}
                                    >
                                        {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.title)}:
                                    </Typography>
                                    <Box
                                        sx={{ ...classes.showCoverageDetailLineValue }}
                                    >
                                        <FormControl fullWidth sx={{
                                            maxHeight: "3rem",
                                            backgroundColor: "#f0f0f0",
                                        }}
                                        >
                                            <InputLabel id={"select-label"}>{returnLocaleText(props.question)}</InputLabel>
                                            <Select
                                                sx={{
                                                    width: "7.5rem",
                                                    minHeight: "1.5rem"
                                                }}
                                                value={coverageValues[coverageIndex].value}
                                                onChange={(e) => {
                                                    handleCoverageValueChange(coverage, e.target.value)
                                                }}
                                            >
                                                {coverageValues[coverageIndex].options.map((option, index) => {
                                                    return <MenuItem key={index} value={option.value}>{returnLocaleText(option.text)}
                                                    </MenuItem>
                                                })}
                                            </Select>
                                        </FormControl>
                                        <Typography variant="body1">
                                            {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.valueText as {
                                                [lang: string]: string;
                                            })}
                                        </Typography>
                                        {coverage === "PipLimit" && <PersonalInjuryProtection />}
                                        {coverage === "UninsuredMotoristBiLimit" && <UninsuredMotoristBI />}
                                        {coverage === "UninsuredMotoristPdLimit" && <UninsuredMotoristPD />}
                                    </Box>
                                </Box>
                            }
                            )}
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    ...classes.bottomButtonSection
                }}
            >
                <Button variant="contained" color="primary"
                    onClick={() => {
                        selectCoverageHandler()
                    }}
                >
                    {returnLocaleText(TEXT.selectCoverage)}
                </Button>
                <Button
                    color="secondary"
                    onClick={() => setOpenDetailsModal(true)}
                >
                    {returnLocaleText(TEXT.seeDetails)}
                </Button>
            </Box>
        </Box >
        <Modal
            open={openDetailsModal}
            onClose={() => setOpenDetailsModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ ...classes.modalRoot }}
        >
            <Box
                sx={{ ...classes.modal }}
            >
                <Typography variant="h5"
                    fontFamily={CustomFonts.Gustavo}
                >{returnLocaleText(TEXT.coverageDetails)}</Typography>
                {props.coverages.map((coverage, index) => {
                    if (coverage.hidden) return null
                    let coverageKey = coverage.key
                    let coverageIndex = props.coverages.findIndex(cov => cov.key === coverageKey)
                    return <Box key={index}
                        sx={{
                            display: "flex", justifyContent: "space-between",
                            gap: "2rem"
                        }}
                    >
                        <Typography variant="body1"
                            sx={{ textAlign: "left" }}
                        >
                            {returnLocaleText(coverage.title)}:
                        </Typography>
                        <Box
                            sx={{ display: "flex", alignItems: "center", gap: ".25rem" }}
                        >
                            <FormControl fullWidth sx={{
                                maxHeight: "3rem",
                                backgroundColor: "#f0f0f0",
                            }}
                            >
                                <InputLabel id={"select-label"}>{returnLocaleText(props.question)}</InputLabel>
                                <Select
                                    sx={{
                                        width: "7.5rem",
                                        minHeight: "1.5rem"
                                    }}
                                    value={coverageValues[coverageIndex].value}
                                    onChange={(e) => {
                                        handleCoverageValueChange(coverageKey, e.target.value)
                                    }}
                                >
                                    {coverageValues[coverageIndex].options.map((option, index) => {
                                        return <MenuItem key={index} value={option.value}>{returnLocaleText(option.text)}
                                        </MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            {coverage.key === "LiabilityBiLimit" && <BodilyInjury inModal />}
                            {coverage.key === "LiabilityPdLimit" && <PropertyDamage inModal />}
                            {coverage.key === "PipLimit" && <PersonalInjuryProtection inModal />}
                            {coverage.key === "ComprehensiveDeductible" && <ComprehensiveDeductible inModal />}
                            {coverage.key === "CollisionDeductible" && <CollisionDeductible inModal />}
                            {coverage.key === "MedPayLimit" && <MedicalPayments inModal />}
                            {coverage.key === "AccidentalDeathLimit" && <AccidentalDeath inModal />}
                            {coverage.key === "CustomEquipmentValue" && <CustomEquipmentValue inModal />}
                            {coverage.key === "GapCoverage" && <GapCoverage inModal />}
                            {coverage.key === "RentalLimit" && <RentalLimit inModal />}
                            {coverage.key === "TowingLimit" && <TowingLimit inModal />}
                            {coverage.key === "UninsuredMotoristBiLimit" && <UninsuredMotoristBI inModal />}
                            {coverage.key === "UninsuredMotoristPdLimit" && <UninsuredMotoristPD inModal />}
                        </Box>
                    </Box>
                })}
            </Box>
        </Modal>


    </>

}

export default function (props) {
    return <>
        {props.custom ? <CustomCoverage {...props} /> : <CoveragePackage {...props} />}
    </>
}
