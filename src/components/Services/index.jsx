import { useRef, useState } from "react";
import "./Services.css";
import gsap from "gsap";
import dataJson from "./../../assets/data.json";
import { useGSAP } from "@gsap/react";
import { animateArrow, animateServiceText } from "./animations";

export function Services() {
  const serv = useRef(null);
  const finance = useRef(null);
  const dataAnalysis = useRef(null);
  const software = useRef(null);
  const [collapsedItems, setCollapsedItems] = useState({
    finance: false,
    dataAnalysis: false,
    software: false,
  });

  useGSAP(
    () => {
      const gTl = gsap.timeline();
      gTl.add(animateArrow());
      animateServiceText();
    },
    { section: serv },
  );

  const handleCollapse = (item, ref) => {
    setCollapsedItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
    ref.current.classList.toggle("hidden");
  };

  return (
    <>
      <div ref={serv} className="services-content">
        <h2 className="section-title text-white font-bold">
          services
          <span className="section-title__square"></span>
        </h2>

        <div className="serv__list text-white font-semibold">
          <a
            className="serv__item"
            onClick={() => handleCollapse("finance", finance)}
          >
            <span className="serv__item-arrow" data-speed="210">
              <img
                src="src/images/arrow.svg"
                alt=""
                style={{
                  transform: collapsedItems.finance
                    ? "rotate(90deg)"
                    : "rotate(270deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </span>
            <div className="serv__item-txt">
              <span className="serv__item-text font-semibold">
                /Financial Analysis
              </span>
            </div>
          </a>
          <div className="hidden card my-3" ref={finance}>
            <p className="p-3">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </div>
          <a
            className="serv__item"
            onClick={() => handleCollapse("dataAnalysis", dataAnalysis)}
          >
            <span className="serv__item-arrow" data-speed="140">
              <img
                src="src/images/arrow.svg"
                alt=""
                style={{
                  transform: collapsedItems.dataAnalysis
                    ? "rotate(90deg)"
                    : "rotate(270deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </span>
            <div className="serv__item-txt">
              <span className="serv__item-text  font-semibold">
                /Data Analysis
              </span>
            </div>
          </a>
          <div className="hidden card my-3" ref={dataAnalysis}>
            <p className="p-3">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </div>
          <a
            className="serv__item"
            onClick={() => handleCollapse("software", software)}
          >
            <span className="serv__item-arrow" data-speed="70">
              <img
                src="src/images/arrow.svg"
                alt=""
                style={{
                  transform: collapsedItems.software
                    ? "rotate(90deg)"
                    : "rotate(270deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </span>
            <div className="serv__item-txt">
              <span className="serv__item-text font-semibold">
                /Software Development
              </span>
            </div>
          </a>
          <div className="hidden card my-3" ref={software}>
            <p className="p-3">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
