import { Typography, Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";

//menu content prop will be an array of objects with title and img
interface FlexDiagramProps {
    title: {
        [lang: string]: string;
    }
    content: {
        img: {
            src: StaticImageData;
            alt: string;
        };
        title?: string;
    }[];
}
const styles = {
    root: {
        width: "90%",
        margin: "auto",
    },
    diagram: {
        display: "flex",
        flexWrap: {
            xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap",
        },
        flexDirection: "row",
        justifyContent: "center",
    },
    image: {
        position: "relative",
        width: '90%',
        margin: "auto",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        minHeight: "4rem",
        minWidth: "10rem",
    },
    contentItem: {
        width: {
            xs: "100%", sm: "100%", md: "50%", lg: "50%",
        },
        minWidth: {
            xs: "50%", sm: "50%", md: "20%", lg: "20%",
        },
        margin: 0,
        flex: 1,
        display: "flex",
        alignItems: "center",
    }
}
export default function FlexDiagram(props: FlexDiagramProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return (<>
        <Box sx={{ ...styles.root }}>
            <Typography variant="h4" component="h4" sx={{ textAlign: "center", fontWeight: "bold", margin: "1rem 0" }}>
                {props.title[currentLang]}
            </Typography>
            <Box
                sx={{ ...styles.diagram }}
            >
                {props.content?.map((item: any, index: number) => {
                    return (
                        <Box key={index} sx={{ ...styles.contentItem }}
                        >
                            <Box sx={{ ...styles.image }}>
                                <Image fill
                                    style={{ objectFit: "contain" }}
                                    {...item.img}
                                />
                            </Box>
                            {item.title && <Typography variant="h5" component="h5" sx={{ textAlign: "center", fontWeight: "bold", margin: "1rem 0" }}>
                                {item.title}
                            </Typography>}
                        </Box>
                    )
                })}
            </Box>
        </Box>
    </>)
}