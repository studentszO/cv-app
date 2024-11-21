import { useState } from "react";
import Input from "./createInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EducationForm() {
  const [school, setSchool] = useState("");
  const [startYear, setStartYear] = useState(new Date());
  const [endYear, setEndYear] = useState(new Date());
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

      <div className="start-year-input">
        <label>From:</label>
        <DatePicker
          selected={startYear}
          onChange={(startYear) => setStartYear(startYear)}
          dateFormat="MM / yyyy"
          showMonthYearPicker
        />
      </div>

      <div className="end-year-input">
        <label>To:</label>
        <DatePicker
          selected={endYear}
          onChange={(endYear) => setEndYear(endYear)}
          dateFormat="MM / yyyy"
          showMonthYearPicker
        />
      </div>
    </section>
  );
}

export default EducationForm;
