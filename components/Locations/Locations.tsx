import { Box, Button, TextField, Typography } from '@mui/material';
import { useLoadScript, GoogleMap, MarkerF, InfoWindowF as InfoWindow } from '@react-google-maps/api';
import { StandaloneSearchBox } from '@react-google-maps/api';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import markerimg from '../../public/assets/images/locations/Ai-United-Google-Drop-Pin.png'
import AILogo from '../../public/assets/images/ai-logo-blue.jpeg'
import Image from 'next/image';
import Link from 'next/link';
const stores = [
    {
        zip: 77011,
        position: {
            lat: 29.7433,
            lng: -95.3085,
        },
        position2: {
            lat: 29.7833,
            lng: -95.3085,
        },
        name: "Ai United Insurance",
        address1: "9415 N Interstate Hwy 35",
        address3: "Austin, Tx 78753",
        phone: "(512) 834-1234",
    },
    {
        zip: 77012,
        position: {
            lat: 29.719,
            lng: -95.2743,
        },
        name: "Houston",
        address1: "9415 N Interstate Hwy 35",
        address3: "Austin, Tx 78753",
        phone: "(512) 834-1234",
    }
]
const styles = {
    textfield: {
        margin: "1rem 0"
    }
}
export default function (props) {
    const [mapCenter, setMapCenter] = useState(props.center);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [locations, setLocations] = useState(props.locations)
    const [maxLocations, setMaxLocations] = useState(12)
    useEffect(() => {
        //use pythagorean theorem to find distance between center and each location
        //then sort by distance
        let newLocations = [...locations]
        newLocations.forEach(location => {
            location.distance = Math.sqrt(Math.pow(location.position.lat - mapCenter.lat, 2) + Math.pow(location.position.lng - mapCenter.lng, 2))
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
        libraries: ['places'], // Add the "places" library here

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
        console.log(newCenter);
        setMapCenter(newCenter);
        //  map.panTo(newCenter);
    }

    return <>
        <Box
            sx={{ maxWidth: "970px", margin: "auto", padding: "1rem 0" }}
        >
            <Typography variant="h2" component="h2" sx={{ textAlign: "center", margin: "1rem 0" }}> Find A Store </Typography>
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
                            zoom={10}

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
                                        position={selectedMarker.position}
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
                                            <Typography variant='body2'>{selectedMarker.phone}</Typography>
                                        </Box>
                                    </InfoWindow>
                                </Box>

                            )}
                        </GoogleMap>
                    </>
                }
                <Box
                    sx={{
                        display: "flex", justifyContent: "space-around",
                        margin: "2rem 0",
                        flexWrap: "wrap", gap: "1rem"
                    }}
                >
                    {locations.map((location: object, index: number) => {
                        if (index > maxLocations) return
                        return <Box
                            onMouseEnter={() => setSelectedMarker(location)}
                            onMouseLeave={() => setSelectedMarker(null)}
                            sx={{
                                minWidth: "290px", flex: "1", maxWidth: "350px",
                                backgroundColor: "#d5d5d5", padding: "1rem"
                            }}>
                            <Typography fontWeight={"bold"} variant='subtitle1'>Ai United Insurance</Typography>
                            <Typography variant='body2'>{location.address}</Typography>
                            <Typography variant='body2'>{location.address2}</Typography>
                            <Typography variant='body2'>{location.city}, {location.state} {location.zip}</Typography>
                            <Link href={`tel:${location.phone}`}>
                                <Typography variant='body2'>{location.phone}</Typography>
                            </Link>
                        </Box>
                    })}
                </Box>
                <Box
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    {locations.length > maxLocations && <Button variant="contained" onClick={() => setMaxLocations(maxLocations + 12)}>Load More</Button>
                    }</Box>
            </Box>
        </Box >
    </>
}