import "./App.css";
import GeneralForm from "./components/forms/general";
import MakeInputsBlockForEducation from "./components/forms/educationInputs";
import ExperienceForm from "./components/forms/experience";
import SubmitButton from "./components/submit";
import { useState } from "react";
import MakeHeader from "./components/makeCVHeader";
import initialData from "./components/initialData";
import MakeCVMain from "./components/makeCVmain";

function App() {
  const [showCV, setShowCV] = useState(false);
  const [genFormData, setGenData] = useState(initialData.generalFormData);
  const [expFormData, setExpData] = useState([initialData.expFormData]);
  const [eduFormData, setEduData] = useState([initialData.eduFormData]);
  const [skillsFormData, setSkillsData] = useState([
    initialData.skillsFormData,
  ]);
  const [langFormData, setLangData] = useState([initialData.langFormData]);
  const [schoolId, setSchoolId] = useState(1);
  const [workId, setWorkId] = useState(1);
  const [skillsId, setSkillsId] = useState(1);
  const [langId, setLangId] = useState(1);

  // Change handlers
  const handleEducationFormChange = (index, inputField, value) => {
    const updatedInputs = [...eduFormData];
    updatedInputs[index][inputField] = value;
    setEduData(updatedInputs);
  };

  const handleSkillsChange = (inputId, value) => {
    const updatedInputs = [...skillsFormData];
    updatedInputs[
      updatedInputs.findIndex((skill) => skill.id === inputId)
    ].name = value;
    setSkillsData(updatedInputs);
  };

  const handleLangChange = (inputId, value) => {
    const updatedInputs = [...langFormData];
    updatedInputs[
      updatedInputs.findIndex((lang) => lang.id === inputId)
    ].language = value;
    setLangData(updatedInputs);
  };

  const handleLangLevelChange = (inputId, value) => {
    const updatedInputs = [...langFormData];
    updatedInputs[
      updatedInputs.findIndex((lang) => lang.id === inputId)
    ].level = value;
    setLangData(updatedInputs);
  };

  const handleWorkExpFormChange = (
    index,
    inputField,
    value,
    respIndex = undefined,
  ) => {
    const updatedInputs = [...expFormData];
    if (respIndex !== undefined)
      updatedInputs[index][inputField][respIndex] = value;
    else updatedInputs[index][inputField] = value;
    setExpData(updatedInputs);
  };

  // Button handlers
  const addSchool = () => {
    setEduData([...eduFormData, { ...initialData.eduFormData, id: schoolId }]);
    setSchoolId((prevId) => prevId + 1);
  };

  const addWorkExp = () => {
    setExpData([...expFormData, { ...initialData.expFormData, id: workId }]);
    setWorkId((prevId) => prevId + 1);
  };

  const addSkills = () => {
    setSkillsData([...skillsFormData, { name: "", id: skillsId }]);
    setSkillsId((prevId) => prevId + 1);
  };

  const addLang = () => {
    setLangData([...langFormData, { language: "", level: 1, id: langId }]);
    setLangId((prevId) => prevId + 1);
  };

  const addWorkExpResponsibilities = (keyId) => {
    const updatedData = [...expFormData];
    updatedData[keyId]["mainResponsibilities"] = [
      ...updatedData[keyId]["mainResponsibilities"],
      "",
    ];
    setExpData(updatedData);
  };

  // Pages view
  if (showCV)
    return (
      <div className="cv">
        <button onClick={() => setShowCV(false)}>SHOW INPUTS</button>
        <MakeHeader genData={genFormData} />
        <MakeCVMain
          eduData={eduFormData}
          expData={expFormData}
          genData={genFormData}
          skillsData={skillsFormData}
          langData={langFormData}
        />
      </div>
    );

  return (
    <form onClick={(e) => e.preventDefault()} action="#" method="POST">
      <GeneralForm genData={genFormData} setGenData={setGenData} />

      <hr />

      <section>
        <h2>EDUCATION</h2>
        <ul>
          {eduFormData.map((school) => (
            <li key={school.id}>
              <MakeInputsBlockForEducation
                eduData={school}
                setEduData={handleEducationFormChange}
                keyId={school.id}
              />
            </li>
          ))}
        </ul>
        <button type="button" onClick={addSchool}>
          Add a new school
        </button>
      </section>

      <hr />

      <section>
        <h2>WORK EXPERIENCE</h2>
        <ul>
          {expFormData.map((work) => (
            <li key={work.id}>
              <ExperienceForm
                expData={work}
                setExpData={handleWorkExpFormChange}
                keyId={work.id}
                addResp={addWorkExpResponsibilities}
              />
            </li>
          ))}
        </ul>
        <button type="button" onClick={addWorkExp}>
          Add a new work experience
        </button>
      </section>

      <hr />

      <section>
        <h2>SKILLS</h2>
        <ul>
          {skillsFormData.map((skill) => (
            <li key={skill.id}>
              <input
                value={skill.name}
                onChange={(e) => handleSkillsChange(skill.id, e.target.value)}
              ></input>
            </li>
          ))}
          <button onClick={addSkills} type="button">
            Add new skill
          </button>
        </ul>
      </section>

      <section>
        <h2>LANGUAGES</h2>
        <ul>
          {langFormData.map((lang) => (
            <li key={lang.id}>
              <input
                value={lang.language}
                onChange={(e) => handleLangChange(lang.id, e.target.value)}
              ></input>
              <label htmlFor="skill-lvl">Level: </label>
              <input
                type="number"
                min="1"
                max="5"
                step="1"
                name="skill-lvl"
                value={lang.level}
                onChange={(e) => handleLangLevelChange(lang.id, e.target.value)}
                id="skill-lvl"
              />{" "}
              / 5
            </li>
          ))}
          <button onClick={addLang} type="button">
            Add a new language
          </button>
        </ul>
      </section>

      <SubmitButton onClick={() => setShowCV(true)} />
    </form>
  );
}

export default App;
