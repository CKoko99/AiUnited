import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import { Lang, returnLocaleText } from "../locale/LocaleSwitcher";
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
        //backgroundColor: theme.palette.primary.light,
    },
};

export default function MainNavbarItem(props: {
    item: {
        label: { [key: string]: string };
    };
    close?: Function;
}) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button
                onClick={() => {
                    setOpenModal(true);
                }}
                variant="contained"
                sx={{ ...styles.mainButton }}
            >
                {returnLocaleText(props.item.label)}
            </Button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <GetAQuote
                    close={() => {
                        setOpenModal(false);
                        if (props.close) props.close();
                    }}
                />
            </Modal>
        </>
    );
}
