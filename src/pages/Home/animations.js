import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const rotateTitleAnimation = () => {
  const gsapSq = gsap.utils.toArray(".section-title__square");
  console.log(gsapSq.length);
  gsapSq.forEach((gSq, i) => {
    const rotat = gsap.from(gSq, { duration: 3, rotation: 720 });
    ScrollTrigger.create({
      trigger: gSq,
      animation: rotat,
      start: "top bottom",
      scrub: 1.9,
    });
  });
};
