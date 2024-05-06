import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Button, LinearProgress, Modal, Typography } from "@mui/material";
import PATHCONSTANTS from "constants/sitemap";
import { CustomFonts } from "providers/theme";
import { useEffect, useState } from "react";
import ResultItem from "./ResultItem";
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LoadingContentItem } from "./ResultItem";
import { GTMEVENTS, GTMEventHandler } from "@/components/Scripts/Google/GoogleTag";
const TEXT = {
    hello: { en: "Hello", es: "Hola" },
    takeALook: { en: "You're Almost There – Let's Cross the Finish Line Together!", es: "¡Casi lo logramos! ¡Vamos a cruzar la línea de meta juntos!" },
    carrier: { en: "Carrier", es: "Compañía" },
    dueToday: { en: "Due Today", es: "Vence hoy" },
    monthlyPayment: { en: "Monthly Payment", es: "Pago mensual" },
    buyOnline: { en: "Buy Online", es: "Comprar en línea" },
    callToGetPrice: { en: "Call to Buy", es: "Llame para comprar" },
    unfortunately: { en: "Oops! It seems like there was a hiccup on our end, and we couldn't retrieve quotes for you.", es: "¡Vaya! Parece que hubo un problema en nuestro sistema y no pudimos obtener cotizaciones para usted." },
    sorry: {
        en: "Sorry for the inconvenience. Our dedicated team will assist you in getting a precise quote tailored to your needs.", es: "Lamentamos la molestia. Nuestro equipo dedicado lo ayudará a obtener una cotización precisa adaptada a sus necesidades."
    },
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
    loadingNewResults: { en: "Loading New Results", es: "Cargando nuevos resultados" },
}

