import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"
const center = { lat: 32.7767, lng: -97.0, }

export async function getServerSideProps(context) {
    return await GetCityLocations(center, context.req.headers.referer)
}
export default function (props) {
    // console.log(props.data.locations)


    return <>
        <Locations
            locations={props.data}
            placeholder={"Dallas, TX"}
            center={center}
        />
    </>
}