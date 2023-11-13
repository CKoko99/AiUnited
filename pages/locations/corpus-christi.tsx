import Locations from "../../components/Locations/Locations"
import GetCityLocations from "../api/GetCityLocations"
const center = { lat: 27.8006, lng: -97.3946, }

export async function getServerSideProps(context) {
    return await GetCityLocations(center, context.req.headers.referer)
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