import React from "react";
import Navbar from "./Navbar";
import WebRoutes from "./WebRoutes";
import Footer from "./Footer";
import Banner from "./Banner";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner/>
      <Navbar />
      <div className="flex-1">
        <WebRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;