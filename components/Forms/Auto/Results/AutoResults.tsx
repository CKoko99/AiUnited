import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Button, Modal, Typography } from "@mui/material";
import PATHCONSTANTS from "constants/sitemap";
import { CustomFonts } from "providers/theme";
import { useEffect, useState } from "react";


const TEXT = {
    hello: { en: "Hello", es: "Hola" },
    takeALook: { en: "Take a look at your personalized quotes!", es: "¡Eche un vistazo a sus cotizaciones personalizadas!" },
    carrier: { en: "Carrier", es: "Compañía" },
    dueToday: { en: "Amount Due Today", es: "Cantidad a pagar" },
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
}

const LOADINGTEXT = [
    {
        en: "Contacting Carriers",
        es: "Contactando a las compañías"
    },
    {
        en: "Loading Results",
        es: "Cargando resultados"
    },
    {
        en: "Loading Payment Options",
        es: "Cargando opciones de pago"
    },
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
        overflow: "hidden",
    },
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: "50%",
        maxHeight: "90%",
        overflow: "scroll",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    },
}
async function getResults(id) {
    try {
        const resLink = `${PATHCONSTANTS.BACKEND2}/rates/?id=${id}`;
        console.log(resLink)
        const res = await fetch(resLink,
            { method: 'GET', }
        )
        const data = await res.json();

        console.log(data)
        if (data.carrierResults) {
            //      console.log(resultsData.carrierResults[0].carrierTransactionID.length !== 0)
            let filteredResults = data?.carrierResults?.filter(result => result.totalPremium > 0);
            //sort by totalPremium
            filteredResults.sort((a, b) => a.totalPremium - b.totalPremium)
            console.log("filteredResults:")
            console.log(filteredResults)
            //group elements of filteredResults by carrierTransactionID
            let groupedResults = filteredResults.reduce((accumulator, currentValue) => {
                (accumulator[currentValue.carrierTransactionID] = accumulator[currentValue.carrierTransactionID] || []).push(currentValue);
                return accumulator;
            }, {})
            console.log("groupedResults:")
            console.log(groupedResults)
            const finalList: Array<any> = [];
            for (const [key, value] of Object.entries(groupedResults)) {
                finalList.push(value);
            }
            //sort finalList by totalPremium
            finalList.sort((a, b) => (a[0] as { totalPremium: number }).totalPremium - (b[0] as { totalPremium: number }).totalPremium);

            return finalList;
        } else {
            return [];
        }


    } catch (err) {
        console.log(err);
        return [];
    }
}
function ContentItem(props) {
    const [paymentOptions, setPaymentOptions] = useState(props.paymentOptions || []);
    const [showModal, setShowModal] = useState(false);
    const carrierName = props.results[0].productName;
    const monthTerm = props.results[0].term;
    let dueToday = props.results[0].paymentOptions[0].downPaymentAmount;
    const totalPremium = props.results[0].totalPremium;
    const numberOfPayments = props.results[0].paymentOptions[0].numberOfPayments;
    let monthlyPayment = ((totalPremium - dueToday) / numberOfPayments).toFixed(2);
    if (dueToday === 0 && numberOfPayments === 1) {
        monthlyPayment = "0";
        dueToday = totalPremium;
    }
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

    useEffect(() => {
        //if carrierName contains "Alinsco" log the results
        if (carrierName.includes("Alinsco")) {
            console.log("Alinsco Results:")
            console.log(props.results)
        }
    }, [])

    return <Box
        sx={{
            width: 335,
            minHeight: 200,
            border: 1, borderColor: 'primary.main', borderRadius: 3, padding: "1rem",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            fontFamily: CustomFonts.Gustavo,
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
            >{monthTerm} {returnLocaleText(TEXT.monthTerm)}</Typography>
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
            >{returnLocaleText(TEXT.paymentOptions)}</Button>
            <Button
                sx={{
                    flex: 1,
                    fontSize: 13,
                    whiteSpace: "nowrap",

                }}
                color={buyNowURL !== "" ? "secondary" : "primary"}
                variant="contained"
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
                {props.results.map((result, i) => {
                    return <Box
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
export default function (props) {

    const [results, setResults] = useState<Array<any>>([]);
    const [fetchedOnce, setFetchedOnce] = useState(false);
    const [loadingText, setLoadingText] = useState({})
    const [loadingPercent, setLoadingPercent] = useState(0);
    const [loading, setLoading] = useState(false);
    const [maxResults, setMaxResults] = useState(5);
    const [fetched, setFetched] = useState(false);
    async function fetchResultsHandler(id) {
        let resultsData = await getResults(id);
        setResults(resultsData);
        setFetchedOnce(true);
    }

    useEffect(() => {
        const fetchResults = async () => {
            if (!props.id) {
                setResults([]);
                return;
            }
            setFetched(false);
            if (!props.disableLoading) {
                setLoading(true);
                setLoadingPercent(0);
                setTimeout(async () => {
                    let resultsData = await getResults(props.id);
                    setResults(resultsData);
                    setFetchedOnce(true);
                    setFetched(true);
                    setTimeout(() => {
                        console.log("Single Result:")
                        console.log(resultsData[5])
                    }, 3000)
                }, 10000)
            } else {
                let resultsData = await getResults(props.id);
                setResults(resultsData);
                setFetchedOnce(true);
                setFetched(true);
                setTimeout(() => {
                    console.log("Single Result:")
                    console.log(resultsData[5])
                }, 3000)
            }
            //        console.log(resultsData.carrierResults)
            //filter results where carrierTransactionId is not ''
        };
        fetchResults();
    }, [props.id])
    useEffect(() => {
        //over the course of 8 seconds, increase loadingPercent to 100
        //change loading text based on loadingPercent and amount of items in array
        const totalWaitTime = 10000;
        const intervalTime = totalWaitTime / 100;
        if (props.disableLoading) {
            setLoadingPercent(100);
            setLoading(false);
            return
        }
        if (loading) {
            let interval = setInterval(() => {
                setLoadingPercent((prev) => {
                    setLoadingText(LOADINGTEXT[Math.floor(LOADINGTEXT.length * (prev / 100))])
                    return prev + 1
                });

            }, intervalTime);
            setTimeout(() => {
                clearInterval(interval);
                setLoadingPercent(100);

            }, totalWaitTime)
        }
    }, [loading])
    useEffect(() => {
        if (fetched && loadingPercent === 100) {
            setLoading(false);
        }
    }, [fetched, loadingPercent])

    return <>
        {props.id &&
            <>
                {(loading && !fetched) ? <>
                    <Box
                        sx={{
                            display: "flex", justifyContent: "center", flexDirection: "column", gap: "1rem",
                            margin: "auto", width: "100%", textAlign: "center"
                        }}
                    >
                        <Typography variant="h4">
                            {returnLocaleText(loadingText)}
                        </Typography>
                        <Typography variant="h6">
                            {loadingPercent} %
                        </Typography>
                    </Box>
                </> :
                    <>
                        <Box
                            sx={{
                                width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                                margin: "auto",
                            }}
                        >
                            {(results.length === 0 && fetchedOnce && !loading) ? <>
                                <Typography variant="h4"
                                >
                                    {returnLocaleText(TEXT.unfortunately)}
                                </Typography>
                                <Typography variant="h6">
                                    {returnLocaleText(TEXT.pleaseCall)}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex", justifyContent: "center",
                                        gap: "1rem",
                                        padding: "1rem 0",
                                    }}
                                >
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        href={PATHCONSTANTS.PHONE}
                                    >Call Now</Button>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        href={PATHCONSTANTS.LOCATIONS.INDEX}
                                    >Find a Store</Button>
                                </Box>
                            </>
                                :
                                <>    <Box
                                    sx={{
                                        textAlign: "left",
                                        padding: "1rem 0", display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography sx={{
                                        fontFamily: CustomFonts.Gustavo, fontSize: 44
                                    }}>{returnLocaleText(TEXT.hello)} {props.name},</Typography>
                                    <Typography sx={{ fontFamily: CustomFonts.Gustavo, fontSize: 44 }}>{returnLocaleText(TEXT.takeALook)}</Typography>
                                </Box>
                                    <Box
                                        sx={{
                                            display: 'flex', flexWrap: 'wrap', gap: "1rem",
                                            justifyContent: "center"
                                        }}
                                    >
                                        {results.map((result: any, i) => {
                                            if (i > maxResults) {
                                                return null;
                                            }
                                            return <ContentItem key={i} results={result} />
                                        })}
                                    </Box>
                                    {maxResults <= results.length && <Box
                                        sx={{
                                            display: "flex", justifyContent: "center"
                                        }}>
                                        <Button
                                            onClick={() => {
                                                setMaxResults(maxResults + 6)
                                            }}
                                        >Load More</Button>
                                    </Box>}
                                </>}
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                {fetchedOnce && <Button onClick={() => {
                                    fetchResultsHandler(props.id)
                                }}>refetch
                                </Button>}
                                {fetchedOnce && <Button onClick={() => {
                                    props.goBack()
                                    setFetchedOnce(false)
                                }}
                                    color="secondary"
                                >Edit Coverages</Button>}
                            </Box>
                        </Box>
                    </>}
            </>}
    </>
}