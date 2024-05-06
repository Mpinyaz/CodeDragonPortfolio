import scrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(scrollTrigger);

export const animateExpSlider = () => {
  let panels = gsap.utils.toArray(".exp-frame section");
  let slider = document.querySelector(".exp-frame");
  let component = document.querySelector(".home-container");
  console.log(slider.offsetWidth);
  let amountToscroll = slider.offsetWidth - window.innerWidth;
  console.log(amountToscroll);
  let ctx = gsap.context(() => {
    gsap.to(slider, {
      x: -slider.offsetWidth,
      ease: "none",
      scrollTrigger: {
        trigger: slider,
        pin: slider,
        pinSpacing: false,
        scrub: true,
        markers: true,
        immediateRender: false,
        start: "top 0%", // snap: 2 / (panels.length bottom - 1),
        end: () => slider.offsetWidth + 3600,
        // end: "+=100%",
      },
    });
  }, component);
};
