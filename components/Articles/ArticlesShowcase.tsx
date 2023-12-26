import Checkbox from '@mui/material/Checkbox';
import { Box, Collapse, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import { returnLocaleText } from '../locale/LocaleSwitcher';
import Image from 'next/image';
import theme from 'providers/theme';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const categories = [
    `Auto Insurance`,
    `Home Insurance`,
    `Motorcycle Insurance`,
    `Renters Insurance`,
    `Mexico Insurance`,
    `SR-22 Insurance`,
    `Surety Bonds`,
]

function ArticleItem(props) {
    const [hover, setHover] = useState(false)
    console.log(props.attributes)
    const imageUrl = "http://localhost:1337" + props.attributes.Thumbnail.data.attributes.url
    return <Box
        sx={{
            width: { xs: "100%", sm: "45%", md: "30%" },
            border: "1px solid #cacaca",
            minWidth: "13rem",
            cursor: "pointer",
        }}
        onClick={() => window.location.href = `/articles/${props.attributes.title_slug}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <Box
            sx={{
                position: "relative",
                minWidth: "10rem",
                minHeight: { xs: "12rem", sm: "10rem" },
            }}
        >
            <Image src={imageUrl} alt="article-image"
                fill style={{ objectFit: "cover" }}
            />
        </Box>
        <Box
            sx={{
                backgroundColor: hover ? "rgba(14,118,188,.15)" : "white",
                transition: "background-color 0.3s ease",
            }}
        >

            <Typography
                variant="h6"
                sx={{
                    padding: "0.5rem",
                    opacity: 1
                }}
            >
                {returnLocaleText(props.attributes.Title)}
            </Typography>
        </Box>
    </Box>
}

export default function (props) {
    const { drawerWindow } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    //const history = useHistory();
    const router = useRouter();

    const [openItem, setOpenItem] = useState(null);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
        setOpenItem(null);
    };
    const [selectedCategory, setSelectedCategory] = useState(``)

    function handleCategoryClick(category) {
        if (selectedCategory === category) {
            setSelectedCategory(``)
        } else {
            setSelectedCategory(category)
        }
    }


    // Function to toggle the menu item's open/close state
    const handleMenuItemToggle = (label: any, event: any) => {
        event.stopPropagation();
        setOpenItem((prevOpenItem) => (prevOpenItem === label ? null : label));
    };

    return <>
        <Box
            sx={{
                bgcolor: "white", width: "100%", zIndex: 999,
            }}
        >
            <Box
                sx={{
                    display: { xs: "flex", md: "none", },
                    flexDirection: "column",
                    margin: "auto",
                    textAlign: "center",
                    width: "100%",
                    borderBottom: "1px solid #e0e0e0"
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
                                    Filter Categories {categories.length > 0 ? openItem === props.shortTitle ? <ExpandLessIcon /> : <ExpandMoreIcon /> : ""}
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openItem === props.shortTitle} timeout="auto" unmountOnExit>
                    <List component="div"
                        sx={{ padding: "1rem" }}
                    >
                        {categories.map((item) => (

                            <Box
                                key={item}
                                onClick={() => {
                                    handleCategoryClick(item)
                                    setOpenItem(null)
                                }}
                                sx={{
                                    display: "flex", alignItems: "center", cursor: "pointer",
                                }}
                            >
                                <Typography variant="h6">{item}</Typography>
                                <Checkbox checked={selectedCategory === item} />
                            </Box>

                        ))}
                    </List>
                </Collapse>

            </Box>
        </Box >
        <Box
            sx={{
                width: {
                    xs: "100%", md: "95%", lg: "85%"
                }, margin: "1rem auto", padding: "0 1rem",
                display: "flex", justifyContent: "space-around",
                flexDirection: { xs: "column", md: "row" },
            }}
        >
            <Box
                sx={{
                    maxWidth: 350, minWidth: 275,
                    display: { xs: "none", md: "block", },
                }}
            >
                <Typography fontWeight={"bold"} variant="h6">Filter Categories</Typography>
                <hr />
                {categories.map((item, index) => {
                    return <Box
                        key={index}
                        onClick={() => handleCategoryClick(item)}
                        sx={{
                            display: "flex", alignItems: "center", cursor: "pointer",
                        }}
                    >
                        <Typography key={index} variant="h6">{item}</Typography>
                        <Checkbox checked={selectedCategory === item} />
                    </Box>
                })}
            </Box>
            <Box
                sx={{
                    width: "100%", padding: { xs: "1rem 2rem", md: "3rem 2rem" },
                    display: "flex", flexWrap: "wrap", gap: "1.5rem",
                    justifyContent: { xs: "center", md: "center" },
                }}
            >
                {props.articles && props.articles.map((item, index) => {
                    if (selectedCategory === item.attributes.Category || selectedCategory === ``) {
                        return <ArticleItem key={index} {...item} />
                    }
                })}
            </Box>
        </Box >
    </>
}