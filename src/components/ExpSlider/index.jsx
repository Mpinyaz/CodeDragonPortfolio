import { useRef, useLayoutEffect } from "react";
import "./ExpSlider.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Expslider = () => {
  const component = useRef();
  const slider = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".slides section");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          start: "top 8%",
          pin: ".slides",
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          end: () => "bottom bottom" /*+ slider.current.offsetWidth*/,
          markers: true,
        },
      });
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
