const _ = require('lodash');
const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
const arabicNumerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
const romanPattern = '^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$';

function RomanNumber(value) {

  // ensures that object will be initialized when calling this functionw without w new keyword
  if (!(this instanceof RomanNumber)) {
    return new RomanNumber(value);
  }

  /* ---------------- checks for the right input value -------------- */
  if (!value) {
    throw new Error ('Value required');
  }

  if (_.isInteger(value) ) { // if we have a number, check if it's the right range
    if ( !(value >= 1 && value <= 3999) ) {
        throw new Error ('Invalid range');
    }
  } else if (_.isString(value) ) { // else if we have a string, check if it's a Roman one
      const isRoman = new RegExp(romanPattern);
      if ( !isRoman.test(value) ) {
        throw new Error ('Invalid value');
      }
  } else { // otherwise it's an invalid value
    throw new Error ('Invalid value');
  }

  /* ---------------- END checks for the right input value ------------ */

  this.value = value;
}

/* ---------- converts arabic to roman ------------------------*/
RomanNumber.prototype.toString = function () {
  if ( _.isString(this.value) ) {
    return this.value;
  }

  let tmpNum = this.value;
  let result = "";
  Object.keys(arabicNumerals).forEach( (key) => {
    result += key.repeat((tmpNum / arabicNumerals[key]) >>> 0); // equivalent of Math.floor but for null returns 0
    tmpNum %= arabicNumerals[key];
  });
  return result;
};

/* ---------- converts roman to arabic ------------------------*/
RomanNumber.prototype.toInt = function () {
  if ( _.isInteger(this.value) ) {
    return this.value;
  }

  let tmpStr = this.value.split("");
  let aux;
  let result = 0;

  while (tmpStr.length) {
    aux = romanNumerals[tmpStr.shift()];
    result += aux * (aux < romanNumerals[tmpStr[0]] ? -1 : 1);
  }

  return result;
};

module.exports = RomanNumber;
