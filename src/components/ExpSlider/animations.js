import scrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(scrollTrigger);

export const animateExpSlider = (slider) => {
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
};
