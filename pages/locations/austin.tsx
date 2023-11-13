import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"

const center = { lat: 30.25146952, lng: -97.70622226, }

export async function getServerSideProps(context) {
    return await GetCityLocations(center, context.req.headers.referer)
}

export default function (props) {
    return <>
        <Locations
            locations={props.data}
            placeholder={"Austin, TX"}
            center={center}
        />
    </>
}