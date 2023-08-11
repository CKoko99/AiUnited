import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const styles = {
    root: {
        width: "80%",
        margin: "auto",
    },
    image: {
        width: '90%',
        margin: "auto",
    },
    buttons: {
        display: "flex",
        justifyContent: "space-around",
        margin: "1rem 0",
        flexDirection: "row",
    }
}

export default function CTAContent(props) {
    return <>
        <Box sx={{ ...styles.root }}>
            <Typography variant="h4" component="h4" sx={{ textAlign: "center", margin: "1rem 0" }}>
                {props.title}
            </Typography>
            <Box sx={{ ...styles.image }}>
                <Image src={props.img} alt={props.title}
                    objectFit='responsive'
                />
            </Box>
            <Typography variant="h5" component="h5" sx={{ textAlign: "center", margin: "1rem 0" }}>
                {props.text}
            </Typography>
            <Box sx={{ ...styles.buttons }}>
                {props.cta1 && <Button
                    variant="outlined"
                    color="secondary"
                    href={props.cta1.link}
                >

                    {props.cta1.text}
                </Button>}
                {props.cta2 && <Button
                    variant="contained"
                    color="secondary"
                    href={props.cta2.link}
                >
                    {props.cta2.text}
                </Button>}
            </Box>
        </Box>
    </>
}