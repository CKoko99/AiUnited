import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import { useHistory } from "react-router-dom";
import { Transition } from "react-transition-group";
import { Box, CssBaseline, Modal, Typography } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import Link from "next/link";
import { Lang } from "../locale/LocaleSwitcher";
import { useRouter } from "next/router";
import { CustomFonts } from "../../providers/theme";
import GetAQuote from "../Modals/GetAQuote";
const styles = {
    mainButton: {
        fontWeight: "bold",
        fontSize: { xs: "1rem", md: "1.1rem" },
        maxWidth: "12rem",
        marginRight: ".5rem",
        fontFamily: CustomFonts.Gustavo,
    },
}

export default function MainNavbarItem(props: any) {
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();
    const { locale } = router
    const currentLang = Lang[locale ?? 'en']

    return (
        <>
            <Button
                onClick={() => { setOpenModal(true); }}
                variant="contained" color="primary"
                sx={{ ...styles.mainButton }}
            >
                {props.item.label[currentLang]}
            </Button>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <GetAQuote close={() => {
                    setOpenModal(false)
                    if (props.close) props.close()
                }} />
            </Modal>
        </ >
    );
}