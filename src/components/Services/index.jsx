import React from "react";
import "./Services.css";
import gsap from "gsap";
import dataJson from "./../../assets/data.json";

export function Services() {
  return (
    <>
      <div className="services-content">
        <h2 className="services-title text-white">
          servic
          <span className="stroke text-white">es</span>
          <span className="services-title__square"></span>
        </h2>

        <div className="serv__list text-white font-semibold">
          <a className="serv__item">
            <span className="serv__item-arrow" data-speed="500">
              <img src="src/images/arrow.svg" alt="" />
            </span>
            <div className="serv__item-txt">
              <span className="serv__item-text text-5xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-2 hover:text-white">
                /Financial Analysis
              </span>
            </div>
          </a>
          <a className="serv__item">
            <span className="serv__item-arrow" data-speed="400">
              <img src="src/images/arrow.svg" alt="" />
            </span>
            <div className="serv__item-txt">
              <span className="serv__item-text text-5xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-2 hover:text-white">
                /Data Analysis
              </span>
            </div>
          </a>
          <a className="serv__item ">
            <span className="serv__item-arrow" data-speed="800">
              <img src="src/images/arrow.svg" alt="" />
            </span>
            <div className="serv__item-txt">
              <span className="serv__item-text text-5xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-2 hover:text-white">
                /Software Development
              </span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
