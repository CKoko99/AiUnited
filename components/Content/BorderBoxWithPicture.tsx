import { blogText } from "@/functions/functions";
import {
    Box,
    Typography,
    TypographyPropsVariantOverrides,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CustomFonts } from "providers/theme";
import { returnLocaleText } from "../locale/LocaleSwitcher";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";
export default function (props: {
    title: { [lang: string]: string };
    body: { [lang: string]: string | string[] };
    img: {
        src: StaticImageData;
        alt: string;
        width?: number;
        height?: number;
    };
    bodyVariant?: OverridableStringUnion<
        "inherit" | Variant,
        TypographyPropsVariantOverrides
    >;
    alignBody?: "center" | "left" | "right";
}) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
                    margin: "auto",
                    padding: "1rem 0",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    gap: { xs: "1rem", md: "4rem" },
                }}
            >
                <Box
                    sx={{
                        // padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".75rem",
                        textAlign: { xs: "center", md: "left" },
                        border: "1px solid #cacaca",
                        padding: "1rem",
                        flex: 1,
                        alignSelf: "stretch",
                    }}
                >
                    <Typography
                        variant="h4"
                        textAlign={"center"}
                        fontFamily={CustomFonts.Gustavo}
                        fontWeight={"Bold"}
                    >
                        {returnLocaleText(props.title)}
                    </Typography>
                    {props.body && (
                        <>
                            {blogText(returnLocaleText(props.body)).map(
                                (item, index) => (
                                    <Typography
                                        key={index}
                                        variant={
                                            props.bodyVariant
                                                ? props.bodyVariant
                                                : "h5"
                                        }
                                        sx={{
                                            textAlign: props.alignBody
                                                ? props.alignBody
                                                : "center",
                                            lineHeight: "1.7rem",
                                            opacity: 0.8,
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: item,
                                        }}
                                    />
                                ),
                            )}
                        </>
                    )}{" "}
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        maxWidth: "80vw",
                        minHeight: { xs: "10rem", sm: "15rem", md: "20rem" },
                        width: "40rem",
                        flex: 1,
                    }}
                >
                    <Image
                        fill
                        style={{ objectFit: "contain" }}
                        src={props.img.src}
                        alt={props.img.alt}
                    />
                </Box>
            </Box>
        </>
    );
}
