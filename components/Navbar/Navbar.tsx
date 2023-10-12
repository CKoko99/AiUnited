import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavbarItem from './NavbarItem';
import LogoImg from '../../public/assets/images/ai-logo-white.png';
import { styled } from '@mui/system';
import { Collapse } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';
import PATHCONSTANTS from '../../constants/sitemap';
import { Lang } from '../locale/LocaleSwitcher';




const drawerWidth = 280;
const navItems = [
  {
    label: {
      en: "Get a Quote",
      es: "Obtenga una cotización"
    },
    link: PATHCONSTANTS.QUOTES.INDEX,
    menuItems: [
      {
        title: {
          en: "Auto Insurance",
          es: "Seguro de Auto"
        },
        link: PATHCONSTANTS.QUOTES.AUTO
      },
      {
        title: {
          en: "Motorcycle Insurance",
          es: "Seguro de Motocicleta"
        },
        link: PATHCONSTANTS.QUOTES.MOTORCYCLE
      },
      {
        title: {
          en: "Mexico Insurance",
          es: "Seguro de México"
        },
        link: PATHCONSTANTS.QUOTES.MEXICO
      },
      {
        title: {
          en: "Home Insurance",
          es: "Seguro de Hogar"
        },
        link: PATHCONSTANTS.QUOTES.HOME
      },
      {
        title: {
          en: "Renters Insurance",
          es: "Seguro de Inquilinos"
        },
        link: PATHCONSTANTS.QUOTES.RENTER
      },
      {
        title: {
          en: "SR-22 Insurance",
          es: "Seguro SR-22"
        },
        link: PATHCONSTANTS.QUOTES.SR22
      },
      {
        title: {
          en: "Surety Bonds",
          es: "Fianzas de Fidelidad"
        },
        link: PATHCONSTANTS.QUOTES.SURETY
      },
      {
        title: {
          en: "General Liability",
          es: "Responsabilidad Civil General"
        },
        link: PATHCONSTANTS.QUOTES.LIABILITY
      },
    ],
    bold: true
  },
  {
    label: {
      en: "Our Products",
      es: "Nuestros Productos"
    },
    link: PATHCONSTANTS.PRODUCTS.INDEX,
    menuItems: [
      {
        title: {
          en: "Auto Insurance",
          es: "Seguro de Auto"
        },
        link: PATHCONSTANTS.PRODUCTS.AUTO
      },
      {
        title: {
          en: "Motorcycle Insurance",
          es: "Seguro de Motocicleta"
        },
        link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE
      },
      {
        title: {
          en: "Mexico Insurance",
          es: "Seguro de México"
        },
        link: PATHCONSTANTS.PRODUCTS.MEXICO
      },
      {
        title: {
          en: "Home Insurance",
          es: "Seguro de Hogar"
        },
        link: PATHCONSTANTS.PRODUCTS.HOME
      },
      {
        title: {
          en: "Renters Insurance",
          es: "Seguro de Inquilinos"
        },
        link: PATHCONSTANTS.PRODUCTS.RENTER
      },
      {
        title: {
          en: "SR-22 Insurance",
          es: "Seguro SR-22"
        },
        link: PATHCONSTANTS.PRODUCTS.SR22
      },
      {
        title: {
          en: "Surety Bonds",
          es: "Fianzas de Fidelidad"
        },
        link: PATHCONSTANTS.PRODUCTS.SURETY
      },
    ]
  },
  {
    label: {
      en: "Find a Store",
      es: "Encuentre una Tienda"
    },
    link: PATHCONSTANTS.LOCATIONS.INDEX,
    menuItems: [
      {
        title: {
          en: "All Locations",
          es: "Todas las Ubicaciones"
        },
        link: PATHCONSTANTS.LOCATIONS.INDEX
      },
      {
        title: {
          en: "Austin",
          es: "Austin"
        },
        link: PATHCONSTANTS.LOCATIONS.AUSTIN
      },
      {
        title: {
          en: "Houston",
          es: "Houston"
        },
        link: PATHCONSTANTS.LOCATIONS.HOUSTON
      },
      {
        title: {
          en: "San Antonio",
          es: "San Antonio"
        },
        link: PATHCONSTANTS.LOCATIONS.SAN_ANTONIO
      },
      {
        title: {
          en: "Corpus Christi",
          es: "Corpus Christi"
        },
        link: PATHCONSTANTS.LOCATIONS.CORPUS_CHRISTI
      },
      {
        title: {
          en: "Dallas/ Fort Worth",
          es: "Dallas/ Fort Worth"
        },
        link: PATHCONSTANTS.LOCATIONS.DALLAS
      },
      {
        title: {
          en: "Victoria",
          es: "Victoria"
        },
        link: PATHCONSTANTS.LOCATIONS.VICTORIA
      },
    ]

  },
  {
    label: {
      en: "About Us",
      es: "Acerca de Nosotros"
    },
    link: PATHCONSTANTS.ABOUT.INDEX,
    menuItems: [
      {
        title: {
          en: "Contact Us",
          es: "Contáctenos"
        },
        link: PATHCONSTANTS.ABOUT.CONTACT
      },
      {
        title: {
          en: "Careers",
          es: "Carreras"
        },
        link: PATHCONSTANTS.ABOUT.CAREERS
      },
      {
        title: {
          en: "Reviews",
          es: "Opiniones"
        },
        link: PATHCONSTANTS.ABOUT.REVIEWS
      },
      {
        title: { en: "Facebook", es: "Facebook" },
        link: "/about/facebook"
      },
    ]

  },
  {
    label: {
      en: "Payments",
      es: "Pagos"
    },
    link: '/payments',
    menuItems: []
  },

];

