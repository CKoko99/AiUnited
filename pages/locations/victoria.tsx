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
const center = { lat: 28.8, lng: -97 };

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await GetCityLocations(center, context.req.headers.referer);
}

export default function (props: { data: LocationInterface[] }) {
    // console.log(props.data.locations)
    return (
        <>
            <HeadComponent
                title={"Ai United Victoria Locations"}
                metaData="Visit AI United Insurance in Victoria, Texas for reliable insurance solutions. Protect your assets with peace of mind."
            />
            <Locations
                locations={props.data}
                city={"Victoria, TX"}
                center={center}
            />
        </>
    );
}
