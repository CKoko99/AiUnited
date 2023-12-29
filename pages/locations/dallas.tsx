import HeadComponent from "@/components/Head";
import GetCityLocations from "../api/GetCityLocations"
import dynamic from 'next/dynamic';

const Locations = dynamic(() => import('../../components/Locations/Locations'), {
    loading: () => <p>Loading...</p>, // Optional loading component
    //  ssr: false, // Disable server-side rendering
});
const center = { lat: 32.7767, lng: -97.0, }

export async function getServerSideProps(context) {
    return await GetCityLocations(center, context.req.headers.referer)
}
export default function (props) {
    // console.log(props.data.locations)


    return <>
        <HeadComponent title={"Ai United Dallas Locations"}
            metaData="Ai United Insurance Dallas Locations."
        />
        <Locations
            locations={props.data}
            city={"Dallas, TX"}
            center={center}
        />
    </>
}