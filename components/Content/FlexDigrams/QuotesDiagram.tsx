import { Typography, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Lang, returnLocaleText } from "../../locale/LocaleSwitcher";

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
        transition: "all .2s ease-in-out",
    }
}
function ContentItem(props: any) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    const [text, setText] = useState([] as string[]);
    const [hovering, setHovering] = useState(false)
    const words = returnLocaleText(props.item.title).split(" ");
    useEffect(() => {
        let line = "";
        let i = 0;
        const newText: string[] = [];

        while (i < words.length) {
            if (line.length + words[i].length < 10) {
                if (line.length === 0) {
                    line = words[i];
                } else {
                    line += " " + words[i];
                }
            } else {
                if (line.length !== 0) {
                    newText.push(line);
                }
                line = words[i];
            }
            i++;
        }

        newText.push(line);
        setText(newText);
    }, [currentLang]);
    return <>
        <Link
            href={props.item.link}
            style={{
                ...styles.contentLink,
                transform: hovering ? "scale(1.1)" : "",
                cursor: hovering ? "pointer" : "default",
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <Box sx={{ ...styles.contentItem }}
            >
                <Box sx={{ ...styles.image }}>
                    <Image
                        fill
                        style={{ objectFit: "contain" }}
                        {...props.item.img}
                    />
                </Box>
                {props.item.title && (
                    <Typography
                        variant="subtitle1"

                        sx={{
                            textAlign: "center",
                            fontWeight: "bold",
                            margin: ".75rem 0",
                            whiteSpace: "pre-line",
                            lineHeight: "1.4rem",
                        }}
                    >
                        {text.map((line, index) => {
                            return <React.Fragment key={index}>
                                {line} {"  "}
                                <Box
                                    sx={{ height: "0px", display: { xs: "none", sm: "block" } }}
                                >
                                    <br />
                                </Box>
                            </React.Fragment>
                        })}
                    </Typography>
                )}
            </Box>
        </Link>
    </>
}
export default function Diagram(props: DiagramProps) {


    return (<>
        <Box sx={{ ...styles.root }}>
            <Typography variant="h4" component="h4" sx={{ textAlign: "center", margin: "1rem 0" }}>
                {returnLocaleText(props.title)}
            </Typography>
            <Box
                sx={{ ...styles.diagram }}
            >
                {props.content?.map((item: any, index: number) => {
                    return (
                        <ContentItem item={item} key={index} />
                    )
                })}
            </Box>
        </Box>
    </>)
}