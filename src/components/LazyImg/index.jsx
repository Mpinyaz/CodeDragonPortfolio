import { useEffect, useRef, useState } from "react";
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
