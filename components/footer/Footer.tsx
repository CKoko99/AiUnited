import { Box, } from "@mui/material";
import { Typography } from "@mui/material";
import PATHCONSTANTS from '../../constants/sitemap';


import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";
import LogoImg from '../../public/assets/images/ai-logo-white.png';
import Image from "next/image";
import { useRouter } from "next/router";
import { Lang } from "../locale/LocaleSwitcher";

const section2content = [
  {
    title: {
      en: "Find an Agent",
      es: "Encuentra un agente"
    },
    link: PATHCONSTANTS.LOCATIONS.INDEX
  },
  {
    title: {
      en: "Make a Payment",
      es: "Hacer un pago"
    },
    link: PATHCONSTANTS.ABOUT.CONTACT
  },
  {
    title: {
      en: "About us",
      es: "Sobre nosotros"
    },
    link: PATHCONSTANTS.ABOUT.INDEX
  },
  {
    title: {
      en: "Careers",
      es: "Carreras"
    },
    link: PATHCONSTANTS.ABOUT.CAREERS.INDEX
  }
]
const section3content = {
  title: {
    en: "Ai United Insurance Products",
    es: "Productos de seguros de Ai United"
  },
  links: [
    {
      text: {
        en: "Auto Insurance",
        es: "Seguro de auto"
      }
      , link: PATHCONSTANTS.PRODUCTS.AUTO
    },
    {
      text: { en: "Motorcycle Insurance", es: "Seguro de motocicleta" },
      link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE
    },
    {
      text: { en: "Home Insurance", es: "Seguro de casa" },
      link: PATHCONSTANTS.PRODUCTS.HOME
    },
    {
      text: { en: "Renters Insurance", es: "Seguro de inquilinos" },
      link: PATHCONSTANTS.PRODUCTS.RENTER
    },
    {
      text: { en: "Mexico Insruance", es: "Seguro de México" },
      link: PATHCONSTANTS.PRODUCTS.MEXICO
    },
    {
      text: { en: "SR-22", es: "SR-22" },
      link: PATHCONSTANTS.PRODUCTS.SR22
    },
    {
      text: { en: "Surety Bonds", es: "Fianzas de garantía" },
      link: PATHCONSTANTS.PRODUCTS.SURETY
    },
  ]
}
const copyright = {
  en: "© 2023 Ai United Insurance. All Rights Reserved.",
  es: "© 2023 Ai United Insurance. Todos los derechos reservados."
}

const classes = {
  root: {
    backgroundColor: "#0E76BC",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1.5rem",
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
    position: "relative",
    minWidth: '16rem',    // Set the minimum width of the image
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
  const router = useRouter();
  const { locale } = router
  const currentLang = Lang[locale ?? 'en']
  return (
    <Box sx={{ ...classes.root }}
    >
      <Box sx={{
        ...classes.footer
      }}>
        <Box sx={{ ...classes.section1 }}>
          <Box sx={{ ...classes.logoImg }}>
            <Image
              fill style={{ objectFit: "contain" }}
              src={LogoImg} alt="Ai United Insurance Logo" />
          </Box>
          <Box
            sx={{ ...classes.section1content }}
          >
            <Box>
              {PATHCONSTANTS.PHONETEXT}
            </Box>
            <Box
            >
              <a
                href="https://www.linkedin.com/company/ai-united-insurance"
                target="_blank" rel="noopener noreferrer"
                aria-label="Visit AI United on LinkedIn"
              >
                <LinkedInIcon
                  sx={{ ...classes.socialIcon }}
                />
              </a>
              <a href="https://twitter.com/aiunited?lang=en"
                target="_blank" rel="noopener noreferrer"
                aria-label="Visit AI United on Twitter"
              >
                <TwitterIcon
                  sx={{ ...classes.socialIcon }}
                />
              </a>
              <a href="https://twitter.com/aiunited?lang=en"
                target="_blank" rel="noopener noreferrer"
                aria-label="Visit AI United on Facebook"
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
                  {item.title[currentLang]} {index !== section2content.length - 1 && "|"}
                </Typography>
              </Link>
            </Box>
          })}
        </Box>
        <Box sx={{ ...classes.section3 }}>
          <Typography variant="body1">
            {section3content.title[currentLang]}
          </Typography>
          <Box sx={{ ...classes.section3content }}>
            {section3content.links.map((item, index) => {
              return <Box key={index}
              >
                <Link href={item.link}>
                  <Typography variant="body1" sx={{ ...classes.link }}>
                    {item.text[currentLang]} {index !== section3content.links.length - 1 && "|"}
                  </Typography>
                </Link>
              </Box>
            })}
          </Box>
        </Box>
        <Box sx={{ ...classes.copyright }}>
          <Typography variant="h6">{copyright[currentLang]}</Typography>
        </Box>
      </Box >
    </Box >
  )
}