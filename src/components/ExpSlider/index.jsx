import { useRef, useLayoutEffect } from "react";
import "./ExpSlider.css";
import gsap from "gsap";
import { animateExpSlider } from "./animations";
const Expslider = () => {
  const component = useRef();
  const slider = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animateExpSlider(slider);
    }, component);
    return () => ctx.revert();
  });
  return (
    <>
      <div ref={component} className="home-container overflow-x-hidden">
        <div ref={slider} className="slides flex flex-nowrap">
          <section className="w-intro bg-teal-600 w-[60vw]">
            <div className="w-intro_wrapper font-extrabold">
              <h1>Services</h1>
              <h1>I Offer</h1>
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
              <img src="https://picsum.photos/300/200?random=1" alt="" />
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
              <img src="https://picsum.photos/300/200?random=1" alt="" />
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
              <img src="https://picsum.photos/300/200?random=1" alt="" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Expslider;
