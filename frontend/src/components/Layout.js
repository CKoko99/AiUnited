import { Outlet } from "react-router-dom"
import Footer from "./Layouts/Footer/Footer"
import Navbar from "./Layouts/Navbar/Navbar"

export default function Layout() {
    return (
        <>
            <Navbar />
            <main>                
                <Outlet />
            </main>
            <Footer />
        </>
    )
}