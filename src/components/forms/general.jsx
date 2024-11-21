import { useState } from "react";
import Input from "./createInput";

function GeneralForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <form>
      <Input
        className="first-name-input"
        inputName="first-name"
        fn={(e) => setFirstName(e.target.value)}
        value={firstName}
        label="First name:"
      />

      <Input
        className="last-name-input"
        inputName="last-name"
        fn={(e) => setLastName(e.target.value)}
        value={lastName}
        label="Last name:"
      />

      <Input
        className="email-input"
        inputName="email"
        type="email"
        fn={(e) => setEmail(e.target.value)}
        value={email}
        label="E-mail:"
      />

      <Input
        className="phone-number-input"
        inputName="phone-number"
        type="tel"
        fn={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        label="Phone number:"
      />

      <div className="address-input">
        <Input
          className="city-input"
          inputName="city"
          fn={(e) => setCity(e.target.value)}
          value={city}
          label="City:"
        />

        <Input
          className="country-input"
          inputName="country"
          fn={(e) => setCountry(e.target.value)}
          value={country}
          label="Country:"
        />
      </div>
    </form>
  );
}
export default GeneralForm;
