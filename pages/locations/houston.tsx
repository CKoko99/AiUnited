import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"

const center = { lat: 29.7433, lng: -95.3085, }
export async function getServerSideProps(context) {
    return await GetCityLocations(center, context.req.headers.referer)
}

export default function (props) {
    // console.log(props.data.locations)
    return <>
        <Locations
            locations={props.data}
            placeholder={"Houston, TX"}
            center={center}
        />
    </>
}