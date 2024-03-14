import { useState, useEffect, useRef } from "react";
import LazyImg from "../../components/LazyImg/index";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import "./About.css";
import useDocumentTitle from "./../../context/useDocumentTitle";

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
    <div className="w-full h-screen " ref={vantaRef}>
      <div className="card m-3 w-1/2 left-1/4 flex">
        <div className="w-1/4 flex justify-center">
          <LazyImg
            placeholder="src/images/elton-small.jpeg"
            src="src/images/Elton.jpeg"
            alt="Profile Pic"
            className="h-44 w-44 object-cover rounded-full m-2"
          />
        </div>
        <div className="aboutcardtext w-3/4 rounded-tr-2xl rounded-br-2xl  ps-3 flex flex-col justify-center items-start">
          <h1 className="text-white text-2xl">Elton Mpinyuri </h1>
          <h2 className="text-white text-xl">
            Software Developer/Data Engineer
          </h2>
        </div>
      </div>
      <div className="card m-3 flex flex-col w-1/2 justify-center left-1/4">
        <div className="about-btn p-3 flex flex-wrap font-semibold justify-center gap-2">
          <button>
            <span className="text-center">Finance</span>
          </button>
          <button>
            <span className="text-center">Data Analysis</span>
          </button>
          <button>
            <span className="text-center">Software Dev</span>
          </button>
        </div>
        <div className="aboutcardtext p-3 w-full rounded-br-2xl rounded-bl-2xl flex flex-col items-center space-y-3 ">
          <div className="max-w-md card text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <LazyImg
                className="rounded-tl-2xl object-cover rounded-tr-2xl"
                placeholder="src/images/trading-graph2.png"
                src="src/images/trading-graph.jpeg"
                alt="Finance"
                width="100%"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Finance
                </h5>
              </a>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-md card text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <LazyImg
                className="rounded-tl-2xl object-cover rounded-tr-2xl"
                placeholder="src/images/dataEngine2.png"
                src="src/images/dataEngine.jpg"
                alt="Data Analysis"
                width="100%"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Data Analysis
                </h5>
              </a>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="max-w-md card text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <LazyImg
                className="rounded-tl-2xl object-cover rounded-tr-2xl"
                placeholder="src/images/updatedcode.png"
                src="src/images/code.jpg"
                alt="Software Development"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Software Development
                </h5>
              </a>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
