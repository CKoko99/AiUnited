import { Box, Button, Typography } from "@mui/material";
import PATHCONSTANTS from "constants/sitemap";
import { useEffect, useState } from "react";


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
            return filteredResults;
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

    return <Box
        sx={{
            width: 325,
            minHeight: 200,
            border: 1, borderColor: 'primary.main', borderRadius: 1, padding: 1,
            display: "flex", flexDirection: "column", justifyContent: "space-between"
        }}
    >
        <Typography
            variant="h6"
            fontWeight={700}
        >Carrier: {props.productName}</Typography>
        {paymentOptions.map((option, i) => {
            return <Box key={i}>
                <Typography>Amount Due Today: {option.downPaymentAmount}</Typography>
                <Typography>Number of Payment: {option.numberOfPayments}</Typography>
            </Box>
        })}
        <Typography>Total Premium: {props.totalPremium}</Typography>
        {props.buyNowURL ? <Button
            variant="contained"
            color="primary"
            href={props.buyNowURL}
            target="_blank"
        >Buy Now</Button> :
            <Button variant="contained" color="secondary"
                href={PATHCONSTANTS.PHONE}
            >Call To Get This Price</Button>
        }
    </Box>
}
export default function (props) {

    const [results, setResults] = useState([]);
    const [fetchedOnce, setFetchedOnce] = useState(false);

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
            let resultsData = await getResults(props.id);
            setResults(resultsData);
            setFetchedOnce(true);

            //        console.log(resultsData.carrierResults)
            //filter results where carrierTransactionId is not ''
        };
        fetchResults();
    }, [props.id])

    return <>
        <Box
            sx={{
                display: 'flex', flexWrap: 'wrap', gap: "1rem",
                justifyContent: "center"
            }}
        >
            {results.map((result, i) => {
                return <ContentItem key={i} {...result} />
            })}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            {fetchedOnce && <Button onClick={() => {
                fetchResultsHandler(props.id)
            }}>refetch
            </Button>}

        </Box>
    </>
}