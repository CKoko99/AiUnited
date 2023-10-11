import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"
const center = { lat: 32.7767, lng: -97.0, }

export async function getServerSideProps() {
    return await GetCityLocations(center)

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