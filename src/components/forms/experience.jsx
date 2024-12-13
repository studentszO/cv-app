/* eslint-disable react/prop-types */
import Input from "./createInput";

function ExperienceForm({ expData, setExpData, keyId }) {
  const addWorkExpResponsibility = () => {
    const updatedData = { ...expData };
    updatedData["mainResponsibilities"] = [
      ...updatedData["mainResponsibilities"],
      "",
    ];
    setExpData(updatedData);
  };

  const removeWorkExpResponsibility = (index) => {
    const newData = { ...expData };
    newData.mainResponsibilities.splice(index, 1);
    setExpData(newData);
  };
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
              <div key={index}>
                <input
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
                <button
                  type="button"
                  className="rm-cross-btn"
                  onClick={() => removeWorkExpResponsibility(index)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
        <button type="button" onClick={() => addWorkExpResponsibility(keyId)}>
          Add a new responsibility
        </button>
      </div>
    </>
  );
}

export default ExperienceForm;
