import "./Loader.css";

const CustomLoader = () => {
  return (
    <div className="relative">
      <h1 className="text-white text-2xl font-extrabold absolute top-1/2 left-1/2 centered uppercase blinking-cursor-loader">
        Loading
      </h1>
      <div className="preloader">
        <div className="preloader__wrapp loader">
          <div className="preloader__one one bd_color"></div>
          <div className="preloader__one two bd_color"></div>
          <div className="preloader__one three bd_color"></div>
          <div className="preloader__one four bd_color"></div>
          <div className="preloader__two five bd_color"></div>
          <div className="preloader__two sixt bd_color"></div>
          <div className="preloader__two seven bd_color"></div>
          <div className="preloader__two eight bd_color"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomLoader;
