import { Box, Typography, Button, Modal } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CustomFonts } from "../../../providers/theme";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { useEffect, useState } from "react";
import GetAQuote from "../../Modals/GetAQuote";
import {
    GTMEVENTS,
    GTMEventHandler,
} from "@/components/Scripts/Google/GoogleTag";
import CategoryIcon from "@mui/icons-material/Category";
import React from "react";
import { returnLocaleText } from "@/components/locale/LocaleSwitcher";
import Link from "next/link";
const text = {
    moreProducts: {
        en: "View more products",
        es: "Ver más productos",
    },
};
interface BannerProps {
    title: {
        [lang: string]: string;
    };
    subtitle: {
        [lang: string]: string;
    };
    ctaButton?: {
        text: {
            [lang: string]: string;
        };
    };
    image?: {
        src: StaticImageData;
        alt: string;
    };
    buttons?: {
        text: {
            [lang: string]: string;
        };
        img: {
            src: StaticImageData;
            alt: string;
        };
        link: string;
        id: string;
    }[];
}
const styles = {
    root: {
        display: "flex",
        width: {
            xs: "95%",
            sm: "90%",
            md: "95%",
            lg: "90%",
        },
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
        },
        margin: "auto",
        textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
            lg: "left",
        },
    },
    textSection: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "55%",
            lg: "55%",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1rem",
    },
    ctaButton: {
        //backgroundColor: theme.palette.primary.light,
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "2rem",
        fontFamily: CustomFonts.Gustavo,
        fontSize: "1rem",
        fontWeight: "bold",
        "&:hover": {
            //    backgroundColor: theme.palette.primary.main,
        },
        minWidth: "15rem",
        width: {
            xs: "80%",
            sm: "55%",
            md: "50%",
        },
        margin: {
            xs: "auto",
            sm: "auto",
            md: "0",
        },
    },
    imageContainer: {
        position: "relative",
        width: {
            xs: "100%",
            sm: "100%",
            md: "50%",
            lg: "53%",
        },
        minHeight: { xs: "20rem", md: "30rem" },
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
};

function QuoteButton(props: {
    text: {
        [lang: string]: string;
    };
    img: {
        src: StaticImageData;
        alt: string;
    };
    link: string;
    id: string;
}) {
    const [hovering, setHovering] = useState(false);

    const words = returnLocaleText(props.text).split(" ");
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
    const text = newText;

    function handleButtonClick() {
        GTMEventHandler(`${GTMEVENTS.audience}-${props.id}-main_banner`, {
            name: `${props.id}-Quote`,
        });
    }
    return (
        <Box
            sx={{
                //flex: "1",
                color: "black",
                padding: ".5rem",
                //"black": "#3c3c3c"
                border: hovering ? "2px solid #3c3c3c" : "2px solid #9f9d9d",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                width: { xs: "100%", sm: "48.5%", lg: "49%" },
                cursor: "pointer",
                transition: "all .3s ease-in-out",
                borderRadius: "6px",
            }}
            onClick={() => {
                handleButtonClick();
            }}
            onMouseEnter={() => {
                setHovering(true);
            }}
            onMouseLeave={() => {
                setHovering(false);
            }}
        >
            <Link
                href={props.link}
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
            >
                <Box
                    sx={{
                        position: "relative",
                        minWidth: "3.5rem",
                        minHeight: "3.5rem",
                        transition: "all .3s ease-in-out",
                        transform: hovering ? "scale(1.1)" : "",
                    }}
                >
                    <Image
                        src={props.img.src}
                        alt={props.img.alt}
                        style={{ objectFit: "contain" }}
                        fill
                    />
                </Box>
                <Typography
                    variant="h6"
                    fontFamily={CustomFonts.Gustavo}
                    sx={{
                        // wordSpacing: { xs: "1rem", },
                        lineHeight: "1.5rem",
                        textAlign: "left",
                        transition: "all .3s ease-in-out",
                        transform: hovering ? "scale(1.05)" : "",
                        color: hovering ? "black" : "#3c3c3c",
                    }}
                >
                    {text.map((line, index) => {
                        return (
                            <React.Fragment key={index}>
                                {line} {"  "}
                                <Box
                                    sx={{
                                        height: "0px",
                                        display: { xs: "none", sm: "block" },
                                    }}
                                >
                                    <br />
                                </Box>
                            </React.Fragment>
                        );
                    })}
                </Typography>
            </Link>
        </Box>
    );
}
function MoreProducts(props: { openModal: () => void }) {
    const [hovering, setHovering] = useState(false);

    return (
        <Box>
            <Box
                sx={{
                    textAlign: "center",
                    padding: ".5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                    justifyContent: "center",
                    transition: "all .3s ease-in-out",
                }}
                onMouseEnter={() => {
                    setHovering(true);
                }}
                onMouseLeave={() => {
                    setHovering(false);
                }}
            >
                <CategoryIcon
                    sx={{
                        transition: "all .3s ease-in-out",
                        fontSize: "1.75rem",
                        color: hovering ? "black" : "#3c3c3c",
                    }}
                />
                <Typography
                    sx={{
                        transition: "all .3s ease-in-out",
                        color: hovering ? "black" : "#3c3c3c",
                        cursor: "pointer",
                    }}
                    variant="h6"
                    onClick={() => {
                        props.openModal();
                    }}
                >
                    {returnLocaleText(text.moreProducts)}
                </Typography>
            </Box>
            <Box
                sx={{
                    transition: "all .3s ease-in-out",
                    width: hovering ? { xs: "75%", sm: "45%", md: "45%" } : "0",
                    height: "2px",
                    backgroundColor: "black",
                    margin: "auto",
                }}
            />
        </Box>
    );
}
export default function Banner(props: BannerProps) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Box sx={{ ...styles.root }}>
                <Box
                    sx={{
                        ...styles.textSection,
                    }}
                >
                    <Typography
                        variant="h3"
                        fontFamily={CustomFonts.Gustavo}
                        component={"h1"}
                        fontWeight="bold"
                        gutterBottom
                    >
                        {returnLocaleText(props.title)}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ margin: { xs: ".5rem auto", md: "0" } }}
                        gutterBottom
                    >
                        {props.subtitle && returnLocaleText(props.subtitle)}
                    </Typography>
                    {props.buttons && (
                        <Box sx={{}}>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: ".5rem",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                }}
                            >
                                {props.buttons.map((button, index) => {
                                    return (
                                        <QuoteButton key={index} {...button} />
                                    );
                                })}
                            </Box>
                            <MoreProducts
                                openModal={() => {
                                    setOpenModal(true);
                                }}
                            />
                        </Box>
                    )}

                    {props.ctaButton && (
                        <Button
                            sx={{ ...styles.ctaButton }}
                            variant="contained"
                            onClick={() => {
                                setOpenModal(true);
                            }}
                        >
                            {returnLocaleText(props.ctaButton.text)}
                        </Button>
                    )}
                </Box>
                <Box sx={{ ...styles.imageContainer }}>
                    {props.image && (
                        <Image
                            fill
                            priority
                            style={{ objectFit: "contain" }}
                            {...props.image}
                        />
                    )}
                </Box>
            </Box>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <GetAQuote
                    close={() => {
                        setOpenModal(false);
                    }}
                />
            </Modal>
        </>
    );
}
