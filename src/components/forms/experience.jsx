/* eslint-disable react/prop-types */
import Input from "./createInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ExperienceForm({ expData, setExpData }) {
  return (
    <section>
      <h2>WORK EXPERIENCE</h2>
      <Input
        label="Company name:"
        className="company-name-input"
        inputName="company-name"
        value={expData.companyName}
        fn={(e) => setExpData({ ...expData, companyName: e.target.value })}
      />

      <Input
        label="Position title:"
        className="position-title-input"
        inputName="position-title"
        value={expData.positionTitle}
        fn={(e) => setExpData({ ...expData, positionTitle: e.target.value })}
      />

      <Input
        label="Your responsibilities"
        className="responsibilities-input"
        inputName="responsibilities"
        value={expData.mainResponsibilities}
        fn={(e) =>
          setExpData({ ...expData, mainResponsibilities: e.target.value })
        }
      />

      <div className="exp-start-year-input">
        <label>From:</label>
        <DatePicker
          selected={expData.expStartYear}
          onChange={(startYear) =>
            setExpData({ ...expData, expStartYear: startYear })
          }
          dateFormat="MM / yyyy"
          showMonthYearPicker
        />
      </div>

      <Input
        label="To:"
        placeholder="12/2012 or TODAY"
        className="exp-end-year-input"
        inputName="exp-end-year"
        value={expData.expEndYear}
        fn={(e) => setExpData({ ...expData, expEndYear: e.target.value })}
      />
    </section>
  );
}

export default ExperienceForm;
