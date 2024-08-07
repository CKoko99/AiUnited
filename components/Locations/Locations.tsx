import { Box, Button, TextField, Typography } from "@mui/material";
import {
    useLoadScript,
    GoogleMap,
    MarkerF,
    InfoWindowF as InfoWindow,
    Libraries,
} from "@react-google-maps/api";
import { StandaloneSearchBox } from "@react-google-maps/api";
import React, { useEffect, useMemo, useRef, useState } from "react";
import markerimg from "../../public/assets/images/locations/Ai-United-Google-Drop-Pin.png";
import AILogo from "../../public/assets/images/ai-logo-blue.jpeg";
import Image from "next/image";
import Link from "next/link";
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import { CustomFonts } from "../../providers/theme";
import { useRouter } from "next/router";
import { Lang, returnLocaleText } from "../locale/LocaleSwitcher";
import { Location as LocationInterface } from "@/api/GetCityLocations";
const styles = {
    textfield: {
        margin: "1rem 0",
    },
};
const libraries: Libraries = ["places"]; // Specify the "places" library in the Libraries type
interface Marker {
    position: {
        lat: number;
        lng: number;
    };
    address?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    distance?: number;
    phone?: string;
    id?: number;
    link: string;
}
const LocationText = {
    title: {
        en: "Find A Store",
        es: "Encuentra una Tienda",
    },
    subtitle: {
        en: "Visit one of over 80 stores located across Texas to speak with our representatives and get insured today!",
        es: "Visite una de las más de 80 tiendas ubicadas en Texas para hablar con nuestros representantes y obtener un seguro hoy mismo",
    },
    near: {
        en: "Locations Near You",
        es: "Ubicaciones Cerca de Ti",
    },
    miles: {
        en: "miles",
        es: "millas",
    },
    storeInfo: {
        en: "More Store Info",
        es: "Más información de la tienda",
    },
    placeholder: {
        en: "Search by Zip Code, City or State",
        es: "Buscar por código postal, ciudad o estado",
    },
};
function returnSubtitleText(city: string | undefined) {
    if (!city) return LocationText.subtitle;

    return {
        en: `Visit one of our ${city} stores to speak with our representatives and get insured today!`,
        es: `Visite una de nuestras tiendas en ${city} para hablar con nuestros representantes y obtener un seguro hoy mismo`,
    };
}
export default function (props: {
    center: { lat: number; lng: number };
    locations: LocationInterface[];
    fullList?: boolean;
    zoom?: number;
    city?: string;
    placeholder?: string;
}) {
    const [mapCenter, setMapCenter] = useState(props.center);
    const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);
    const [locations, setLocations] = useState(props.locations);
    const [maxLocations, setMaxLocations] = useState(
        props.fullList ? props.locations.length : 5,
    );
    const [zoom, setZoom] = useState(props.zoom || 10);
    const googleMapRef = useRef(null);

    useEffect(() => {
        //use pythagorean theorem to find distance between center and each location
        //then sort by distance
        console.log("map center change");
        let newLocations = [...locations];
        newLocations.forEach((location) => {
            let distance = Math.sqrt(
                Math.pow(location.position.lat - mapCenter.lat, 2) +
                    Math.pow(location.position.lng - mapCenter.lng, 2),
            );
            //convert distance to miles
            distance = distance * 69;
            //to 2 decimal places
            distance = Math.round(distance * 100) / 100;
            location.distance = distance;
        });
        newLocations.sort((a, b) => {
            return (a.distance|| 0) - (b.distance||0);
        });
        setLocations(newLocations);
        if (zoom === 11) {
            setTimeout(() => {
                setSelectedMarker(newLocations[0]);
            }, 500);
        }
    }, [mapCenter]);
    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            // scrollwheel: false,
            styles: [
                //remove icons and labels
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                },
            ],
        }),
        [],
    );

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCrUnVz0ALmMnoOxirpPMX0EkQuNegEvk0",

        libraries, // Add the "places" library here
    });
    const searchBox = useRef<google.maps.places.SearchBox | null>(null);

    function handlePlacesChanged() {
        if (!searchBox.current) return;

        const places = searchBox.current.getPlaces();
        if (!places || places.length === 0) return;

        // Update the map's center based on the selected location
        const selectedLocation = places[0].geometry?.location;
        if (!selectedLocation) return;

        const newCenter = {
            lat: selectedLocation.lat(),
            lng: selectedLocation.lng(),
        };

        setMapCenter(newCenter);
        setZoom(11);
    }

    return (
        <>
            <Box sx={{ maxWidth: "970px", margin: "auto", padding: "1rem 0" }}>
                <Typography
                    fontFamily={CustomFonts.Gustavo}
                    variant="h2"
                    component="h1"
                    sx={{ textAlign: "center", margin: "1rem 0" }}
                >
                    {returnLocaleText(LocationText.title)}{" "}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        textAlign: "center",
                        margin: "1rem auto",
                        width: "80%",
                    }}
                >
                    {returnLocaleText(returnSubtitleText(props.city))}
                </Typography>
                <Box sx={{ margin: "1rem 2rem" }}>
                    {isLoaded && !loadError && (
                        <>
                            <StandaloneSearchBox
                                onLoad={(ref) => (searchBox.current = ref)}
                                onPlacesChanged={handlePlacesChanged}
                            >
                                <>
                                    <TextField
                                        placeholder={returnLocaleText(
                                            LocationText.placeholder,
                                        )}
                                        sx={{ ...styles.textfield }}
                                        fullWidth
                                        id="outlined-basic"
                                        //label="Outlined"
                                        variant="outlined"
                                    />
                                </>
                            </StandaloneSearchBox>
                            <GoogleMap
                                options={mapOptions}
                                zoom={zoom}
                                onLoad={(map) => {
                                    console.log("Map Type:", map.data);
                                }}
                                ref={googleMapRef}
                                center={mapCenter}
                                mapTypeId={google.maps.MapTypeId.ROADMAP}
                                mapContainerStyle={{
                                    width: "100%",
                                    height: "500px",
                                }}

                                //onLoad={() => console.log('Map Component Loaded...')}
                            >
                                {locations.map((marker, index) => {
                                    return (
                                        <MarkerF
                                            key={index}
                                            position={{ ...marker.position }}
                                            icon={markerimg.src}
                                            onClick={() =>
                                                setSelectedMarker(marker)
                                            } // Handle click event to show InfoWindow
                                        />
                                    );
                                })}
                                {selectedMarker && !loadError && (
                                    <Box>
                                        <InfoWindow
                                            options={{
                                                pixelOffset:
                                                    new google.maps.Size(
                                                        0,
                                                        -35,
                                                    ),
                                            }}
                                            position={
                                                (selectedMarker as any)
                                                    ?.position
                                            }
                                            onCloseClick={() =>
                                                setSelectedMarker(null)
                                            } // Handle close event to hide InfoWindow
                                        >
                                            <Box>
                                                <Box
                                                    sx={{
                                                        position: "relative",
                                                        height: "4rem",
                                                    }}
                                                >
                                                    <Image
                                                        fill
                                                        style={{
                                                            objectFit:
                                                                "contain",
                                                        }}
                                                        src={AILogo}
                                                        alt="Ai United Insurance"
                                                    />
                                                </Box>
                                                <Typography
                                                    fontWeight={"bold"}
                                                    variant="subtitle1"
                                                >
                                                    Ai United Insurance
                                                </Typography>
                                                <Typography variant="body2">
                                                    {selectedMarker.address}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {selectedMarker.address2}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {selectedMarker.city}{" "}
                                                    {selectedMarker.state}{" "}
                                                    {selectedMarker.zip}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {selectedMarker.distance}{" "}
                                                    {returnLocaleText(
                                                        LocationText.miles,
                                                    )}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {selectedMarker.phone}
                                                </Typography>
                                                <Link
                                                    href={`/locations/${selectedMarker.link}`}
                                                >
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{
                                                            marginTop: "1rem",
                                                        }}
                                                        onClick={(e) =>
                                                            e.stopPropagation()
                                                        }
                                                    >
                                                        {returnLocaleText(
                                                            LocationText.storeInfo,
                                                        )}
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </InfoWindow>
                                    </Box>
                                )}
                            </GoogleMap>
                        </>
                    )}
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            margin: "1.5rem auto 0",
                            width: "80%",
                        }}
                    >
                        {returnLocaleText(LocationText.near)}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            margin: "2rem 0",
                            flexWrap: "wrap",
                            gap: "1rem",
                        }}
                    >
                        {locations.map((location, index: number) => {
                            if (index > maxLocations)
                                return (
                                    <React.Fragment
                                        key={index}
                                    ></React.Fragment>
                                );
                            return (
                                <Box
                                    key={index}
                                    onMouseEnter={() => {
                                        if (!loadError) {
                                            setSelectedMarker(location);
                                        }
                                    }}
                                    onMouseLeave={() => setSelectedMarker(null)}
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 200,
                                            behavior: "smooth",
                                        });
                                        setTimeout(() => {
                                            setSelectedMarker(location);
                                            setZoom(13);
                                        }, 800);
                                    }}
                                    sx={{
                                        minWidth: "290px",
                                        flex: "1",
                                        maxWidth: { xs: "350px", lg: "290px" },
                                        backgroundColor: "#d5d5d5",
                                        padding: "1rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        border: "1px solid #d5d5d5",
                                        ":hover": { border: "1px solid black" },
                                    }}
                                >
                                    <Typography
                                        fontWeight={"bold"}
                                        variant="subtitle1"
                                    >
                                        Ai United Insurance
                                    </Typography>
                                    <Typography variant="body2">
                                        {location.address}
                                    </Typography>
                                    <Typography variant="body2">
                                        {location.address2}
                                    </Typography>
                                    <Typography variant="body2">
                                        {location.city}, {location.state}{" "}
                                        {location.zip}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            backgroundColor: "secondary.main",
                                            padding: ".1rem .25rem",
                                            margin: ".15rem 0",
                                            fontWeight: 500,
                                            maxWidth: "fit-content",
                                        }}
                                        variant="body2"
                                    >
                                        {location.distance}{" "}
                                        {returnLocaleText(LocationText.miles)}
                                    </Typography>
                                    <Link
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                        href={`tel:${location.phone}`}
                                    >
                                        <PhonelinkRingIcon
                                            sx={{
                                                color: "black",
                                                fontSize: "1rem",
                                                marginRight: ".25rem",
                                            }}
                                        />
                                        <Typography
                                            fontWeight={600}
                                            variant="body2"
                                        >
                                            {location.phone}
                                        </Typography>
                                    </Link>
                                    <Link href={`/locations/${location.link}`}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ marginTop: "1rem" }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {returnLocaleText(
                                                LocationText.storeInfo,
                                            )}
                                        </Button>
                                    </Link>
                                </Box>
                            );
                        })}
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {locations.length > maxLocations && (
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() =>
                                    setMaxLocations(maxLocations + 6)
                                }
                            >
                                Load More
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    );
}
