import "./Experience.css";
import { motion } from "framer-motion";

import { lazy } from "react";
import { FaDownload } from "react-icons/fa";
const Homeslider = lazy(() => import("/src/components/HomeSlider"));
const Experience = () => {
  return (
    <>
      <article className="bg-black h-screen">
        <Homeslider />
        <section className="experience bg-black">
          <motion.button
            type="button"
            className="rounded-full p-2 relative radial-gradient-exp"
            onClick={console.log("Download CV")}
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
      </article>
    </>
  );
};

export default Experience;
