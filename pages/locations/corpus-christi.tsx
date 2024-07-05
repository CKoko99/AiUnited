import HeadComponent from "@/components/Head";
import GetCityLocations from "../../api/GetCityLocations";
import dynamic from "next/dynamic";
import { Location as LocationInterface } from "@/api/GetCityLocations";
import { GetServerSidePropsContext } from "next";

const Locations = dynamic(
    () => import("../../components/Locations/Locations"),
    {
        loading: () => <p>Loading...</p>, // Optional loading component
        //ssr: false, // Disable server-side rendering
    },
);
const center = { lat: 27.8006, lng: -97.3946 };

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await GetCityLocations(center, context.req.headers.referer);
}

export default function (props: { data: LocationInterface[] }) {
    // console.log(props.data.locations)

    return (
        <>
            <HeadComponent
                title={"Ai United Corpus Christi Locations"}
                metaData="Visit AI United Insurance in Corpus Christi, Texas for reliable insurance solutions. Protect your assets with peace of mind."
            />
            <Locations
                locations={props.data}
                city={"Corpus Christi, TX"}
                center={center}
            />
        </>
    );
}
