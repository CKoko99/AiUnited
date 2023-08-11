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

const NavbarLogo = styled('img')({
  display: { xs: 'block', sm: 'none' },
  height: '2.7rem',
  marginRight: '1rem',
  // Add more styles as needed
  '@media (max-width: 1170px)': {
    display: 'none',
  },
});


const drawerWidth = 280;
const navItems = [
  {
    label: 'Get a Quote',
    link: '/quote',
    menuItems: [
      { title: "Auto Insurance", link: "/qoute/auto-insurance" },
      { title: "Motorcycle Insurance", link: "/qoute/motorcycle-insurance" },
      { title: "Mexico Insurance", link: "/qoute/mexico-insurance" },
      { title: "Home Insurance", link: "/qoute/home-insurance" },
      { title: "Renters Insurance", link: "/qoute/renters-insurance" },
      { title: "SR-22 Insurance", link: "/qoute/sr-22-insurance" },
      { title: "Surety Bonds", link: "/qoute/surety-bonds" },
      { title: "General Liability", link: "/qoute/general-liability" },
    ],
    bold: true
  },
  {
    label: 'Our Products',
    link: '/products',
    menuItems: [
      { title: "Auto Insurance", link: "/limited-lines/auto-insurance" },
      { title: "Motorcycle Insurance", link: "/limited-lines/motorcycle-insurance" },
      { title: "Mexico Insurance", link: "/limited-lines/mexico-insurance" },
      { title: "Home Insurance", link: "/limited-lines/home-insurance" },
      { title: "Renters Insurance", link: "/limited-lines/renters-insurance" },
      { title: "SR-22 Insurance", link: "/limited-lines/sr-22-insurance" },
      { title: "Surety Bonds", link: "/limited-lines/surety-bonds" },
    ]
  },
  {
    label: 'Find a Store',
    link: '/locations',
    menuItems: [
      { title: "All Locations", link: "/locations" },
      { title: "Austin", link: "/locations/austin" },
      { title: "Houston", link: "/locations/houston" },
      { title: "San Antonio", link: "/locations/san-antonio" },
      { title: "Corpus Christi", link: "/locations/corpus-christi" },
      { title: "Dallas/ Fort Worth", link: "/locations/dallas-fort-worth" },
      { title: "Victoria", link: "/locations/victoria" },
    ]

  },
  {
    label: 'About Us',
    link: '/about',
    menuItems: [
      { title: "Contact Us", link: "/about/contact" },
      { title: "Available Jobs", link: "/about/jobs" },
      { title: "Now Hiring", link: "/about/now-hiring" },
      { title: "Reviews", link: "/about/reviews" },
      { title: "Facebook", link: "/about/facebook" },
    ]
  },
  {
    label: 'Payments',
    link: '/payments',
    menuItems: []
  },

];

function DrawerAppBar(props) {
  const { drawerWindow } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //const history = useHistory();
  const router = useRouter();

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
  const handleMenuItemToggle = (label, event) => {
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
        {navItems.map((item) => (
          item.menuItems.length === 0 ? (
            <Link key={item.label} href={item.link} style={{ color: "inherit", textDecoration: "none" }}>
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
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <React.Fragment key={item.label}>
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
                        {item.label} {item.menuItems.length > 0 ? openItem === item.label ? <ExpandLessIcon /> : <ExpandMoreIcon /> : ""}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              <Collapse in={openItem === item.label} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.menuItems.map((menu) => (
                    <Link key={menu.title} href={menu.link} style={{ color: "inherit", textDecoration: "none" }}>
                      <ListItem >
                        <ListItemText
                          primary={
                            <Typography>
                              •{" "}
                              {menu.title}
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
        width: { xs: "92%", sm: "95%", md: "90%", lg: "80%" }, flexDirection: "row", justifyContent: "space-between", alignItems: "center",
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
            maxWidth: '14rem', // Set the maximum width for the image
            minHeight: '5rem',   // Automatically adjust height to maintain aspect ratio
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >

          <Image onClick={handleLogoClick}
            //style={{ maxWidth: '120px', height: 'auto', cursor: 'pointer' }}
            src={LogoImg}
            objectFit='responsive'
            alt="logo" />
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
