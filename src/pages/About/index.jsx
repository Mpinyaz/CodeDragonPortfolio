import { useState, useEffect, useRef, Suspense } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import tgraph1 from "./../../images/trading-graph2.png";
import tgraph2 from "./../../images/trading-graph.jpeg";
import planet2 from "./../../assets/purp-planet-small.jpeg";
import planet from "./../../assets/purp-planet.jpeg";
import prof2 from "./../../assets/Elton-small.jpeg";
import prof1 from "./../../assets/Elton.jpeg";
import waves2 from "./../../assets/waves-small.jpeg";
import waves from "./../../assets/waves.jpeg";
import "./About.css";
import useDocumentTitle from "./../../context/useDocumentTitle";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import LazyImg from "./../../components/LazyImg";
const About = () => {
  useDocumentTitle("About");
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
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
  gsap.registerPlugin(CustomEase);
  CustomEase.create("cubic", "0.83, 0, 0.17,1");

  const splitTextIntoSpans = (selector) => {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      let text = element.innerText;
      let splitText = text
        .split("")
        .map((char) => {
          return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
        })
        .join("");
      element.innerHTML = splitText;
    });
  };

  function initializeCards() {
    let cards = gsap.utils.toArray(".abt-card");
    gsap.to(cards, {
      duration: 1,
      y: (i) => -15 + 15 * i + "%",
      z: (i) => 15 * i,
      stagger: -0.1,
      ease: "cubic",
    });
  }

  useEffect(() => {
    splitTextIntoSpans(".abt-copy h1");
    initializeCards();

    gsap.set(".abt-card h1 span", { y: -200 });
    gsap.set(".abt-slider .abt-card:last-child h1 span", { y: 0 });
  }, []);

  document.addEventListener("click", () => {
    if (isAnimating) return;
    setIsAnimating(true);
    let cards = Array.from(document.querySelectorAll(".abt-card"));
    let slider = document.querySelector(".abt-slider");
    let lastCard = cards.pop();
    let nextCard = cards[cards.length - 1];
    gsap.to(lastCard.querySelectorAll("h1 span"), {
      duration: 0.75,
      y: 200,
      stagger: 0.1,
      ease: "cubic",
    });
    gsap.from(lastCard.querySelector("p"), { opacity: 0.75, duration: 1 });
    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.75,
      ease: "cubic",
      onComplete: () => {
        slider.prepend(lastCard);
        initializeCards();
        gsap.set(".abt-card h1 span", { y: -200 });
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      },
    });
    gsap.to(nextCard.querySelectorAll("h1 span"), {
      y: 0,
      duration: 1,
      stagger: 0.05,
      ease: "cubic",
    });
  });
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full overflow-hidden" ref={vantaRef}>
          <div className="abt-container">
            <div className="abt-slider text-white">
              <div className="abt-card">
                <LazyImg
                  className=""
                  placeholder={tgraph1}
                  src={tgraph2}
                  alt="Finance"
                  width="100%"
                />
                <div className="abt-copy flex flex-col items-center p-5">
                  <h1 className="text-fuchsia-600 font-spaceGrotesk font-extrabold text-center   uppercase">
                    Finance
                  </h1>
                  <p className=" w-3/4 card font-spaceGrotesk text-center   italic">
                    Providing expertise in financial modeling, budgeting, and
                    forecasting, contributing to strategic decision-making with
                    insightful analysis and reporting.
                  </p>
                </div>
              </div>
              <div className="abt-card">
                <LazyImg
                  className=""
                  placeholder={planet2}
                  src={planet}
                  alt="Finance"
                  width="100%"
                />

                <div className="abt-copy flex flex-col items-center p-6">
                  <h1 className="font-spaceGrotesk  font-extrabold text-teal-600 text-center   uppercase">
                    Web
                  </h1>
                  <h1 className="font-spaceGrotesk  font-extrabold text-pink-600 text-center   uppercase">
                    Designer
                  </h1>
                  <p className="w-3/4 card font-spaceGrotesk text-center   italic">
                    {`I'm probably not the typical designer positioned behind an
                    Illustrator artboard adjusting pixels, but I design.
                    Immersed in stylesheets tweaking font sizes and
                    contemplating layouts is where you'll find me. I'm committed
                    to creating fluent user experiences while staying
                    fashionable.`}
                  </p>
                </div>
              </div>
              <div className="abt-card">
                <LazyImg
                  className=""
                  placeholder={prof2}
                  src={prof1}
                  alt="Finance"
                  width="100%"
                />
                <div className="abt-copy flex flex-col items-center p-5">
                  <h1 className="text-pink-600 font-spaceGrotesk font-extrabold text-center   uppercase">
                    Elton
                  </h1>
                  <h1 className="text-fuchsia-600 font-spaceGrotesk font-extrabold text-center   uppercase">
                    Mpinyuri
                  </h1>
                  <p className=" w-1/2 card font-spaceGrotesk text-center   italic">
                    Software Developer
                    <br />
                    Data Analyst
                  </p>
                </div>
              </div>{" "}
              <div className="abt-card">
                <LazyImg
                  className=""
                  placeholder={waves2}
                  src={waves}
                  alt="Finance"
                  width="100%"
                />
                <div className="abt-copy flex flex-col items-center p-5">
                  <h1 className="text-pink-600 font-spaceGrotesk font-extrabold text-center   uppercase">
                    Frontend
                  </h1>
                  <h1 className="text-red-600 font-spaceGrotesk font-extrabold text-center  uppercase">
                    Developer
                  </h1>
                  <p className=" w-3/4 card font-spaceGrotesk text-center italic card">
                    I like to craft solid and scalable frontend products with
                    <br />
                    great user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default About;
