import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { returnLocaleText } from "../locale/LocaleSwitcher";
interface componentProps {
    img: {
        src: StaticImageData;
        alt: string;
    }
    subtitle: { [lang: string]: string; };
}
export default function (props: componentProps) {
    return <>
        <Box
            sx={{
                width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                margin: "auto",
            }}
        >
            <Box
                sx={{ textAlign: "center", }}
            >
                <Box
                    sx={{
                        position: "relative", maxWidth: "90vw",
                        minHeight: { xs: "15rem", md: "25rem" },
                    }}
                >
                    <Image fill style={{ objectFit: "contain" }} src={props.img.src} alt={props.img.alt} />
                </Box>
                <Typography
                    sx={{ width: { xs: "90vw", sm: "75%", md: "60%", lg: "60%" }, margin: "auto" }}
                    variant="subtitle1"
                    textAlign={"left"}
                >
                    {returnLocaleText(props.subtitle)}
                </Typography>
            </Box>
        </Box >
    </>
}