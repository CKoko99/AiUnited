import { Typography, Box, Divider } from "@mui/material";

interface componentProps {
    title: string;
    children: any;
}

const styles = {
    root: {
        width: "95%",
        margin: "1rem auto",
    },
    split: {
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: {
            xs: "column", sm: "column", md: "row", lg: "row",
        },
        justifyContent: "center",
    },
    contentSection: {
        width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
    },
    hr: {
        alignSelf: "center", // Align the hr element vertically in the center
        border: 0,
        borderTop: "1px solid #ccc",
        width: "100%", // Make sure the hr stretches across the entire width
        margin: "1rem 0",
    },
}
export default function ContentSplit({ title, children }: componentProps) {
    return <>
        <Box sx={{ ...styles.root }}>

            <Typography variant="h4" component="h4" sx={{ textAlign: "center", fontWeight: "bold", margin: "1rem 0" }}>
                {title}
            </Typography>
            {children && <Box sx={{ ...styles.split }}>
                {children[0] && <Box sx={{ ...styles.contentSection }}>
                    {children[0]}
                </Box>}
                <Box
                    sx={{
                        display: {
                            xs: "none", sm: "none", md: "block", lg: "block",
                        }
                    }}
                >
                    <Divider sx={{ borderColor: "black" }} orientation="vertical" />

                </Box>
                <Box
                    sx={{
                        display: {
                            xs: "block", sm: "block", md: "none", lg: "none",
                        }
                    }}
                >
                    <Divider sx={{ borderColor: "black" }} orientation="horizontal" flexItem />
                </Box>
                {children[1] && <Box sx={{ ...styles.contentSection }}>
                    {children[1]}
                </Box>}
            </Box>}
        </Box>
    </>
}