import { Box, } from "@mui/material";
import { Typography } from "@mui/material";


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const classes = {
  footer: {
    backgroundColor: "#0E76BC",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1.5rem",
    marginTop: "3rem",
    "& a": { color: "white" },
  }
}
export default function Footer() {
  return (
    <Box sx={{ ...classes.footer }}
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

        flexDirection: { xs: "column-reverse", sm: "column-reverse", md: "row" },
      }}>
        <Box sx={{ textAlign: "left", padding: "1rem" }}>
          <Typography variant="h5">Support</Typography>
          <Typography variant="h6"> HR Extension Number 1303</Typography>
          <Typography variant="h6"> Underwriting extension number: 141 option 2</Typography>
          <Typography variant="h6"> Agent support extension number: 141 option 1</Typography>
          <Typography variant="h6"> Sweep extension number: 1300</Typography>
          <Typography variant="h6"> Operations extension number: 1016</Typography>
        </Box>
        <Box sx={{ padding: "1rem", textAlign: { xs: "left", sm: "left", md: "right" } }}>
          <Typography variant="h5">Find Us</Typography>
          <Box>
            <a href="https://www.linkedin.com/company/ai-united-insurance"
              target="_blank" rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: "3rem" }} />
            </a>
            <a href="https://twitter.com/aiunited?lang=en"
              target="_blank" rel="noopener noreferrer"
            >

              <TwitterIcon sx={{ fontSize: "3rem" }} />
            </a>
            <a href="https://www.facebook.com/AiUnitedInsurance/"
              target="_blank" rel="noopener noreferrer"
            >
              <FacebookIcon sx={{ fontSize: "3rem" }} />
            </a>
          </Box>
          <a target="_blank" rel="noopener noreferrer" href="https://www.AiUnited.com">
            <Typography variant="h6"> www.AiUnited.com</Typography>
          </a>
        </Box>
      </Box>
      <Typography variant="h6">Copyright © 2023 Ai United Insurance. All Rights Reserved.</Typography>
    </Box >
  )
}