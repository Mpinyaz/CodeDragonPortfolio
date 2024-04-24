import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../../images/dragon.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const menuToggle = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

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
            onClick={handleClick}
          >
            <img
              src={logo}
              alt="logo"
              className="rounded-full cursor-pointer w-10 h-10 shadow-md"
            />
            <div className="homeBannerText">
              <div data-txt="CodeDragon" className="banner text-white">
                <div className=" text-white font-extrabold text-2xl">
                  CodeDragon
                </div>
              </div>
            </div>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <motion.button
              type="button"
              className="rounded-lg  px-4 py-2 relative radial-gradient-navbar"
              onClick={handleContactMe}
              initial={{ "--btnx": "100%" }}
              animate={{ "--btnx": "-100%" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  mass: 0.1,
                },
              }}
            >
              <span className="text-neutral-100 tracking-wide font-bold h-full w-full block relative linear-mask">
                Contact Me
              </span>
              <span className="block absolute inset-0 rounded-md p-[2px] linear-overlay"></span>
            </motion.button>
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
                  to="/experience"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  onClick={closeMenu}
                >
                  Experience
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
