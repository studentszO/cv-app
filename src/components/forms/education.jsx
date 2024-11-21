import { useState } from "react";
import Input from "./createInput";

function EducationForm() {
  const [school, setSchool] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [title, setTitle] = useState("");

  return (
    <section>
      <h2>EDUCATION</h2>

      <Input
        className="title-input"
        inputName="title"
        label="Title:"
        value={title}
        fn={(e) => setTitle(e.target.value)}
      />

      <Input
        className="school-input"
        inputName="school"
        label="School:"
        value={school}
        fn={(e) => setSchool(e.target.value)}
      />

      <Input
        className="start-year-input"
        inputName="start-year"
        label="From:"
        value={startYear}
        fn={(e) => setStartYear(e.target.value)}
      />

      <Input
        className="end-year-input"
        inputName="end-year"
        label="To:"
        value={endYear}
        fn={(e) => setEndYear(e.target.value)}
      />
    </section>
  );
}

export default EducationForm;
