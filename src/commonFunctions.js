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
  }
};

export default commonFunctions;
