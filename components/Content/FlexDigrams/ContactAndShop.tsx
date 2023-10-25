import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { CustomFonts } from "../../../providers/theme";
import PATHCONSTANTS from "../../../constants/sitemap";
import ShopOnlineImg from "../../../public/assets/images/components/shoponline.png";
import ContactImg from "../../../public/assets/images/components/contact.png";
import Image from "next/image";
import Link from "next/link";
const textContent = {
    title: {
        en: "Get Instant Coverage",
        es: "Obtenga Cobertura Instantánea"
    },
    subtitle: {
        en: "Ai United has helped over 200,000 Texans insure their loved possessions since 2007",
        es: "Ai United ha ayudado a más de 200,000 tejanos a asegurar sus posesiones queridas desde 2007"
    },
    shopOnline: {
        title: {
            en: "Shop Online",
            es: "Comprar en linea"
        },
        body: {
            en: `Convenience at your fingertips. Browse, select, and purchase from the comfort of your home with our
             seamless online shopping experience.`,
            es: `Conveniencia al alcance de su mano. Explore, seleccione y compre desde la comodidad de su hogar con nuestra
                experiencia de compra en línea perfecta.`,
        },
        img: {
            src: ShopOnlineImg,
            alt: "shop online"
        },
        CtaButton: {
            text: {
                en: "Get a Quote",
                es: "Obtener una cotización"
            },
            color: "primary",
            variant: "contained",
        },
    },
    Contact: {
        title: {
            en: "Contact a Representative",
            es: "Contacte a un representante"
        },
        body: {
            en: `Ready to get a quote or have questions about your insurance options? Our team of experts 
            are ready to assist you in finding the perfect coverage for your home.`,
            es: `¿Listo para obtener una cotización o tiene preguntas sobre sus opciones de seguro? Nuestro equipo de expertos
         están listos para ayudarlo a encontrar la cobertura perfecta para su hogar.`,
        },
        img: {
            src: ContactImg,
            alt: "contact"
        },
        CTAButtons: [{
            text: {
                en: "Call: (555)-555-5555",
                es: "Llame: (555)-555-5555"
            },
            color: "secondary",
            variant: "contained",
            link: PATHCONSTANTS.PHONE
        },
        {
            text: {
                en: "Find a Store!",
                es: "Encuentra una tienda!"
            },
            color: "secondary",
            variant: "outlined",
            link: PATHCONSTANTS.LOCATIONS.INDEX
        }
        ]
    }
}
const classes = {
    root: {
        width: "90%",
        margin: "auto",
        padding: "1rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    },
    imageContainer: {
        position: "relative",
        height: "13rem",
        width: "100%",
    },
    itemsContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: { xs: "column", md: "row" },
        gap: "2rem", alignItems: "stretch"
    },
    contentItem: {
        border: "1px solid #cacaca",
        maxWidth: { xs: "90%", md: "40%" },
        margin: "0 auto",
        borderRadius: "16px",
        flex: "1",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
        display: "flex", flexDirection: "column",
    },
    itemTextContainer: {
        display: "flex",
        flexDirection: "column",
    },
    bottomContainer: {
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        flex: "1", paddingBottom: "1rem", padding: "0 1rem 1rem 1rem"
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "space-around",
        gap: "1rem",
        marginTop: "1rem",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
    },
    button: {
        minWidth: { xs: "12rem", md: "" },
    }
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
                sx={{ textAlign: "center", }}
            >
                <Typography fontWeight={600} fontFamily={CustomFonts.Gustavo} variant="h4">{textContent.title[currentLang]}</Typography>
                <Typography variant="h6">{textContent.subtitle[currentLang]}</Typography>
            </Box>
            <Box
                sx={{ ...classes.itemsContainer }}
            >
                <Box
                    sx={{ ...classes.contentItem }}
                >
                    <Box>

                        <Box
                            sx={{ ...classes.imageContainer }}
                        >
                            <Image fill style={{ objectFit: "contain" }} {...textContent.shopOnline.img} />
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
                                {textContent.shopOnline.title[currentLang]}
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                {textContent.shopOnline.body[currentLang]}
                            </Typography>
                        </Box>
                        <Box
                            sx={{ ...classes.buttonsContainer }}
                        >
                            <Link
                                href={props.quoteLink || ""}>
                                <Button
                                    variant="contained" color="primary"
                                    sx={{ ...classes.button }}
                                >{textContent.shopOnline.CtaButton.text[currentLang]}</Button>
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
                            {textContent.Contact.CTAButtons.map((button, index) => {
                                return <Link
                                    href={button.link}
                                >
                                    <Button
                                        key={index}
                                        variant={button.variant === "contained" ? "contained" : "outlined"}
                                        color={button.color === "primary" ? "primary" : "secondary"}
                                        sx={{ ...classes.button }}
                                    >
                                        {button.text[currentLang]}</Button>
                                </Link>
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    </>)
}