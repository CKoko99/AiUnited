import Checkbox from '@mui/material/Checkbox';
import { Box, Collapse, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { returnLocaleText } from '../locale/LocaleSwitcher';
import Image from 'next/image';
import theme from 'providers/theme';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PATHCONSTANTS from 'constants/sitemap';

const TEXT = {
    filterCategories: {
        en: "Filter Categories",
        es: "Filtrar Categorías",
    }
}
const ALLCATEGORIES = [
    { en: "All Categories", es: "Todas las Categorías" },
    { en: "Auto Insurance", es: "Seguro de Auto" },
    { en: "Home Insurance", es: "Seguro de Casa" },
    { en: "Renters Insurance", es: "Seguro de Inquilinos" },
    { en: "Motorcycle Insurance", es: "Seguro de Motocicleta" },
    { en: "Mexico Insurance", es: "Seguro de México" },
    { en: "SR-22 Insurance", es: "Seguro SR-22" },
    { en: "Surety Bonds", es: "Seguro de Fianzas" },
]
const classes = {

    imageColor: {
        opacity: 0,
        minWidth: "100%",
        minHeight: "100%",
        position: "absolute",
        top: 0, left: 0,
        zIndex: 2,
        backgroundColor: "primary.main",
        transition: 'opacity 0.5s', // Add opacity transition
    },
    imageHover: {
        opacity: .15,
        //transform: 'opacity 0.3s',
    },
}

function ArticleItem(props) {
    const [hover, setHover] = useState(false)
    //  console.log(props.attributes)
    const imageUrl = props.attributes.Thumbnail.data.attributes.url
    return <Box
        sx={{
            width: { xs: "100%", sm: "45%", md: "30%" },
            border: "1px solid #cacaca",
            minWidth: "13rem",
            cursor: "pointer",
            position: "relative",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        <Link href={`/articles/${props.attributes.title_slug}`}>
            <Box
                sx={hover ? { ...classes.imageColor, ...classes.imageHover } : { ...classes.imageColor }}
            ></Box>
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
                    flex: 1,
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
        </Link>
    </Box>
}

export default function (props) {

    const [categories, setCategories] = useState(
        [
            ALLCATEGORIES[0]
        ]
    )
    //const history = useHistory();
    const router = useRouter();
    let { page, category } = router.query

    if (page === undefined) {
        page = "1"
    }
    if (category === undefined) {
        category = "All Categories"
    }

    useEffect(() => {
        //go through all the articles and get the categories
        let fetchedCategories = []
        props.articles.map((item: any) => {
            if (item.attributes.Category) {
                fetchedCategories.push(item.attributes.Category as never);
            }
        })
        //remove duplicates
        fetchedCategories = [...new Set(fetchedCategories)]
        //sort alphabetically
        fetchedCategories.sort()
        //add all categories 
        const newCategories = [ALLCATEGORIES[0].en, ...fetchedCategories]
        //using ALLCATEGORIES get spanish translations
        const newCategories2 = []
        //go through newCategories and find where ALLCATEGORIES.en === newCategories
        newCategories.map((item) => {
            ALLCATEGORIES.map((item2) => {
                if (item === item2.en) {
                    newCategories2.push(item2 as never)
                }
            })
        })

        setCategories(newCategories2)
    }, [])
    const [openItem, setOpenItem] = useState(null);

    const selectedCategory = category

    // Function to toggle the menu item's open/close state
    const handleMenuItemToggle = (label: any, event: any) => {
        event.stopPropagation();
        setOpenItem((prevOpenItem) => (prevOpenItem === label ? null : label));
    };


    //check for search parameter page

    const pageInt = parseInt(page as string)
    // if page = 1 then show the first 9 articles
    // if page = 2 then show the next 9 articles

    //filtered articles based on category
    let filterArticles = props.articles.filter((item) => {
        return selectedCategory === item.attributes.Category || selectedCategory === categories[0].en
    })
    const shownArticles = filterArticles.slice((pageInt - 1) * 12, pageInt * 12)
    const pageCount = Math.ceil(filterArticles.length / 10)

    useEffect(() => {
        //if search parameter in url the scroll to id = Articles
        if (router.query.page || router.query.category) {
            const articlesElement = document.getElementById("Articles");
            if (articlesElement) {
                window.scrollTo(0, articlesElement.offsetTop - 200);
            }
        }
    }, [router.query.page, router.query.category])

    return <>
        <Box
            id="Articles"
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
                                    {returnLocaleText(TEXT.filterCategories)} {categories.length > 0 ? openItem === props.shortTitle ? <ExpandLessIcon /> : <ExpandMoreIcon /> : ""}
                                </Typography>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <Collapse in={openItem === props.shortTitle} timeout="auto" unmountOnExit>
                    <List component="div"
                        sx={{ padding: "1rem" }}
                    >
                        {categories.map((item, index) => (
                            <Link
                                key={index}
                                onClick={() => {
                                    setOpenItem(null)
                                }}
                                style={{
                                    display: "flex", alignItems: "center", cursor: "pointer",
                                }}
                                href={{
                                    pathname: PATHCONSTANTS.ARTICLES.INDEX,
                                    query: { page: 1, category: item.en }
                                }}
                            >
                                <Typography variant="h6">{returnLocaleText(item)}</Typography>
                                <Checkbox checked={selectedCategory === item.en} />
                            </Link>
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
                <Typography fontWeight={"bold"} variant="h6"> {returnLocaleText(TEXT.filterCategories)}</Typography>
                <hr />
                <Box
                    sx={{
                        display: "flex", flexDirection: "column", gap: ".5rem",
                    }}
                >

                    {categories.map((item, index) => {
                        return <Link
                            key={index}
                            style={{
                                display: "flex", alignItems: "center",
                                //    backgroundColor: "red",
                                justifyContent: "space-between",
                            }}

                            href={{
                                pathname: PATHCONSTANTS.ARTICLES.INDEX,
                                query: { page: 1, category: item.en }
                            }}
                        >
                            <Typography key={index}
                                sx={{
                                    cursor: "pointer",
                                }} variant="h6">{returnLocaleText(item)}</Typography>
                            <Checkbox checked={selectedCategory === item.en}

                                sx={{
                                    padding: "0",
                                    cursor: "pointer",

                                }}
                            />
                        </Link>
                    })}
                </Box>
            </Box>
            <hr style={{ margin: "0 1rem" }} />
            <Box
                sx={{
                    width: "100%", padding: { xs: "1rem 2rem", md: "3rem 2rem" },
                    display: "flex", flexWrap: "wrap", gap: "1.5rem",
                    justifyContent: { xs: "center", md: "flex-start" },
                }}
            >
                {shownArticles && shownArticles.map((item, index) => {
                    if (selectedCategory === item.attributes.Category || selectedCategory === categories[0].en) {
                        return <ArticleItem key={index} {...item} />
                    }
                })}
            </Box>
        </Box >
        <Box
            sx={{
                margin: "auto",
                width: "100%",
                textAlign: "center",
            }}
        >
            {(Array.from({ length: pageCount }, (_, i) => i + 1)).map((item, index) => {
                return <Link key={index}
                    href={{
                        pathname: PATHCONSTANTS.ARTICLES.INDEX,
                        query: {
                            page: index + 1, category: selectedCategory
                        }
                    }}

                >
                    <Typography
                        sx={{
                            cursor: "pointer",
                            display: "inline-block",
                            padding: "0.5rem",
                            margin: "0.5rem",
                            fontWeight: Number(props.currentPage) === index + 1 ? "600" : "normal",
                            border: Number(props.currentPage) === index + 1 ? "2px solid black" : "1px solid #cacaca",
                            borderColor: Number(props.currentPage) === index + 1 ? theme.palette.primary.main : "#cacaca",
                            //  color: Number(props.currentPage) === index + 1 ? theme.palette.primary.main : "black",
                            borderRadius: "0.5rem",
                        }}
                    >
                        {item}
                    </Typography>
                </Link>
            })}
        </Box >
    </>
}