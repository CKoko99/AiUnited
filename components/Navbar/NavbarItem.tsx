import React, { useRef } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import { useHistory } from "react-router-dom";
import { Transition } from "react-transition-group";
import { CssBaseline, Typography } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import Link from "next/link";
import { useRouter } from "next/router";
import { Lang, returnLocaleText } from "../locale/LocaleSwitcher";

const defaultStyle = {
    transition: "opacity 300ms ease-in-out",
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 },
};

function SimpleMenu(props: {
    item: {
        label: { [key: string]: string };
        link?: string;
        bold?: boolean;
        menuItems?: {
            title: { [key: string]: string };
            link: string;
        }[];
    };
}) {
    let currentlyHovering = false;
    //const history = useHistory();
    const router = useRouter();
    const { locale } = router;
    const currentLang = Lang[locale ?? "en"];
    const menuRef = useRef(null);

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleHover() {
        currentlyHovering = true;
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleCloseHover() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose();
            }
        }, 50);
    }

    function handleMenuClick(link: string) {
        handleClose();
        // history.push(link);
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <CssBaseline />

            <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={() => {
                    handleMenuClick(props.item.link);
                }}
                onMouseOver={(e) => {
                    handleClick(e);
                }}
                onMouseLeave={handleCloseHover}
                sx={{
                    color: "white",
                }}
            >
                <Link
                    href={String(props.item.link)}
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        //  width: "max-content",
                        maxWidth: "10rem",
                        // minWidth: props.item.label).length > 7 ? "5rem" : ""
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: "1.1rem", lg: "1.2rem" },
                            fontWeight: props.item.bold ? "bold" : "normal",
                            //whiteSpace: { md: "", lg: "nowrap" },
                            color: "black",
                        }}
                    >
                        {returnLocaleText(props.item.label)}
                    </Typography>
                </Link>
                {props.item.menuItems?.length > 0 ? (
                    <KeyboardArrowDownSharpIcon sx={{ color: "black" }} />
                ) : (
                    ""
                )}
            </Button>
            <Transition
                in={Boolean(anchorEl)}
                timeout={0}
                unmountOnExit
                nodeRef={menuRef}
            >
                {(state) => (
                    <div ref={menuRef}>
                        {props.item.menuItems &&
                        props.item.menuItems.length > 0 ? (
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    onMouseEnter: handleHover,
                                    onMouseLeave: handleCloseHover,
                                    style: { pointerEvents: "auto" },
                                }}
                                disableScrollLock={true}
                                anchorOrigin={{
                                    horizontal: "left",
                                    vertical: "bottom",
                                }}
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                    pointerEvents: "none",
                                }}
                            >
                                {props.item.menuItems.map((item, index) => {
                                    return (
                                        <>
                                            <Link
                                                href={item.link || ""}
                                                style={{
                                                    color: "inherit",
                                                    textDecoration: "none",
                                                }}
                                                key={index}
                                            >
                                                <MenuItem
                                                    onClick={() => {
                                                        handleMenuClick(
                                                            item.link,
                                                        );
                                                    }}
                                                    style={{
                                                        color: "black",
                                                    }}
                                                >
                                                    {item.title[currentLang]}
                                                </MenuItem>
                                            </Link>
                                        </>
                                    );
                                })}
                            </Menu>
                        ) : null}
                    </div>
                )}
            </Transition>
        </div>
    );
}

export default SimpleMenu;
