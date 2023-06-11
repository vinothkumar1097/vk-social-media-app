import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer>Copyrights &copy; {year}</footer>;
};

export default Footer;
