import {
    Box,
    Typography,
    TypographyPropsVariantOverrides,
} from "@mui/material";
import { Lang, returnLocaleText } from "../locale/LocaleSwitcher";
import { useRouter } from "next/router";
import React from "react";
import { Variant } from "@mui/material/styles/createTypography";
import { OverridableStringUnion } from "@mui/types";

export interface TextContentProps {
    content: {
        text: { [lang: string]: string[] };
        type?: string;
        fontWeight?: string;
        fontFamily?: string;
        variant?: OverridableStringUnion<
            "inherit" | Variant,
            TypographyPropsVariantOverrides
        >;
    }[];
    contrast?: boolean;
    align?: string;
}

export default function (props: TextContentProps) {
    return (
        <Box
            sx={{
                padding: "1rem",
                textAlign: props.align ?? "left",
            }}
        >
            {props.content?.map((item, contentIndex) => {
                return (
                    <Typography
                        key={contentIndex}
                        sx={{ margin: "1rem" }}
                        variant={item.variant ?? "h6"}
                        fontWeight={
                            item.fontWeight ? item.fontWeight : "normal"
                        }
                        color={props.contrast ? "white" : "black"}
                        fontFamily={item.fontFamily}
                    >
                        {returnLocaleText(item.text)?.map(
                            (text: string, textIndex) => {
                                return (
                                    <React.Fragment key={textIndex}>
                                        {item.type?.toLowerCase() ===
                                            "bulletedlist" && <>• {text}</>}
                                        {!item.type && <>{text}</>}
                                        <br />
                                    </React.Fragment>
                                );
                            },
                        )}
                    </Typography>
                );
            })}
        </Box>
    );
}
