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
        en: "Contact Us",
        es: "Contáctenos"
    },
    subtitle: {
        en: `Feel free to reach out to us by giving us a call, locating a nearby store, or filling out the form
         below, and we'll promptly respond to your inquiry.`,
        es: `No dude en comunicarse con nosotros llamándonos, ubicando una tienda cercana o completando el formulario
         a continuación, y le responderemos rápidamente a su consulta.`,
    },
    Contact: {
        title: {
            en: "Give Us a Call",
            es: "Llámenos"
        },
        body: {
            en: `Our customer service team is available Monday through Friday from 8:00 AM to 5:00 PM EST.`,
            es: `Nuestro equipo de servicio al cliente está disponible de lunes a viernes de 8:00 a.m. a 5:00 p.m. EST.`,
        },
        img: {
            src: ShopOnlineImg,
            alt: "shop online"
        },
        CtaButton: {
            text: {
                en: "Call: 1-800-555-5555",
                es: "Llame: 1-800-555-5555"
            },
            color: "secondary",
            variant: "contained",
            link: PATHCONSTANTS.PHONE
        },
    },
    Stores: {
        title: {
            en: "Find a Store",
            es: "Encuentra una tienda"
        },
        body: {
            en: `We have over 100 stores across Texas. Find a store near you.`,
            es: `Tenemos más de 100 tiendas en todo Texas. Encuentra una tienda cerca de ti.`,
        },
        img: {
            src: ShopOnlineImg,
            alt: "shop online"
        },
        CtaButton: {
            text: {
                en: "Find a Store",
                es: "Encuentra una tienda"
            },
            color: "primary",
            variant: "contained",
            link: PATHCONSTANTS.LOCATIONS.INDEX
        },
    },
}

interface Props {
    quoteLink?: string
}
export default function (props: Props) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return (<>
        <Box
            sx={{ ...classes.root }}
        >
            <Box
                sx={{ ...classes.titles, }}
            >
                <Typography fontWeight={600} fontFamily={CustomFonts.Gustavo} variant="h4">{textContent.title[currentLang]}</Typography>
                <Typography variant="h6">{textContent.subtitle[currentLang]}</Typography>
            </Box>
            <Box
                sx={{ ...classes.itemsContainer }}
            >
                <Box sx={{ ...classes.contentItem }}>
                    <Box>
                        <Box
                            sx={{ ...classes.imageContainer }}
                        >
                            <Image fill style={{ objectFit: "contain" }} {...textContent.Contact.img} />
                        </Box>
                        <hr />
                    </Box>
                    <Box
                        sx={{
                            ...classes.bottomContainer
                        }}
                    >

                        <Box
                            sx={{ ...classes.itemTextContainer }}
                        >
                            <Typography
                                variant="h6" fontFamily={CustomFonts.Gustavo}
                            >
                                {textContent.Contact.title[currentLang]}
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                {textContent.Contact.body[currentLang]}
                            </Typography>
                        </Box>
                        <Box
                            sx={{ ...classes.buttonsContainer }}
                        >
                            <Link
                                href={textContent.Contact.CtaButton.link}>
                                <Button
                                    variant={textContent.Contact.CtaButton.variant as any}
                                    color={textContent.Contact.CtaButton.color as any}
                                    sx={{ ...classes.button }}
                                >{textContent.Contact.CtaButton.text[currentLang]}</Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{ ...classes.contentItem }}
                >
                    <Box>

                        <Box
                            sx={{ ...classes.imageContainer }}
                        >
                            <Image fill style={{ objectFit: "contain" }} {...textContent.Stores.img} />
                        </Box>
                        <hr />
                    </Box>
                    <Box
                        sx={{
                            ...classes.bottomContainer
                        }}
                    >

                        <Box
                            sx={{ ...classes.itemTextContainer }}
                        >
                            <Typography
                                variant="h6" fontFamily={CustomFonts.Gustavo}
                            >
                                {textContent.Stores.title[currentLang]}
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                {textContent.Stores.body[currentLang]}
                            </Typography>
                        </Box>
                        <Box
                            sx={{ ...classes.buttonsContainer }}
                        >
                            <Link
                                href={textContent.Stores.CtaButton.link}>
                                <Button
                                    variant="contained" color="primary"
                                    sx={{ ...classes.button }}
                                >{textContent.Stores.CtaButton.text[currentLang]}</Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    </>)
}