import { useRouter } from "next/router";
import { Lang } from "../locale/LocaleSwitcher";
import { Box } from "@mui/material";


interface ComponentProps {
    video: {
        [lang: string]: string;
    }
    title: string;
}
export default function (props: ComponentProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    const videoLink = props.video[currentLang]
    return <>
        <Box
            sx={{
                width: { xs: "100%", sm: "90%", md: "70%", lg: "65%" },
                margin: "auto",
            }}
        >
            <Box
                sx={{
                    padding: "1rem"
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        overflow: "hidden",
                        paddingTop: "56.25%",
                    }}
                >

                    <iframe
                        width="640"
                        height="480"
                        loading="lazy"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        src={videoLink}
                        title={props.title}
                    />
                </Box>
            </Box>
        </Box>
    </>
}