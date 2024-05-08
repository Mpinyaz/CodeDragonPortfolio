import "./experience.css";
import jsonData from "../../assets/data.json";

export function Exper() {
  const exp = jsonData[0].employment.map((item, index) => (
    <div key={index} className="exp_vertical_item flex flex-col pl-2">
      <h2 className="font-semibold mb-3 text-3xl">{item.CompanyName}</h2>
      <h3 className="font-bold">{item.occupation}</h3>
      <small className="mb-2">
        {item.startPeriod}-{item.endPeriod}
      </small>
      <ul className="gap-2">
        {item.JobDetail.map((desc, index) => (
          <li className="font-normal text-left " key={index}>
            • {desc}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
      <section className="exp_vertical bg-white">
        <div className="exp_vertical_container">
          <div className="exp_vertical_content">
            <div className="exp_col exp_col_left">
              <h2 className="exp_vertical_heading font-extrabold p-[25px] m-0">
                <span className="block">Work</span>
                <span className="block">{"&"}</span>
                <span className="block">Experience</span>
              </h2>
            </div>
            <div className="exp_col exp_col_right">{exp}</div>
          </div>
        </div>
      </section>
    </>
  );
}
