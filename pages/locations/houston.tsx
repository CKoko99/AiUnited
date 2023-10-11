import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"

const center = { lat: 29.7433, lng: -95.3085, }
export async function getServerSideProps() {
    return await GetCityLocations(center)
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