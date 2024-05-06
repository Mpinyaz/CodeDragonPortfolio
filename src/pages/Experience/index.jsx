"use client";
import "./Experience.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
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
const Expslider = lazy(() => import("/src/components/ExpSlider"));
import "/src/components/ExpSlider/ExpSlider.css";
const Experience = () => {
  const lenisRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
      ScrollTrigger.update();
    }
    requestAnimationFrame(update);
    gsap.ticker.add(update);
    const masterTl = gsap.timeline();

    masterTl
      .add(animateExperience())
      .add(animateEducation())
      .add(animateCertifications());
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <>
      <article className="bg-black">
        <ReactLenis
          ref={lenisRef}
          // autoRaf={false}
          options={{
            lerp: 0.1,
            duration: 1.5,
            smoothWheel: true,
            smooth: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          }}
        >
          <section className="bg-black">
            <motion.button
              type="button"
              className="rounded-full p-2 relative radial-gradient-exp"
              // onClick={console.log("Download CV")}
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
          </section>
          <section className="overflow-x-hidden">
            <Exper />
            <Education />
            <Certifications />
          </section>
          <section className="h-[100vh] overflow-hidden">
            <Expslider />
          </section>
        </ReactLenis>
      </article>
    </>
  );
};

export default Experience;
