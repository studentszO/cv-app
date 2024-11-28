/* eslint-disable react/prop-types */
import MakeH2Title from "./container-title";

function MakeMainSchool({ eduData }) {
  const startYear = eduData.schoolStartYear.toLocaleDateString("en-US", {
    month: "2-digit",
    year: "numeric",
  });
  const endYear = eduData.schoolEndYear.toLocaleDateString("en-US", {
    month: "2-digit",
    year: "numeric",
  });
  return (
    <section className="all-schools-container">
      <MakeH2Title title="Education" />
      <div className="school-container">
        <h2>{eduData.title}</h2>
        <div className="name">{eduData.school}</div>
        <div className="years">
          <span>{startYear}</span> - <span>{endYear}</span>
        </div>
      </div>
    </section>
  );
}

export default MakeMainSchool;
