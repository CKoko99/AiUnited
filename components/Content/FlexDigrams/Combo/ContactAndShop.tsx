import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang } from "../../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../../providers/theme";
import PATHCONSTANTS from "../../../../constants/sitemap";
import ShopOnlineImg from "../../../../public/assets/images/components/shoponline.png";
import ContactImg from "../../../../public/assets/images/components/contact.png";
import Image from "next/image";
import Link from "next/link";
import { classes } from "./Styles";

const textContent = {
  title: {
    en: "Get Instant Coverage",
    es: "Obtenga Cobertura Instantánea",
  },
  subtitle: {
    en: "Ai United has helped over 200,000 Texans insure their loved possessions since 2007",
    es: "Ai United ha ayudado a más de 200,000 tejanos a asegurar sus más preciadas posesiones",
  },
  shopOnline: {
    title: {
      en: "Shop Online",
      es: "Comprar en Linea",
    },
    body: {
      en: `Convenience at your fingertips. Browse, select, and purchase from the comfort of your home with our
             seamless online shopping experience.`,
      es: `Conveniencia al alcance de su mano. Explore, seleccione y compre desde la comodidad de su hogar con nuestro
            mejor servicio de compra en línea.`,
    },
    img: {
      src: ShopOnlineImg,
      alt: "shop online",
    },
    CtaButton: {
      text: {
        en: "Get a Quote",
        es: "Obtener una Cotización",
      },
      color: "primary",
      variant: "contained",
    },
  },
  Contact: {
    title: {
      en: "Contact a Representative",
      es: "Contacte a un Representante",
    },
    body: {
      en: `Are you prepared to receive a quote, or do you have inquiries regarding your insurance options? 
            Our team of seasoned experts is poised to guide you in discovering the ideal coverage for your needs.`,
      es: `¿Está preparado para recibir una cotización o tiene consultas sobre sus opciones de seguro?
            Nuestro equipo de expertos está preparado para guiarlo en el descubrimiento de la cobertura ideal para sus necesidades.`,
    },
    img: {
      src: ContactImg,
      alt: "contact",
    },
    CTAButtons: [
      {
        text: {
          en: `Call Now!`,
          es: `¡Llame Ahora!`,
        },
        color: "secondary",
        variant: "contained",
        link: PATHCONSTANTS.PHONE,
      },
      {
        text: {
          en: "Find a Store!",
          es: "Encuentra una Tienda",
        },
        color: "secondary",
        variant: "outlined",
        link: PATHCONSTANTS.LOCATIONS.INDEX,
      },
    ],
  },
};

interface Props {
  quoteLink?: string;
}

export default function (props: Props) {
  const router = useRouter();
  const { locale } = router;
  const currentLang = Lang[locale ?? "en"];
  return (
    <>
      <Box sx={{ ...classes.root }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            fontWeight={600}
            fontFamily={CustomFonts.Gustavo}
            variant="h4"
          >
            {textContent.title[currentLang]}
          </Typography>
          <Typography variant="h6">
            {textContent.subtitle[currentLang]}
          </Typography>
        </Box>
        <Box sx={{ ...classes.itemsContainer }}>
          <Box sx={{ ...classes.contentItem }}>
            <Box>
              <Box sx={{ ...classes.imageContainer }}>
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  {...textContent.shopOnline.img}
                />
              </Box>
              <hr />
            </Box>
            <Box
              sx={{
                ...classes.bottomContainer,
              }}
            >
              <Box sx={{ ...classes.itemTextContainer }}>
                <Typography variant="h6" fontFamily={CustomFonts.Gustavo}>
                  {textContent.shopOnline.title[currentLang]}
                </Typography>
                <Typography variant="body1">
                  {textContent.shopOnline.body[currentLang]}
                </Typography>
              </Box>
              <Box sx={{ ...classes.buttonsContainer }}>
                <Link href={props.quoteLink || PATHCONSTANTS.PRODUCTS.INDEX}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ ...classes.button }}
                  >
                    {textContent.shopOnline.CtaButton.text[currentLang]}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ ...classes.contentItem }}>
            <Box>
              <Box sx={{ ...classes.imageContainer }}>
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  {...textContent.Contact.img}
                />
              </Box>
              <hr />
            </Box>
            <Box
              sx={{
                ...classes.bottomContainer,
              }}
            >
              <Box sx={{ ...classes.itemTextContainer }}>
                <Typography variant="h6" fontFamily={CustomFonts.Gustavo}>
                  {textContent.Contact.title[currentLang]}
                </Typography>
                <Typography variant="body1">
                  {textContent.Contact.body[currentLang]}
                </Typography>
              </Box>
              <Box sx={{ ...classes.buttonsContainer }}>
                {textContent.Contact.CTAButtons.map((button, index) => {
                  return (
                    <Link href={button.link} key={index}>
                      <Button
                        key={index}
                        variant={
                          button.variant === "contained"
                            ? "contained"
                            : "outlined"
                        }
                        color={
                          button.color === "primary" ? "primary" : "secondary"
                        }
                        sx={{ ...classes.button }}
                      >
                        {button.text[currentLang]}
                      </Button>
                    </Link>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
