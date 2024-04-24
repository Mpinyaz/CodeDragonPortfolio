import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollTo = (ref) => {
  gsap.to(window, {
    duration: 1.5,
    scrollTo: ref.current,
    ease: "power1.inOut",
  });
};
