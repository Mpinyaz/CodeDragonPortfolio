import { useRef, useState, useEffect } from "react";
import logo from "../../images/dragon.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { fadeIn, fadeOut } from "./animation";

const Header = () => {
  const menuToggle = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const homeHover = useRef(null);
  const initialHomeText = useRef(null);
  const finalHomeText = useRef(null);

  useEffect(() => {
    // Dynamically adjust padding of content area based on header height
    const updatePadding = () => {
      const headerHeight = headerRef.current.offsetHeight;
      document.body.style.paddingTop = `${headerHeight}px`;
    };

    // Call updatePadding initially and on window resize
    updatePadding();
    window.addEventListener("resize", updatePadding);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

  const toggleCollapse = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleMouseEnter = () => {
    const hoverElement = finalHomeText.current;
    const initialElement = initialHomeText.current;

    fadeIn(hoverElement, initialElement, homeHover);
  };

  const handleMouseLeave = () => {
    const hoverElement = finalHomeText.current;
    const initialElement = initialHomeText.current;

    fadeOut(hoverElement, initialElement, homeHover);
  };

  const handleClick = () => {
    window.location.href = "/";
  };
  const handleContactMe = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <nav
        ref={headerRef}
        className="container-header fixed w-full z-20 top-0 start-0"
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="font-semibold gap-1 flex items-center"
            ref={homeHover}
            onClick={handleClick}
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
          >
            <img
              src={logo}
              alt="logo"
              className="rounded-full cursor-pointer w-10 h-10 shadow-md"
            />
            <div className="homeBannerText">
              <span ref={initialHomeText} className="text-white">
                CodeDragon
              </span>
              <span
                ref={finalHomeText}
                className="font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400"
                aria-hidden="true"
              >
                CodeDragon
              </span>
            </div>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-teal-700 hover:bg-blue-500 focus:ring-blue-300 rounded-lg font-bold px-4 py-2 text-center"
              onClick={handleContactMe}
            >
              Contact Me
            </button>
            <button
              id="menuToggle"
              onClick={toggleCollapse}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus: ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              menuOpen ? "" : "hidden"
            }`}
            ref={menuToggle}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold  border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white rounded md:p-0"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  onClick={closeMenu}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
