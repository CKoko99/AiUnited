import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import LogoImg from '../../../logo.svg';
import { styled } from '@mui/system';
import PATHCONSTANTS from '../../../routes/pathConstants';
import { makeStyles } from "@material-ui/core";

const NavbarLogo = styled('img')({
    display: { xs: 'block', sm: 'none' },
    height: '2.7rem',
    marginRight: '1rem',
    // Add more styles as needed
});
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiPaper-root": {

    }
  }
}));
const drawerWidth = 240;
const navItems = [
    {
        label: 'Get A Quote',
        link: PATHCONSTANTS.QUOTES.INDEX,
        menuItems: [
            { title: "Auto Insurace", link: PATHCONSTANTS.QUOTES.AUTO },
            { title: "Motorcycle Insurace", link: PATHCONSTANTS.QUOTES.MOTORCYCLE },
            { title: "Mexico Insurace", link: PATHCONSTANTS.QUOTES.MEXICO },
            { title: "Home Insurace", link: PATHCONSTANTS.QUOTES.HOME },
            { title: "Renter Insurace", link: PATHCONSTANTS.QUOTES.RENTER },
            { title: "SR22", link: PATHCONSTANTS.QUOTES.SR22 },
            { title: "Surety Bond", link: PATHCONSTANTS.QUOTES.SURETY },
            { title: "Liability", link: PATHCONSTANTS.QUOTES.LIABILITY },

        ]
    },
    {
        label: 'Our Products',
        link: PATHCONSTANTS.PRODUCTS.INDEX,
        menuItems: [
            { title: "Auto Insurace", link: PATHCONSTANTS.PRODUCTS.AUTO },
            { title: "Motorcycle Insurace", link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE },
            { title: "Mexico Insurace", link: PATHCONSTANTS.PRODUCTS.MEXICO },
            { title: "Home Insurace", link: PATHCONSTANTS.PRODUCTS.HOME },
            { title: "Renter Insurace", link: PATHCONSTANTS.PRODUCTS.RENTER },
            { title: "Surety Bond", link: PATHCONSTANTS.PRODUCTS.SURETY },
            {title: "SR22", link: PATHCONSTANTS.PRODUCTS.SR22},
        ]
    },
   {
        label: 'Locations',
        link: PATHCONSTANTS.LOCATIONS.INDEX,
        menuItems: [
            { title: "All Locations", link: PATHCONSTANTS.LOCATIONS.INDEX },
            { title: "Austin", link: PATHCONSTANTS.LOCATIONS.AUSTIN },
            { title: "Houston", link: PATHCONSTANTS.LOCATIONS.HOUSTON },
            { title: "San Antonio", link: PATHCONSTANTS.LOCATIONS.SAN_ANTONIO },
            { title: "Dallas", link: PATHCONSTANTS.LOCATIONS.DALLAS },
            { title: "Corpus Christi", link: PATHCONSTANTS.LOCATIONS.CORPUS_CHRISTI },
            { title: "Victoria", link: PATHCONSTANTS.LOCATIONS.VICTORIA },
        ]
   },
   {
        label: 'About Us',
        link: PATHCONSTANTS.ABOUT.INDEX,
        menuItems: [
            { title: "Contact", link: PATHCONSTANTS.ABOUT.CONTACT },
            { title: "Hiring", link: PATHCONSTANTS.ABOUT.HIRING },
            { title: "Reviews", link: PATHCONSTANTS.ABOUT.REVIEWS },
        ]
   },
    {
        label: 'Payments',
        link: PATHCONSTANTS.PAYMENTS,
        menuItems: []
    }
];
function DrawerAppBar(props) {
    const { drawerWindow } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();
    //const history = useHistory();
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLogoClick = () => {
        //history.push('/');
        
        //drawerWindow scroll to top
        window.scrollTo(0, 0);
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img src={LogoImg} alt="logo" style={{ width: '100%', height: 'auto' }} />
            <Typography onClick={handleLogoClick} variant="h6" sx={{ my: 2 }}>
                OSIX, LLC
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={<Typography>
                                {item.label} {item.menuItems.length > 0 ? ">" : "<"}
                            </Typography>
                            } />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = drawerWindow !== undefined ? () => drawerWindow().document.body : undefined;



    return (
        <Box className={classes.root} sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <NavbarLogo
                        sx={{ display: { xs: 'none', sm: 'none', md: "block" }, }}
                        onClick={()=>{
                            //history.push('/sign-in');
                            //drawerWindow scroll to top
                            window.scrollTo(0, 0);
                        }} 
                        src={LogoImg} alt="logo" />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1, display: { xs: 'none', sm: 'block' },
                            cursor: 'pointer',
                        }}
                        onClick={handleLogoClick}
                    >
                        OSIX, LLC
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        {navItems.map((item, index) => (
                            <NavbarItem key={index}
                                item={item}
                            />
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default DrawerAppBar;
