import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang, returnLocaleText } from "../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../providers/theme";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MainGridProps {
    largeHorizontalCard?: {
        title: { [lang: string]: string };
        body: { [lang: string]: string[] };
    };
    largeVerticalCard?: {
        body: { [lang: string]: string[] };
        img: {
            src: StaticImageData;
            alt: string;
        };
    };
    smallCard1?: {
        body: { [lang: string]: string[] };
        CTA?: {
            text: { [lang: string]: string };
            link: string;
            type: string;
        };
    };
    smallCard2?: {
        body: { [lang: string]: string[] };
        CTA?: {
            text: { [lang: string]: string };
            link: string;
            type: string;
        };
    };
}
const styles = {
    root: {
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        flexDirection: { xs: "column", md: "row" },
        gap: "1rem",
        width: {
            xs: "90%",
            md: "100%",
        },
        margin: "auto",
    },
    card: {
        backgroundColor: "#F2F2F2",
        border: "1px solid #cacaca",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
    },

    smallCard: {
        width: { xs: "100%", md: "49%" },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        padding: "16px",
        justifyContent: "space-between",
    },
    verticalCard: {
        width: { xs: "100%", md: "33%" },
        padding: "24px",
    },
    largeHorizontalCard: {
        minHeight: "19rem",
        padding: { xs: "1rem", md: "1rem 2.5rem" },
    },
    smallCardsContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: "1rem",
        flex: "1",
    },
    largeVerticalCardImage: {
        position: "relative",
        width: "90%",
        height: { xs: "12rem", sm: "15rem", md: "18rem" },
        margin: "auto",
    },
};

export default function (props: MainGridProps) {
    return (
        <>
            <Box
                sx={{
                    ...styles.root,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: { xs: "100%", md: "66%" },
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    {props.largeHorizontalCard && (
                        <Box
                            sx={{
                                ...styles.card,
                                ...styles.largeHorizontalCard,
                            }}
                        >
                            <Typography
                                textAlign={"center"}
                                fontFamily={CustomFonts.Gustavo}
                                variant="h4"
                            >
                                {props.largeHorizontalCard.title && (
                                    <>
                                        {returnLocaleText(
                                            props.largeHorizontalCard.title,
                                        )}
                                    </>
                                )}
                            </Typography>
                            {returnLocaleText(
                                props.largeHorizontalCard.body,
                            ).map((paragraph, index) => {
                                return (
                                    <Typography key={index} variant="h5">
                                        {paragraph}
                                    </Typography>
                                );
                            })}
                        </Box>
                    )}
                    <Box
                        sx={{
                            ...styles.smallCardsContainer,
                        }}
                    >
                        {props.smallCard1 && (
                            <Box
                                sx={{
                                    ...styles.card,
                                    ...styles.smallCard,
                                }}
                            >
                                {returnLocaleText(props.smallCard1.body).map(
                                    (paragraph, index) => {
                                        return (
                                            <Typography
                                                textAlign={"center"}
                                                key={index}
                                                variant="h5"
                                            >
                                                {paragraph}
                                            </Typography>
                                        );
                                    },
                                )}

                                {props.smallCard1.CTA && (
                                    <Link
                                        href={props.smallCard1.CTA.link}
                                        scroll={
                                            props.smallCard1.CTA.link.includes(
                                                "#",
                                            )
                                                ? false
                                                : true
                                        }
                                    >
                                        <Button
                                            variant={
                                                props.smallCard1.CTA.type ==
                                                "primary"
                                                    ? "contained"
                                                    : "outlined"
                                            }
                                            color={
                                                props.smallCard1.CTA.type ==
                                                "primary"
                                                    ? "primary"
                                                    : "secondary"
                                            }
                                        >
                                            {returnLocaleText(
                                                props.smallCard1.CTA.text,
                                            )}
                                        </Button>
                                    </Link>
                                )}
                            </Box>
                        )}
                        {props.smallCard2 && (
                            <Box
                                sx={{
                                    ...styles.card,
                                    ...styles.smallCard,
                                }}
                            >
                                {returnLocaleText(props.smallCard2.body).map(
                                    (paragraph, index) => {
                                        return (
                                            <Typography
                                                textAlign={"center"}
                                                key={index}
                                                variant="h5"
                                            >
                                                {paragraph}
                                            </Typography>
                                        );
                                    },
                                )}
                                {props.smallCard2.CTA && (
                                    <Link
                                        href={props.smallCard2.CTA.link}
                                        scroll={
                                            props.smallCard2.CTA.link.includes(
                                                "#",
                                            )
                                                ? false
                                                : true
                                        }
                                    >
                                        <Button
                                            variant={
                                                props.smallCard2.CTA.type ==
                                                "primary"
                                                    ? "contained"
                                                    : "outlined"
                                            }
                                            color={
                                                props.smallCard2.CTA.type ==
                                                "primary"
                                                    ? "primary"
                                                    : "secondary"
                                            }
                                        >
                                            {returnLocaleText(
                                                props.smallCard2.CTA.text,
                                            )}
                                        </Button>
                                    </Link>
                                )}
                            </Box>
                        )}
                    </Box>
                </Box>
                {props.largeVerticalCard && (
                    <Box
                        sx={{
                            ...styles.card,
                            ...styles.verticalCard,
                        }}
                    >
                        {returnLocaleText(props.largeVerticalCard.body).map(
                            (paragraph, index) => {
                                return (
                                    <Typography
                                        textAlign={"center"}
                                        key={index}
                                        variant="h5"
                                    >
                                        {" "}
                                        {paragraph}
                                    </Typography>
                                );
                            },
                        )}
                        <Box
                            sx={{
                                ...styles.largeVerticalCardImage,
                            }}
                        >
                            <Image
                                fill
                                style={{
                                    objectFit: "contain",
                                    zIndex: "1",
                                    backgroundBlendMode: "darken",
                                }}
                                {...props.largeVerticalCard.img}
                            />
                        </Box>
                    </Box>
                )}
            </Box>
        </>
    );
}
