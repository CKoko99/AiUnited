import { Box, Typography, Button, Modal } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { CustomFonts } from "../../../providers/theme";
import { useRouter } from "next/router";
import { Lang } from "../../locale/LocaleSwitcher";
import { useEffect, useState } from "react";
import GetAQuote from "../../Modals/GetAQuote";

interface BannerProps {
    title: {
        [lang: string]: string;
    };
    subtitle: {
        [lang: string]: string;
    };
    ctaButton?: {
        text: {
            [lang: string]: string;
        };
    };
    image?: {
        src: StaticImageData;
        alt: string;
    }
    buttons?: {
        text: {
            [lang: string]: string;
        };
        img: {
            src: StaticImageData;
            alt: string;
        };
    }[];
}
const styles = {
    root: {
        display: "flex",
        width: {
            xs: "95%", sm: "90%", md: "95%", lg: "90%",
        },
        flexDirection: {
            xs: "column", sm: "column", md: "row", lg: "row",
        },
        margin: "auto",
        textAlign: {
            xs: "center", sm: "center", md: "left", lg: "left",
        }
    },
    textSection: {
        width: {
            xs: "100%", sm: "100%", md: "55%", lg: "55%",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "1rem",
    },
    ctaButton: {
        //backgroundColor: theme.palette.primary.light,
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "2rem",
        fontFamily: CustomFonts.Gustavo,
        fontSize: "1rem",
        fontWeight: "bold",
        '&:hover': {
            //    backgroundColor: theme.palette.primary.main,
        },
        minWidth: "15rem",
        width: {
            xs: "80%", sm: "55%", md: "50%",
        },
        margin: {
            xs: "auto", sm: "auto", md: "0",
        }
    },
    imageContainer: {
        position: "relative",
        width: {
            xs: "100%", sm: "100%", md: "50%", lg: "53%",
        },
        minHeight: { xs: "20rem", md: "30rem" },
        padding: "1rem",
        display: "flex", justifyContent: "center", alignItems: "center",
        flexDirection: "column",
    }
}
function QuoteButton(props) {
    const [text, setText] = useState([] as string[]);
    useEffect(() => {
        const words = props.text[props.lang].split(" ");
        let line = "";
        let i = 0;
        const newText: string[] = [];

        while (i < words.length) {
            if (line.length + words[i].length < 10) {
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

    return <Box sx={{
        //flex: "1",
        color: "black",
        padding: ".5rem",
        border: "1px solid #9f9d9d",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        width: { xs: "100%", sm: "48.5%", lg: "49%" },

    }}
    >
        <Box
            sx={{
                position: "relative", minWidth: "3.5rem", minHeight: "3.5rem",
            }}
        >
            <Image
                src={props.img.src}
                alt={props.img.alt}
                style={{ objectFit: "contain" }}
                fill />
        </Box>
        <Typography variant="h6" fontFamily={CustomFonts.Gustavo}
            sx={{
                //    wordSpacing: { xs: "", sm: "5rem" },
                lineHeight: "1.75rem", textAlign: "left"
            }}
        >
            {text.map((line, index) => {
                return <>
                    {line}
                    <br />
                </>
            })}
        </Typography>
    </Box>
}
export default function Banner(props: BannerProps) {
    const router = useRouter()
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']
    const [openModal, setOpenModal] = useState(false);

    return (<>
        <Box sx={{ ...styles.root }}>
            <Box
                sx={{
                    ...styles.textSection,
                }}
            >
                <Typography variant="h3" fontFamily={CustomFonts.Gustavo} component={"h1"} fontWeight="bold" gutterBottom>{props.title[currentLang]}</Typography>
                <Typography variant="h5"
                    sx={{ margin: { xs: ".5rem auto", md: "0" }, }}
                    gutterBottom>{props.subtitle && props.subtitle[currentLang]}</Typography>
                {props.buttons &&
                    <Box
                        sx={{
                            display: "flex", gap: ".5rem", flexWrap: "wrap",
                            justifyContent: "space-between",

                        }}
                    >
                        {props.buttons.map((button, index) => {
                            return <QuoteButton key={index} {...button} lang={currentLang} />
                        })}
                    </Box>
                }

                {props.ctaButton && (
                    <Button sx={{ ...styles.ctaButton }} variant="contained"
                        onClick={() => { setOpenModal(true) }}
                    >
                        {props.ctaButton.text[currentLang]}
                    </Button>
                )}
            </Box>
            <Box
                sx={{ ...styles.imageContainer }}
            >
                {props.image && <Image
                    fill priority
                    style={{ objectFit: "contain" }}
                    {...props.image} />}
            </Box>
        </Box >
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
        >
            <GetAQuote close={() => { setOpenModal(false) }} />
        </Modal>
    </>)
}