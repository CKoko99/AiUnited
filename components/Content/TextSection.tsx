import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang, returnLocaleText } from "../locale/LocaleSwitcher";
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
    titleVariant?: "h1" | "h2" | "h3" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | undefined;
    alignTitle?: string;
    alignSubtitle?: string;
}

const classes = {
    root: {
        width: { xs: "90%", sm: "80%", md: "70%", lg: "70%" },
        margin: "auto",
        padding: "1rem 0", display: "flex",
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
            {props.title && <Typography variant={props.titleVariant ? props.titleVariant : "h4"} sx={{
                textAlign: props.alignTitle ? props.alignTitle : "center",
                fontFamily: CustomFonts.Gustavo, fontWeight: "800"
            }}>{returnLocaleText(props.title)}</Typography>}
            {props.subtitle ?
                <Typography variant={props.subtitleVariant ?? "h6"}
                    sx={{ textAlign: props.alignSubtitle ? props.alignSubtitle : "center" }}
                >
                    {returnLocaleText(props.subtitle)}
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