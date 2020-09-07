let commonFunctions = {
  lineBreaker: function(str, maxChar) {
    //breaks long strings without spaces by inserting a new line after the provided max character
    //react-pdf will not wrap long text without spaces
    let chars = str.split("");
    let counter = 0;
    for (let i = 0; i < chars.length; i++) {
      if (counter === maxChar) {
        chars.splice(i, 0, "\n");
        counter = 0;
      } else {
        counter++;
      }
    }
    return chars.join("");
  }
};

export default commonFunctions;
