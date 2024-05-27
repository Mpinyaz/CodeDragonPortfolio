import { SkillsCollage } from "../../components/Skills";
import "./Skills.css";
import Carousel from "../../components/Carousel";
import { useRef, useState, useEffect } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import useDocumentTitle from "/src/context/useDocumentTitle";
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
  // return (
  //   <>
  //     <div ref={vantaRef}>
  //       <div className="card mt-5 flex flex-col items-center mx-16 p-2 my-6">
  //         <section className="text-white flex flex-col xl:flex-row mx-60 mb-6 items-start lg:items-start gap-4">
  //           <h1 className="basis-1/2 text-5xl font-extrabold">
  //             {"CodeDragon - Where Coding"}
  //             <br />
  //             <span>Meets Creativity</span>
  //           </h1>
  //           <div className="basis-1/2 flex flex-col">
  //             <h1 className="text-2xl mb-3 font-semibold">
  //               {"Skills & Experience"}
  //             </h1>
  //             <span className="mb-3">
  //               {
  //                 "I'm Elton, a Software developer on a mission to turn challenges into opportunities. With a keen eye for design and a love for clean code, I specialize in crafting engaging and user-friendly web experiences."
  //               }
  //             </span>
  //             <span className="blinking-cursor">
  //               <h1 className="text-3xl italic">
  //                 {`"A problem is a chance for you to do your best."` +
  //                   " - Duke Ellington"}
  //                 <span>|</span>
  //               </h1>
  //             </span>
  //           </div>
  //         </section>
  //         <section className="flex flex-col lg:flex-row lg:items-start items-center box-border m-0 p-2 my-5 justify-start space-x-3 w-auto">
  //           <h1 className="font-extrabold text-white text-4xl text-start">
  //             Tooling:
  //           </h1>
  //           <Carousel />
  //         </section>
  //         <SkillsCollage />
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <>
      <div ref={vantaRef} className="about_page w-full h-full">
        <div className="about_section font-spaceGrotesk bg-white">
          <div className="about_header">
            <div className="about_header_list">
              <div className="about_header_list_item">Elton Mpinyuri</div>
              <div className="about_header_list_item --desktop"></div>
              <div className="about_header_list_item --desktop"></div>
              <div className="about_header_list_item">
                <p>&#x2014;</p>
              </div>
            </div>
          </div>
          <div className="about_container">
            <div className="about_col">
              <div className="about_col_media">
                <img
                  src="/src/assets/homeMenu1.jpg"
                  alt=""
                  className="about_col_img"
                />
              </div>
              <div className="relative top-0 left-0 w-full h-full">
                <div className="about_col_caption">
                  <span>Push the boundaries of design</span>
                </div>
                <div className="about_col_title">
                  <h2>Elevate</h2>
                  <p className="--mobile">Discover More &rarr;</p>
                </div>
                <div className="about_col_number">
                  <h1>1</h1>
                </div>
              </div>
            </div>
            <div className="about_col">
              <div className="about_col_media">
                <img
                  src="/src/assets/homeMenu2.jpg"
                  alt=""
                  className="about_col_img"
                />
              </div>
              <div className="relative top-0 left-0 w-full h-full flex flex-col items-center justify-between">
                <div className="about_col_caption">
                  <span>Transcending the ordinary and innovation</span>
                </div>
                <div className="about_col_title">
                  <h2>Elevate</h2>
                  <p className="--mobile">Discover More &rarr;</p>
                </div>
                <div className="about_col_number">
                  <h1>2</h1>
                </div>
              </div>
            </div>
            <div className="about_col">
              <div className="about_col_media">
                <img
                  src="/src/assets/homeMenu3.jpg"
                  alt=""
                  className="about_col_img"
                />
              </div>
              <div className="relative top-0 left-0 w-full h-full">
                <div className="about_col_caption">
                  <span>Challenge conventions and redefine the boundaries</span>
                </div>
                <div className="about_col_title">
                  <h2>Reimagine</h2>
                  <p className="--mobile">Discover More &rarr;</p>
                </div>
                <div className="about_col_number">
                  <h1>3</h1>
                </div>
              </div>
            </div>
            <div className="about_col">
              <div className="about_col_media">
                <img
                  src="/src/assets/homemenu4.jpg"
                  alt=""
                  className="about_col_img"
                />
              </div>
              <div className="relative top-0 left-0 w-full h-full">
                <div className="about_col_caption">
                  <span>
                    Engage with the spaces designed to fully captivate and
                    envelop
                  </span>
                </div>
                <div className="about_col_title">
                  <h2>Immerse</h2>
                  <p className="--mobile">Discover More &rarr;</p>
                </div>
                <div className="about_col_number">
                  <h1>4</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
