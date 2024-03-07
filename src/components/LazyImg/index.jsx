// import { useEffect, useState, useRef } from "react";
//
// const LazyImg = (props) => {
//   const [inView, setInView] = useState(false);
//   const placeholderRef = useRef();
//
//   useEffect(() => {
//     const handleIntersection = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const img = entry.target;
//           // img.src = img.dataset.src;
//           // img.classList.remove("lazy");
//           setInView(true);
//           observer.unobserve(img);
//         }
//       });
//     };
//
//     const observer = new IntersectionObserver(handleIntersection, {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     });
//
//     observer.observe(placeholderRef.current);
//
//     return () => {
//       observer.unobserve();
//     };
//   }, []);
//   return inView ? (
//     <img {...props} alt={props.alt || ""} />
//   ) : (
//     <img
//       {...props}
//       ref={placeholderRef}
//       src={props.data_src}
//       alt={props.alt || ""}
//     />
//   );
// };
//
// export default LazyImg;
import React, { useEffect, useRef, useState } from "react";
const LazyImg = (props) => {
        const [inView, setInView] = useState(false);
        const placeholderRef = useRef();
        useEffect(() => {
                const observer = new IntersectionObserver((entries, obs) => {
                        for (const entry of entries) {
                                if (entry.isIntersecting) {
                                        setInView(true);
                                        obs.disconnect();
                                }
                        }
                }, {});
                observer.observe(placeholderRef.current);
                return () => {
                        observer.disconnect();
                };
        }, []);
        return inView ? (
                <img {...props} alt={props.alt || ""} />
        ) : (
                <img
                        {...props}
                        ref={placeholderRef}
                        src={props.placeholder || ""}
                        alt={props.alt || ""}
                />
        );
};
export default LazyImg;
