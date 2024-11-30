/* eslint-disable react/prop-types */
import MakeH2Title from "./container-title";

function MakeSkills({ skillsData }) {
  return (
    <section className="all-skills-container">
      <MakeH2Title title="Skills & competences" />
      <ul>
        {skillsData.map((skill) => {
          if (skill.name.length > 0)
            return (
              <li key={skill.id} className="skill-container">
                <div>{skill.name}</div>
              </li>
            );
        })}
      </ul>
    </section>
  );
}

export default MakeSkills;
