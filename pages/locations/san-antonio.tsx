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
const center = { lat: 29.4252, lng: -98.4946 };

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await GetCityLocations(center, context.req.headers.referer);
}

export default function (props: { data: LocationInterface[] }) {
    // console.log(props.data.locations)
    return (
        <>
            <HeadComponent
                title={"Ai United San Antonio Locations"}
                metaData="Visit AI United Insurance in San Antonio, Texas for reliable insurance solutions. Protect your assets with peace of mind."
            />
            <Locations
                locations={props.data}
                city={"San Antonio, TX"}
                center={center}
            />
        </>
    );
}
