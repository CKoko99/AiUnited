import { Box, Button, Typography } from "@mui/material";
import { CustomFonts } from "../../providers/theme";
import { useRouter } from "next/router";
import { Lang, returnLocaleText } from "../../components/locale/LocaleSwitcher";
import dynamic from "next/dynamic";
import HeadComponent from "@/components/Head";
import PATHCONSTANTS from "constants/sitemap";
import { useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import { Location } from "@/api/GetCityLocations";

const Single = dynamic(() => import("../../components/Locations/Single"), {
    loading: () => <p>Loading...</p>, // Optional loading component
    //ssr: false, // Disable server-side rendering
});

export async function getServerSideProps({
    params,
    req,
}: GetServerSidePropsContext) {
    try {
        const locationId = String(params.id);
        const res = await fetch(
            `${process.env.BACKEND}/locations/aiunited/${locationId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    origin: req.headers.referer,
                },
            },
        );
        const data = await res.json();
        //for every location give it a position attribute with lat and long combined

        data.position = {
            lat: parseFloat(data.lat),
            lng: parseFloat(data.lng),
        };

        return {
            props: {
                data: data, // This passes the fetched data as a prop to your component
            },
        };
    } catch (err) {
        console.log("err");
        console.log(err);
        return {
            props: {
                data: {}, // This passes the fetched data as a prop to your component
            },
        };
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
        `,
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
};
export default function (props: { data: Location }) {
    const router = useRouter();
    const { locale } = router;
    const currentLang = Lang[locale ?? "en"];
    useEffect(() => {
        console.log(props.data.link);
        if (!props.data.link) {
            router.push(PATHCONSTANTS.LOCATIONS.INDEX);
        }
    }, []);
    if (!props.data.link) {
        return <></>;
    }
    // props.data.hours  = "Mon-Fri: 9:00am - 7:00pm | Saturday: 10:00am - 5:00pm | Sunday: Closed"
    // props.data.hours = Mon & Fri: 9:00am - 7:00pm | Tue, Wed & Thur: 9am to 6pm  | Saturday: 10:00am - 3:00pm | Sunday: Closed
    let monFriTime;
    let tuesThursTime;
    let satTime;
    let sunTime;
    let failed = false;
    try {
        if (props.data.hours?.includes("Mon-Fri")) {
            monFriTime = props.data.hours.split("|")[0];
            monFriTime = monFriTime.substring(monFriTime.indexOf(":") + 1);
            satTime = props.data.hours.split("|")[1];
            satTime = satTime.substring(satTime.indexOf(":") + 1);
            sunTime = props.data.hours.split("|")[2];
            sunTime = sunTime.substring(sunTime.indexOf(":") + 1);
        } else {
            monFriTime = props.data.hours.split("|")[0];
            monFriTime = monFriTime.substring(monFriTime.indexOf(":") + 1);
            tuesThursTime = props.data.hours.split("|")[1];
            tuesThursTime = tuesThursTime.substring(
                tuesThursTime.indexOf(":") + 1,
            );
            satTime = props.data.hours.split("|")[2];
            satTime = satTime.substring(satTime.indexOf(":") + 1);
            sunTime = props.data.hours.split("|")[3];
            sunTime = sunTime.substring(sunTime.indexOf(":") + 1);
        }
    } catch (e) {
        console.log(e);
        console.log(props.data.link);
        failed = true;
    }

    // console.log(props.data)
    return (
        <>
            <HeadComponent
                title={`Ai United Insurance ${props.data.address}`}
                metaData={`Visit AI United Insurance at ${props.data.address} ${props.data.city}, ${props.data.state} for reliable insurance solutions. Protect your assets with peace of mind.`}
            />
            <Box textAlign={"center"} sx={{ padding: "2rem 0" }}>
                <Typography
                    fontFamily={CustomFonts.Gustavo}
                    fontWeight={"bold"}
                    component={"h1"}
                    variant="h4"
                >
                    {props.data.address}
                    <br />
                    {props.data.address2 && (
                        <>
                            {props.data.address2}
                            <br />
                        </>
                    )}
                    {props.data.city}, {props.data.state} {props.data.zip}
                </Typography>
                <Single center={props.data.position} location={props.data} />
                <Box
                    sx={{
                        maxWidth: "970px",
                        margin: "auto",
                        padding: "0rem 2rem 1rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <Box></Box>
                    <Typography
                        variant="h5"
                        fontFamily={CustomFonts.Gustavo}
                        fontWeight={"bold"}
                    >
                        {returnLocaleText(LocationText.info)}
                    </Typography>
                    {failed ? (
                        <>{props.data.hours}</>
                    ) : (
                        <>
                            {props.data.hours.includes("Mon-Fri") ? (
                                <Typography variant="h6">
                                    {returnLocaleText(
                                        LocationText.hoursOfOperation,
                                    )}
                                    : {returnLocaleText(LocationText.MonFri)}:{" "}
                                    {monFriTime} |{" "}
                                    {returnLocaleText(LocationText.Sat)}:{" "}
                                    {satTime} |{" "}
                                    {returnLocaleText(LocationText.Sun)}:{" "}
                                    {sunTime}
                                </Typography>
                            ) : (
                                <Typography variant="h6">
                                    {returnLocaleText(
                                        LocationText.hoursOfOperation,
                                    )}
                                    : {returnLocaleText(LocationText.MonFri)}:{" "}
                                    {monFriTime} |{" "}
                                    {returnLocaleText(LocationText.TuesThurs)}:{" "}
                                    {tuesThursTime} |{" "}
                                    {returnLocaleText(LocationText.Sat)}:{" "}
                                    {satTime} |{" "}
                                    {returnLocaleText(LocationText.Sun)}:{" "}
                                    {sunTime}
                                </Typography>
                            )}
                        </>
                    )}
                    <Box sx={{ display: "flex", gap: "1rem" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            href={`tel:${props.data.phone}`}
                        >
                            {props.data.phone}
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            href={`https://www.google.com/maps/dir/?api=1&destination=${props.data.address} ${props.data.address2} ${props.data.city}, ${props.data.state} ${props.data.zip}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {returnLocaleText(LocationText.directions)}
                        </Button>
                    </Box>
                    <Typography variant="body1">
                        {returnLocaleText(LocationText.body)}
                    </Typography>
                </Box>
            </Box>
        </>
    );
}
