const _ = require('lodash');

const arabicNumerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function RomanNumber(value) {
  this.value = value;
}

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
