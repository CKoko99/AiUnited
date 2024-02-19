import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Button, Modal, Typography } from "@mui/material";
import { CustomFonts } from "providers/theme";
import { useState } from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { BodilyInjury, PropertyDamage, CollisionDeductible, ComprehensiveDeductible, PersonalInjuryProtection } from "./Modals";
const TEXT = {
    selectCoverage: { en: "Select Your Coverage Option", es: "Seleccione su opción de cobertura" },
    validationError: { en: "Please select a coverage option", es: "Por favor seleccione una opción de cobertura" },
    policyCoverages: { en: "Policy Coverages", es: "Coberturas de Póliza" },
    vehicleCoverages: { en: "Vehicle Coverages", es: "Coberturas del Vehículo" },
    seeDetails: { en: "See More Details", es: "Ver Más Detalles" },
    coverageDetails: { en: "Coverage Details", es: "Detalles de la Cobertura" },
}
const policyCoverages = [
    "LiabilityBiLimit", "LiabilityPdLimit", "PipLimit",
]
const vehicleCoverages = [
    "ComprehensiveDeductible", "CollisionDeductible",
]
const classes = {
    modalRoot: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
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
export default function (props) {
    const [openDetailsModal, setOpenDetailsModal] = useState(false)
    const selected = props.selected
    return <>
        <Box
            sx={{
                border: selected ? "1px solid black" : "1px solid #cacaca",
                padding: "1rem",
                width: { xs: "90%", sm: "75%", md: "70%", lg: "55%" },
                margin: "auto",
                backgroundColor: selected ? "#0e76bc2b" : "white",
                transition: "all .4s",
                borderRadius: "10px",
            }}
        >
            <Box>

                <Typography
                    variant="h5" sx={{ fontWeight: "bold", marginBottom: ".5rem" }}
                >{returnLocaleText(props.text)}</Typography>
                <Typography
                    variant="body1" sx={{ marginBottom: "1rem" }}
                >{returnLocaleText(props.subtitle)}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex", justifyContent: "space-between",
                    flexDirection: { xs: "column", md: "row" }, gap: "1rem",
                    flexWrap: "wrap"

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
                        sx={{ display: "flex", flexDirection: "column", gap: ".3rem" }}
                    >
                        {policyCoverages.map((coverage, policyCoverageIndex) => {
                            return <Box key={coverage}
                                sx={{
                                    display: "flex", justifyContent: "space-between",
                                    gap: "1rem"
                                }}
                            >
                                <Typography variant="body1">
                                    {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.title)}:
                                </Typography>
                                <Box
                                    sx={{ display: "flex", alignItems: "center", gap: ".25rem" }}
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
                        sx={{ display: "flex", flexDirection: "column", gap: ".3rem" }}
                    >   {
                            vehicleCoverages.map(coverage => {
                                return <Box key={coverage}
                                    sx={{
                                        display: "flex", justifyContent: "space-between",
                                        gap: "1rem", alignItems: "center"
                                    }}>
                                    <Typography variant="body1"
                                    >
                                        {returnLocaleText(props.coverages.find(cov => cov.key === coverage)?.title)}:
                                    </Typography>
                                    <Box
                                        sx={{ display: "flex", alignItems: "center", gap: ".25rem" }}
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
            </Box>
            <Box
                sx={{
                    display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center",
                    margin: "1.5rem auto 0", gap: ".5rem"
                }}
            >
                <Button variant="contained" color="primary"
                    onClick={() => {
                        props.handleSelect(props.index)
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
                            {coverage.key === "LiabilityBiLimit" && <BodilyInjury />}
                            {coverage.key === "LiabilityPdLimit" && <PropertyDamage />}
                            {coverage.key === "PipLimit" && <PersonalInjuryProtection />}
                            {coverage.key === "ComprehensiveDeductible" && <ComprehensiveDeductible />}
                            {coverage.key === "CollisionDeductible" && <CollisionDeductible />}
                        </Box>
                    </Box>
                })}
            </Box>
        </Modal>
    </>
}