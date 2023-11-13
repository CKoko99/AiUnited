import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"
const center = { lat: 28.8, lng: -97, }

export async function getServerSideProps(context) {
    return await GetCityLocations(center, context.req.headers.referer)
}

export default function (props) {
    // console.log(props.data.locations)
    return <>
        <Locations
            locations={props.data}
            placeholder={"Victoria, TX"}
            center={center}
        />
    </>
}