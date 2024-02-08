import PATHCONSTANTS from "constants/sitemap"
import { useEffect } from "react"

export default function () {

    //redirect to /about/careers
    useEffect(() => {
        window.location.href = PATHCONSTANTS.ABOUT.CONTACT
    }, [])

    return <></>
}