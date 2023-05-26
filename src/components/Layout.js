import React from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import "./layout.css";
import "../assets/css/main.css";

// Can use both (props or directly take the children)

// export const Layout = (props) => {
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* {props.children} */}
      {children}
      <Footer />
    </>
  );
};
