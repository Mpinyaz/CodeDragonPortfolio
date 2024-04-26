import React, { useEffect, useRef } from "react";
import useDocumentTitle from "../../context/useDocumentTitle";
import { Experience } from "../../components/Experience";
import { Education } from "../../components/Education";
import { Greeter } from "../../components/Greeter";
import { Services } from "../../components/Services";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { arrLinks } from "../Contact";
import SmoothScrolling from "../../utils/SmoothScrolling";
import gsap from "gsap";
import "./Home.css";
import { IoCloseCircle } from "react-icons/io5";
const Home = () => {
  useDocumentTitle("Code Dragon");

  const homeRef = useRef(null);
  const sideBarOpenRef = useRef(null);
  const sideBarCloseRef = useRef(null);

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

  useEffect(() => {
    const sideBar = document.querySelector(".sidebar");
    const sidebarItems = gsap.utils.toArray(".sidebar-items");
    const overlayToggle = document.querySelector(".overlay-toggle");

    const animateLinksIn = () => {
      gsap.to(overlayToggle, {
        left: "-100%",
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(
        sidebarItems,
        { left: "0%", duration: 1, stagger: 0.075, ease: "power4.out" },
        "<",
      );
      gsap.to(
        ".home",
        { filter: "blur(15px)", duration: 1, immediateRender: false },
        "<",
      );
    };

    const animateLinksOut = () => {
      gsap.to(overlayToggle, { left: "0%", duration: 1, ease: "power4.out" });
      gsap.to(
        sidebarItems,
        { left: "-110%", duration: 1, stagger: 0.075, ease: "power4.out" },
        "<",
      );
      gsap.to(
        ".home",
        { filter: "blur(0px)", duration: 1, immediateRender: false },
        "<",
      );
    };

    sideBarOpenRef.current.addEventListener("click", () => {
      sideBar.style.pointerEvents = "all";
      animateLinksIn();
    });

    sideBarCloseRef.current.addEventListener("click", animateLinksOut);

    return () => {
      sideBarOpenRef.current.removeEventListener("click", animateLinksIn);
      sideBarCloseRef.current.removeEventListener("click", animateLinksOut);
    };
  }, []);

  return (
    <SmoothScrolling>
      <div className="overlay-toggle">
        <button
          ref={sideBarOpenRef}
          className="sidebarOpen__btn w-full  overflow-hidden block shadow-link-shadow relative bg-purple-200 font-bold rounded-full px-4 py-2 text-nowrap "
        >
          <span className="sidebarOpen__btn-txt flex items-center text-nowrap gap-x-1">
            <BsFillArrowLeftCircleFill /> Contact Me
          </span>
          <div className="sidebarOpen__btn-bg"></div>
        </button>
      </div>
      <div className="sidebar">
        <button
          ref={sideBarCloseRef}
          className="sidebarClose__btn w-[150px] h-[40px] sidebar-items shadow-link-shadow gap-x-2 relative block overflow-hidden bg-purple-200 font-bold rounded-full px-4 py-2"
        >
          <span className="sidebarClose__btn-txt flex items-center justify-center text-nowrap gap-x-1 uppercase">
            Close <IoCloseCircle />
          </span>
          <div className="sidebarClose__btn-bg"></div>
        </button>
        <div className="sidebar-items">
          <img
            src="src/images/fierceDragon.jpeg"
            className="rounded-full"
            height="200px"
            width="200px"
            alt="Fierce Dragon"
          />
        </div>
        <div className="sidebar-items flex flex-col gap-y-6">{linkList}</div>
      </div>
      <div ref={homeRef} className="home flex flex-col items-center gap-y-8">
        <section className="greeter w-3/4">
          <Greeter />
        </section>
        <section className="services w-3/4">
          <Services />
        </section>
        <section className="experience w-3/4">
          <Experience />
        </section>
        <section className="education w-3/4">
          <Education />
        </section>
      </div>
    </SmoothScrolling>
  );
};

export default Home;
