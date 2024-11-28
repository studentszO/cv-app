/* eslint-disable react/prop-types */
import MakeH2Title from "./container-title";
import FormatDate from "./dateFormatter";

function MakeMainSchool({ eduData }) {
  return (
    <section className="all-schools-container">
      <MakeH2Title title="Education" />
      <ul>
        {eduData.map((school) => {
          return (
            <li key={school.id} className="school-container">
              <h2>{school.title}</h2>
              <div className="name">{school.school}</div>
              <div className="years">
                <span>{FormatDate(school.schoolStartYear)}</span> -{" "}
                <span>{FormatDate(school.schoolEndYear)}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MakeMainSchool;
