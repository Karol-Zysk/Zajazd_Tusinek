import { NextComponentType, NextPageContext } from "next";
import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