const LOADINGTEXT = [
    {
        en: "Finding the best coverage options",
        es: "Encontrando las mejores opciones de cobertura"
    },
    {
        en: "Fetching personalized quotes just for you.",
        es: "Obteniendo cotizaciones personalizadas solo para ti."
    },
    {
        en: "Loading available discounts",
        es: "Cargando descuentos disponibles"
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
function isStoreOpen(dateTimeString: string) {
    // Parse the date and time from the string
    var dateTime = new Date(dateTimeString);

    //check to see if it is monday thru friday
    var day = dateTime.getDay();
    var hour = dateTime.getHours();
    if (day >= 1 && day <= 5) {
        console.log("Monday thru Friday")
        if (hour >= 9 && hour < 19) {
            return true;
        }
        return false
    }
    if (day == 6) {
        console.log("Saturday")
        if (hour >= 10 && hour < 17) {
            return true;
        }
        return false
    }
    return false
}

function reduceCompanysList(BaseList, Companies) {
    let newBaseList = BaseList;

    for (let i = 0; i < Companies.length; i++) {
        let companyList = newBaseList.filter(result => result[0].productName.includes(Companies[i]));
        newBaseList = newBaseList.filter(result => !result[0].productName.includes(Companies[i]));

        if (companyList.length > 0) {
            let combined = companyList.reduce((acc, cur) => {
                return acc.concat(cur);
            }, [])

            for (let j = 0; j < combined.length; j++) {
                combined[j].productName = Companies[i]
            }

            newBaseList.push(combined);
        }
    }
    return newBaseList;
}

async function getResults(id) {
    try {
        const resLink = `${PATHCONSTANTS.BACKEND2}/rates/?id=${id}`;
        //   console.log(resLink)
        const res = await fetch(resLink,
            { method: 'GET', }
        )
        const data = await res.json();

        //  console.log(data)
        if (data.carrierResults) {
            //      console.log(resultsData.carrierResults[0].carrierTransactionID.length !== 0)
            //we only want results where total premium is greater than 0
            let filteredResults = data?.carrierResults?.filter(result => result.totalPremium > 0);



            //we only want results where number of payments is greater than 1 or the term is 1
            filteredResults = filteredResults.filter(result => result.paymentOptions[0].numberOfPayments > 1 || result.term === 1);

            //sort by totalPremium
            filteredResults.sort((a, b) => a.totalPremium - b.totalPremium)

            // console.log("filteredResults:")
            // console.log(filteredResults)

            //group elements of filteredResults by carrierTransactionID
            let groupedResults = filteredResults.reduce((accumulator, currentValue) => {
                (accumulator[currentValue.carrierTransactionID] = accumulator[currentValue.carrierTransactionID] || []).push(currentValue);
                return accumulator;
            }, {})

            //group elements by company name
            //group all elements that contain "Alinsco" in the carrierName


            //console.log("groupedResults:")
            //console.log(groupedResults)


            let finalList: Array<any> = [];
            for (const [key, value] of Object.entries(groupedResults)) {
                finalList.push(value);
            }
            //   console.log("finalList:")
            //   console.log(finalList)

            finalList = reduceCompanysList(finalList, ["Alinsco", "Apollo", "Aguila Dorada", "Bluefire",
                "Excellent Insurance", "United Auto",
                "Connect Banner", "Amwins"

            ]);

            //sort finalList by totalPremium
            finalList.sort((a, b) => (a[0] as { totalPremium: number }).totalPremium - (b[0] as { totalPremium: number }).totalPremium);

            //sort finalList by if buyNowUrl is not '' then set it to the front
            finalList.sort((a, b) => {
                if ((a[0] as { buyNowURL: string }).buyNowURL !== "" && (b[0] as { buyNowURL: string }).buyNowURL === "") {
                    return -1;
                } else if ((a[0] as { buyNowURL: string }).buyNowURL === "" && (b[0] as { buyNowURL: string }).buyNowURL !== "") {
                    return 1;
                }
                return 0;
            })

            const cheapestBuyNow = finalList.find(result => (result[0] as { buyNowURL: string }).buyNowURL !== "");
            const cheapestNotBuyNow = finalList.find(result => (result[0] as { buyNowURL: string }).buyNowURL === "");
            if (process.env.NODE_ENV === "development") {
                console.log("Cheapest Options:")
                console.log([cheapestBuyNow, cheapestNotBuyNow])
            }
            const returnedResults: Array<any> = []
            returnedResults.push(cheapestBuyNow)
            if (data.currentTime && isStoreOpen(data.currentTime)) {
                returnedResults.push(cheapestNotBuyNow)
            }
            return returnedResults;
            /*
                 const firstItem = finalList.shift();
                 finalList.sort((a, b) => (a[0] as { totalPremium: number }).totalPremium - (b[0] as { totalPremium: number }).totalPremium);
                 finalList.unshift(firstItem);
             */
            return finalList;
        } else {
            return [];
        }


    } catch (err) {
        console.log(err);
        return [];
    }
}
const totalWaitTime = 12000;

export default function (props) {

    const [results, setResults] = useState<Array<any>>([]);
    const [fetchedOnce, setFetchedOnce] = useState(false);
    const [loadingText, setLoadingText] = useState({})
    const [loadingPercent, setLoadingPercent] = useState(0);
    const [loading, setLoading] = useState(false);
    const [secondLoading, setSecondLoading] = useState(false);
    const [maxResults, setMaxResults] = useState(5);
    const [fetched, setFetched] = useState(false);
    const [ellipsisCount, setEllipsisCount] = useState(0);
    const [clickedIndexArray, setClickedIndexArray] = useState<string[]>([]);
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
                    try {
                        let resultsData = await getResults(props.id);
                        setResults(resultsData);
                        //           console.log("resultsData:")
                        //           console.log(resultsData)
                        let phonecode1 = undefined;
                        let phonecode2 = undefined;
                        try {
                            phonecode1 = resultsData[0][0]?.phoneCode;
                        } catch (err) {
                            // console.log(err);
                        }
                        try {
                            phonecode2 = resultsData[1][0]?.phoneCode;
                        }
                        catch (err) {
                            // console.log(err);
                        }
                        setFetchedOnce(true);
                        setFetched(true);
                        /*
                            setTimeout(() => {
                                console.log("Single Result:")
                                console.log(resultsData[5])
                            }, 3000)
                        */
                    } catch (err) {
                        console.log(err)
                    }
                }, totalWaitTime)
            } else {
                let resultsData = await getResults(props.id);
                setResults(resultsData);
                setFetchedOnce(true);
                setFetched(true);
            }
            //        console.log(resultsData.carrierResults)
            //filter results where carrierTransactionId is not ''
        };
        fetchResults();

    }, [props.id])
    useEffect(() => {
        //over the course of 8 seconds, increase loadingPercent to 100
        //change loading text based on loadingPercent and amount of items in array
        const intervalTime = totalWaitTime / 100;
        if (props.disableLoading) {
            setLoadingPercent(100);
            setLoading(false);
            return
        }
        if (loading) {
            let interval = setInterval(() => {
                setLoadingPercent((prev) => {
                    setLoadingText(LOADINGTEXT[Math.floor(LOADINGTEXT.length * (prev / 100))]);
                    setEllipsisCount(Math.floor(prev / LOADINGTEXT.length) % 4);
                    return prev + 1
                });

            }, intervalTime);
            setTimeout(async () => {
                clearInterval(interval);
                setLoadingPercent(100);
                setTimeout(async () => {
                    let secondResultsData
                    try {
                        secondResultsData = await getResults(props.id);
                        let phoneCodeIsDifferent = false;
                        let oldPhoneCodes: Array<string> = [];
                        let newPhoneCodes: Array<string> = [];
                        setResults(oldResults => {
                            //length is results.length or secondResultsData.length, whichever is greater
                            const length = oldResults.length > secondResultsData.length ? oldResults.length : secondResultsData.length;
                            for (let i = 0; i < length; i++) {
                                let pushed = false;
                                if (oldResults[i]) {
                                    if (oldResults[i][0]) {
                                        if (oldResults[i][0].phoneCode) {
                                            oldPhoneCodes.push(oldResults[i][0].phoneCode)
                                            pushed = true;
                                        }
                                    }
                                }
                                if (!pushed) {
                                    oldPhoneCodes.push("undefined")
                                }
                            }
                            for (let i = 0; i < length; i++) {
                                let pushed = false;
                                if (secondResultsData[i]) {
                                    if (secondResultsData[i][0]) {
                                        if (secondResultsData[i][0].phoneCode) {
                                            newPhoneCodes.push(secondResultsData[i][0].phoneCode)
                                            pushed = true;
                                        }
                                    }
                                }
                                if (!pushed) {
                                    newPhoneCodes.push("undefined")
                                }
                            }
                            for (let i = 0; i < length; i++) {
                                if (oldPhoneCodes[i] !== newPhoneCodes[i]) {
                                    if (process.env.NODE_ENV === "development") {
                                        console.log("Phone Codes are different")
                                        console.log(oldPhoneCodes[i])
                                        console.log(newPhoneCodes[i])
                                    }
                                    phoneCodeIsDifferent = true;
                                }
                            }

                            if (phoneCodeIsDifferent) {
                                setSecondLoading(true);
                                setTimeout(async () => {
                                    setSecondLoading(false);
                                }, 2000)
                            } else {
                                if (process.env.NODE_ENV === "development") {
                                    console.log("Phone Codes are the same")
                                }
                            }
                            return secondResultsData;
                        })
                    } catch (err) {
                        if (secondResultsData) {
                            setResults(secondResultsData);
                        }
                        setSecondLoading(false);
                    }
                }, 10000)

            }, totalWaitTime)
        }
    }, [loading])
    useEffect(() => {
        if (fetched && loadingPercent === 100) {
            setLoading(false);
        }
    }, [fetched, loadingPercent])

    const noResults = results.length === 0;

    return <>
        {props.id &&
            <>
                {secondLoading && <Box sx={{ ...classes.modalRoot }}>
                    <Box sx={{ ...classes.modal }}>
                        <Typography variant="h4">
                            {returnLocaleText(TEXT.loadingNewResults)}
                        </Typography>
                        <CircularProgress
                            sx={{
                                margin: "auto",
                                textAlign: "center"
                            }}
                        />
                    </Box>
                </Box>
                }
                {(loading && !fetched) ? <>
                    <Box>

                        <Box
                            sx={{
                                display: "flex", justifyContent: "center", flexDirection: "column", gap: "1rem",
                                margin: "auto", width: "100%", textAlign: "center", padding: "2rem"
                            }}
                        >
                            <Typography variant="h4">
                                {returnLocaleText(loadingText)}{Array(ellipsisCount).fill(".").join("")}
                            </Typography>
                            <Typography variant="h6">
                                {loadingPercent} %
                            </Typography>
                            <Box
                                sx={{ margin: "auto", width: { xs: "80%", sm: "70%", md: "60%", lg: "50%" } }}
                            >
                                <LinearProgress variant="determinate" value={loadingPercent || 0} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex', flexWrap: 'wrap', gap: "1rem 3rem",
                                justifyContent: "center", padding: "2rem"
                            }}
                        >
                            <LoadingContentItem />
                            <LoadingContentItem />
                        </Box>
                    </Box>
                </> :
                    <>
                        <Box
                            sx={{
                                width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                                margin: "auto",
                                minHeight: "80vh",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            {(noResults && fetchedOnce && !loading) ? <Box
                                sx={{
                                    display: "flex", flexDirection: "column", gap: "1rem",
                                    padding: "2rem",
                                }}
                            >
                                <Typography variant="h4"
                                >
                                    {returnLocaleText(TEXT.unfortunately)}
                                </Typography>
                                <Typography variant="h6">
                                    {returnLocaleText(TEXT.sorry)}
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
                            </Box>
                                :
                                <>
                                    <Box>
                                        <Box
                                            sx={{
                                                textAlign: "left",
                                                padding: "1rem 0 2rem", display: "flex",
                                                flexDirection: "column",
                                                width: { xs: "90%", sm: "90%", md: "80%", lg: "80%" },
                                                margin: "auto"
                                            }}
                                        >
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    fontFamily: CustomFonts.Gustavo,
                                                    textAlign: "center"
                                                }}>{returnLocaleText(TEXT.hello)} {props.name},</Typography>
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    fontFamily: CustomFonts.Gustavo,
                                                    textAlign: "center"
                                                }}>{returnLocaleText(TEXT.takeALook)}</Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex', flexWrap: 'wrap', gap: "1rem 3rem",
                                                justifyContent: "center"
                                            }}
                                        >
                                            {results.map((result: any, i) => {
                                                if (i > maxResults) {
                                                    return null;
                                                }
                                                if (result === undefined) {
                                                    return null;
                                                }
                                                return <ResultItem key={i} results={result}
                                                    onClick={(conversionType: string) => {

                                                        if (!clickedIndexArray.length) {
                                                            if (conversionType === "buyOnline") {
                                                                const eventText = `${GTMEVENTS.audience}-TR-BuyOnline-ClickedFirst`
                                                                console.log(eventText)
                                                                GTMEventHandler(eventText, { 'name': `Auto-Quote` })
                                                            } else {
                                                                const eventText = `${GTMEVENTS.audience}-TR-CallToBuy-ClickedFirst`
                                                                console.log(eventText)
                                                                GTMEventHandler(eventText, { 'name': `Auto-Quote` })
                                                            }
                                                        }
                                                        if (conversionType === "buyOnline" && !clickedIndexArray.includes(conversionType)) {
                                                            const eventText = `${GTMEVENTS.audience}-TR-BuyOnline`
                                                            console.log(eventText)
                                                            GTMEventHandler(eventText, { 'name': `Auto-Quote` })
                                                        }
                                                        if (conversionType === "callToBuy" && !clickedIndexArray.includes(conversionType)) {
                                                            const eventText = `${GTMEVENTS.audience}-TR-CallToBuy`
                                                            console.log(eventText)
                                                            GTMEventHandler(eventText, { 'name': `Auto-Quote` })
                                                        }
                                                        setClickedIndexArray(prev => {
                                                            if (prev.includes(conversionType)) {
                                                                return prev
                                                            }
                                                            return [...prev, conversionType]
                                                        })

                                                    }}
                                                />
                                            })}
                                        </Box>
                                        {maxResults < results.length - 1 && <Box
                                            sx={{
                                                display: "flex", justifyContent: "center"
                                            }}>
                                            <Button
                                                onClick={() => {
                                                    setMaxResults(maxResults + 6)
                                                }}
                                            >Load More</Button>
                                        </Box>}
                                    </Box>
                                </>}
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                                {(false && fetchedOnce) && <Button onClick={() => {
                                    fetchResultsHandler(props.id)
                                }}>refetch
                                </Button>}
                                {fetchedOnce && <Button onClick={() => {
                                    props.goBack()
                                    setFetchedOnce(false)
                                }}
                                    sx={{ margin: "1rem auto" }}
                                    color="secondary"
                                >
                                    <ArrowBackIcon />
                                    Edit Coverages</Button>}
                            </Box>
                        </Box>
                    </>}
            </>
        }
    </>
}