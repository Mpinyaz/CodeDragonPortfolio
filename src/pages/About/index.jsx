import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import "./About.css";
import useDocumentTitle from "../../context/useDocumentTitle";

const About = () => {
  useDocumentTitle("Code Dragon About");
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          backgroundColor: 0x431343,
          yOffset: 0.19,
          size: 1.6,
          amplitudeFactor: 2.1,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: "#ff0000",
          color2: "#00ff00",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty("--abtx", x);
    document.documentElement.style.setProperty("--abty", y);
    document.documentElement.style.setProperty("--abtxp", xp);
    document.documentElement.style.setProperty("--abtyp", yp);
  };

  document.body.addEventListener("pointermove", syncPointer);

  return (
    <div className="w-full h-screen" ref={vantaRef}>
      <div className="card">
        <div className="flex flex-row items-center justify-start space-x-3 space-y-1 p-2">
          <img
            src="src/images/Elton.jpeg"
            alt="Profile Pic"
            className="h-44 w-44 object-cover rounded-full"
          />
          <div>
            <h1 className="text-white text-2xl">Elton Mpinyuri </h1>
            <h2 className="text-cyan-50">Software Developer/Data Engineer</h2>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="about-btn">
          <button>
            <span>Finance</span>
          </button>
          <button className="mx-2">
            <span>Data Analysis</span>
          </button>
          <button>
            <span>Software Dev</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
