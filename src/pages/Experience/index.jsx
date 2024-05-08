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
import { useRef, useEffect } from "react";
import { animateExperience } from "../../components/Experience/animations";
import { animateEducation } from "../../components/Education/animations";
import { animateCertifications } from "../../components/Certifications/animations";
import { animateExpSlider } from "../../components/ExpSlider/animations";
const Expslider = lazy(() => import("/src/components/ExpSlider"));
import "/src/components/ExpSlider/ExpSlider.css";
const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      animateExpSlider();
    });
    const masterTl = gsap.timeline();
    masterTl
      .add(animateExperience())
      .add(animateEducation())
      .add(animateCertifications());
  }, []);
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <>
      <article className="bg-black">
        <section className="bg-black flex justify-between gap-1 p-2">
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
        </section>
        <section className="overflow-x-hidden">
          <Exper />
          <Education />
          <Certifications />
        </section>
        <section className="h-[300vh] md:h-[115vh] overflow-hidden">
          <Expslider />
        </section>
      </article>
    </>
  );
};

export default Experience;
