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
  mainResponsibilities: [],
  expStartYear: new Date(),
  expEndYear: new Date(),
  id: 0,
};

const eduFormData = {
  school: "",
  schoolStartYear: new Date(),
  schoolEndYear: new Date(),
  title: "",
  id: 0,
};

const skillsFormData = {
  name: "",
  id: 0,
};

const initialData = {
  generalFormData,
  eduFormData,
  expFormData,
  skillsFormData,
};

export default initialData;
