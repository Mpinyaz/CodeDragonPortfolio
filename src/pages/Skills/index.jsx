import mecha1 from "./../../assets/mecha1.jpg";
import mecha2 from "./../../assets/mecha2.jpg";
import mecha3 from "./../../assets/mecha3.jpg";
import mecha4 from "./../../assets/mecha4.jpg";
import "./Skills.css";
import Carousel from "../../components/Carousel";
import { useRef, useState, useEffect } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import useDocumentTitle from "./../../context/useDocumentTitle";
function Skills() {
  useDocumentTitle("About");
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
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const sectionCols = document.querySelectorAll(".about_col");
    const isDesktop = window.matchMedia("(min-width: 768px)");

    const addListener = () => {
      sectionCols.forEach((col) => {
        col.addEventListener("mouseenter", handleMouseEnter);
      });
    };

    const removeListener = () => {
      sectionCols.forEach((col) => {
        col.removeEventListener("mouseenter", handleMouseEnter);
      });
    };

    const handleMouseEnter = (event) => {
      sectionCols.forEach((col) => col.classList.remove("active"));
      event.currentTarget.classList.add("active");
    };

    if (isDesktop.matches) {
      addListener();
    }

    return () => {
      removeListener();
    };
  }, []);

  return (
    <>
      <div
        ref={vantaRef}
        className="w-full h-[150vh] flex flex-col items-center gap-5"
      >
        <div className="about_page max-h-[80vh] max-md:max-h-[120vh] overflow-hidden">
          <div className="about_section font-spaceGrotesk text-white">
            <div className="about_header">
              <div className="about_header_list">
                <div className="about_header_list_item bg-black">
                  Elton Mpinyuri
                </div>
                <div className="about_header_list_item --desktop bg-black"></div>
                <div className="about_header_list_item --desktop bg-black">
                  <span className="blinking-cursor">
                    <p className="italic">
                      {`"A problem is a chance for you to do your best."` +
                        " - Duke Ellington"}
                      <span>|</span>
                    </p>
                  </span>
                </div>
                <div className="about_header_list_item bg-black">
                  <p>&#x2014;</p>
                </div>
              </div>
            </div>
            <div className="about_container">
              <div className="about_col">
                <div className="about_col_media max-sm:hidden">
                  <img src={mecha1} alt="" className="about_col_img" />
                </div>
                <div className="relative top-0 left-0 w-full h-auto flex md:flex-col items-center justify-end md:justify-between gap-y-4 max-md:gap-x-8">
                  <div className="about_col_title">
                    <h2>Elevate</h2>
                    <p className="--mobile">Discover More &rarr;</p>
                  </div>
                  <div className="about_col_number">
                    <h1>1</h1>
                  </div>
                  <div className="about_col_caption text-center  --desktop">
                    <span>
                      Push the boundaries of UX design and animation layouts
                    </span>
                  </div>
                </div>
              </div>
              <div className="about_col">
                <div className="about_col_media max-sm:hidden">
                  <img src={mecha2} alt="" className="about_col_img" />
                </div>
                <div className="relative top-0 left-0 w-full h-auto flex md:flex-col items-center md:justify-between justify-end gap-y-4 max-md:gap-x-8">
                  <div className="about_col_title">
                    <h2>Innovate</h2>
                    <p className="--mobile">Discover More &rarr;</p>
                  </div>
                  <div className="about_col_number">
                    <h1>2</h1>
                  </div>
                  <div className="about_col_caption text-center --desktop">
                    <span>Transcending the ordinary and innovation</span>
                  </div>
                </div>
              </div>
              <div className="about_col">
                <div className="about_col_media max-sm:hidden">
                  <img src={mecha3} alt="" className="about_col_img" />
                </div>
                <div className="relative top-0 left-0 w-full h-auto flex md:flex-col items-center md:justify-between justify-end gap-y-4 max-md:gap-x-8">
                  <div className="about_col_title">
                    <h2>Reimagine</h2>
                    <p className="--mobile">Discover More &rarr;</p>
                  </div>
                  <div className="about_col_number">
                    <h1>3</h1>
                  </div>
                  <div className="about_col_caption text-center --desktop">
                    <span>
                      Challenge conventions and redefine the boundaries
                    </span>
                  </div>
                </div>
              </div>
              <div className="about_col">
                <div className="about_col_media max-sm:hidden">
                  <img src={mecha4} alt="" className="about_col_img" />
                </div>
                <div className="about_last relative top-0 left-0 w-full h-auto flex md:flex-col items-center md:justify-between justify-end gap-y-4 max-md:gap-x-8 max-md:mt-4">
                  <div className="about_col_title">
                    <h2>Immerse</h2>
                    <p className="--mobile">Discover More &rarr;</p>
                  </div>
                  <div className="about_col_number">
                    <h1>4</h1>
                  </div>
                  <div className="about_col_caption text-center --desktop">
                    <span>
                      Engage with the spaces designed to fully captivate and
                      envelop
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-3">
          <h1 className="font-spaceGrotesk font-bold text-5xl text-white uppercase">
            Toolkit & Skills
          </h1>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Skills;
