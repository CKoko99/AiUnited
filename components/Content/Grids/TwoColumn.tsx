import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Lang, returnLocaleText } from "../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../providers/theme";
import { blogText } from "@/functions/functions";

interface TwoColumnProps {
    title: { [lang: string]: string };
    body: { [lang: string]: string[] };
    img: {
        src: StaticImageData;
        alt: string;
    };
}
const classes = {
    root: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        width: { xs: "95%", md: "100%" },
        margin: "auto",
        padding: "1rem",
        gap: "1rem",
    },
    imageContainer: {
        position: "relative",
        height: { xs: "20rem", md: "25rem" },
        width: { xs: "100%", md: "49%" },
    },
    card: {
        width: { xs: "100%", md: "60%" },
        padding: "2rem",
        backgroundColor: "#F2F2F2",
        border: "1px solid #cacaca",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
    },
};
export default function (props: TwoColumnProps) {
    return (
        <>
            <Box
                sx={{
                    ...classes.root,
                }}
            >
                <Box
                    sx={{
                        ...classes.imageContainer,
                    }}
                >
                    <Image
                        {...props.img}
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </Box>
                <Box
                    sx={{
                        ...classes.card,
                    }}
                >
                    <Typography
                        textAlign={"center"}
                        fontFamily={CustomFonts.Gustavo}
                        variant="h4"
                    >
                        {returnLocaleText(props.title)}
                    </Typography>
                    <Box>
                        {props.body && (
                            <>
                                {blogText(returnLocaleText(props.body)).map(
                                    (item, index) => (
                                        <Typography
                                            key={index}
                                            variant={"h5"}
                                            sx={{
                                                minHeight:
                                                    item.length < 1
                                                        ? ".5rem"
                                                        : "",
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: item,
                                            }}
                                        />
                                    ),
                                )}
                            </>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    );
}
