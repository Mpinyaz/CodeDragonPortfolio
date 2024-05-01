import "./education.css";
import jsonData from "../../assets/data.json";

export function Education() {
  const edu = jsonData[0].Education.map((item, index) => (
    <div key={index} className="edu_vertical_item flex flex-col pl-2">
      <h2 className="font-semibold mb-3 text-3xl">{item.qualification}</h2>
      <h3 className="font-bold text-white">{item.Institution}</h3>
      <small className="mb-2 text-white">
        {item.startPeriod}-{item.endPeriod}
      </small>
      <ul className="gap-2">
        <li className="edu_list_item font-bold text-white">•{item.Overview}</li>
      </ul>
    </div>
  ));

  return (
    <>
      <section className="edu_vertical bg-black">
        <div className="edu_vertical_container">
          <div className="edu_vertical_content">
            <div className="edu_col edu_col_left">
              <h2 className="edu_vertical_heading font-extrabold p-[25px] m-0 text-white">
                <span className="block">Education</span>
              </h2>
            </div>
            <div className="edu_col edu_col_right">{edu}</div>
          </div>
        </div>
      </section>
    </>
  );
}
