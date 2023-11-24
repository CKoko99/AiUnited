import { Box, Typography } from '@mui/material';
import { useLoadScript, GoogleMap, MarkerF, InfoWindowF as InfoWindow } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import markerimg from '../../public/assets/images/locations/Ai-United-Google-Drop-Pin.png'
import AILogo from '../../public/assets/images/ai-logo-blue.jpeg'
import Image from 'next/image';


interface Marker {
    position: {
        lat: number;
        lng: number;
    }
    address?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    distance?: string;
    phone?: string;
}

export default function (props) {

    const [selectedMarker, setSelectedMarker] = useState<Marker | null>(null);

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
                    stylers: [{ visibility: "off" }]

                }
            ]
        }),
        []
    );

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCrUnVz0ALmMnoOxirpPMX0EkQuNegEvk0",
        libraries: ['places'], // Add the "places" library here

    });

    return <>
        <Box
            sx={{ maxWidth: "970px", margin: "auto", padding: "1rem 0" }}
        >
            <Box
                sx={{ margin: "1rem 2rem" }}
            >
                {(isLoaded && !loadError) &&
                    <>
                        <GoogleMap
                            options={mapOptions}
                            zoom={13}

                            center={props.center}
                            mapTypeId={google.maps.MapTypeId.ROADMAP}
                            mapContainerStyle={{ width: '100%', height: '500px' }}
                        //onLoad={() => console.log('Map Component Loaded...')}
                        >
                            <MarkerF
                                position={...props.location.position}
                                icon={markerimg.src}
                                onClick={() => setSelectedMarker(props.location)} // Handle click event to show InfoWindow
                            />
                            {(selectedMarker && !loadError) && (
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
                                            <Typography variant='body2'>{selectedMarker.distance}</Typography>
                                            <Typography variant='body2'>{selectedMarker.phone}</Typography>
                                        </Box>
                                    </InfoWindow>
                                </Box>
                            )}
                        </GoogleMap>
                    </>
                }
            </Box>
        </Box >
    </>
}