import HeadComponent from '@/components/Head';
import dynamic from 'next/dynamic';

const Locations = dynamic(() => import('../../components/Locations/Locations'), {
    loading: () => <p>Loading...</p>, // Optional loading component
    //ssr: false, // Disable server-side rendering
});


export async function getServerSideProps(context) {
    try {

        const res = await fetch(`${process.env.BACKEND}/locations/aiunited`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "origin": context.req.headers.referer
                },

            })

        const data = await res.json()
        //for every location give it a position attribute with lat and long combined

        data.locations.forEach(location => {
            location.position = {
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lng)
            }
            //check if location.position.lat is a number
            //if it is not a number then log it
            //if it is a number then do nothing
            if (isNaN(location.position.lat)) {
                console.log(location)
            }
        })

        return {
            props: {
                data: data.locations, // This passes the fetched data as a prop to your component
            },
        }
    } catch (err) {
        console.log("error")
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
        <HeadComponent title={'Find an Ai United Insurance Location'}
            metaData={'Get a Free Insurance Quote with Ai United Insurance Today'} />
        <Locations
            locations={props.data}
            placeholder={"Texas"}
            zoom={6}
            center={{ lat: 29.7433, lng: -95.3085, }}
        />
    </>
}