
interface Location {
    id: number;
    name: string;
    lat: string;
    lng: string;
    position: {
        lat: number;
        lng: number;
    }
}

export default async function (center, referer) {
    try {
        const res = await fetch(`${process.env.BACKEND}/locations/aiunited`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "origin": referer
                },

            })
        const data = await res.json()
        //for every location give it a position attribute with lat and long combined
        data.locations.forEach(location => {
            location.position = {
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lng)
            }
        })

        //go through each location and if there lat and long minus the center lat and long is greater than the absolute value of 1 then remove it
        let filteredData: Location[] = []
        data.locations.forEach((location: Location) => {
            if (Math.abs(location.position.lat - center.lat) > 1 || Math.abs(location.position.lng - center.lng) > 1) {
                return
            }
            filteredData.push(location)
        })

        return {
            props: {
                data: filteredData, // This passes the fetched data as a prop to your component
            },
        }
    } catch (err) {
        console.log(err)
        return {
            props: {
                data: [], // This passes the fetched data as a prop to your component
            },
        }
    }
}