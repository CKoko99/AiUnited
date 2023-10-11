import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"

const center = { lat: 30.25146952, lng: -97.70622226, }

export async function getServerSideProps() {
    console.log(await GetCityLocations(center))
    return await GetCityLocations(center)
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