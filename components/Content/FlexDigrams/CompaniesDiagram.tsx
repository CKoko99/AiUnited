import { Typography, Box } from "@mui/material";
import Image from "next/image";

//menu content prop will be an array of objects with title and img
interface FlexDiagramProps {
    title: string;
    content: any;
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
        width: '90%',
        margin: "auto",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
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
    return (<>
        <Box sx={{ ...styles.root }}>
            <Typography variant="h4" component="h4" sx={{ textAlign: "center", fontWeight: "bold", margin: "1rem 0" }}>
                {props.title}
            </Typography>
            <Box
                sx={{ ...styles.diagram }}
            >
                {props.content?.map((item: any, index: number) => {
                    return (
                        <Box key={index} sx={{ ...styles.contentItem }}
                        >
                            <Box sx={{ ...styles.image }}>
                                <Image src={item.img} alt={item.title}
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