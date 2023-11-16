import { Box, Typography } from "@mui/material";
import { Lang } from "../../locale/LocaleSwitcher";
import { useRouter } from "next/router";
import { CustomFonts } from "../../../providers/theme";


interface ComponentProps {
    title?: { [lang: string]: string; };
    subtitle?: { [lang: string]: string; };
    miniSections?: {
        title: { [lang: string]: string; };
        body: { [lang: string]: string; };
    }[];
    horizontal?: boolean;
}
const classes = {
    root: {
        width: "85%",
        margin: "auto", padding: "1rem 0", display: "flex",
        alignItems: "center",
        gap: "1rem",
    },
    title: {
        fontWeight: 600,
        fontFamily: CustomFonts.Gustavo,
    }
}
function MiniSection(props) {
    return <>
        <Box
            sx={{ width: "45%" }}
        >
            <Typography
                sx={{ ...classes.title }}
                variant="h4">
                {props.title[props.lang]}
            </Typography>
            <Typography variant="subtitle1">
                {props.body[props.lang]}
            </Typography>
        </Box>
    </>
}

export default function (props: ComponentProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <>
        <Box sx={{
            ...classes.root,
            flexDirection: { xs: "column", md: props.horizontal ? "column" : "row" }
        }}>
            <Box
                sx={{
                    width: props.horizontal ? { xs: "100%", sm: "85%" } : { xs: "100%", md: "50%" },
                    alignSelf: "flex-start",
                    paddingTop: { xs: "0", md: "1rem" },
                    margin: "auto"
                }}
            >
                <Typography sx={{ ...classes.title }}
                    variant="h4">
                    {props.title && props.title[currentLang]}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: props.horizontal ? { xs: "100%", sm: "85%" } : { xs: "100%", md: "50%" },
                    display: "flex", flexDirection: "column", gap: ".5rem"
                }}
            >
                <Box>
                    <Typography variant="body1">
                        {props.subtitle && props.subtitle[currentLang]}
                    </Typography>
                </Box>
                <Box
                    sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                >
                    {props.miniSections && props.miniSections.map((section, index) => {
                        return <MiniSection lang={currentLang} {...section} key={index} />
                    })}
                </Box>
            </Box>
        </Box >
    </>
}