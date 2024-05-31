import gsap from "gsap";
import homemenu1 from "./../../assets/homeMenu1.jpg";
import homemenu2 from "./../../assets/homeMenu2.jpg";
import homemenu3 from "./../../assets/homeMenu3.jpg";
import homemenu4 from "./../../assets/homeMenu4.jpg";
import homemenu5 from "./../../assets/homeMenu5.jpg";

export const animateMenuOverlay = () => {
  gsap.set(".menu-link-item", { y: -800 });
  return gsap
    .timeline({ paused: true })
    .to(".menu-overlay", {
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%,0% 100%)",
      ease: "power4.inOut",
    })
    .to(".menu-link-item", {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.inOut",
      delay: -0.75,
    });
};

export const animateMenuOverlayItems = () => {
  const imageSources = [homemenu1, homemenu2, homemenu3, homemenu4, homemenu5];
  const menuItems = document.querySelectorAll(".menu-link-item");

  menuItems.forEach((item) => {
    const copyElements = item.querySelectorAll(
      ".menu-link-info, .menu-link-label, .menu-link-tag",
    );

    copyElements.forEach((div) => {
      const copy = div.querySelector("p");
      if (copy) {
        const duplicateCopy = document.createElement("p");
        duplicateCopy.textContent = copy.textContent;
        duplicateCopy.style.color = "white";
        div.appendChild(duplicateCopy);
      }
    });
  });
  document.querySelectorAll(".menu-link-item").forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      mouseOverAnimation(item);
      appendImages(imageSources[index]);
    });

    item.addEventListener("mouseout", () => {
      mouseOutAnimation(item);
    });
  });
  const appendImages = (src) => {
    const preview1 = document.querySelector(".preview-img-1");
    const preview2 = document.querySelector(".preview-img-2");

    const img1 = createAndAppendImage(src);
    const img2 = createAndAppendImage(src);

    preview1.appendChild(img1);
    preview2.appendChild(img2);

    gsap.to([img1, img2], {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "power3.out",
      onComplete: () => {
        removeExtraImages(preview1);
        removeExtraImages(preview2);
      },
    });
  };

  const createAndAppendImage = (src) => {
    const img = document.createElement("img");
    img.src = src;
    img.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)";
    return img;
  };

  const removeExtraImages = (cont) => {
    while (cont.children.length > 10) {
      cont.removeChild(cont.firstChild);
    }
  };

  const mouseOverAnimation = (elem) => {
    gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
      top: "-100%",
      duration: 0.5,
    });
    gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
      top: "0%",
      duration: 0.5,
    });
  };

  const mouseOutAnimation = (elem) => {
    gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
      top: "0%",
      duration: 0.5,
    });
    gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
      top: "100%",
      duration: 0.5,
    });
  };
};
