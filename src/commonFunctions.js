const commonFunctions = {
  setDefaultFormValue: function(formData, property) {
    if (formData) {
      if (property === "description") {
        return formData[property].join(", ");
      } else {
        return formData[property];
      }
    } else {
      return "";
    }
  },
  isAlphaNumeric: function(string) {
    if (/[^a-zA-Z0-9]/.test(string)) {
      return false;
    } else {
      return true;
    }
  }
};

export default commonFunctions;
