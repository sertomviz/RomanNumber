
const arabicNumerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

function RomanNumber(value) {
  this.value = value;
}

RomanNumber.prototype.toString = function () {
  let tmpNum = this.value;
  let result = "";
  Object.keys(arabicNumerals).forEach( (key) => {
    result += key.repeat((tmpNum / arabicNumerals[key]) >>> 0); // equivalent of Math.floor but for null returns 0
    tmpNum %= arabicNumerals[key];
  });
  return result;
};

RomanNumber.prototype.toInt = function () {
  return this.value;
};

module.exports = RomanNumber;
