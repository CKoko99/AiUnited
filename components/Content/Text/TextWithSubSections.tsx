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
    textAlign?: string;
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
            sx={{ width: { xs: "45%", md: "30%" } }}
        >
            <Typography
                sx={{
                    ...classes.title,
                    textAlign: props.textAlign ?? "left",
                }}
                variant="h4">
                {props.title[props.lang]}
            </Typography>
            <Typography
                sx={{
                    textAlign: props.textAlign ?? "left",
                }}
                variant="subtitle1">
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
                <Typography sx={{
                    ...classes.title,
                    textAlign: props.textAlign ?? "left",
                }}
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
                    <Typography variant="body1"
                        sx={{
                            textAlign: props.textAlign ?? "left",
                        }}
                    >
                        {props.subtitle && props.subtitle[currentLang]}
                    </Typography>
                </Box>
                <Box
                    sx={{ display: "flex", flexDirection: "row", justifyContent: { xs: "space-between", md: "space-around" } }}
                >
                    {props.miniSections && props.miniSections.map((section, index) => {
                        return <MiniSection lang={currentLang} textAlign={props.textAlign} {...section} key={index} />
                    })}
                </Box>
            </Box>
        </Box >
    </>
}