import "./Experience.css";
import { lazy } from "react";
const Homeslider = lazy(() => import("/src/components/HomeSlider"));
const Experience = () => {
  return (
    <>
      <Homeslider />
    </>
  );
};

export default Experience;
