import { Box, Button, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CustomFonts } from "providers/theme";
import PATHCONSTANTS from "constants/sitemap";
import { returnLocaleText } from "@/components/locale/LocaleSwitcher";

const TEXT = {
    hello: { en: "Hello", es: "Hola" },
    takeALook: { en: "Take a look at your personalized quotes!", es: "¡Eche un vistazo a sus cotizaciones personalizadas!" },
    carrier: { en: "Carrier", es: "Compañía" },
    dueToday: { en: "Due Today", es: "Vence hoy" },
    monthlyPayment: { en: "Monthly Payment", es: "Pago mensual" },
    buyOnline: { en: "Buy Online", es: "Comprar en línea" },
    callToGetPrice: { en: "Call to Buy", es: "Llame para comprar" },
    unfortunately: { en: "Unfortunately we couldn't find any results for you online.", es: "Desafortunadamente no pudimos encontrar ningún resultado para usted en línea." },
    pleaseCall: { en: "Please call us to get a quote, or visit a nearby store.", es: "Llámenos para obtener una cotización o visite una tienda cercana." },
    monthTerm: { en: "Month Term", es: "Plazo de meses" },
    paymentOptions: { en: "Payment Options", es: "Opciones de pago" },
    description: { en: "Description", es: "Descripción" },
    numberPayments: { en: "Number of Payments", es: "Número de pagos" },
    monthsOfCoverage: { en: "Months of Coverage", es: "Meses de cobertura" },
    totalPremium: { en: "Total Premium", es: "Prima total" },
    term: { en: "Term", es: "Plazo" },
    months: { en: "Months", es: "Meses" },
    month: { en: "Month", es: "Mes" },
    coverages: { en: "Coverages", es: "Coberturas" },
    coverageDetails: { en: "Coverage Details", es: "Detalles de cobertura" },
}

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
        overflow: "hidden",
    },
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: { xs: "90%", sm: "75%", md: "55%", lg: "50%", xl: "40%" },
        maxHeight: "90%",
        //  overflow: "scroll",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
}

const COVERAGE_LIMITS = [
    ["BI", "Bodily Injury"],
    ["PD", "Property Damage"],
    ["UM", "Uninsured Motorist"],
    ["UMPD", "Uninsured Motorist Property Damage"],
    ["UIM", "Underinsured Motorist"],
    ["PIP", "Personal Injury Protection"],
    ["MP", "Medical Payments"],
    ["R", "Rental Reimbursement"],
    ["T", "Towing"],
    ["R", "Roadside Assistance"],
    ["GAP", "GAP Coverage"],
]
const COVERAGE_DEDUCTIBLES = [
    ["COLL", "Collision Deductible"],
    ["COMP", "Comprehensive Deductible"],
]

function CoverageDetails(props) {

    useEffect(() => {
        console.log(props.coverages)
    }, [])

    return <>
        <Box>
            <Box
                sx={{ paddingBottom: "1rem" }}
            >
                <Typography sx={{
                    fontFamily: CustomFonts.Gustavo,
                }}
                    variant="h4">
                    {returnLocaleText(TEXT.coverageDetails)}
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {props.coverages.map((coverage, coverageIndex) => {
                    return <Box
                        key={coverageIndex}
                        sx={{
                            display: "flex", flexDirection: "row", justifyContent: "space-between",
                            alignItems: "center", gap: "2rem"
                        }}>
                        {COVERAGE_LIMITS.find(cov => cov[0] === coverage.name)?.[1] && <>
                            <Typography
                                textAlign={"left"}
                            >
                                {COVERAGE_LIMITS.find(cov => cov[0] === coverage.name)?.[1]}:
                            </Typography>
                            <Box
                                sx={{ display: "flex", }}
                            >
                                {coverage.limits.map((limit, limitIndex) => {
                                    if (limit.value === "0") return null;
                                    return <Typography key={limitIndex}>
                                        {limitIndex === 0 ? "" : " /"}
                                        {limit.value > 10000 ? limit.value / 1000 + "k" : limit.value}
                                    </Typography>
                                })}
                            </Box>
                        </>}
                        {COVERAGE_DEDUCTIBLES.find(cov => cov[0] === coverage.name)?.[1] && <>
                            <Typography
                                textAlign={"left"}
                            >
                                {COVERAGE_DEDUCTIBLES.find(cov => cov[0] === coverage.name)?.[1]}:
                            </Typography>
                            <Box
                                sx={{ display: "flex", }}
                            >
                                {coverage.deductible.map((deductible, deductibleIndex) => {
                                    return <Typography key={deductibleIndex}>${deductible.value}</Typography>
                                })}
                            </Box>
                        </>}
                    </Box>

                })}
            </Box>
        </Box>
    </>
}

