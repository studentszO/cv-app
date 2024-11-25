/* eslint-disable react/prop-types */
import MakeMainSchool from "./mainCV/school";
import "./makeCVmain.css";
import MakeH2Title from "./mainCV/h2title";

function MakeCVMain({ eduData, expData, genData }) {
  return (
    <main className="cv-main">
      <aside>
        <MakeMainSchool eduData={eduData} />
      </aside>
      <main>
        <section className="about-me-container">
          <MakeH2Title title="About me" />
          <div className="about-me">{genData.aboutMe}</div>
        </section>
      </main>
    </main>
  );
}

export default MakeCVMain;
