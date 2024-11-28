/* eslint-disable react/prop-types */
import MakeH2Title from "./container-title";

function MakeMainWork({ expData }) {
  const startYear = expData.expStartYear.toLocaleDateString("en-US", {
    month: "2-digit",
    year: "numeric",
  });
  const endYear = expData.expEndYear.toLocaleDateString("en-US", {
    month: "2-digit",
    year: "numeric",
  });
  return (
    <section className="all-work-exps-container">
      <MakeH2Title title="Work experience" />
      <div className="work-exp-container">
        <h2>{expData.companyName}</h2>
        <div className="name">{expData.positionTitle}</div>
        <div className="years">
          <span>{startYear}</span> - <span>{endYear}</span>
        </div>
        <p>{expData.mainResponsibilities}</p>
      </div>
    </section>
  );
}

export default MakeMainWork;
