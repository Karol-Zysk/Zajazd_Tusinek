import { NextComponentType, NextPageContext } from "next";
import React, { Component, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  
  const [isOpen, setIsOpen] = useState(false);
  
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <Navbar toggle={toggle} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
