import { Box, Typography } from "@mui/material"
import { Lang } from "../locale/LocaleSwitcher";
import { useRouter } from "next/router";
import React from "react";

export interface TextContentProps {
    content: {
        text: { [lang: string]: any; };
        variant?: string;
    }[];
    contrast?: boolean;
    align?: string;
}


export default function (props: TextContentProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    return <Box
        sx={{
            padding: "1rem",
            textAlign: props.align ?? "left",
        }}
    >
        {props.content?.map((item: any, contentIndex) => {
            return <Typography key={contentIndex}
                sx={{ margin: '1rem' }}
                variant={item.variant ?? "h6"}
                fontWeight={item.fontWeight ? item.fontWeight : "normal"}
                color={props.contrast ? "white" : "black"}
                fontFamily={item.fontFamily}
            >
                {item.text[currentLang]?.map((text: string, textIndex) => {
                    return <React.Fragment key={textIndex}>
                        {item.type?.toLowerCase() === "bulletedlist" && <>
                            • {text}
                        </>}
                        {!item.type && <>
                            {text}
                        </>}
                        <br />
                    </React.Fragment>
                })}
            </Typography>
        })}
    </Box>
}