function DrawerAppBar(props: any) {
  const { drawerWindow } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //const history = useHistory();
  const router = useRouter();
  const { locale } = router
  const currentLang = Lang[locale ?? 'en']

  const [openItem, setOpenItem] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setOpenItem(null);
  };

  const handleLogoClick = () => {
    //history.push('/');
    router.push('/'); // Replace '/new-page' with the actual URL of the new page
    //drawerWindow scroll to top
    window.scrollTo(0, 0);
  }


  // Function to toggle the menu item's open/close state
  const handleMenuItemToggle = (label: any, event: any) => {
    event.stopPropagation();
    setOpenItem((prevOpenItem) => (prevOpenItem === label ? null : label));
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography onClick={handleLogoClick} variant="h6" sx={{ my: 2 }}>
        Get Insured Today!
      </Typography>
      <Divider />
      <List sx={{ textAlign: "left" }}>
        {navItems.map((item, index) => (
          item.menuItems.length === 0 ? (
            <Link key={index} href={item.link} style={{ color: "inherit", textDecoration: "none" }}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={(event) => handleMenuItemToggle(item.label, event)}
                >
                  <ListItemText
                    primary={
                      <Typography
                        style={{ display: "flex", fontWeight: "700" }}
                      >
                        {item.label[currentLang]}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={(event) => handleMenuItemToggle(item.label, event)}
                >
                  <ListItemText
                    primary={
                      <Typography
                        style={{ display: "flex", fontWeight: "700" }}
                      >
                        {item.label[currentLang]} {item.menuItems.length > 0 ? openItem === item.label ? <ExpandLessIcon /> : <ExpandMoreIcon /> : ""}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <Collapse in={openItem === item.label} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.menuItems.map((menu) => (
                    <Link key={menu.title[currentLang]} href={menu.link} style={{ color: "inherit", textDecoration: "none" }}>
                      <ListItem >
                        <ListItemText
                          primary={
                            <Typography>
                              •{" "}
                              {menu.title[currentLang]}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          )
        ))}



      </List>

    </Box>
  );

  const container = drawerWindow !== undefined ? () => drawerWindow().document.body : undefined;



  return (<>
    <Box
      sx={{
        bgcolor: "primary.main"
      }}
    >

      <Box sx={{
        display: 'flex',
        width: { xs: "92%", sm: "95%", md: "90%", lg: "80%" },
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

            mr: 2, "@media (min-width: 880px)": {
              display: "none",
            },
          }}
        >
          <MenuIcon sx={{ height: "3rem", width: "3rem", color: "white" }} />

        </IconButton>
        <Box
          sx={{
            minWidth: '12rem', // Set the maximum width for the image
            minHeight: '5rem',   // Automatically adjust height to maintain aspect ratio
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',

          }}
        >
          <Image onClick={handleLogoClick}
            //style={{ maxWidth: '120px', height: 'auto', cursor: 'pointer' }}
            fill
            style={{ objectFit: 'contain' }}
            src={LogoImg}
            alt="Statewide Insurance" />
        </Box>
        <Box sx={{
          "@media (min-width: 880px)": {
            display: "flex",
          },
          "@media (max-width: 880px)": {
            display: "none",
          }
          , alignItems: 'center'
        }}>
          {navItems.map((item, index) => (
            <NavbarItem key={index}
              item={item}
            />
          ))}
        </Box>

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "@media (min-width: 880px)": {
              display: "none",
            },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box >
    </Box >
  </>
  );
}

export default DrawerAppBar;
