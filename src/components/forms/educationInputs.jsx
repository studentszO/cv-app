/* eslint-disable react/prop-types */
import Input from "./createInput";

function MakeInputsBlockForEducation({ eduData, setEduData, keyId }) {
  return (
    <>
      <Input
        className="title-input"
        inputName="title"
        label="Title:"
        value={eduData.title}
        fn={(e) => setEduData(keyId, "title", e.target.value)}
      />

      <Input
        className="school-input"
        inputName="school"
        label="School:"
        value={eduData.school}
        fn={(e) => setEduData(keyId, "school", e.target.value)}
      />

      <Input
        className="start-year-input date"
        inputName="start-year"
        placeholder="MM/YYYY"
        label="From:"
        value={eduData.schoolStartYear}
        fn={(e) => setEduData(keyId, "schoolStartYear", e.target.value)}
      />

      <Input
        className="end-year-input date"
        inputName="end-year"
        placeholder="MM/YYYY"
        label="To:"
        value={eduData.schoolEndYear}
        fn={(e) => setEduData(keyId, "schoolEndYear", e.target.value)}
      />
    </>
  );
}

export default MakeInputsBlockForEducation;
