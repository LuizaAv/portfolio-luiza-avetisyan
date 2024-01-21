import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import CV from "../../assets/Luiza_Avetisyan.pdf";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const start = 0;

      setIsScrolled(scrollPosition > start);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownloadCV = async () => {
    try {
      const response = await fetch(CV);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = url;
      link.download = "Luiza_Avetisyan_CV.pdf";
      link.click();
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div
      className="navbarContainer"
      style={isScrolled ? { backgroundColor: "rgba(148, 60, 120, 0.7)", boxShadow: "5px 5px 5px 5px  rgba(148, 60, 120, 0.7)", transition: "transform 0.5s ease-out"} : null}
    >
      <div className="nameContainer">
        <h1 className="name">
          <Link to="/" className="nameLink">
            Luiza Avetisyan
          </Link>
        </h1>
      </div>
      <div className="linksContainer">
        <Link to="/about" className="links">
          About
        </Link>
        <Link to="experiance" className="links">
          Experiance
        </Link>
        <Link to="/skills" className="links">
          My skills
        </Link>
        <Link to="/portfolio" className="links">
          Portfolio
        </Link>
        <Link to="/contact" className="links">
          Contact
        </Link>
        <button className="links" onClick={handleDownloadCV}>Download CV</button>
      </div>
    </div>
  );
}
