import "./Projects.css";
import jsonData from "../../assets/data.json";

export function Project() {
  const proj = jsonData[0].Projects.map((item, index) => (
    <div key={index} className="proj_vertical_item flex flex-col pl-2">
      <h2 className="font-semibold mb-3 text-3xl">{item.CompanyName}</h2>
      <h3 className="font-bold text-white">{item.occupation}</h3>
      <small className="mb-2 text-white">
        {item.startPeriod}-{item.endPeriod}
      </small>
      <ul className="gap-2">
        {item.JobDetail.map((desc, index) => (
          <li className="font-normal text-left text-white" key={index}>
            • {desc}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
      <section className="proj_vertical bg-black">
        <div className="proj_vertical_container">
          <div className="proj_vertical_content">
            <div className="proj_col proj_col_left">
              <h2 className="proj_vertical_heading font-extrabold p-[25px] m-0 text-white">
                <span className="block">Projects</span>
              </h2>
            </div>
            <div className="proj_col proj_col_right">{proj}</div>
          </div>
        </div>
      </section>
    </>
  );
}
