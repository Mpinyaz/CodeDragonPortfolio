import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const animateArrow = () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  tl.from(".serv__item-arrow", {
    x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
    scrollTrigger: {
      trigger: ".serv__list",
      start: "top bottom",
      scrub: 1.9,
    },
  });
  return tl;
};

export const animateServiceText = () => {
  const textElements = gsap.utils.toArray(".serv__item-text");

  textElements.forEach((text) => {
    gsap.to(text, {
      backgroundSize: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: text,
        start: "center 80%",
        end: "center 20%",
        scrub: true,
      },
    });
  });
};
