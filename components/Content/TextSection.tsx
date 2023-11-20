import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang } from "../locale/LocaleSwitcher";
import { CustomFonts } from "../../providers/theme";
import { OverridableStringUnion } from '@mui/types';

interface ComponentProps {
    title?: { [lang: string]: string; };
    subtitle?: { [lang: string]: string; };
    ctaButtons?: {
        text: { [lang: string]: string; };
        href: string;
        color?: string;
        variant?: string;
    }[];
    subtitleVariant?: "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | undefined;
}

const classes = {
    root: {
        width: { xs: "90%", sm: "80%", md: "70%", lg: "65%" },
        margin: "auto", padding: "1rem 0", display: "flex",
        flexDirection: "column", alignItems: "center",
        gap: "1rem",
    }
}

export default function (props: ComponentProps) {

    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    return <>
        <Box sx={{ ...classes.root, }}
        >
            {props.title ?
                <Typography fontFamily={CustomFonts.Gustavo} variant="h4" fontWeight={600} sx={{ textAlign: "center", }}>
                    {props.title[currentLang]}
                </Typography> : null}
            {props.subtitle ?
                <Typography variant={props.subtitleVariant ?? "h6"} sx={{ textAlign: "center", }}>
                    {props.subtitle[currentLang]}
                </Typography> : null}
            {props.ctaButtons ? <Box
                sx={{
                    display: "flex", flexDirection: "row",
                    width: { xs: "80%", sm: "80%", md: "70%", lg: "50%" },
                    margin: "auto", justifyContent: { xs: "space-between", md: "space-around" },
                }}
            >
                {props.ctaButtons.map((cta, index) => {
                    return <Button key={index}
                        color={cta.color as OverridableStringUnion<"primary" | "secondary"> ?? "primary"}
                        variant={cta.variant as OverridableStringUnion<"text" | "contained" | "outlined"> ?? "outlined"}
                        href={cta.href}
                    >{cta.text[currentLang]}</Button>
                })}
            </Box> : null}
        </Box>
    </>
}