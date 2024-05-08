import "./Experience.css";
import logo from "../../images/dragon.png";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { Exper } from "/src/components/Experience";
import { Education } from "/src/components/Education";
import { Certifications } from "/src/components/Certifications";
import { lazy } from "react";
import { FaDownload } from "react-icons/fa";
import { useRef, useEffect, useLayoutEffect } from "react";
import { animateExperience } from "../../components/Experience/animations";
import { animateEducation } from "../../components/Education/animations";
import { animateCertifications } from "../../components/Certifications/animations";
import { animateExpSlider } from "../../components/ExpSlider/animations";
const Expslider = lazy(() => import("/src/components/ExpSlider"));
import { scrollTo } from "./animations";
import "/src/components/ExpSlider/ExpSlider.css";
const Experience = () => {
  const expRef = useRef(null);
  const eduRef = useRef(null);
  const certRef = useRef(null);
  const servRef = useRef(null);
  const expBtn = useRef(null);
  const eduBtn = useRef(null);
  const certBtn = useRef(null);
  const servBtn = useRef(null);
  let lastActive = null;
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const masterTl = gsap.timeline();
    masterTl
      .add(animateExperience())
      .add(animateEducation())
      .add(animateCertifications());
  }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        animateExpSlider();
      });
    });
    return () => ctx.revert();
  }, []);
  const handleClick = () => {
    window.location.href = "/";
  };
  const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty("--expx", x);
    document.documentElement.style.setProperty("--expy", y);
    document.documentElement.style.setProperty("--expxp", xp);
    document.documentElement.style.setProperty("--expyp", yp);
  };
  const buttonScroll = (sectionRef, btnRef) => {
    scrollTo(sectionRef);
    lastActive?.classList.remove("active");
    lastActive = btnRef.current;
    btnRef.current.classList.add("active");
  };

  document.body.addEventListener("pointermove", syncPointer);
  return (
    <>
      <article className="bg-black">
        <section>
          <div className="bg-black flex justify-between gap-1 p-2">
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
            <a
              href="src/assets/CV_Elton_Mpinyuri.pdf"
              download="Resume.pdf"
              target="_blank"
              className="flex items-center gap-1"
            >
              <p className="font-bold text-white">Download Resume</p>
              <motion.button
                type="button"
                className="rounded-full p-2 relative radial-gradient-exp"
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
                  <FaDownload size={24} />
                </span>
                <span className="block absolute inset-0 rounded-full p-[2px] linear-overlay"></span>
              </motion.button>
            </a>
          </div>{" "}
          <div className="exp-btn p-3 flex flex-wrap font-semibold justify-center gap-2">
            <button
              ref={eduBtn}
              onClick={() => {
                buttonScroll(eduRef, eduBtn);
              }}
            >
              <span className="text-center">Education</span>
            </button>
            <button
              ref={certBtn}
              onClick={() => {
                buttonScroll(certRef, certBtn);
              }}
            >
              <span className="text-center p-2">Certifications</span>
            </button>
            <button
              ref={servBtn}
              onClick={() => {
                buttonScroll(servRef, servBtn);
              }}
            >
              <span className="text-center">Services</span>
            </button>
          </div>
        </section>
        <section className="overflow-x-hidden">
          <div ref={expRef}>
            <Exper />
          </div>
          <div ref={eduRef}>
            <Education />
          </div>
          <div ref={certRef}>
            <Certifications />
          </div>
        </section>
        <section className="h-[300vh] md:h-[115vh] overflow-hidden">
          <div ref={servRef}>
            <Expslider />
          </div>
        </section>
      </article>
    </>
  );
};

export default Experience;
