import { gsap } from "gsap";
export const fadeIn = (initialHomeText, finalHomeText, homeHover) => {
  homeHover.current.addEventListener("mouseover", () => {
    const tl = gsap.timeline();
    tl.to(finalHomeText, {
      yPercent: -86,
      duration: 0.5,
      ease: "sine.in",
    }).to(initialHomeText, {
      yPercent: -72,
      duration: 0.5,
      ease: "sine.out",
    });
  });
};

export const fadeOut = (initialHomeText, finalHomeText, homeHover) => {
  homeHover.current.addEventListener("mouseout", () => {
    const tl = gsap.timeline();
    tl.to(finalHomeText, {
      yPercent: 3,
      duration: 0.4,
      ease: "sine.out",
    }).to(initialHomeText, {
      yPercent: 12,
      duration: 0.5,
      ease: "sine.in",
    });
  });
};
