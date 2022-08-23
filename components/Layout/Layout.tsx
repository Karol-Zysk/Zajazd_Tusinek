import { NextComponentType, NextPageContext } from "next";
import React, { Component, useState } from "react";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";


type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {

  
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className="container">
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {children}
      <Footer  toggleModal={toggleModal}/>
      <Modal isOpenModal={isOpenModal} toggleModal={toggleModal}  />
    </div>
  );
};

export default Layout;
