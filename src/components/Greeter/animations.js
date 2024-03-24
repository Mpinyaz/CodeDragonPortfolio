import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const greeterAnimation = (greeter) => {
  const tl = gsap.timeline();
  const greeting = new SplitType(greeter.current);
  greeting.chars.forEach((char) => {
    char.style.transform = "translateY(-200%)";
  });
  tl.to(greeting.chars, {
    y: 0,
    stagger: 0.05,
    delay: 0.02,
    duration: 2,
    ease: "back.out",
  });
  return tl;
};

export const descAnimationScroll = (greeterDesc) => {
  const text = new SplitType(greeterDesc.current, { types: "words" });
  text.words.forEach((word, i) => {
    const target = word;
    gsap.from(target, {
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        markers: false,
      },
      opacity: 0.2,
      stagger: 0.11,
      duration: 4,
      delay: 1 + i * 0.1,
      ease: "back.inOut",
    });
  });
};
