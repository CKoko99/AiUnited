import { Box, Typography } from "@mui/material";
import { returnLocaleText } from "../locale/LocaleSwitcher";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const classes = {
    root: {
        width: { xs: "100%", sm: "90%", md: "80%", lg: "80%" },
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: "2rem",
        alignItems: "center",
    },
    contentItem: {
        border: "1px solid #cacaca",
        position: "relative",
        width: { xs: "90%", sm: "80%", md: "45%", lg: "45%" },
    },
    imageColor: {
        opacity: 0,
        minWidth: "100%",
        minHeight: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2,
        backgroundColor: "primary.main",
        transition: "opacity 0.5s", // Add opacity transition
    },
    imageHover: {
        opacity: 0.15,
        //transform: 'opacity 0.3s',
    },
};
function BorderBoxContent(props: {
    title: { [key: string]: string };
    body: { [key: string]: string };
    img: {
        src: StaticImageData;
        alt: string;
    };
}) {
    const [hover, setHover] = useState(false);
    return (
        <>
            <Box
                sx={{
                    ...classes.contentItem,
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Box sx={{ position: "relative" }}>
                    <Box
                        sx={
                            hover
                                ? {
                                      ...classes.imageColor,
                                      ...classes.imageHover,
                                  }
                                : { ...classes.imageColor }
                        }
                    ></Box>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            minHeight: "13rem",
                        }}
                    >
                        <Image
                            fill
                            style={{
                                objectFit: "contain",
                                padding: ".5rem",
                            }}
                            src={props.img.src}
                            alt={props.img.alt}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        borderTop: "1px solid #cacaca",
                        padding: "1rem",
                    }}
                >
                    <Typography variant="h6" fontWeight={600}>
                        {returnLocaleText(props.title)}
                    </Typography>
                    <Typography variant="body1">
                        {returnLocaleText(props.body)}
                    </Typography>
                </Box>
            </Box>
        </>
    );
}
export default function (props: {
    content: {
        title: { [key: string]: string };
        body: { [key: string]: string };
        img: { src: StaticImageData; alt: string };
    }[];
}) {
    return (
        <>
            <Box sx={{ ...classes.root }}>
                {props.content.map((item, index) => {
                    return <BorderBoxContent key={index} {...item} />;
                })}
            </Box>
        </>
    );
}
