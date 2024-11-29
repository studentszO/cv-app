/* eslint-disable react/prop-types */
import Input from "./createInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ExperienceForm({ expData, setExpData, keyId, addResp }) {
  return (
    <>
      <Input
        label="Company name:"
        className="company-name-input"
        inputName="company-name"
        value={expData.companyName}
        fn={(e) => setExpData(keyId, "companyName", e.target.value)}
      />

      <Input
        label="Position title:"
        className="position-title-input"
        inputName="position-title"
        value={expData.positionTitle}
        fn={(e) => setExpData(keyId, "positionTitle", e.target.value)}
      />

      <div className="responsibilities-input">
        <label htmlFor="responsibilities-input">Your responsibilities</label>
        {expData.mainResponsibilities.map((resp, index) => {
          return (
            <input
              key={index}
              name="responsibilities"
              value={resp}
              onChange={(e) =>
                setExpData(keyId, "mainResponsibilities", e.target.value, index)
              }
            />
          );
        })}
        <button
          type="button"
          onClick={() => {
            addResp(keyId);
            console.log(expData.mainResponsibilities);
          }}
        >
          Add new
        </button>
      </div>

      <div className="exp-start-year-input">
        <label>From:</label>
        <DatePicker
          selected={expData.expStartYear}
          onChange={(startYear) => setExpData(keyId, "expStartYear", startYear)}
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
        fn={(e) => setExpData(keyId, "expEndYear", e.target.value)}
      />
    </>
  );
}

export default ExperienceForm;
