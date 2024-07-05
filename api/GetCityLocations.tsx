import PATHCONSTANTS from "constants/sitemap";

export interface Location {
    id: number;
    name: string;
    lat: string;
    lng: string;
    distance?: number;
    position: {
        lat: number;
        lng: number;
    };
    link: string;
    address: string;
    address2: string;
    zip: string;
    city: string;
    state: string;
    hours: string;
    phone: string;
}

export default async function (
    center: {
        lat: number;
        lng: number;
    },
    referer: string,
) {
    try {
        const res = await fetch(`${PATHCONSTANTS.BACKEND}/locations/aiunited`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                origin: referer,
            },
        });
        const data = (await res.json()) as { locations: Location[] };
        //for every location give it a position attribute with lat and long combined
        data.locations.forEach((location) => {
            location.position = {
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lng),
            };
        });

        //go through each location and if there lat and long minus the center lat and long is greater than the absolute value of 1 then remove it
        let filteredData: Location[] = [];
        data.locations.forEach((location: Location) => {
            if (
                Math.abs(location.position.lat - center.lat) > 1 ||
                Math.abs(location.position.lng - center.lng) > 1
            ) {
                return;
            }
            filteredData.push(location);
        });

        return {
            props: {
                data: filteredData, // This passes the fetched data as a prop to your component
            },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {
                data: [], // This passes the fetched data as a prop to your component
            },
        };
    }
}
