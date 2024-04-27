import gsap from "gsap";

export function animateCursor() {
  let follow = gsap.utils.toArray(".cursor-follow");
  let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseY = e.clientY;
    mouseX = e.clientX;
  });
  let colors = [
    "#1f005c",
    "#37005e",
    "#4a005f",
    "#5b0060",
    "#6a0061",
    "#790061",
    "#870160",
    "#940d60",
    "#a01a5f",
    "#ac255e",
    "#b6315e",
    "#c03c5d",
    "#ca485c",
    "#d2535c",
    "#da5f5c",
    "#e16b5c",
    "#e8775d",
    "#ee835e",
    "#f39060",
    "#f89c63",
    "#fca966",
    "#ffb56b",
  ];
  follow.forEach(function (element, index) {
    element.style.zIndex = 9000 + follow.length + index;
    element.style.borderColor = colors[index % colors.length];
    var scaleFactor = (follow.length - index) / follow.length;
    var transformValue = "rotate(45deg) scale(" + scaleFactor + ")";
    element.style.transform = transformValue;
  });

  gsap.to(follow, {
    duration: 0.016,
    repeat: -1,
    onRepeat: () => {
      posX += (mouseX - posX) / 6;
      posY += (mouseY - posY) / 6;
      gsap.set(".cursor-follow", {
        stagger: 0.016,
        css: { left: posX - 15, top: posY - 15 },
      });
    },
  });
}
