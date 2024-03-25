import "./experience.css";
import { PiGearSixFill } from "react-icons/pi";
import jsonData from "../../assets/data.json";

export function Experience() {
  const exp = jsonData[0].employment.map((item, index) => (
    <div
      key={index}
      className={`timeline-container relative ${
        index % 2 == 0 ? "w-1/2 left-0" : "sm:w-1/2 w-full sm:left-1/2 left-0"
      }`}
    >
      <div className="text-box rounded-lg bg-white relative text-wrap">
        <PiGearSixFill
          className={`timeline-icon absolute bg-white ${
            index % 2 == 0 ? "" : "right"
          }`}
          size="40px"
        />
        <h2 className="font-semibold">{item.CompanyName}</h2>
        <h3 className="font-normal">{item.occupation}</h3>
        <small className="mb-2">
          {item.startPeriod}-{item.endPeriod}
        </small>
        <ul className="gap-2">
          {item.JobDetail.map((desc, index) => (
            <li className="font-normal text-left" key={index}>
              • {desc}
            </li>
          ))}
        </ul>
        {index % 2 == 0 ? (
          <span className="left-container-arrow h-0 w-0 absolute top-9 z-10 -right-4"></span>
        ) : (
          <span className="right-container-arrow h-0 w-0 absolute top-9 z-10 -left-4"></span>
        )}
      </div>
    </div>
  ));

  return (
    <>
      <h2 className="section-title text-white font-bold">
        Experience
        <span className="section-title__square"></span>
      </h2>
      <div className="timeline relative max-w-7xl card">{exp}</div>
    </>
  );
}
