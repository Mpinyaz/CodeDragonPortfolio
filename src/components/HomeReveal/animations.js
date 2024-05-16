import gsap from "gsap";
gsap.registerPlugin();
export const animateHomeReveal = () => {
  const homeReveal = document.querySelector(".home_reveal");

  const homeRevealLeft = document.querySelector(
    ".home_reveal > .home_reveal_left",
  );
  const homeRevealLeftContainer = document.querySelectorAll(
    ".home_reveal_left_container",
  );
  const homeRevealLeftContainerTitle = document.querySelectorAll(
    ".home_reveal_left_container_title > .ofh > h1",
  );
  const homeLeftSvg = document.querySelector(
    ".home_reveal_left_container_rect img",
  );

  const homeRevealRight = document.querySelector(".home_reveal_right");
  const homeRevealRightContainer = document.querySelectorAll(
    ".home_reveal_right_container",
  );
  const homeRevealRightContainerTitle = document.querySelectorAll(
    ".home_reveal_right_container_title > .ofh > h1",
  );
  const homeRevealRightContainerParagraph = document.querySelector(
    ".home_reveal_right_container_paragraph > p",
  );

  const tlLeft = gsap.timeline({
    paused: true,
    defaults: { ease: "expo.inOut" },
  });
  const tlRight = gsap.timeline({ paused: true });

  tlLeft
    .to(
      () => {
        ".reveal_top";
      },
      { duration: 1.5, y: "100%" },
      0.05,
    )
    .to(
      () => {
        ".home_reveal_left_container_title";
      },
      { duration: 0.75, y: "-101%", stagger: 0.025 },
      0,
    )
    .from(
      () => {
        ".home_reveal_left_container_rect_image";
      },
      { duration: 1.5, autoAlpha: 0, rotation: 360 },
      0,
    )
    .to(
      () => {
        ".home_teal";
      },
      { duration: 1.5, color: "red", backgroundColor: "#fff" },
      0,
    );

  gsap.set(homeRevealRightContainer, { y: "-101%" });
  gsap.set([homeRevealRightContainerTitle, homeRevealRightContainerParagraph], {
    y: "-101%",
  });

  tlRight
    .to(homeRevealRightContainer, { duration: 3, y: 0, ease: "expo.inOut" })
    .to(
      [homeRevealRightContainerTitle, homeRevealRightContainerParagraph],
      { duration: 0.75, y: 0, ease: "power4.out", stagger: 0.025 },
      0.05,
    );

  const masterTl = gsap.timeline({ paused: true }).add(tlLeft).add(tlRight);
  return masterTl;
};
