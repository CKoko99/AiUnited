import { useRouter } from "next/router";
import { Lang } from "../locale/LocaleSwitcher";
import { Box } from "@mui/material";
import Iframe from 'react-iframe'

interface ComponentProps {
    video: {
        [lang: string]: string;
    }
}
export default function (props: ComponentProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    const videoLink = props.video[currentLang]
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

                    <Iframe
                        width="640"
                        height="480"
                        loading="lazy"
                        styles={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        url={videoLink}
                    />
                </Box>
            </Box>
        </Box>
    </>
}