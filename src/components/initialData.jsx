const generalFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  city: "",
  country: "",
  aboutMe: "",
};

const expFormData = {
  companyName: "",
  positionTitle: "",
  mainResponsibilities: ["", ""],
  expStartYear: "",
  expEndYear: "",
  id: 0,
};

const eduFormData = {
  school: "",
  schoolStartYear: "",
  schoolEndYear: "",
  title: "",
  id: 0,
};

const skillsFormData = {
  name: "",
  id: 0,
};

const langFormData = {
  language: "",
  level: 1,
  id: 0,
};

const initialData = {
  generalFormData,
  eduFormData,
  expFormData,
  skillsFormData,
  langFormData,
};

export default initialData;
