import { Box, Button, Typography } from "@mui/material"
import Single from "../../components/Locations/Single"
import Link from "next/link"
import { CustomFonts } from "../../providers/theme"
import { useRouter } from "next/router"
import { Lang } from "../../components/locale/LocaleSwitcher"

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
        es: "Información de la tienda",
    },
    directions: {
        en: "Get Directions",
        es: "Obtener direcciones",
    },
    body: {
        en: "We provide our customers with the best auto insurance quotes, from reputable insurers, that offer some of the most affordable rates in your area. Submit a quote request form for a free, no obligation review of your current policies or give us a call so that we can help you determine the types of coverage available that are best for you and your family.",
        es: "Brindamos a nuestros clientes las mejores cotizaciones de seguro de automóvil, de aseguradoras de renombre, que ofrecen algunas de las tarifas más económicas en su área. Envíe un formulario de solicitud de cotización para una revisión gratuita y sin compromiso de sus pólizas actuales o llámenos para que podamos ayudarlo a determinar los tipos de cobertura disponibles que son los mejores para usted y su familia.",
    }
}
export default function (props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    // console.log(props.data)
    return <>
        <Box
            textAlign={"center"}
            sx={{ padding: "2rem 0" }}
        >
            <Typography fontFamily={CustomFonts.Gustavo} fontWeight={"bold"} variant="h4">{props.data.address}</Typography>
            <Typography fontFamily={CustomFonts.Gustavo} fontWeight={"bold"} variant="h4">{props.data.address2}</Typography>
            <Typography fontFamily={CustomFonts.Gustavo} fontWeight={"bold"} variant="h4">{props.data.city}, {props.data.state} {props.data.zip} </Typography>
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
                <Typography variant="h6">Hours of Operations: {props.data.hours}</Typography>
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