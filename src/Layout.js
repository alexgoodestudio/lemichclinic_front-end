import React from "react";
import Navbar from "./Navbar";
import WebRoutes from "./WebRoutes";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <WebRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;