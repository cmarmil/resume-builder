import appState from "appState";

let commonFunctions = {
  resetPdfData: function() {
    appState.pdfData = {
        fName: '',
        lName: '',
        profession: '',
        city: '',
        state: "",
        phoneNumber: '',
        email: '',
        linkedIn: '',
        website: '',
        summary: "",
        skills: [],
        workExperience: [],
        certsAndLiscences: [],
        customDataSections: []
      }
    }
};

export default commonFunctions;
