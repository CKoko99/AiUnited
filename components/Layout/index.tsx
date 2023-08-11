import HomeHeader from "../homeHeader/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <>
      <HomeHeader />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
