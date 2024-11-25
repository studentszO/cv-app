import "./App.css";
import GeneralForm from "./components/forms/general";
import EducationForm from "./components/forms/education";
import ExperienceForm from "./components/forms/experience";
import SubmitButton from "./components/submit";
import { useState } from "react";
import MakeHeader from "./components/makeCVHeader";
import initialData from "./components/initialData";
import MakeCVMain from "./components/makeCVmain";

function App() {
  const [showCV, setShowCV] = useState(false);
  const [genFormData, setGenData] = useState(initialData.generalFormData);
  const [expFormData, setExpData] = useState(initialData.expFormData);
  const [eduFormData, setEduData] = useState(initialData.eduFormData);

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
      <EducationForm eduData={eduFormData} setEduData={setEduData} />
      <hr />
      <ExperienceForm expData={expFormData} setExpData={setExpData} />
      <hr />
      <SubmitButton onClick={() => setShowCV(true)} />
    </form>
  );
}

export default App;
