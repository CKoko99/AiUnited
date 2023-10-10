import { Box, Button, TextField, Typography } from '@mui/material';
import { useLoadScript, GoogleMap, MarkerF, InfoWindowF as InfoWindow, Libraries } from '@react-google-maps/api';
import { StandaloneSearchBox } from '@react-google-maps/api';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import markerimg from '../../public/assets/images/locations/Ai-United-Google-Drop-Pin.png'
import AILogo from '../../public/assets/images/ai-logo-blue.jpeg'
import Image from 'next/image';
import Link from 'next/link';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PlaceIcon from '@mui/icons-material/Place';
import { Place } from '@mui/icons-material';
import { time } from 'console';
import { CustomFonts } from '../../providers/theme';

const styles = {
    textfield: {
        margin: "1rem 0"
    }
}
const libraries: Libraries = ["places"]; // Specify the "places" library in the Libraries type

export default function (props) {
    const [mapCenter, setMapCenter] = useState(props.center);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [locations, setLocations] = useState(props.locations)
    const [maxLocations, setMaxLocations] = useState(5)
    useEffect(() => {
        //use pythagorean theorem to find distance between center and each location
        //then sort by distance
        let newLocations = [...locations]
        newLocations.forEach(location => {
            let distance = Math.sqrt(Math.pow(location.position.lat - mapCenter.lat, 2) + Math.pow(location.position.lng - mapCenter.lng, 2))
            //convert distance to miles
            distance = distance * 69
            //to 2 decimal places
            distance = Math.round(distance * 100) / 100
            location.distance = distance
        })
        newLocations.sort((a, b) => {
            return a.distance - b.distance
        })
        setLocations(newLocations)
    }, [mapCenter])
    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            // scrollwheel: false,
        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCrUnVz0ALmMnoOxirpPMX0EkQuNegEvk0",

        libraries  // Add the "places" library here

    });
    const searchBox = useRef(null);

    function handlePlacesChanged() {

        const places = searchBox.current.getPlaces();
        if (!places) return;

        // Update the map's center based on the selected location
        const selectedLocation = places[0].geometry.location;
        const newCenter = {
            lat: selectedLocation.lat(),
            lng: selectedLocation.lng(),
        };
        setMapCenter(newCenter);
        //  map.panTo(newCenter);
    }

    return <>
        <Box
            sx={{ maxWidth: "970px", margin: "auto", padding: "1rem 0" }}
        >
            <Typography fontFamily={CustomFonts.Gustavo} variant="h2" component="h2" sx={{ textAlign: "center", margin: "1rem 0" }}> Find A Store </Typography>
            <Typography variant='h6' sx={{ textAlign: "center", margin: "1rem auto", width: "80%" }}>
                Visit one of over 80 stores located across Texas to speak with our representatives and get insured today!  </Typography>
            <Box
                sx={{ margin: "1rem 2rem" }}
            >

                {isLoaded &&
                    <>
                        <StandaloneSearchBox
                            onLoad={(ref) => (searchBox.current = ref)}
                            onPlacesChanged={handlePlacesChanged}
                        >
                            <>
                                <TextField
                                    placeholder={props.placeholder}
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
                            zoom={props.zoom || 10}

                            center={mapCenter}
                            mapTypeId={google.maps.MapTypeId.ROADMAP}
                            mapContainerStyle={{ width: '100%', height: '500px' }}
                        //onLoad={() => console.log('Map Component Loaded...')}
                        >
                            {locations.map((marker, index) => {
                                return <MarkerF
                                    key={index}
                                    position={...marker.position}
                                    icon={markerimg.src}
                                    onClick={() => setSelectedMarker(marker)} // Handle click event to show InfoWindow
                                />
                            }
                            )}

                            {selectedMarker && (
                                <Box
                                    sx={{ bottom: "3rem" }}
                                >
                                    <InfoWindow

                                        position={...selectedMarker.position}
                                        onCloseClick={() => setSelectedMarker(null)} // Handle close event to hide InfoWindow
                                    >
                                        <Box>
                                            <Box
                                                sx={{ position: "relative", height: "4rem" }}>
                                                <Image fill style={{ objectFit: "contain" }} src={AILogo} alt="Ai United Insurance" />
                                            </Box>
                                            <Typography fontWeight={"bold"} variant='subtitle1'>Ai United Insurance</Typography>
                                            <Typography variant='body2'>{selectedMarker.address}</Typography>
                                            <Typography variant='body2'>{selectedMarker.address2}</Typography>
                                            <Typography variant='body2'>{selectedMarker.city} {selectedMarker.state} {selectedMarker.zip}</Typography>
                                            <Typography variant='body2'>{selectedMarker.distance}</Typography>
                                            <Typography variant='body2'>{selectedMarker.phone}</Typography>
                                        </Box>
                                    </InfoWindow>
                                </Box>

                            )}
                        </GoogleMap>
                    </>
                }
                <Typography variant='h4' sx={{ textAlign: "center", margin: "1.5rem auto 0", width: "80%" }}>
                    Locations Near You
                </Typography>
                <Box
                    sx={{
                        display: "flex", justifyContent: "space-around",
                        margin: "2rem 0",
                        flexWrap: "wrap", gap: "1rem"
                    }}
                >
                    {locations.map((location, index: number) => {
                        if (index > maxLocations) return <React.Fragment key={index}></React.Fragment>
                        return <Box key={index}
                            onMouseEnter={() => setSelectedMarker(location)}
                            onMouseLeave={() => setSelectedMarker(null)}
                            onClick={() => {

                                window.scrollTo({
                                    top: 200,
                                    behavior: "smooth"
                                })
                                setTimeout(() => {
                                    setSelectedMarker(location)
                                }, 800)
                            }}
                            sx={{
                                minWidth: "290px", flex: "1", maxWidth: { xs: "350px", lg: "290px" },
                                backgroundColor: "#d5d5d5", padding: "1rem",
                                display: "flex", flexDirection: "column", justifyContent: "space-between",
                                border: "1px solid #d5d5d5", ":hover": { border: "1px solid black" },
                            }}>
                            <Typography fontWeight={"bold"} variant='subtitle1'>Ai United Insurance</Typography>
                            <Typography variant='body2'>{location.address}</Typography>
                            <Typography variant='body2'>{location.address2}</Typography>
                            <Typography variant='body2'>{location.city}, {location.state} {location.zip}</Typography>
                            <Typography
                                sx={{
                                    backgroundColor: "secondary.main", padding: ".1rem .25rem", margin: ".15rem 0",
                                    fontWeight: 500, maxWidth: "fit-content"
                                }}
                                variant='body2'>{location.distance} miles</Typography>
                            <Link
                                onClick={(e) => e.stopPropagation()}
                                style={{ display: "flex", alignItems: "center" }} href={`tel:${location.phone}`}>
                                <PhonelinkRingIcon sx={{ color: "black", fontSize: "1rem", marginRight: ".25rem" }} />
                                <Typography fontWeight={600} variant='body2'>{location.phone}</Typography>
                            </Link>


                            <Button
                                variant='contained'
                                color='primary'
                                sx={{ marginTop: "1rem" }}
                                onClick={(e) => e.stopPropagation()}
                                href={`/locations/${location.id}`}
                            >More Information</Button>
                        </Box>

                    })}
                </Box>
                <Box
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    {locations.length > maxLocations && <Button variant="contained"
                        color="secondary"
                        onClick={() => setMaxLocations(maxLocations + 6)}>Load More</Button>
                    }</Box>
            </Box>
        </Box >
    </>
}