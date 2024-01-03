import { Box, Button, Typography } from "@mui/material"
import { CustomFonts } from "../../providers/theme"
import { useRouter } from "next/router"
import { Lang } from "../../components/locale/LocaleSwitcher"
import dynamic from 'next/dynamic';
import HeadComponent from "@/components/Head";

const Single = dynamic(() => import('../../components/Locations/Single'), {
    loading: () => <p>Loading...</p>, // Optional loading component
    //ssr: false, // Disable server-side rendering
});

export async function getServerSideProps({ params, req }) {

    const locationId = params.id
    const res = await fetch(`${process.env.BACKEND}/locations/aiunited/${locationId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "origin": req.headers.referer
        },

    })
    const data = await res.json()
    //for every location give it a position attribute with lat and long combined

    data.position = {
        lat: parseFloat(data.lat),
        lng: parseFloat(data.lng)
    }


    return {
        props: {
            data: data, // This passes the fetched data as a prop to your component
        },
    }
}
const LocationText = {
    info: {
        en: "Store Information",
        es: "Información de la Tienda",
    },
    directions: {
        en: "Get Directions",
        es: "Obtener Direcciones",
    },
    body: {
        en: "We provide our customers with the best auto insurance quotes from reputable insurers that offer some of the most affordable rates in your area. Submit a quote request form for a free, no-obligation review of your current policies, or give us a call so that we can help you determine the types of coverage available that are best for you and your family.",
        es: `Brindamos a nuestros clientes las mejores cotizaciones de seguro de automóvil de aseguradoras acreditadas que ofrecen algunas de las tarifas más económicas en su área. Envíe un formulario de solicitud de cotización para una revisión gratuita y sin compromiso de sus pólizas actuales, o llámenos 
        para que podamos asistirlo en identificar las opciones de cobertura más adecuadas para usted y su familia. 
        `
    },
    hoursOfOperation: {
        en: "Hours of Operation",
        es: "Horario de Atención",
    },
    MonFri: {
        en: "Monday - Friday",
        es: "Lunes - Viernes",
    },
    Sat: {
        en: "Saturday",
        es: "Sábado",
    },
    Sun: {
        en: "Sunday",
        es: "Domingo",
    },
    TuesThurs: {
        en: "Tuesday - Thursday",
        es: "Martes - Jueves",
    },
}
export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    // props.data.hours  = "Mon-Fri: 9:00am - 7:00pm | Saturday: 10:00am - 5:00pm | Sunday: Closed"
    // props.data.hours = Mon & Fri: 9:00am - 7:00pm | Tue, Wed & Thur: 9am to 6pm  | Saturday: 10:00am - 3:00pm | Sunday: Closed
    let monFriTime
    let tuesThursTime
    let satTime
    let sunTime
    if (props.data.hours.includes("Mon-Fri")) {
        monFriTime = props.data.hours.split("|")[0]
        monFriTime = monFriTime.substring(monFriTime.indexOf(":") + 1)
        satTime = props.data.hours.split("|")[1]
        satTime = satTime.substring(satTime.indexOf(":") + 1)
        sunTime = props.data.hours.split("|")[2]
        sunTime = sunTime.substring(sunTime.indexOf(":") + 1)
    } else {
        monFriTime = props.data.hours.split("|")[0]
        monFriTime = monFriTime.substring(monFriTime.indexOf(":") + 1)
        tuesThursTime = props.data.hours.split("|")[1]
        tuesThursTime = tuesThursTime.substring(tuesThursTime.indexOf(":") + 1)
        satTime = props.data.hours.split("|")[2]
        satTime = satTime.substring(satTime.indexOf(":") + 1)
        sunTime = props.data.hours.split("|")[3]
        sunTime = sunTime.substring(sunTime.indexOf(":") + 1)
    }

    // console.log(props.data)
    return <>
        <HeadComponent title={`Ai United Insurance ${props.data.address}`}
            metaData="Ai United Insurance Location."
        />
        <Box
            textAlign={"center"}
            sx={{ padding: "2rem 0" }}
        >
            <Typography fontFamily={CustomFonts.Gustavo} fontWeight={"bold"} component={"h1"} variant="h4">{props.data.address}</Typography>
            <Typography fontFamily={CustomFonts.Gustavo} fontWeight={"bold"} component={"h1"} variant="h4">{props.data.address2}</Typography>
            <Typography fontFamily={CustomFonts.Gustavo} fontWeight={"bold"} component={"h1"} variant="h4">{props.data.city}, {props.data.state} {props.data.zip} </Typography>
            <Single center={props.data.position} location={props.data} />
            <Box
                sx={{
                    maxWidth: "970px", margin: "auto", padding: "0rem 2rem 1rem",
                    display: "flex", flexDirection: "column", alignItems: "center",
                    gap: "1rem"
                }}
            >
                <Box>
                </Box>
                <Typography variant="h5" fontFamily={CustomFonts.Gustavo} fontWeight={"bold"} >{LocationText.info[currentLang]}</Typography>
                {props.data.hours.includes("Mon-Fri") ? <Typography variant="h6">{LocationText.hoursOfOperation[currentLang]}: {LocationText.MonFri[currentLang]}: {monFriTime} | {LocationText.Sat[currentLang]}: {satTime} | {LocationText.Sun[currentLang]}: {sunTime}</Typography>
                    : <Typography variant="h6">{LocationText.hoursOfOperation[currentLang]}: {LocationText.MonFri[currentLang]}: {monFriTime} | {LocationText.TuesThurs[currentLang]}: {tuesThursTime} | {LocationText.Sat[currentLang]}: {satTime} | {LocationText.Sun[currentLang]}: {sunTime}</Typography>}
                <Box
                    sx={{ display: "flex", gap: "1rem" }}
                >
                    <Button variant="contained" color="primary" href={`tel:${props.data.phone}`}>{props.data.phone}</Button>
                    <Button variant="contained" color="secondary" href={`https://www.google.com/maps/dir/?api=1&destination=${props.data.address} ${props.data.address2} ${props.data.city}, ${props.data.state} ${props.data.zip}`} target="_blank" rel="noopener noreferrer">{LocationText.directions[currentLang]}</Button>
                </Box>
                <Typography variant="body1">{LocationText.body[currentLang]}</Typography>
            </Box>
        </Box >
    </>
}