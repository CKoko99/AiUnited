import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang, returnLocaleText } from "../locale/LocaleSwitcher";
import { CustomFonts } from "../../providers/theme";
import { OverridableStringUnion } from '@mui/types';
import { blogText } from "@/functions/functions";

interface ComponentProps {
    title?: { [lang: string]: string; };
    subtitle?: { [lang: string]: string | string[]; };
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
    noPadding?: boolean;
    id?: string;
}

const classes = {
    root: {
        width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
        margin: "auto",
        padding: "1rem 0", display: "flex",
        flexDirection: "column", alignItems: "center",
        gap: "1rem", position: "relative",
    }
}

export default function (props: ComponentProps) {

    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    console.log(returnLocaleText(props.title) + " " + props.alignTitle)
    return <>
        <Box sx={{
            ...classes.root,
            padding: props.noPadding ? "0" : "1rem 0",
        }}
        >
            <Box id={props.id} sx={{ position: "absolute", top: "-7rem" }}></Box>
            {props.title && <Typography variant={props.titleVariant ? props.titleVariant : "h4"} sx={{
                textAlign: props.alignTitle ? props.alignTitle : "center",
                fontFamily: CustomFonts.Gustavo, fontWeight: "800", width: "100%"
            }}>{returnLocaleText(props.title)}</Typography>}
            {props.subtitle ? <>
                {blogText(returnLocaleText(props.subtitle)).map((item, index) => (<Typography key={index} variant={props.subtitleVariant ?? "h6"}
                    sx={{
                        textAlign: props.alignSubtitle ? props.alignSubtitle : "center",
                        width: "100%"
                    }}
                    dangerouslySetInnerHTML={{ __html: item }} />))}
            </>
                : null}
            {props.ctaButtons ? <Box
                sx={{
                    display: "flex", flexDirection: "row",
                    width: { xs: "90%", sm: "80%", md: "70%", lg: "50%" },
                    margin: "auto", justifyContent: { xs: "space-between", md: "space-around" }, gap: "1rem"
                }}
            >
                {props.ctaButtons.map((cta, index) => {
                    return <Button key={index} sx={{ textAlign: "center" }}
                        color={cta.color as OverridableStringUnion<"primary" | "secondary"> ?? "primary"}
                        variant={cta.variant as OverridableStringUnion<"text" | "contained" | "outlined"> ?? "outlined"}
                        href={cta.href}
                    >{returnLocaleText(cta.text)}</Button>
                })}
            </Box> : null}
        </Box>
    </>
}