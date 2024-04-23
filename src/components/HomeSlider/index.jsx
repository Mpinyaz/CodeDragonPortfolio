import scrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(scrollTrigger);
import { useLayoutEffect, useRef } from "react";
import "./HomeSlider.css";
const Homeslider = () => {
  const component = useRef();
  const slider = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".slides div");
      console.log(slider.current.offsetWidth);
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          start: "top 72px",
          pin: true,
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          end: () => "bottom 32%" /*+ slider.current.offsetWidth*/,
          markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  });
  return (
    <>
      <div ref={component} className="home-container overflow-x-hidden">
        <div ref={slider} className="slides">
          <div className="bg-red-500 w-[100vw] h-[400px]">Red</div>
          <div className="bg-green-500 w-[100vw] h-[400px]">Green</div>
          <div className="bg-blue-500 w-[100vw] h-[400px]">Blue</div>
        </div>
      </div>
    </>
  );
};

export default Homeslider;
