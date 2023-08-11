import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout;