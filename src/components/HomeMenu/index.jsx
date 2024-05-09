"use client";
import { Link } from "react-router-dom";
import "./HomeMenu.css";
import { useEffect, useRef, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import { animateMenuOverlay } from "./animation";
const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/Skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" },
];
function HomeMenu() {
  const container = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const tl = useRef();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useGSAP(
    () => {
      tl.current = animateMenuOverlay();
    },
    { scope: container },
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);
  return (
    <div className="home-menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link to="/" className="logo text-white font-extrabold text-3xl">
            Code Dragon
          </Link>
        </div>
        <div className="menu-open relative" onClick={toggleMenu}>
          <div className="absolute left-0 pulsating-circle -z-10"></div>
          <p className="text-white font-extrabold uppercase text-3xl">Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link to="/" className="logo">
              Code Dragon
            </Link>
          </div>
          <div className="menu-close">
            <p>Close</p>
          </div>
        </div>
        <div className="menu-close-icon" onClick={toggleMenu}>
          <RiCloseCircleLine size={50} />
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link to={link.path} className="menu-link text-white">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="menu-preview"></div>
      </div>
    </div>
  );
}

export default HomeMenu;
