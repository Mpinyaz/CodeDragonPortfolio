import "./HomeReveal.css";
import { useRef, useEffect, useState } from "react";
import { initAnimation } from "./animations";
import { IoSunnyOutline } from "react-icons/io5";
import animegirl from "./../../assets/animegirl.jpg";
import dragon from "./../../assets/fiercedragon.jpeg";
export function HomeReveal() {
  const [isActive, setIsActive] = useState(false);
  const homeRevealRef = useRef(null);

  const handleAnimation = () => {
    if (!isActive) {
      masterTl.play();
    } else {
      masterTl.reverse();
    }
    setIsActive(!isActive);
  };
  const [masterTl, setTween] = useState(null);
  useEffect(() => {
    setTween(initAnimation());
  }, []);
  return (
    <section ref={homeRevealRef} className="home_reveal_container">
      <div className="home_teal" onClick={handleAnimation}>
        <div className="home_teal_wrapper">
          <span className="home_teal_text text-white font-extrabold">
            {`Let's Go`}
          </span>
          <div className="pulsating-circle"></div>
        </div>
      </div>
      <section className="home_reveal">
        <div className="home_reveal_wrapper">
          <div className="home_reveal_left">
            <div className="home_reveal_left_container z-50">
              <div className="home_reveal_left_container_title text-white">
                <div className="ofh">
                  <h1>Join me</h1>
                </div>
                <div className="ofh">
                  <h1>in exploring everything about</h1>
                </div>
                <div className="ofh">
                  <h1>Web Design,Data Analytics, </h1>
                </div>
                <div className="ofh">
                  <h1>and Finance</h1>
                </div>
              </div>
            </div>
            <div className="home_reveal_left_container z-40">
              <div className="home_reveal_left_container_grid">
                <img
                  src={animegirl}
                  alt="animegirl"
                  className="h-full object-cover"
                />
              </div>
              <div className="home_reveal_left_container_rect">
                <IoSunnyOutline
                  className="home_reveal_left_container_rect_image"
                  color={"white"}
                />
              </div>
            </div>
            <div className="home_reveal_left_tag">
              <div className="text-white font-extrabold">
                {"[DIGITIZE -"} {"IDEAS]"}
              </div>
            </div>
            <div className="home_reveal_left_side text-white">
              <div className="home_reveal_marque font-extrabold">
                <ul className="home_reveal_marque_inner">
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                </ul>
                <ul className="home_reveal_marque_inner">
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home_reveal_right">
            <div className="home_reveal_right_container z-40">
              <div className="home_reveal_right_container_tag">
                <span>Elton Mpinyuri</span>
              </div>
              <div className="home_reveal_right_container_title">
                <div className="ofh">
                  <h1>Go Beyond</h1>
                </div>
                <div className="ofh">
                  <h1>Your level</h1>
                </div>
              </div>
              <div className="home_reveal_right_container_paragraph">
                <p>
                  Engineer valued for driving high-performance accessible web
                  experiences. I design quality, user-friendly and scalable
                  products regardless of stack.
                </p>
              </div>
            </div>
            <div className="home_reveal_right_container z-50 reveal_top">
              <figure className="home_reveal_right_container_media">
                <img
                  src={dragon}
                  alt="Planet"
                  className="home_reveal_right_container_media_image"
                />
              </figure>
            </div>
            <div className="home_reveal_right_side">
              <div className="home_reveal_marque text-white font-extrabold">
                <ul className="home_reveal_marque_inner">
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                </ul>
                <ul className="home_reveal_marque_inner">
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                  <li>Enter The Dragon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
