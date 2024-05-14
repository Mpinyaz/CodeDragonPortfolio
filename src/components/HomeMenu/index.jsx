"use client";
import { Link } from "react-router-dom";
import "./HomeMenu.css";
import { useEffect, useRef, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import { animateMenuOverlay, animateMenuOverlayItems } from "./animation";
const menuLinks = [
  { path: "/", label: "Home", info: "Enter the Dragon", tag: "Index" },
  { path: "/about", label: "Profile", info: "Find out More", tag: "About" },
  {
    path: "/Skills",
    label: "Skills",
    info: "Core Technologies",
    tag: "ToolBox",
  },
  {
    path: "/experience",
    label: "Experience",
    info: "Time Under the Clock",
    tag: "Career",
  },
  { path: "/contact", label: "Contact", info: "Let's Talk", tag: "Connect" },
];
function HomeMenu() {
  const container = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const tl = useRef();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const navigate = (linkPath) => {
    toggleMenu();
    window.location.href = linkPath;
  };
  useGSAP(
    () => {
      tl.current = animateMenuOverlay();
      animateMenuOverlayItems();
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
        <div
          className="menu-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="menuBannerText">
            <div data-txt="CodeDragon" className="banner text-white">
              <div className=" text-white font-extrabold menu-banner-item">
                CodeDragon
              </div>
            </div>
          </div>
        </div>
        <div className="menu-open relative" onClick={toggleMenu}>
          <div className="absolute left-0 pulsating-circle -z-10"></div>
          <p className="text-white font-extrabold uppercase text-3xl">Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar flex justify-between w-full items-center">
          <div className="menu-logo">
            <Link to="/" className="logo text-white font-bold">
              Code Dragon
            </Link>
          </div>
          <div
            className="menu-close-icon flex items-center gap-1"
            onClick={toggleMenu}
          >
            <p className="text-white font-bold uppercase hidden md:block">
              Close
            </p>
            <RiCloseCircleLine size={50} color="white" />
          </div>
        </div>
        <div className="menu-copy">
          <div className="preview">
            <div className="preview-img preview-img-1"></div>
            <div className="preview-img preview-img-2"></div>
          </div>
          <div className="menu-links flex flex-col items">
            {menuLinks.map((link, index) => (
              <div
                className="menu-link-item"
                key={index}
                onClick={() => {
                  navigate(link.path);
                }}
              >
                <div className="menu-link-label">
                  <p className="text-white">{link.label}</p>
                </div>
                <div className="menu-link-info hidden min-[965px]:block">
                  <Link to={link.path} className="menu-link text-nowrap z-50">
                    <p className="">{link.info}</p>
                  </Link>
                </div>
                <div className="menu-link-tag">
                  <p className="">{link.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMenu;
