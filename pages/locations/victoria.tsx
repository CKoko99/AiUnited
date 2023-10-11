import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"
const center = { lat: 28.8, lng: -97, }

export async function getServerSideProps() {
    return await GetCityLocations(center)

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