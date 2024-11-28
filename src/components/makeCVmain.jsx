/* eslint-disable react/prop-types */
import MakeMainSchool from "./mainCV/school";
import "./makeCVmain.css";
import MakeH2Title from "./mainCV/container-title";
import MakeMainWork from "./mainCV/work";

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
        <MakeMainWork expData={expData} />
      </main>
    </main>
  );
}

export default MakeCVMain;
