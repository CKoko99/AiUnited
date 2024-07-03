import { Box, Button, Modal, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LogoImg from "../../public/assets/images/ai-logo-blue.jpeg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { returnLocaleText } from "../locale/LocaleSwitcher";
import * as fbq from "../Scripts/Facebook/FacebookEvents";
import * as ttq from "../Scripts/TikTok/TikTokEvents";
import Link from "next/link";
const TEXT = {
    modalHeading: {
        en: "Exit Free Quote?",
        es: "¿Salir de la cotización gratuita?",
    },
    modalBody: {
        en: "You are about to exit the quoting process and return to the home page are you sure you want to continue?",
        es: "Estás a punto de salir del proceso de cotización y regresar a la página de inicio, ¿estás seguro de que quieres continuar?",
    },
    cancel: { en: "Cancel", es: "Cancelar" },
    returnHome: { en: "Return Home", es: "Regresar a la página de inicio" },
};

const classes = {
    root: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "1102",
        textAlign: "center",
        overflow: "hidden",
    },
    modal: {
        backgroundColor: "white",
        margin: "auto",
        marginTop: "20vh",
        padding: "1rem",
        width: { xs: "90%", sm: "80%", md: "60%", lg: "60%" },
    },
    noScroll: {
        overflow: "hidden",
    },
};
export default function () {
    const [showModal, setShowModal] = useState(false);
    function handleLogoClick() {
        setShowModal(true);
    }
    return (
        <>
            <Box
                sx={{
                    zIndex: 1000,
                    backgroundColor: "white",
                    //borderBottom: "1px solid #e0e0e0",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: { xs: "92%", sm: "98%", md: "98%", lg: "85%" },
                        maxWidth: "1500px",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                    }}
                >
                    <Box
                        sx={{
                            minWidth: "12rem", // Set the maximum width for the image
                            minHeight: "5rem", // Automatically adjust height to maintain aspect ratio
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <Image
                            onClick={handleLogoClick}
                            //style={{ maxWidth: '120px', height: 'auto', cursor: 'pointer' }}
                            fill
                            style={{ objectFit: "contain" }}
                            src={LogoImg}
                            alt="Ai United Insurance"
                        />
                    </Box>
                    <Box
                        sx={{
                            "@media (min-width: 880px)": {
                                display: "flex",
                            },
                            "@media (max-width: 880px)": {
                                display: "none",
                            },
                            alignItems: "center",
                        }}
                    ></Box>
                </Box>
            </Box>
            {showModal && (
                <Modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    sx={{ ...classes.root }}
                >
                    <Box sx={{ ...classes.modal }}>
                        <Typography variant="h5" fontWeight={600} gutterBottom>
                            {returnLocaleText(TEXT.modalHeading)}
                        </Typography>
                        <Typography variant="body1">
                            {returnLocaleText(TEXT.modalBody)}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                marginTop: "1rem",
                                width: {
                                    xs: "100%",
                                    sm: "100%",
                                    md: "50%",
                                    lg: "50%",
                                },
                                margin: "1rem auto",
                            }}
                        >
                            <Button onClick={() => setShowModal(false)}>
                                {returnLocaleText(TEXT.cancel)}
                            </Button>
                            <Link href={"/"}>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        fbq.event("ExitAutoQuote");
                                        ttq.event("ExitAutoQuote");
                                    }}
                                >
                                    {returnLocaleText(TEXT.returnHome)}
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Modal>
            )}
        </>
    );
}
