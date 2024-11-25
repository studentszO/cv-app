/* eslint-disable react/prop-types */
import Input from "./createInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EducationForm({ eduData, setEduData }) {
  return (
    <section>
      <h2>EDUCATION</h2>

      <Input
        className="title-input"
        inputName="title"
        label="Title:"
        value={eduData.title}
        fn={(e) => setEduData({ ...eduData, title: e.target.value })}
      />

      <Input
        className="school-input"
        inputName="school"
        label="School:"
        value={eduData.school}
        fn={(e) => setEduData({ ...eduData, school: e.target.value })}
      />

      <div className="start-year-input">
        <label>From:</label>
        <DatePicker
          selected={eduData.schoolStartYear}
          onChange={(schoolStartYear) =>
            setEduData({ ...eduData, schoolStartYear: schoolStartYear })
          }
          dateFormat="MM / yyyy"
          showMonthYearPicker
        />
      </div>

      <div className="end-year-input">
        <label>To:</label>
        <DatePicker
          selected={eduData.schoolEndYear}
          onChange={(schoolEndYear) =>
            setEduData({ ...eduData, schoolEndYear: schoolEndYear })
          }
          dateFormat="MM / yyyy"
          showMonthYearPicker
        />
      </div>
    </section>
  );
}

export default EducationForm;
