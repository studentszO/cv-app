/* eslint-disable react/prop-types */
import MakeH2Title from "./h2title";

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
        <h3>{eduData.title}</h3>
        <div className="school-years">
          <span>{startYear}</span> - <span>{endYear}</span>
        </div>
        <div className="school-name">{eduData.school}</div>
      </div>
    </section>
  );
}

export default MakeMainSchool;
