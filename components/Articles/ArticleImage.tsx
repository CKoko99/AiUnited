import { Box } from "@mui/material";
import Image from "next/image";

export default function (props) {
    return <>
        <Box sx={{
            position: "relative",
            minWidth: "15rem",
            minHeight: "20rem",
            maxWidth: "90vw", maxHeight: "100%",
            margin: "auto",
        }}>
            <Image src={props.src} fill style={{
                objectFit: "contain",
            }}
                alt={"image"}
            />
        </Box>
    </>
}