import gsap from "gsap";
gsap.registerPlugin();

export const initAnimation = () => {
  const panel = document.querySelector(".home_reveal_left_container");
  const tlLeft = gsap.timeline({ defaults: { ease: "expo.inOut" } });
  const tlRight = gsap.timeline();
  const homeRevealLeftContainerTitle = document.querySelectorAll(
    ".home_reveal_left_container_title > .ofh > h1",
  );
  const homeLeftSvg = document.querySelector(
    ".home_reveal_left_container_rect_image",
  );
  tlLeft
    .to(panel, { duration: 1.5, y: "100%" }, 0.05)
    .to(
      homeRevealLeftContainerTitle,
      { duration: 0.9, y: "-100%", stagger: 0.025 },
      0,
    )
    .fromTo(
      homeLeftSvg,
      { autoAlpha: 0, rotate: 0 },
      { autoAlpha: 1, rotate: 360, duration: 3 },
    )
    .to(
      [".home_teal", ".home_teal_text"],
      { duration: 1.5, color: "orange", backgroundColor: "black" },
      0,
    );

  const homeRevealRightContainerTitle = document.querySelectorAll(
    ".home_reveal_right_container_title > .ofh > h1",
  );
  const homeRevealRightContainerParagraph = document.querySelector(
    ".home_reveal_right_container_paragraph > p",
  );
  gsap.set([homeRevealRightContainerTitle, homeRevealRightContainerParagraph], {
    y: "-100%",
  });
  tlRight
    .to(".reveal_top", {
      duration: 1.5,
      y: "-100%",
      ease: "expo.inOut",
    })
    .to(
      [homeRevealRightContainerTitle, homeRevealRightContainerParagraph],
      { duration: 3, y: 0, ease: "power4.out", stagger: 0.025 },
      0.05,
    );
  return gsap.timeline({ paused: true }).add(tlLeft, 0).add(tlRight, 0);
};
