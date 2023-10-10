import { Box, Button, Typography } from "@mui/material"
import Single from "../../components/Locations/Single"
import Link from "next/link"

export async function getServerSideProps({ params }) {
    const locationId = params.id
    const res = await fetch(`${process.env.BACKEND}/locations/aiunited/${locationId}`)
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
export default function (props) {
    console.log(props.data)
    return <>
        <Box
            textAlign={"center"}
        >
            <Typography variant="h2">{props.data.address}</Typography>
            <Typography variant="h2">{props.data.address2}</Typography>
            <Typography variant="h2">{props.data.city}, {props.data.state} {props.data.zip} </Typography>
            <Single center={props.data.position} location={props.data} />
            <Box>
                <Typography variant="h5">Store Information</Typography>
                <Box
                    sx={{ display: "flex", textAlign: "left", gap: "2rem" }}
                >

                    <Typography variant="body1">Address: </Typography>
                    <Box>

                        <Typography variant="body1">{props.data.address}</Typography>
                        <Typography variant="body1">{props.data.address2}</Typography>
                        <Typography variant="body1">{props.data.city}, {props.data.state} {props.data.zip} </Typography>
                        <Button href={`https://www.google.com/maps/dir/?api=1&destination=${props.data.address} ${props.data.address2} ${props.data.city}, ${props.data.state} ${props.data.zip}`} target="_blank" rel="noopener noreferrer">Get Directions</Button>
                    </Box>

                </Box>
            </Box>
        </Box>
    </>
}