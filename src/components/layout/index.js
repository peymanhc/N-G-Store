import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout2 = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout2;
