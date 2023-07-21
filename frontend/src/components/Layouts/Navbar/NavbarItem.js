import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//import { useHistory } from "react-router-dom";
import makeStyles from "@material-ui/styles/makeStyles";
import { Transition } from "react-transition-group";
import { CssBaseline } from "@material-ui/core";
import KeyboardArrowDownSharpIcon from "@material-ui/icons/KeyboardArrowDownSharp";
const useStyles = makeStyles({
    popOverRoot: {
        pointerEvents: "none",
    },
    lightText: {
        fontFamily: "Outfit",
        color: "white",
    },
    darkText: {
        fontFamily: "Outfit",
        color: "black",
    },
});

const defaultStyle = {
    transition: "opacity 300ms ease-in-out",
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

function SimpleMenu(props) {
    let currentlyHovering = false;
    //const history = useHistory();
    const styles = useStyles();
    const menuRef = useRef(null);

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
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

    function handleMenuClick(link) {
        handleClose();
        //history.push(link);
        console.log(link);
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <CssBaseline />

            <Button
            disableElevation
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={() => {
                    handleMenuClick(props.item.link);
                }}
                onMouseOver={handleClick}
                onMouseLeave={handleCloseHover}
                className={styles.lightText}
            >
                {props.item.label} {props.item.menuItems.length > 0 ? <KeyboardArrowDownSharpIcon /> : ""}
            </Button>
            <Transition in={Boolean(anchorEl)} timeout={0} unmountOnExit nodeRef={menuRef}>
                {(state) => (
                    <div ref={menuRef}>
                        {props.item.menuItems && props.item.menuItems.length > 0 ? (
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    onMouseEnter: handleHover,
                                    onMouseLeave: handleCloseHover,
                                    style: { pointerEvents: "auto" ,
                                },
                                }}
                                getContentAnchorEl={null}
                                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                                PopoverClasses={{
                                    root: styles.popOverRoot,
                                }}
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                            >
                                {props.item.menuItems.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => {
                                            handleMenuClick(item.link);
                                        }}
                                        className={styles.darkText}
                                    >
                                        {item.title}
                                    </MenuItem>
                                ))}
                            </Menu>
                        ) : null}
                    </div>
                )}
            </Transition>
        </div>
    );
}

export default SimpleMenu;
