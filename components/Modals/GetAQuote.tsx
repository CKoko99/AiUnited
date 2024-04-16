import { Box, Typography } from "@mui/material";
import autoQuoteImg from "../../public/assets/images/home/quotes/auto.png";
import homeQuoteImg from "../../public/assets/images/home/quotes/home.png";
import motorcycleQuoteImg from "../../public/assets/images/home/quotes/motorcycle.png";
import sr22QuoteImg from "../../public/assets/images/home/quotes/sr22.png";
import rentersQuoteImg from "../../public/assets/images/home/quotes/renter.png";
import mexicoQuoteImg from "../../public/assets/images/home/quotes/mexico.png";
import suretyQuoteImg from "../../public/assets/images/home/quotes/surety.png";
import homePlainImg from "../../public/assets/images/home/quotes/homeplain.png";
import autoPlainImg from "../../public/assets/images/home/quotes/autoplain.png";
import motorcyclePlainImg from "../../public/assets/images/home/quotes/motorcycleplain.png";
import sr22PlainImg from "../../public/assets/images/home/quotes/sr22plain.png";
import rentersPlainImg from "../../public/assets/images/home/quotes/renterplain.png";
import mexicoPlainImg from "../../public/assets/images/home/quotes/mexicoplain.png";
import suretyPlainImg from "../../public/assets/images/home/quotes/suretyplain.png";
import Image from "next/image";
import { Lang } from "../locale/LocaleSwitcher";
import { useRouter } from "next/router";
import React, { forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import PATHCONSTANTS from "../../constants/sitemap";
import CloseIcon from '@mui/icons-material/Close';
import { GTMEVENTS, GTMEventHandler } from "../Scripts/Google/GoogleTag";
const text = {
    title: {
        en: "Unlock your savings today!",
        es: "¡Desbloquea tus Ahorros Hoy!"
    },
    subtitle: {
        en: "Get a quote in minutes and see how much you can save!",
        es: "¡Obtenga una cotización en minutos y vea cuánto puede ahorrar!"
    }
}
const products = [
    {
        title: {
            en: "Auto Insurance",
            es: "Seguro de Auto"
        },
        main: true,
        id: "Auto",
        img: autoQuoteImg,
        plainImg: autoPlainImg,
        link: PATHCONSTANTS.QUOTES.AUTO.FORM,
    },
    {
        title: { en: "Home Insurance", es: "Seguro de Casa" },
        main: true,
        id: "Home",
        img: homeQuoteImg,
        plainImg: homePlainImg,
        link: PATHCONSTANTS.QUOTES.HOME.FORM,
    },
    {
        title: { en: "Motorcycle Insurance", es: "Seguro de Motocicleta" },
        id: "Motorcycle",
        img: motorcycleQuoteImg,
        plainImg: motorcyclePlainImg,
        link: PATHCONSTANTS.QUOTES.MOTORCYCLE.FORM,
    },
    {
        title: { en: "SR-22 Insurance", es: "Seguro SR-22" },
        id: "SR22",
        img: sr22QuoteImg,
        plainImg: sr22PlainImg,
        link: PATHCONSTANTS.QUOTES.SR22.FORM,
    },
    {
        title: { en: "Renters Insurance", es: "Seguro de Inquilinos" },
        id: "Renters",
        img: rentersQuoteImg,
        plainImg: rentersPlainImg,
        link: PATHCONSTANTS.QUOTES.RENTER.FORM,
    },
    {
        title: { en: "Mexico Insurance", es: "Seguro de México" },
        id: "Mexico",
        img: mexicoQuoteImg,
        plainImg: mexicoPlainImg,
        link: PATHCONSTANTS.QUOTES.MEXICO.FORM,
    },
    {
        title: { en: "Surety Bonds", es: "Seguro de Fianza" },
        id: "Surety",
        img: suretyQuoteImg,
        plainImg: suretyPlainImg,
        link: PATHCONSTANTS.QUOTES.SURETY.FORM,
    }
]
const classes = {
    modal: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 1002,
        width: { xs: "90%", sm: "80%", md: "70%", lg: "50%" },
        minHeight: "20%",
        backgroundColor: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        padding: { xs: "1rem", sm: " 1rem" },
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        maxHeight: "90vh",
    },
    contentItemLink: {
        width: "48%"
    },
    contentItemMain: {
        display: "flex", flexDirection: "column",
        alignItems: "center", width: "100%",
        border: "2px solid #cccccc",
        padding: ".5rem", borderRadius: "16px",
        paddingBottom: "1rem",
        transition: "all .3s",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.15)",
        "&:hover": {
            border: "2px solid #a8a8a8",
            backgroundColor: "#f3f3f3",
        }
    },
    contentItem: {
        display: "flex", flexDirection: "row",
        alignItems: "center", gap: ".75rem", width: "100%",
        border: "2px solid #cccccc",
        padding: ".5rem", borderRadius: "16px",
        transition: "all .3s",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.15)",
        "&:hover": {
            border: "2px solid #a8a8a8",
            backgroundColor: "#f3f3f3",
        }
    },
}
function ContentItem(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [text, setText] = useState([] as string[]);
    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    useEffect(() => {
        const words = props.title[props.currentLang].split(" ");
        let line = "";
        let i = 0;
        const newText: string[] = [];

        while (i < words.length) {
            if (line.length + words[i].length < 9) {
                if (line.length === 0) {
                    line = words[i];
                } else {
                    line += " " + words[i];
                }
            } else {
                if (line.length !== 0) {
                    newText.push(line);
                }
                line = words[i];
            }
            i++;
        }

        newText.push(line);
        setText(newText);
    }, [props.lang]);
    return <>
        <Link href={props.link}
            style={classes.contentItemLink}
            onClick={() => {
                GTMEventHandler(`${GTMEVENTS.audience}-${props.id}-modal`, { 'name': `${props.id}-Quote` })
                props.close()
            }
            }
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
        >
            <Box
                sx={props.main ? classes.contentItemMain : classes.contentItem}
            >
                <Box
                    sx={{
                        position: "relative", height: props.main ? "4.5rem" : "3rem", transition: 'transform 0.3s',
                        width: props.main ? "4.5rem" : "3rem", transform: isHovered ? 'scale(1.1) rotate(5deg)' : "",
                    }}
                >
                    <Image fill style={{ objectFit: "contain" }} src={props.usePlain ? props.plainImg.src : props.img.src} alt={props.id} />
                </Box>

                <Typography lineHeight={"1.4rem"} fontWeight={props.main ? 600 : 500}
                    textAlign={props.main ? "center" : "left"}
                    variant={props.main ? "h6" : "body1"}>
                    {text.map((line, index) => {
                        return <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    })}
                </Typography>
            </Box>
        </Link >
    </>
}
function GetAQuote(props, ref) {
    const [usePlain, setUsePlain] = React.useState(true)
    const router = useRouter();
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    return <Box
        sx={{
            ...classes.modal
        }}
    >
        <Box
            sx={{
                textAlign: "right", paddingTop: ".5rem",
                paddingRight: ".5rem"
            }}
        >
            <CloseIcon sx={{ cursor: "pointer" }} onClick={props.close} />
        </Box>
        <Box
            sx={{
                display: "flex", flexDirection: "column", gap: ".5rem", alignItems: "center",
                width: "80%", margin: "auto", marginTop: "-.5rem"
            }}
        >
            <Typography fontWeight={"bold"} variant="h4" align="center">
                {text.title[currentLang]}
            </Typography>
            <Typography variant="h6" align="center">
                {text.subtitle[currentLang]}
            </Typography>
        </Box>
        <Box
            sx={{
                display: "flex", flexWrap: "wrap", gap: ".8rem 0",
                justifyContent: "space-around", alignItems: "center", margin: "auto",
                padding: { xs: "0rem", md: "1rem" }, width: { xs: "100%", sm: "90%", md: "80%" },
            }}
        >
            {products.map((product) => {
                return <ContentItem
                    close={props.close}
                    usePlain={usePlain} key={product.id} {...product} currentLang={currentLang} />
            })}
        </Box>
    </Box >
}
export default forwardRef(GetAQuote)