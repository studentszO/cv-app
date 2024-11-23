import { useState } from "react";
import Input from "./createInput";
import DatePicker from "react-datepicker";

function ExperienceForm() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  return (
    <section>
      <h2>WORK EXPERIENCE</h2>
      <Input
        label="Company name:"
        className="company-name-input"
        inputName="company-name"
        value={companyName}
        fn={(e) => setCompanyName(e.target.value)}
      />

      <Input
        label="Position title:"
        className="position-title-input"
        inputName="position-title"
        value={positionTitle}
        fn={(e) => setPositionTitle(e.target.value)}
      />

      <Input
        label="Your responsibilities"
        className="responsibilities-input"
        inputName="responsibilities"
        value={mainResponsibilities}
        fn={(e) => setMainResponsibilities(e.target.value)}
      />

      <div className="exp-start-year-input">
        <label>From:</label>
        <DatePicker
          selected={startYear}
          onChange={(startYear) => setStartYear(startYear)}
          dateFormat="MM / yyyy"
          showMonthYearPicker
        />
      </div>

      <Input
        label="To:"
        placeholder="12/2012 or TODAY"
        className="exp-end-year-input"
        inputName="exp-end-year"
        value={endYear}
        fn={(e) => setEndYear(e.target.value)}
      />
    </section>
  );
}

export default ExperienceForm;
