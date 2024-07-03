import { Lang, returnLocaleText } from "@/components/locale/LocaleSwitcher";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { CustomFonts } from "providers/theme";

export default function (props: {
    title: { [key: string]: string };
    subtitle?: { [key: string]: string };
    video: { [key: string]: string };
}) {
    const videoLink = returnLocaleText(props.video);
    return (
        <>
            <Box
                sx={{
                    padding: { xs: "2rem 1rem 0rem", sm: "2rem" },
                    display: "flex",
                    alignItems: "center",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    width: { xs: "100%", sm: "90%" },
                    margin: "auto",
                }}
            >
                <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                    <Typography
                        sx={{ textAlign: { xs: "center", md: "left" } }}
                        variant="h3"
                        fontWeight={"bold"}
                        fontFamily={CustomFonts.Gustavo}
                        component="h1"
                    >
                        {returnLocaleText(props.title)}
                    </Typography>
                    <Typography
                        sx={{ textAlign: { xs: "center", md: "left" } }}
                        variant="h6"
                    >
                        {returnLocaleText(props.subtitle)}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: { xs: "100%", sm: "95%", md: "50%", lg: "50%" },
                        margin: "auto",
                        textAlign: { xs: "center", md: "right" },
                    }}
                >
                    <Box
                        sx={{
                            padding: "1rem",
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
                                width="704"
                                height="528"
                                loading="eager"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                                src={videoLink}
                                title={returnLocaleText(props.title)}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
