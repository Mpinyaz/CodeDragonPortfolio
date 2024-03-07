document.addEventListener("DOMContentLoaded", function () {
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  };
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const lazyImages = document.querySelectorAll(".lazy");

  lazyImages.forEach((img) => {
    observer.observe(img);
  });
});
