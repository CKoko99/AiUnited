import HeadComponent from "@/components/Head";
import GetCityLocations from "../api/GetCityLocations"
import dynamic from 'next/dynamic';

const Locations = dynamic(() => import('../../components/Locations/Locations'), {
    loading: () => <p>Loading...</p>, // Optional loading component
    //ssr: false, // Disable server-side rendering
});

const center = { lat: 29.7433, lng: -95.3085, }
export async function getServerSideProps(context) {
    return await GetCityLocations(center, context.req.headers.referer)
}

export default function (props) {
    // console.log(props.data.locations)
    return <>
        <HeadComponent title={"Ai United Houston Locations"}
            metaData="Ai United Insurance Houston Locations."
        />
        <Locations
            locations={props.data}
            city={"Houston, Texas"}
            center={center}
        />
    </>
}