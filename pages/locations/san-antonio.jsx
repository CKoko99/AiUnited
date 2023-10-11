import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"
const center = { lat: 29.4252, lng: -98.4946, }

export async function getServerSideProps() {
    return await GetCityLocations(center)
}

export default function (props) {
    // console.log(props.data.locations)


    return <>
        <Locations
            locations={props.data}
            placeholder={"San Antonio, TX"}
            center={center}
        />
    </>
}