export default function ContentItem(props) {
    const [showModal, setShowModal] = useState(false);
    let result = props.results[0];
    const carrierName = result.productName;
    const monthTerm = result.term;

    function returnBuyNowUrl(results) {
        let returnLink = "";
        for (let i = 0; i < results.length; i++) {
            if (results[i].buyNowURL !== "") {
                returnLink = results[i].buyNowURL;
            }
        }
        return returnLink;
    }
    const buyNowURL = returnBuyNowUrl(props.results);
    let serviceFee = buyNowURL !== "" ? 0 : 25;
    let dueToday = result.paymentOptions[0].downPaymentAmount + serviceFee;
    let totalPremium = Number(result.totalPremium) + serviceFee;
    const numberOfPayments = result.paymentOptions[0].numberOfPayments;
    let monthlyPayment = Number(((totalPremium - dueToday) / numberOfPayments).toFixed(2))
    if (numberOfPayments === 1) {
        monthlyPayment = 0
        dueToday = totalPremium.toFixed(2);
    }

    return <Box
        sx={{
            width: 335,
            minHeight: 200,
            border: 1, borderColor: 'primary.main', borderRadius: 3, padding: "1rem",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            fontFamily: CustomFonts.Gustavo,
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)",
        }}
    >
        <Box
            sx={{ textAlign: "center" }}
        >
            <Typography
                variant="h5"
                fontWeight={700}
                fontFamily={CustomFonts.Gustavo}
            > {carrierName}</Typography>
            <Typography
                fontFamily={CustomFonts.Gustavo}
                variant="subtitle1"
            >{returnLocaleText(TEXT.term)}: {monthTerm} {monthTerm > 1 ? returnLocaleText(TEXT.months) : returnLocaleText(TEXT.month)}</Typography>
        </Box>
        <Box
            sx={{ textAlign: "left" }}
        >
            <Typography variant="h6"
                fontFamily={CustomFonts.Gustavo}
            >{returnLocaleText(TEXT.dueToday)}: ${dueToday}</Typography>
            <Typography
                fontFamily={CustomFonts.Gustavo} variant="h6"
            >{returnLocaleText(TEXT.monthlyPayment)}: ${monthlyPayment}</Typography>
        </Box>
        <Box
            sx={{
                display: "flex", gap: ".5rem", marginTop: ".5rem",
                alignItems: "center", justifyContent: "space-between",
            }}
        >
            <Button
                sx={{
                    flex: 1,
                    fontSize: 13,
                    whiteSpace: "nowrap",
                    padding: "6px 16px"
                }}
                variant="outlined" color="secondary"
                onClick={() => setShowModal(true)}
            >{returnLocaleText(TEXT.coverages)}</Button>
            <Button
                sx={{
                    flex: 1,
                    fontSize: 13,
                    whiteSpace: "nowrap",

                }}
                color={buyNowURL !== "" ? "secondary" : "primary"}
                variant="contained"
                href={buyNowURL !== "" ? buyNowURL : PATHCONSTANTS.PHONE}
                target={buyNowURL !== "" ? "_blank" : "_self"}
            >
                {buyNowURL !== "" ? returnLocaleText(TEXT.buyOnline) : returnLocaleText(TEXT.callToGetPrice)}
            </Button>
        </Box>
        <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            sx={{ ...classes.modalRoot }}
        >
            <Box
                sx={{ ...classes.modal }}
            >
                <CoverageDetails coverages={result.cars[0].coverages} />
                {props.results.map((result, i) => {
                    return
                    <Box
                        sx={{
                            backgroundColor: i % 2 === 1 ? "primary.light" : "white", padding: 1,
                            border: "1px solid #cacaca", margin: ".5rem 0"
                        }}
                    >
                        {result.paymentOptions.map((option, i) => {
                            return <Box key={i}>
                                <Typography>{returnLocaleText(TEXT.description)}: {option.description}</Typography>
                                <Typography>{returnLocaleText(TEXT.dueToday)}: {option.downPaymentAmount}</Typography>
                                <Typography>{returnLocaleText(TEXT.numberPayments)}: {option.numberOfPayments}</Typography>
                            </Box>
                        })}
                        <Typography>{returnLocaleText(TEXT.monthsOfCoverage)}: {result.term} </Typography>
                        <Typography>{returnLocaleText(TEXT.totalPremium)}: {result.totalPremium}</Typography>
                    </Box>
                })}
            </Box>
        </Modal>
        {/*  {props.buyNowURL ? <Button
            variant="contained"
            color="primary"
            href={props.buyNowURL}
            target="_blank"
        >Buy Now</Button> :
            <Button variant="contained" color="secondary"
                href={PATHCONSTANTS.PHONE}
            >Call To Get This Price</Button>
        }
    */}
    </Box>
}