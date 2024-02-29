import HeadComponent from "@/components/Head";
import GetCityLocations from "../api/GetCityLocations"
import dynamic from 'next/dynamic';

const Locations = dynamic(() => import('../../components/Locations/Locations'), {
    loading: () => <p>Loading...</p>, // Optional loading component
    //ssr: false, // Disable server-side rendering
});
const center = { lat: 28.8, lng: -97, }

export async function getServerSideProps(context) {
    return await GetCityLocations(center, context.req.headers.referer)
}

export default function (props) {
    // console.log(props.data.locations)
    return <>
        <HeadComponent title={"Ai United Victoria Locations"}
            metaData="Visit AI United Insurance in Victoria, Texas for reliable insurance solutions. Protect your assets with peace of mind."
        />
        <Locations
            locations={props.data}
            city={"Victoria, TX"}
            center={center}
        />
    </>
}