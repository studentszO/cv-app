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
  const [schoolId, setSchoolId] = useState(1);
  const [workId, setWorkId] = useState(1);

  const handleEducationFormChange = (index, inputField, value) => {
    const updatedInputs = [...eduFormData];
    eduFormData[index][inputField] = value;
    setEduData(updatedInputs);
  };

  const handleWorkExpFormChange = (index, inputField, value) => {
    const updatedInputs = [...expFormData];
    expFormData[index][inputField] = value;
    setExpData(updatedInputs);
  };

  const addSchool = () => {
    setEduData([...eduFormData, { ...initialData.eduFormData, id: schoolId }]);
    setSchoolId((prevId) => prevId + 1);
  };

  const addWorkExp = () => {
    setExpData([...expFormData, { ...initialData.expFormData, id: workId }]);
    setWorkId((prevId) => prevId + 1);
  };

  if (showCV)
    return (
      <div className="cv">
        <MakeHeader genData={genFormData} />
        <MakeCVMain
          eduData={eduFormData}
          expData={expFormData}
          genData={genFormData}
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
              />
            </li>
          ))}
        </ul>
        <button type="button" onClick={addWorkExp}>
          Add a new work experience
        </button>
      </section>
      <hr />
      <SubmitButton onClick={() => setShowCV(true)} />
    </form>
  );
}

export default App;
