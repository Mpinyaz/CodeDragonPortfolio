import gsap from "gsap";

export const animateMenuOverlay = () => {
  return gsap.timeline({ paused: true }).to(".menu-overlay", {
    duration: 1.25,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%,0% 100%)",
    ease: "power4.inOut",
  });
};
