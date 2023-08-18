import { Box, } from "@mui/material";
import { Typography } from "@mui/material";
import PATHCONSTANTS from '../../constants/sitemap';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";
import LogoImg from '../../public/assets/images/ai-logo-white.png';
import Image from "next/image";

const section2content = [
  {
    title: "Find an Agent",
    link: PATHCONSTANTS.LOCATIONS.INDEX
  },
  {
    title: "Contact Us",
    link: PATHCONSTANTS.ABOUT.CONTACT
  },
  {
    title: "About Us",
    link: PATHCONSTANTS.ABOUT.INDEX
  },
  {
    title: "Careers",
    link: PATHCONSTANTS.ABOUT.CAREERS
  }
]
const section3content = {
  title: "Ai United Insurance Products",
  links: [
    { text: "Auto Insurance", link: PATHCONSTANTS.PRODUCTS.AUTO },
    { text: "Motorcycle Insurance", link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE },
    { text: "Home Insurance", link: PATHCONSTANTS.PRODUCTS.HOME },
    { text: "Renters Insurance", link: PATHCONSTANTS.PRODUCTS.RENTER },
    { text: "Mexico Insruance", link: PATHCONSTANTS.PRODUCTS.MEXICO },
    { text: "SR-22", link: PATHCONSTANTS.PRODUCTS.SR22 },
    { text: "Surety Bonds", link: PATHCONSTANTS.PRODUCTS.SURETY },
  ]
}

const classes = {
  root: {
    backgroundColor: "#0E76BC",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1.5rem",
    marginTop: "3rem",
    "& a": { color: "white" },
  },
  footer: {
    display: "flex",
    width: {
      xs: "95%", sm: "95%", md: "90%", lg: "90%",
    },
    margin: "auto",
    flexDirection: "column"
  },
  section1: {
    display: "flex", justifyContent: "space-between"
    , flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",

  },
  section2: {
    display: "flex", flexDirection: "row",
    flexWrap: "wrap",
  },
  logoImg: {
    maxWidth: '16rem', // Set the maximum width for the image
    minHeight: '5rem',   // Automatically adjust height to maintain aspect ratio
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginTop: "-.5rem"
  },
  section1content: {
    textAlign: { xs: "center", sm: "right" },
  },
  socialIcon: {
    fontSize: "2.5rem",
  },
  link: {
    cursor: "pointer",
    fontWeight: "600",
    marginRight: ".3rem",
    whiteSpace: "nowrap"
  },
  section3: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  section3content: {
    display: "flex",
    flexWrap: "wrap",
  },
  copyright: {
    marginTop: "1rem",
  }
}

export default function Footer() {
  return (
    <Box sx={{ ...classes.root }}
    >
      <Box sx={{
        ...classes.footer
      }}>
        <Box sx={{ ...classes.section1 }}>
          <Box sx={{ ...classes.logoImg }}>
            <Image src={LogoImg} alt="Ai United Insurance Logo" />
          </Box>
          <Box
            sx={{ ...classes.section1content }}
          >
            <Box>
              {`(555)-555-5555`}
            </Box>
            <Box
            >
              <a
                href="https://www.linkedin.com/company/ai-united-insurance"
                target="_blank" rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{ ...classes.socialIcon }}
                />
              </a>
              <a href="https://twitter.com/aiunited?lang=en"
                target="_blank" rel="noopener noreferrer"
              >
                <TwitterIcon
                  sx={{ ...classes.socialIcon }}
                />
              </a>
              <a href="https://twitter.com/aiunited?lang=en"
                target="_blank" rel="noopener noreferrer"
              >
                <FacebookIcon
                  sx={{ ...classes.socialIcon }}
                />
              </a>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...classes.section2 }}>
          {section2content.map((item, index) => {
            return <Box key={index}
            >
              <Link href={item.link}>
                <Typography variant="body1" sx={{ ...classes.link }}>
                  {item.title} {index !== section2content.length - 1 && "|"}
                </Typography>
              </Link>
            </Box>
          })}
        </Box>
        <Box sx={{ ...classes.section3 }}>
          <Typography variant="body1">
            {section3content.title}
          </Typography>
          <Box sx={{ ...classes.section3content }}>
            {section3content.links.map((item, index) => {
              return <Box key={index}
              >
                <Link href={item.link}>
                  <Typography variant="body1" sx={{ ...classes.link }}>
                    {item.text} {index !== section3content.links.length - 1 && "|"}
                  </Typography>
                </Link>
              </Box>
            })}
          </Box>
        </Box>
        <Box sx={{ ...classes.copyright }}>
          <Typography variant="h6">Copyright © 2023 Ai United Insurance. All Rights Reserved.</Typography>
        </Box>
      </Box >
    </Box >
  )
}