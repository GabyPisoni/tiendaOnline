import React from "react";
import "../styles/trolley.css";

const Footer = ({ date }) => {
  return (
    <footer className="footer">
      <p>Derechos de Autor Reservados &copy; {date}</p>
    </footer>
  );
};

export default Footer;
