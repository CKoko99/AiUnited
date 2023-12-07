import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../providers/theme";

interface TwoColumnProps {
    title: { [lang: string]: string; };
    body: { [lang: string]: string[]; };
    img: {
        src: StaticImageData;
        alt: string;
    };
}
const classes = {
    root: {
        display: "flex", flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        width: { xs: "95%", md: "100%" }, margin: "auto",
        padding: "1rem", gap: "1rem"
    },
    imageContainer: {
        position: "relative", height: { xs: "20rem", md: "25rem" },
        width: { xs: "100%", md: "49%" },
    },
    card: {
        width: { xs: "100%", md: "60%" }, padding: "2rem",
        backgroundColor: "#F2F2F2",
        border: "1px solid #cacaca",
        borderRadius: "16px",
        display: "flex", flexDirection: "column", gap: "1rem",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
    }
}
export default function (props: TwoColumnProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <><Box
        sx={{
            ...classes.root
        }}
    >
        <Box
            sx={{
                ...classes.imageContainer
            }}
        >
            <Image {...props.img} fill style={{ objectFit: "contain" }} />
        </Box>
        <Box
            sx={{
                ...classes.card
            }}
        >
            <Typography textAlign={"center"} fontFamily={CustomFonts.Gustavo} variant="h4">{props.title[currentLang]}</Typography>
            <Box>
                {props.body[currentLang].map((paragraph, index) => {
                    return <Typography key={index} variant="h5"
                        sx={{ lineHeight: paragraph.length < 1 ? ".5rem" : "" }}
                    > {paragraph} <br /> </Typography>
                })}
            </Box>
        </Box>
    </Box ></>
}