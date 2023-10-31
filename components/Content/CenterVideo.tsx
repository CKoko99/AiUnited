import { useRouter } from "next/router";
import { Lang } from "../locale/LocaleSwitcher";
import { Box } from "@mui/material";

interface ComponentProps {
    video: {
        [lang: string]: string;
    }
}
export default function (props: ComponentProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    console.log(props.video[currentLang])
    return <>
        <Box
            sx={{
                width: { xs: "90%", sm: "80%", md: "70%", lg: "50%" },
                margin: "auto",
            }}
        >
            <Box
                sx={{
                    padding: "2rem 0"
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
                        width="640" height="480"
                        aria-controls="video"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        src={props.video[currentLang]}
                    />
                </Box>
            </Box>
        </Box>
    </>
}