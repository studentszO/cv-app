/* eslint-disable react/prop-types */
import Input from "./createInput";

function GeneralForm({ genData, setGenData }) {
  return (
    <section>
      <h2>GENERAL INFORMATION</h2>
      <Input
        className="first-name-input"
        inputName="first-name"
        fn={(e) => setGenData({ ...genData, firstName: e.target.value })}
        value={genData.firstName}
        label="First name:"
      />

      <Input
        className="last-name-input"
        inputName="last-name"
        fn={(e) => setGenData({ ...genData, lastName: e.target.value })}
        value={genData.lastName}
        label="Last name:"
      />

      <Input
        className="email-input"
        inputName="email"
        type="email"
        fn={(e) => setGenData({ ...genData, email: e.target.value })}
        value={genData.email}
        label="E-mail:"
      />

      <Input
        className="phone-number-input"
        inputName="phone-number"
        type="tel"
        fn={(e) => setGenData({ ...genData, phoneNumber: e.target.value })}
        value={genData.phoneNumber}
        label="Phone number:"
      />

      <div className="address-input">
        <Input
          className="city-input"
          inputName="city"
          fn={(e) => setGenData({ ...genData, city: e.target.value })}
          value={genData.city}
          label="City:"
        />

        <Input
          className="country-input"
          inputName="country"
          fn={(e) => setGenData({ ...genData, country: e.target.value })}
          value={genData.country}
          label="Country:"
        />
      </div>
    </section>
  );
}
export default GeneralForm;
