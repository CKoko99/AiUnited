import { Box, Button, Typography } from "@mui/material";
import { forwardRef } from "react";

interface ComponentProps {
    isError?: boolean;
    close: () => void;
}
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
        gap: "1rem",
        padding: { xs: "1rem", sm: " 2rem  " },
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        maxHeight: "90vh",
    },
    contentItemLink: {
        width: "48%"
    },
    contentItemMain: {
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: ".5rem", width: "100%",
        border: "2px solid #a8a8a8",
        padding: ".5rem", borderRadius: "16px",
        transition: "all .3s",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
        "&:hover": {
            border: "2px solid #6f6f6f",
            backgroundColor: "#e1e1e1",
        }
    },
    contentItem: {
        display: "flex", flexDirection: "row",
        alignItems: "center", gap: ".75rem", width: "100%",
        border: "2px solid #a8a8a8",
        padding: ".5rem", borderRadius: "16px",
        transition: "all .3s",
        boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
        "&:hover": {
            border: "2px solid #6f6f6f",
            backgroundColor: "#e1e1e1",
        }
    }
}
function FormModal(props: ComponentProps, ref: any) {
    return <>

        <Box
            sx={{ ...classes.modal }}
        >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                {props.isError ? "Error" : "Success"}
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
                {props.isError ? "There was an error submitting your form. Please try again later." :
                    `Your form was submitted successfully. Our team will contact you soon.`}
            </Typography>
            <Button
                onClick={props.close}
            >{props.isError ? "Try Again" : "Continue"}
            </Button>
        </Box>

    </>
}
export default forwardRef(FormModal)