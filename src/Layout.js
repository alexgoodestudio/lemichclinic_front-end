import React from "react";
import Navbar from "./Navbar"
import WebRoutes from "./WebRoutes"
import Footer from "./Footer"
function Layout() {
    return (
        <div>
            <Navbar/>
            <WebRoutes/>
            <Footer/>
        </div>
    )
}

export default Layout;