import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"
const center = { lat: 27.8006, lng: -97.3946, }

export async function getServerSideProps() {

    return await GetCityLocations(center)
}

export default function (props) {
    // console.log(props.data.locations)


    return <>
        <Locations
            locations={props.data}
            placeholder={"Corpus Christi, TX"}
            center={center}
        />
    </>
}