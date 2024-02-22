import { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import "./About.css";

export const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
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
  return (
    <div ref={vantaRef} className="container-content">
      <img src="src/images/Elton.jpeg" alt="Profile Pic" />
      <div className="card">
        <h1>Elton Mpinyuri </h1>
        <h2>Software Developer/Data Engineer</h2>
      </div>
      <div className="social-link">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/elton-mpinyuri-974984134/">
              <img src="src/images/linkedin-svgrepo-com.svg" alt="LinkedIn" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Mpinyaz">
              <img src="src/images/github.svg" alt="Github" />
              Github
            </a>
          </li>
          <li>
            <a href="https://dev.to/mpinyaz">
              <img src="src/images/dev-to-svgrepo-com.svg" alt="DEVTO" />
              DEVTO
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mpinyaz/">
              <img src="src/images/instagram.svg" alt="Instagram" />
              Instagram
            </a>
          </li>
          <li>
            <a href="">
              <img src="src/images/homepage.svg" alt="homepage" />
              Email Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
