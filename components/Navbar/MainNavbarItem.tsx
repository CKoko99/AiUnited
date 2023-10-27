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
        backgroundColor: "white",
        fontWeight: "bold",
        fontSize: "1.1rem",
        marginRight: ".5rem",
        color: "black", fontFamily: CustomFonts.Gustavo,
        "&:hover": {
            backgroundColor: "#cacaca",
        }
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
                variant="contained"
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