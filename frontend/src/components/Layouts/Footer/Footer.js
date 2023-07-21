import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const useStyles = makeStyles({
    footer: {
        backgroundColor: "#0E76BC",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        fontFamily: "Outfit",
        fontSize: "1.5rem",
        marginTop: "3rem",
    }
})
export default function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.footer}
        >
            <Box sx={{
                display: "flex", justifyContent: "space-between",

                width: {
                    xs: "95%",
                    sm: "95%",
                    md: "85%",
                    lg: "85%",
                },
                margin: "0 auto",
                flexDirection: {xs: "column-reverse", sm: "column-reverse", md: "row" },
            }}>
                <Box sx={{ textAlign: "left", padding: "1rem" }}>
                    <Typography variant="h5">Support</Typography>
                    <Typography variant="h6"> HR Extension Number 1303</Typography>
                    <Typography variant="h6"> Underwriting extension number: 141 option 2</Typography>
                    <Typography variant="h6"> Agent support extension number: 141 option 1</Typography>
                    <Typography variant="h6"> Sweep extension number: 1300</Typography>
                    <Typography variant="h6"> Operations extension number: 1016</Typography>
                </Box>
                <Box sx={{ padding: "1rem", textAlign: { xs: "left" ,sm: "left", md: "right" } }}>
                    <Typography variant="h5">Find Us</Typography>
                    <Box>
                        <LinkedInIcon sx={{ fontSize: "3rem" }} />
                        <TwitterIcon sx={{ fontSize: "3rem" }} />
                        <FacebookIcon sx={{ fontSize: "3rem" }} />
                    </Box>
                    <Typography variant="h6"> www.AiUnited.com</Typography>
                    <Typography variant="h6"> www.InsureHut.com</Typography>
                </Box>
            </Box>
            <p>© 2021 Outfit. All rights reserved.</p>
        </Box >
    )
}