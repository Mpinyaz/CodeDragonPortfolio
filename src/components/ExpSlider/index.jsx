"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ExpSlider.css";
import { ReactLenis } from "@studio-freight/react-lenis";
const Expslider = () => {
  const lenisRef = useRef();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <>
      <ReactLenis
        ref={lenisRef}
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
          smooth: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        }}
      >
        <div className="home-container overflow-x-hidden">
          <div className="slides flex flex-nowrap">
            <section className="w-intro bg-teal-600">
              <div className="w-intro_wrapper w-full font-extrabold flex flex-col items-end">
                <h1 className="w-full">Services</h1>
                <h1 className="w-full">I Offer</h1>
              </div>
            </section>
            <section className="w-single bg-teal-600">
              <div className="w-single_tab">
                <div className="w-single_tab_container">
                  <div className="w-single_tab_field font-extrabold">
                    <h2>Finance</h2>
                  </div>
                  <h3 className="font-extrabold">01</h3>
                </div>
              </div>
              <div className="w-single_gallery">
                <p className="text-white p-2  flex justify-center items-center italic">
                  <span>
                    Insightful reports highlighting key trends and patterns
                    derived from financial data analysis, and ensures proper
                    evaluation, control, documentation, and benefit tracking of
                    special projects.
                  </span>
                </p>
              </div>
            </section>
            <section className="w-single bg-teal-600">
              <div className="w-single_tab">
                <div className="w-single_tab_container">
                  <div className="w-single_tab_field font-extrabold">
                    <h2 className="text-nowrap">Web Dev</h2>
                  </div>
                  <h3 className="font-extrabold">02</h3>
                </div>
              </div>
              <div className="w-single_gallery">
                <p className="text-white p-2  flex justify-center items-center italic">
                  <span>
                    Engineer valued for driving high-performance accessible web
                    experiences. I design quality, user-friendly and scalable
                    products regardless of stack.
                  </span>
                </p>
              </div>
            </section>
            <section className="w-single bg-teal-600">
              <div className="w-single_tab">
                <div className="w-single_tab_container">
                  <div className="w-single_tab_field font-extrabold">
                    <h2 className="text-nowrap">Data Analyst</h2>
                  </div>
                  <h3 className="font-extrabold">03</h3>
                </div>
              </div>
              <div className="w-single_gallery">
                <p className="text-white p-2  flex justify-center items-center italic">
                  <span>
                    Enabling stakeholders to gain valuable insights by applying
                    necessary transformations and creating visualisations.
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default Expslider;
