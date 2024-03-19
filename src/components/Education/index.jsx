import "./education.css";
import { SiBookstack } from "react-icons/si";
import jsonData from "../../assets/data.json";

export function Education() {
  const edu = jsonData[0].Education.map((item, index) => (
    <div
      key={index}
      className={`timeline-container relative ${
        index % 2 == 0 ? "w-1/2 left-0" : "sm:w-1/2 w-full sm:left-1/2 left-0"
      }`}
    >
      <div className="text-box rounded-lg bg-white relative text-wrap">
        <SiBookstack
          className={`timeline-icon absolute bg-white ${
            index % 2 == 0 ? "" : "right"
          }`}
          size="40px"
          style={{ padding: "0.4rem" }}
        />
        <h2 className="font-semibold">{item.qualification}</h2>
        <h3 className="font-normal">{item.Institution}</h3>
        <small className="mb-2">
          {item.startPeriod}-{item.endPeriod}
        </small>
        <p className="gap-2">{item.Overview}</p>
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
      <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
      <div className="timeline relative max-w-7xl card">{edu}</div>
    </>
  );
}
