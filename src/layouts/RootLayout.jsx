import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16 xl:px-24">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
