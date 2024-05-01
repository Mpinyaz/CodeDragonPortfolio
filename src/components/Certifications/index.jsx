import "./Certifications.css";
import jsonData from "../../assets/data.json";

export function Certifications() {
  const cert = jsonData[0].Certifications.map((item, index) => (
    <div key={index} className="cert_vertical_item flex flex-col pl-2">
      <h2 className="font-semibold mb-3 text-3xl">{item.qualification}</h2>
      <h3 className="font-normal">{item.Location}</h3>
      <small className="mb-2">{item.endPeriod}</small>
      <ul className="gap-2">
        <li className="font-normal text-left ">• {item.Overview}</li>
      </ul>
    </div>
  ));

  return (
    <>
      <section className="cert_vertical bg-white">
        <div className="cert_vertical_container">
          <div className="cert_vertical_content">
            <div className="cert_col cert_col_left">
              <h2 className="cert_vertical_heading font-extrabold p-[25px] m-0">
                <span className="block">Certifications</span>
              </h2>
            </div>
            <div className="cert_col cert_col_right">{cert}</div>
          </div>
        </div>
      </section>
    </>
  );
}
