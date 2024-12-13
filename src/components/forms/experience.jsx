/* eslint-disable react/prop-types */
import Input from "./createInput";

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

      <Input
        label="From:"
        className="exp-start-year-input date"
        placeholder="MM/YYYY"
        inputName="exp-start-year"
        value={expData.expStartYear}
        fn={(e) => setExpData(keyId, "expStartYear", e.target.value)}
      />

      <Input
        label="To:"
        placeholder="MM/YYYY or TODAY"
        className="exp-end-year-input date"
        inputName="exp-end-year"
        value={expData.expEndYear}
        fn={(e) => setExpData(keyId, "expEndYear", e.target.value)}
      />

      <div className="responsibilities-input">
        <label htmlFor="responsibilities-input">Your responsibilities</label>
        <div>
          {expData.mainResponsibilities.map((resp, index) => {
            return (
              <input
                key={index}
                name="responsibilities"
                value={resp}
                onChange={(e) =>
                  setExpData(
                    keyId,
                    "mainResponsibilities",
                    e.target.value,
                    index,
                  )
                }
              />
            );
          })}
        </div>
        <button type="button" onClick={() => addResp(keyId)}>
          Add a new responsibility
        </button>
      </div>
    </>
  );
}

export default ExperienceForm;
