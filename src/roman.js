function RomanNumber(value) {
  this.value = value;
}

RomanNumber.prototype.toString = function () {
  return this.value;
};

RomanNumber.prototype.toInt = function () {
  return this.value;
};

module.exports = RomanNumber;
