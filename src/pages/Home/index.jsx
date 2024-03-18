import useDocumentTitle from "../../context/useDocumentTitle";
import "./Home.css";
import { PiGearSixFill } from "react-icons/pi";

function Home() {
  useDocumentTitle("Code Dragon");
  return (
    <>
      <section className="Experience">
        <div className="timeline relative max-w-7xl card">
          <div className="timeline-container relative w-1/2 left-0">
            <div className="text-box rounded-lg bg-white relative">
              <PiGearSixFill
                className="timeline-icon absolute bg-white"
                size="40px"
              />
              <h2 className="font-semibold"> Google Inc </h2>
              <small className="inline-block mb-4">2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
              <span className="left-container-arrow h-0 w-0 absolute top-9 z-10 -right-4"></span>
            </div>
          </div>
          <div className="timeline-container relative md:w-1/2 w-full md:left-1/2 left-0">
            <div className="text-box rounded-lg bg-white relative">
              <PiGearSixFill
                className="timeline-icon absolute bg-white right"
                size="40px"
              />
              <h2 className="font-semibold"> Google Inc </h2>
              <small>2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
              <span className="right-container-arrow h-0 w-0 absolute top-9 z-10 -left-4"></span>
            </div>
          </div>
          <div className="timeline-container relative w-1/2 left-0">
            <div className="text-box rounded-lg bg-white relative">
              <PiGearSixFill
                className="timeline-icon absolute bg-white"
                size="40px"
              />
              <h2 className="font-semibold"> Google Inc </h2>
              <small>2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
              <span className="left-container-arrow h-0 w-0 absolute top-9 z-10 -right-4"></span>
            </div>
          </div>
          <div className="timeline-container relative md:w-1/2 w-full md:left-1/2 left-0">
            <div className="text-box rounded-lg bg-white relative">
              <PiGearSixFill
                className="timeline-icon absolute bg-white right"
                size="40px"
              />
              <h2 className="font-semibold"> Google Inc </h2>
              <small>2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
              <span className="right-container-arrow h-0 w-0 absolute top-9 z-10 -left-4"></span>
            </div>
          </div>
          <div className="timeline-container relative w-1/2 left-0">
            <div className="text-box rounded-lg bg-white relative">
              <PiGearSixFill
                className="timeline-icon absolute bg-white"
                size="40px"
              />
              <h2 className="font-semibold"> Google Inc </h2>
              <small>2018-2019</small>
              <p>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
              <span className="left-container-arrow h-0 w-0 absolute top-9 z-10 -right-4"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
