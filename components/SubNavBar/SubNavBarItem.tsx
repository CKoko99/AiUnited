import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Lang, returnLocaleText } from "../locale/LocaleSwitcher";
import Link from "next/link";
import { useRouter } from "next/router";

const styles = {
    underline: {
        width: "0%",
        transition: 'width 0.5s', // Add opacity transition
    },
    underlineHover: {
        width: "100%",
        transition: 'width 0.5s', // Add opacity transition
    }
}
export default function SubNavBarButton(props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    const [selected, setSelected] = useState(false);
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        //check if the current path is the same as the link

        if (currentLang === "en") {
            if (window.location.pathname === props.href) {
                setSelected(true);
            }
        }
        else {
            if (window.location.pathname === `/${currentLang}${props.href}`) {
                setSelected(true);
            }
        }
    }, []);
    return <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <Link
            href={props.href}
        >
            <Button >
                {returnLocaleText(props.text)}
            </Button>
        </Link>
        <Box sx={{ width: selected ? "100%" : hovered ? styles.underlineHover : styles.underline, height: "2px", backgroundColor: "black", margin: "auto" }} />
    </Box>
}