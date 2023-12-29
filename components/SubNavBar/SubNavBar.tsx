import * as React from 'react';
import { Box, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import PATHCONSTANTS from '../../constants/sitemap';
import SubNavBarButton from './SubNavBarItem';
import { returnLocaleText } from '../locale/LocaleSwitcher';

export default function SubNavBar(props: any) {

    //const history = useHistory();
    const router = useRouter();

    const [openItem, setOpenItem] = useState(null);
    const shortTitle = returnLocaleText(props.shortTitle);

    const handleDrawerToggle = () => {

        setOpenItem(null);
    };

    // Function to toggle the menu item's open/close state
    const handleMenuItemToggle = (label: any, event: any) => {
        event.stopPropagation();
        setOpenItem((prevOpenItem) => (prevOpenItem === shortTitle ? null : shortTitle));
    };
    return (<>

        <Box
            sx={{
                bgcolor: "white", width: "100%", zIndex: 999,
                borderBottom: "1px solid #e0e0e0"
            }}
        >
            <Box sx={{
                display: { xs: "none", md: "flex", },
                width: { xs: "92%", sm: "95%", md: "95%", lg: "80%" },
                maxWidth: "1800px",
                flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                margin: "auto"
            }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                        color: "black",
                        mr: 2, "@media (min-width: 880px)": {
                            display: "none",
                        },
                    }}
                >
                    <MenuIcon sx={{ height: "3rem", width: "3rem", color: "primary.main" }} />
                </IconButton>
                <Box sx={{
                    display: "flex"
                    , alignItems: 'center',
                    gap: "1.5rem",
                    justifyContent: "space-around",
                    width: "100%",
                }}>
                    {props.content.map((item, index) => (
                        <SubNavBarButton key={index} href={item.link} text={item.text} />
                    ))}
                </Box>


            </Box >
            <Box
                sx={{
                    display: { xs: "flex", md: "none", },
                    flexDirection: "column",
                    margin: "auto",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={(event) => handleMenuItemToggle(props.shortTitle, event)}
                    >
                        <ListItemText
                            primary={
                                <Typography
                                    style={{ display: "flex", fontWeight: "700", justifyContent: "center" }}
                                >
                                    {shortTitle} {props.content.length > 0 ? openItem === shortTitle ? <ExpandLessIcon /> : <ExpandMoreIcon /> : ""}
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openItem === shortTitle} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {props.content.map((menu, index) => (
                            <Link key={index} href={menu.link || ""} style={{ color: "inherit", textDecoration: "none" }}>
                                <ListItem >
                                    <ListItemText
                                        primary={
                                            <Typography
                                                fontWeight={router.pathname === menu.link ? "700" : "400"}
                                            >
                                                •{" "}
                                                {returnLocaleText(menu.text)}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Collapse>

            </Box>
        </Box >

    </>
    );
}

