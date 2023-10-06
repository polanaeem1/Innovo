import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { NavbarSimple } from "../Navbar/NavbarSimple";

const FinalHome = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default FinalHome;
