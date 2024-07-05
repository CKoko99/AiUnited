import HeadComponent from "@/components/Head";
import GetCityLocations from "../../api/GetCityLocations";
import dynamic from "next/dynamic";
import { GetServerSidePropsContext } from "next";
import { Location as LocationInterface } from "@/api/GetCityLocations";

const Locations = dynamic(
    () => import("../../components/Locations/Locations"),
    {
        loading: () => <p>Loading...</p>, // Optional loading component
        //ssr: false, // Disable server-side rendering
    },
);
const center = { lat: 30.25146952, lng: -97.70622226 };

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return await GetCityLocations(center, context.req.headers.referer);
}

export default function (props: { data: LocationInterface[] }) {
    return (
        <>
            <HeadComponent
                title={"Ai United Austin Locations"}
                metaData="Visit AI United Insurance in Austin, Texas for reliable insurance solutions. Protect your assets with peace of mind."
            />
            <Locations
                locations={props.data}
                city={"Austin, TX"}
                center={center}
            />
        </>
    );
}
