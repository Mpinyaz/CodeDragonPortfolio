"use client";
import { useEffect, useRef } from "react";
import useDocumentTitle from "../../context/useDocumentTitle";
import profilepic from "../../images/Elton.jpeg";
import eltonpro from "../../assets/elton-pro.jpg";
import { HomeReveal } from "../../components/HomeReveal";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import SmoothScrolling from "../../utils/SmoothScrolling";
import { animateLinksIn, animateLinksOut, greeterScroll } from "./animations";
import "./Home.css";
import { IoCloseCircle } from "react-icons/io5";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { BiLogoDevTo } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeMenu from "../../components/HomeMenu";
const arrLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/elton-mpinyuri-974984134/",
    icon: <FaLinkedin size={25} />,
  },
  {
    title: "Github",
    url: "https://github.com/Mpinyaz",
    icon: <GrGithub size={25} />,
  },
  {
    title: "DEVTO",
    url: "https://dev.to/mpinyaz",
    icon: <BiLogoDevTo size={26} />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/mpinyaz/",
    icon: <FaInstagramSquare size={25} />,
  },
  {
    title: "Email Me",
    url: "mailto:ebmpinyuri@gmail.com?subject=Lets%20chat",
    icon: <LuMail size={23} />,
  },
];
const Home = () => {
  useDocumentTitle("Code Dragon");
  const lenisRef = useRef(null);
  const homeRef = useRef(null);
  const sideBarOpenRef = useRef(null);
  const sideBarCloseRef = useRef(null);
  const greeterRef = useRef(null);

  const linkList = arrLinks.map((link) => (
    <div key={link.title} className="">
      <button className="w-full h-10 bg-purple-200 shadow-link-shadow rounded-full gap-x-2 px-4 py-2 flex flex-row items-center">
        <a
          className="flex items-center w-full gap-2 justify-center text-nowrap"
          href={link.url}
        >
          {link.icon}
          {link.title}
        </a>
      </button>
    </div>
  ));

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
      ScrollTrigger.update();
    }
    requestAnimationFrame(update);
    gsap.ticker.add(update);
    greeterScroll(homeRef.current);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  useEffect(() => {
    const sideBar = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu-bar");
    sideBarOpenRef.current.addEventListener("click", () => {
      menu.style.zIndex = -99;
      sideBar.style.pointerEvents = "all";
      animateLinksIn();
    });
    sideBarCloseRef.current.addEventListener("click", () => {
      menu.style.zIndex = 250;
      sideBar.style.pointerEvents = "all";
      animateLinksOut();
    });

    // return () => {
    //   sideBarOpenRef.current.removeEventListener("click", animateLinksIn);
    //   sideBarCloseRef.current.removeEventListener("click", animateLinksOut);
    // };
  }, []);
  return (
    <>
      <ReactLenis
        ref={lenisRef}
        autoRaf={false}
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothTouch: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        }}
      >
        <div className="overlay-toggle">
          <button
            ref={sideBarOpenRef}
            className="sidebar__btn w-full  overflow-hidden block shadow-link-shadow relative bg-purple-200 font-bold rounded-full px-4 py-2 text-nowrap "
          >
            <span className="sidebar__btn-txt flex items-center text-nowrap gap-x-1">
              <BsFillArrowLeftCircleFill /> Contact Me
            </span>
            <div className="sidebar__btn-bg"></div>
          </button>
        </div>
        <div className="sidebar overflow-hidden">
          <button
            ref={sideBarCloseRef}
            className="sidebar__btn w-[150px] h-[40px] sidebar-items shadow-link-shadow gap-x-2 relative block overflow-hidden bg-purple-200 font-bold rounded-full px-4 py-2"
          >
            <span className="sidebar__btn-txt flex items-center justify-center text-nowrap gap-x-1 uppercase">
              Close <IoCloseCircle />
            </span>
            <div className="sidebar__btn-bg"></div>
          </button>
          <div className="sidebar-items">
            <img
              height="200px"
              width="200px"
              className="portoimg"
              src={profilepic}
            />
          </div>
          <div className="sidebar-items flex flex-col gap-y-6">{linkList}</div>
        </div>
        <HomeMenu />
        <div
          ref={homeRef}
          className="home w-full h-full bg-black p-0 m-0 overflow-x-hidden"
        >
          <section className="greeter w-full h-full relative bg-black">
            <div className="greeter_wrapper">
              <img
                className="greeter_background_image absolute top-0 left-0 w-full z-20 h-[180vh]"
                src={eltonpro}
                alt="Elton"
              />
              <div className="greeter_paragraph top-0 left-0 absolute h-full w-full pt-[10vh] pl-[20vw] pr-[10vw] pb-[40rem] text-end z-40">
                <p
                  ref={greeterRef}
                  className="greeter_paragraph_text text-white uppercase font-bold "
                >
                  {
                    "A versatile professional, adept at both Software Development and Financial Analysis. Specializing as a Full Stack Developer"
                  }
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="overflow-hidden w-full h-[100vh] bg-black">
          <div className="masked">
            <HomeReveal />
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Home;
