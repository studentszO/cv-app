/* eslint-disable react/prop-types */
import MakeMainSchool from "./mainCV/school";
import "./makeCVmain.css";
import MakeH2Title from "./mainCV/container-title";
import MakeMainWork from "./mainCV/work";
import MakeSkills from "./mainCV/skills";
import MakeLangs from "./mainCV/lang";

function MakeCVMain({ eduData, expData, genData, skillsData, langData }) {
  return (
    <main className="cv-main">
      <aside>
        <MakeMainSchool eduData={eduData} />
        <MakeSkills skillsData={skillsData} />
        <MakeLangs langData={langData} />
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
