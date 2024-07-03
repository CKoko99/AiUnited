import PATHCONSTANTS from "constants/sitemap";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function () {
    const router = useRouter();
    useEffect(() => {
        router.push(PATHCONSTANTS.LOCATIONS.HOUSTON);
    }, []);
    return <></>;
}
