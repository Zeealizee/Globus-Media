import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white p-2 text-center"
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "40px",
        marginTop: "500px"
      }}
    >
      Copyright &copy; {new Date().getFullYear()} Globus Labs
    </footer>
  );
};

export default Footer;
