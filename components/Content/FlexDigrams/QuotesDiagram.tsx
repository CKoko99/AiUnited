import { Typography, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Lang } from "../../locale/LocaleSwitcher";

//menu content prop will be an array of objects with title and img
interface DiagramProps {
    title: {
        [lang: string]: string;
    }
    content: {
        img: {
            src: StaticImageData;
            alt: string;
        }
        title?: {
            [lang: string]: string;
        };
        link: string;
    }[];
}
const styles = {
    root: {
        width: {
            xs: "100%", sm: "85%", md: "90%", lg: "90%",
        },
        margin: "auto",
    },
    diagram: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
    },

    image: {
        position: "relative",
        minHeight: { xs: "4.5rem", sm: "7rem", md: "5.9rem", lg: "8rem" },
        maxHeight: { xs: "5.5rem", sm: "7rem", md: "5.9rem", lg: "8rem" },
        minWidth: { xs: "4.5rem", sm: "7rem", md: "5.9rem", lg: "8rem" },
        margin: "auto",
        //scale on hover
        transition: "all .3s ease-in-out",
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
        },
        height: "100%"
    },
    contentItem: {

        padding: "0 1rem",
        cursor: "pointer",
        margin: 0,
        flex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    contentLink: {
        maxWidth: "33%",
        minWidth: "24%",
    }
}
export default function Diagram(props: DiagramProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    return (<>
        <Box sx={{ ...styles.root }}>
            <Typography variant="h4" component="h4" sx={{ textAlign: "center", margin: "1rem 0" }}>
                {props.title[currentLang]}
            </Typography>
            <Box
                sx={{ ...styles.diagram }}
            >
                {props.content?.map((item: any, index: number) => {
                    return (
                        <Link
                            href={item.link}
                            key={index}
                            style={{ ...styles.contentLink }}
                        >
                            <Box sx={{ ...styles.contentItem }}
                            >
                                <Box sx={{ ...styles.image }}>
                                    <Image
                                        fill
                                        style={{ objectFit: "contain" }}
                                        {...item.img}
                                    />
                                </Box>
                                {item.title && (
                                    <Typography
                                        variant="subtitle1"

                                        sx={{
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            margin: "1rem 0",
                                            whiteSpace: "pre-line",
                                            lineHeight: "1.4rem",
                                        }}
                                    >
                                        {item.title[currentLang]?.split(' ').map((word: string, index: any) => (
                                            <React.Fragment key={index}>
                                                {word}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </Typography>
                                )}
                            </Box>
                        </Link>
                    )
                })}
            </Box>
        </Box>
    </>)
}