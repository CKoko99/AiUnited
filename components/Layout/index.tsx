import Box from "@mui/material/Box";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { ReactNode } from "react";
import LocaleSwitcher from "../locale/LocaleSwitcher";
import HeadComponent from "../Head";
import { GTMBody } from "../Scripts/GoogleTag";

interface LayoutProps {
  children: ReactNode; // Define the children prop with ReactNode type
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeadComponent />
      <GTMBody />
      <LocaleSwitcher />
      <Navbar />
      <Box
        sx={{
          maxWidth: "1320px", margin: "auto",
          //boxShadow: "0 0px 40px 10px rgba(204,204,204,.4)", //OG
          boxShadow: "0 15px 20px 2px rgba(204,204,204,.4)",
          borderLeft: "1px solid #dfdfdf", borderRight: "1px solid #dfdfdf",
          minHeight: "60vh"
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout;