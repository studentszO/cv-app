/* eslint-disable react/prop-types */
import MakeH2Title from "./container-title";

function MakeMainWork({ expData }) {
  return (
    <section className="all-work-exps-container">
      <MakeH2Title title="Work experience" />
      <ul>
        {expData.map((work) => {
          return (
            <li key={work.id} className="work-exp-container">
              <h2>{work.companyName}</h2>
              <div className="name">{work.positionTitle}</div>
              <div className="years">
                <span>{work.expStartYear}</span> -{" "}
                <span>{work.expEndYear}</span>
              </div>
              {work.mainResponsibilities.map((resp, index) => (
                <p key={index}>{resp}</p>
              ))}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MakeMainWork;
