import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-light text-center py-4 border-top">
      <div className="container">
        <p className="text-muted mb-0">Copyright &copy; Raj Haldar {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
