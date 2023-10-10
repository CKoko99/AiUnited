import Locations from "../../components/Locations/Locations"
const center = { lat: 27.8006, lng: -97.3946, }

export async function getServerSideProps() {
    try {
        const res = await fetch(`${process.env.BACKEND}/locations/aiunited`)
        const data = await res.json()
        //for every location give it a position attribute with lat and long combined
        data.locations.forEach(location => {
            location.position = {
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lng)
            }
        })

        //go through each location and if there lat and long minus the center lat and long is greater than the absolute value of 1 then remove it
        let filteredData = []
        data.locations.forEach(location => {
            if (Math.abs(location.position.lat - center.lat) > 1 || Math.abs(location.position.lng - center.lng) > 1) {

            } else {
                filteredData.push(location)
            }
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