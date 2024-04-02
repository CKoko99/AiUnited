import Box from "@mui/material/Box";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { ReactNode, useEffect, useState } from "react";
import LocaleSwitcher from "../locale/LocaleSwitcher";
import HeadComponent from "../Head";
import { GTMBody } from "../Scripts/GoogleTag";
import { useRouter } from "next/router";
import QuoteNavbar from "../Navbar/QuoteNavbar";
import FacebookPixel from "../Scripts/FacebookPixel";

interface LayoutProps {
  children: ReactNode; // Define the children prop with ReactNode type
}

const Layout = ({ children }: LayoutProps) => {

  const router = useRouter()
  const showQuoteNavbar = router.pathname.includes("get-a-quote")

  return (
    <>
      {
        // <HeadComponent />
        //removed since it didn't work with opengraph images
      }
      <FacebookPixel />
      <GTMBody />
      <Box
        sx={{ position: "fixed", width: "100%", zIndex: 1000 }}
      >
        <LocaleSwitcher />
        {showQuoteNavbar ? <QuoteNavbar /> : <Navbar />}
      </Box >
      <Box sx={{ height: "7rem" }} />
      <Box
        sx={{
          maxWidth: "1320px", margin: "auto",
          //boxShadow: "0 0px 40px 10px rgba(204,204,204,.4)", //OG
          //boxShadow: "0 15px 20px 2px rgba(204,204,204,.4)",
          //borderLeft: "1px solid #dfdfdf", borderRight: "1px solid #dfdfdf",
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